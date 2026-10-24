const CACHE_TTL_MS = 5 * 60 * 1000;
const CACHE_LIMIT = 24;
const cache = new Map();

function json(body, status = 200, head = false) {
  return new Response(head ? null : JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

function cacheGet(key) {
  const entry = cache.get(key);
  if (!entry || entry.expires < Date.now()) {
    cache.delete(key);
    return null;
  }
  return entry.value;
}

function cacheSet(key, value) {
  if (cache.size >= CACHE_LIMIT) cache.delete(cache.keys().next().value);
  cache.set(key, { value, expires: Date.now() + CACHE_TTL_MS });
}

export async function fetchVPIC(url, cacheKey) {
  const cached = cacheGet(cacheKey);
  if (cached) return cached;
  let response;
  try {
    response = await fetch(url, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(6000) });
  } catch (_) {
    throw new Error("upstream unavailable");
  }
  const contentType = response.headers.get("content-type") || "";
  if (!response.ok || !/application\/json/i.test(contentType)) throw new Error("invalid upstream response");
  let payload;
  try { payload = await response.json(); } catch (_) { throw new Error("invalid upstream JSON"); }
  if (!payload || !Array.isArray(payload.Results)) throw new Error("unexpected upstream JSON");
  cacheSet(cacheKey, payload);
  return payload;
}

export function methodAllowed(request) {
  return request.method === "GET" || request.method === "HEAD";
}

export { json };
