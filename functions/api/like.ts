export interface Env {
  LIKE_COUNTER: DurableObjectNamespace;
  LIKES_KV?: KVNamespace;
}

const LEGACY_COUNT_KEY = 'like:count';
const legacyDeviceKey = (id: string) => `like:device:${id}`;
const DEVICE_ID_PATTERN = /^[a-zA-Z0-9._:-]{8,80}$/;
const LOCAL_DEV_ORIGINS = new Set([
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]);

const getAllowedOrigin = (request: Request) => {
  const origin = request.headers.get('origin');
  if (!origin) return null;

  const selfOrigin = new URL(request.url).origin;
  if (origin === selfOrigin || LOCAL_DEV_ORIGINS.has(origin)) return origin;

  return null;
};

const corsHeaders = (request: Request) => {
  const allowedOrigin = getAllowedOrigin(request);
  return allowedOrigin
    ? {
        'access-control-allow-origin': allowedOrigin,
        'vary': 'Origin',
      }
    : {};
};

const json = (request: Request, data: unknown, status = 200) => {
  const headers = new Headers({
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  });
  for (const [key, value] of Object.entries(corsHeaders(request))) {
    headers.set(key, value);
  }

  return new Response(JSON.stringify(data), {
    status,
    headers,
  });
};

const getClientIp = (request: Request) => {
  const cfIp = request.headers.get('cf-connecting-ip')?.trim();
  if (cfIp) return cfIp;

  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwardedFor || 'unknown';
};

const validateDeviceId = (deviceId: string) => DEVICE_ID_PATTERN.test(deviceId);

const getCounterStub = (env: Env) => {
  const id = env.LIKE_COUNTER.idFromName('site-like-counter');
  return env.LIKE_COUNTER.get(id);
};

const getLegacyLikeState = async (env: Env, deviceId: string) => {
  if (!env.LIKES_KV) return null;

  const [countRaw, likedRaw] = await Promise.all([
    env.LIKES_KV.get(LEGACY_COUNT_KEY),
    env.LIKES_KV.get(legacyDeviceKey(deviceId)),
  ]);
  const count = Number.parseInt(countRaw ?? '0', 10);

  return {
    count: Number.isFinite(count) ? count : 0,
    liked: Boolean(likedRaw),
  };
};

const counterUrl = async (env: Env, deviceId: string) => {
  const url = new URL('https://like-counter/status');
  url.searchParams.set('deviceId', deviceId);

  const legacy = await getLegacyLikeState(env, deviceId);
  if (legacy) {
    url.searchParams.set('legacyCount', String(legacy.count));
    if (legacy.liked) url.searchParams.set('legacyLiked', '1');
  }

  return url.toString();
};

export const onRequest: PagesFunction<Env> = async (ctx) => {
  const { request, env } = ctx;
  const url = new URL(request.url);

  if (request.method === 'OPTIONS') {
    const allowedOrigin = getAllowedOrigin(request);
    if (!allowedOrigin) return new Response(null, { status: 403 });

    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': allowedOrigin,
        'access-control-allow-methods': 'GET,POST,OPTIONS',
        'access-control-allow-headers': 'content-type',
        'access-control-max-age': '86400',
        'vary': 'Origin',
      },
    });
  }

  if (request.method === 'GET') {
    const deviceId = url.searchParams.get('deviceId')?.trim();
    if (!deviceId) return json(request, { error: 'deviceId required' }, 400);
    if (!validateDeviceId(deviceId)) return json(request, { error: 'invalid deviceId' }, 400);

    const counter = getCounterStub(env);
    const counterResp = await counter.fetch(await counterUrl(env, deviceId));
    const data = await counterResp.json();
    return json(request, data, counterResp.status);
  }

  if (request.method === 'POST') {
    const contentLength = Number.parseInt(request.headers.get('content-length') ?? '0', 10);
    if (contentLength > 1024) return json(request, { error: 'payload too large' }, 413);

    let body: { deviceId?: string } | null = null;
    try {
      body = await request.json();
    } catch {
      return json(request, { error: 'invalid json' }, 400);
    }

    const deviceId = body?.deviceId?.trim();
    if (!deviceId) return json(request, { error: 'deviceId required' }, 400);
    if (!validateDeviceId(deviceId)) return json(request, { error: 'invalid deviceId' }, 400);

    const counter = getCounterStub(env);
    const legacy = await getLegacyLikeState(env, deviceId);
    const counterResp = await counter.fetch('https://like-counter/like', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        deviceId,
        clientIp: getClientIp(request),
        legacyCount: legacy?.count,
        legacyLiked: legacy?.liked,
      }),
    });
    const data = await counterResp.json();
    return json(request, data, counterResp.status);
  }

  return json(request, { error: 'method not allowed' }, 405);
};
