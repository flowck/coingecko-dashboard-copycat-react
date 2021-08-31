export function getRequestOptions(page: number, perPage: number) {
  return { params: { per_page: perPage, page } };
}

export function isDataCached(key: string): boolean {
  if (!key || typeof key !== "string") throw new Error("Please provide an argument for key parameter.");

  return !!window.localStorage.getItem(key);
}

export function getCachedData<T>(key: string): T | null {
  const data = window.localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
}

export function setCache(key: string, data: unknown): void {
  window.localStorage.setItem(key, JSON.stringify(data));
}
