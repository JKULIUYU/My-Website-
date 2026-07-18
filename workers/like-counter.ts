const COUNT_KEY = 'like:count';
const deviceKey = (id: string) => `like:device:${id}`;
const rateLimitKey = (ip: string) => `like:rate:${ip}`;

const RATE_LIMIT_WINDOW_SECONDS = 60 * 60;
const MAX_LIKES_PER_WINDOW = 20;

type RateLimitWindow = {
  windowId: number;
  count: number;
};

const json = (data: unknown, status = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
};

const getCount = async (storage: DurableObjectStorage) => {
  return (await storage.get<number>(COUNT_KEY)) ?? 0;
};

const applyLegacyState = async (
  storage: DurableObjectStorage,
  deviceId: string,
  legacyCount?: number,
  legacyLiked?: boolean,
) => {
  if (Number.isFinite(legacyCount)) {
    const currentCount = await getCount(storage);
    if ((legacyCount ?? 0) > currentCount) {
      await storage.put(COUNT_KEY, legacyCount);
    }
  }

  if (legacyLiked) {
    await storage.put(deviceKey(deviceId), 1);
  }
};

export class LikeCounter {
  constructor(private readonly state: DurableObjectState) {}

  async fetch(request: Request) {
    if (request.method === 'GET') {
      const url = new URL(request.url);
      const deviceId = url.searchParams.get('deviceId');
      if (!deviceId) return json({ error: 'deviceId required' }, 400);

      const legacyCount = Number.parseInt(url.searchParams.get('legacyCount') ?? '', 10);
      const legacyLiked = url.searchParams.get('legacyLiked') === '1';
      await applyLegacyState(this.state.storage, deviceId, legacyCount, legacyLiked);

      const [count, likedRaw] = await Promise.all([
        getCount(this.state.storage),
        this.state.storage.get(deviceKey(deviceId)),
      ]);

      return json({ count, liked: Boolean(likedRaw) });
    }

    if (request.method === 'POST') {
      let body: {
        deviceId?: string;
        clientIp?: string;
        legacyCount?: number;
        legacyLiked?: boolean;
      } | null = null;
      try {
        body = await request.json();
      } catch {
        return json({ error: 'invalid json' }, 400);
      }

      const deviceId = body?.deviceId;
      const clientIp = body?.clientIp || 'unknown';
      if (!deviceId) return json({ error: 'deviceId required' }, 400);

      await applyLegacyState(this.state.storage, deviceId, body?.legacyCount, body?.legacyLiked);

      const alreadyLiked = await this.state.storage.get(deviceKey(deviceId));
      if (alreadyLiked) {
        const count = await getCount(this.state.storage);
        return json({ count, liked: true });
      }

      const windowId = Math.floor(Date.now() / 1000 / RATE_LIMIT_WINDOW_SECONDS);
      const limitKey = rateLimitKey(clientIp);
      const currentWindow = await this.state.storage.get<RateLimitWindow>(limitKey);
      const currentRequests = currentWindow?.windowId === windowId ? currentWindow.count : 0;

      if (currentRequests >= MAX_LIKES_PER_WINDOW) {
        return json({ error: 'too many requests' }, 429);
      }

      const currentCount = await getCount(this.state.storage);
      const nextCount = currentCount + 1;

      await Promise.all([
        this.state.storage.put(COUNT_KEY, nextCount),
        this.state.storage.put(deviceKey(deviceId), 1),
        this.state.storage.put(limitKey, {
          windowId,
          count: currentRequests + 1,
        }),
      ]);

      return json({ count: nextCount, liked: true });
    }

    return json({ error: 'method not allowed' }, 405);
  }
}

export default {
  fetch() {
    return json({ ok: true });
  },
};
