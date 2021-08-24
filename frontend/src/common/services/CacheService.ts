export interface CacheService {
  setItem<T>(key: string, value: T): void;
  getItem<T>(key: string): T | null;
}

export enum CACHE_SERVICE_ENGINES {
  LOCAL_STORAGE = "localStorage",
  SESSION_STORAGE = "sessionStorage",
}

export type CacheServiceEngine = CACHE_SERVICE_ENGINES.LOCAL_STORAGE | CACHE_SERVICE_ENGINES.SESSION_STORAGE;

export class CacheService {
  private storageEngine!: Storage;

  constructor(engine: CacheServiceEngine) {
    this.storageEngine = window[engine];
  }

  setItem<T>(key: string, value: T): void {
    this.storageEngine.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const data = this.storageEngine.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}

export const cacheService = new CacheService(CACHE_SERVICE_ENGINES.LOCAL_STORAGE);
