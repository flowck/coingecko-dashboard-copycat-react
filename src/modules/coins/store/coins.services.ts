import { CoinMarket, CoinsCategory } from "./coins.interfaces";
import { cacheService } from "../../../common/services/CacheService";
import axios from "axios";

const cacheKey = "cg.coinsPerMarket";

export async function getCoinsPerMarket(vsCurrency: string): Promise<CoinMarket[]> {
  let coins = cacheService.getItem<CoinMarket[]>(cacheKey);
  if (coins) {
    return coins;
  }

  const options = { params: { vs_currency: vsCurrency, per_page: 100 } };
  const { data } = await axios.get<CoinMarket[]>("/coins/markets", options);
  cacheService.setItem(cacheKey, data);
  return data;
}

// export async function getCoinDetails(id: string) {}

export async function getCoinsCategories() {
  const key = "cg.coinsCategories";
  let categories = cacheService.getItem(key);

  console.log(JSON.stringify(categories));

  // Return cached
  if (categories) {
    return categories;
  }

  // Get categories and cache it
  const { data } = await axios.get<CoinsCategory[]>("/coins/categories/list");
  cacheService.setItem(key, data);

  return data;
}
