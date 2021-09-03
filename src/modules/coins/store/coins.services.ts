import { CoinMarket } from "./coins.interfaces";
import { cacheService } from "../../../common/services/CacheService";

const cacheKey = "cg.coinsPerMarket";

export async function getCoinsPerMarket(vsCurrency: string): Promise<CoinMarket[]> {
  let coins = cacheService.getItem<CoinMarket[]>(cacheKey);
  const apiBase = process.env.REACT_APP_COINGECKO_API;

  if (!coins) {
    const url = `${apiBase}/coins/markets?vs_currency=${vsCurrency}&per_page=100`;
    const response = await fetch(url);
    coins = (await response.json()) as CoinMarket[];
    cacheService.setItem(cacheKey, coins);
  }

  return coins;
}

export async function getCoinDetails(id: string) {}
