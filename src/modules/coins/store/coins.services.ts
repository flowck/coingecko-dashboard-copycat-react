import axios from "axios";
import { Coin, CoinDetails, CoinMarketChart, CoinsCategory } from "./coins.interfaces";

export async function getCoinsPerMarket(vsCurrency: string, page = 1, category = ""): Promise<Coin[]> {
  let options = { params: { vs_currency: vsCurrency, per_page: 100, page } };

  if (category) {
    (options.params as Record<string, string | number>) = { ...options.params, category };
  }

  const { data } = await axios.get<Coin[]>("/coins/markets", options);
  return data;
}

export async function getCoinDetails(id: string): Promise<CoinDetails> {
  const { data } = await axios.get<CoinDetails>(`/coins/${id}`);
  return data;
}

export async function getCoinMarketChart(id: string, vsCurrency: string, days = 30): Promise<any> {
  const options = { params: { vs_currency: vsCurrency, days } };
  const { data } = await axios.get<CoinMarketChart>(`/coins/${id}/market_chart`, options);
  return data;
}

export async function getCoinsCategories() {
  // Get categories and cache it
  const { data } = await axios.get<CoinsCategory[]>("/coins/categories/list");
  return data;
}
