import { CoinMarket } from "../coins";
import { CacheService } from "./../../../common/services/CacheService";

export interface CoinsService {}

export class CoinsService {
  private cacheKey = "cg.coinsPerMarket";

  constructor(private cacheService: CacheService) {}

  async getCoinsPerMarket(vsCurrency: string): Promise<CoinMarket[]> {
    try {
      let coins = this.cacheService.getItem<CoinMarket[]>(this.cacheKey);
      const apiBase = process.env.REACT_APP_COINGECKO_API;

      if (!coins) {
        const url = `${apiBase}/coins/markets?vs_currency=${vsCurrency}&per_page=100`;
        const response = await fetch(url);
        coins = (await response.json()) as CoinMarket[];
        this.cacheService.setItem(this.cacheKey, coins);
      }

      return coins;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
