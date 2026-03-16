export interface Env {
  LIKES_KV: KVNamespace;
}

const COUNT_KEY = 'like:count';
const deviceKey = (id: string) => `like:device:${id}`;

const json = (data: unknown, status = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': '*',
    },
  });
};

const getCount = async (kv: KVNamespace) => {
  const raw = await kv.get(COUNT_KEY);
  const num = Number.parseInt(raw ?? '0', 10);
  return Number.isFinite(num) ? num : 0;
};

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const { request, env } = ctx;
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET,POST,OPTIONS',
        'access-control-allow-headers': 'content-type',
      },
    });
  }

  if (request.method === 'GET') {
    const deviceId = url.searchParams.get('deviceId')?.trim();
    if (!deviceId) return json({ error: 'deviceId required' }, 400);

    const [count, likedRaw] = await Promise.all([
      getCount(env.LIKES_KV),
      env.LIKES_KV.get(deviceKey(deviceId)),
    ]);

    return json({ count, liked: Boolean(likedRaw) });
  }

  if (request.method === 'POST') {
    let body: { deviceId?: string } | null = null;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'invalid json' }, 400);
    }

    const deviceId = body?.deviceId?.trim();
    if (!deviceId) return json({ error: 'deviceId required' }, 400);

    const alreadyLiked = await env.LIKES_KV.get(deviceKey(deviceId));
    if (alreadyLiked) {
      const count = await getCount(env.LIKES_KV);
      return json({ count, liked: true });
    }

    const current = await getCount(env.LIKES_KV);
    const next = current + 1;

    await Promise.all([
      env.LIKES_KV.put(COUNT_KEY, String(next)),
      env.LIKES_KV.put(deviceKey(deviceId), '1'),
    ]);

    return json({ count: next, liked: true });
  }

  return json({ error: 'method not allowed' }, 405);
};
