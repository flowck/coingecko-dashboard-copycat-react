import axios from "axios";
import { cacheService } from "@common/services/CacheService";
import { Coin, CoinDetails, CoinMarketChart, CoinsCategory } from "./coins.interfaces";

export async function getCoinsPerMarket(vsCurrency: string, page = 1, category = ""): Promise<Coin[]> {
  const key = `cg.coinsPerMarket.${vsCurrency}.${category}.${page}`;
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

export async function getCoinDetails(id: string): Promise<CoinDetails> {
  const key = `cg.coins.details.${id}`;
  const cached = cacheService.getItem<CoinDetails>(key);
  if (cached) {
    return cached;
  }

  const { data } = await axios.get<CoinDetails>(`/coins/${id}`);
  cacheService.setItem(key, data);

  return data;
}

export async function getCoinMarketChart(id: string, vsCurrency: string, days = 30): Promise<any> {
  const key = `cg.coins.priceChart.${id}.${vsCurrency}`;
  const cached = cacheService.getItem<CoinMarketChart>(key);
  if (cached) {
    return cached;
  }

  const options = { params: { vs_currency: vsCurrency, days } };
  const { data } = await axios.get<CoinMarketChart>(`/coins/${id}/market_chart`, options);
  cacheService.setItem(key, data);

  return data;
}

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
