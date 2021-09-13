export interface CoinsCategory {
  name: string;
  category_id: string;
}

export interface CoinsModuleState {
  error: string;
  coins: Coin[];
  categories: CoinsCategory[];
  coinsPerMarketVsCurrency: string;
}

export interface Coin {
  roi: null;
  id: string;
  ath: number;
  atl: number;
  name: string;
  image: string;
  symbol: string;
  low_24h: number;
  high_24h: number;
  atl_date: string;
  ath_date: string;
  max_supply: number;
  market_cap: number;
  total_volume: number;
  last_updated: string;
  total_supply: number;
  current_price: number;
  market_cap_rank: number;
  price_change_24h: number;
  circulating_supply: number;
  ath_change_percentage: number;
  atl_change_percentage: number;
  market_cap_change_24h: number;
  fully_diluted_valuation: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
}
