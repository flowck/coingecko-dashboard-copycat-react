import axios from "axios";
import { Coin, CoinsCategory } from "./coins.interfaces";
import { cacheService } from "../../../common/services/CacheService";

const cacheKey = "cg.coinsPerMarket";

export async function getCoinsPerMarket(vsCurrency: string, page = 1, category = ""): Promise<Coin[]> {
  const key = `${cacheKey}.${vsCurrency}.${category}.${page}`;
  let coins = cacheService.getItem<Coin[]>(key);

  if (coins) {
    return coins;
  }

  let options = { params: { vs_currency: vsCurrency, per_page: 100, page } };

  if (category) {
    (options.params as Record<string, string | number>) = { ...options.params, category };
  }

  const { data } = await axios.get<Coin[]>("/coins/markets", options);
  cacheService.setItem(key, data);
  return data;
}

// export async function getCoinDetails(id: string) {}

export async function getCoinsCategories() {
  const key = "cg.coinsCategories";
  let categories = cacheService.getItem(key);

  // Return cached
  if (categories) {
    return categories;
  }

  // Get categories and cache it
  const { data } = await axios.get<CoinsCategory[]>("/coins/categories/list");
  cacheService.setItem(key, data);

  return data;
}
