type CacheEntry = {
  value: any;
  expiresAt: number;
};

const cache = new Map<string, CacheEntry>();

export async function cached(key: string, ttlSeconds: number, fn: () => Promise<any>) {
  const now = Date.now();
  const entry = cache.get(key);
  if (entry && entry.expiresAt > now) {
    // cache hit
    return entry.value;
  }

  const val = await fn();
  try {
    cache.set(key, { value: val, expiresAt: now + ttlSeconds * 1000 });
  } catch {
    // ignore cache set failures
  }
  return val;
}

export function clearCache(key?: string) {
  if (key) cache.delete(key);
  else cache.clear();
}

export default { cached, clearCache };
