export interface CoinsCategory {
  name: string;
  category_id: string;
}

export interface CoinsModuleState {
  error: string;
  coins: Coin[];
  coin: CoinDetails | null;
  categories: CoinsCategory[];
  coinsPerMarketVsCurrency: string;
  coinChart: CoinMarketChart | null;
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

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: string | null;
  platforms: { [key: string]: string };
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  public_notice: null;
  additional_notices: any[];
  localization: { [key: string]: string };
  description: { [key: string]: string };
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  market_cap_rank: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketData;
  community_data: CommunityData;
  developer_data: DeveloperData;
  public_interest_stats: PublicInterestStats;
  status_updates: any[];
  last_updated: string;
  tickers: Ticker[];
}

export interface CommunityData {
  facebook_likes: null;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count: null;
}

export interface DeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4_Weeks;
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: number[];
}

export interface CodeAdditionsDeletions4_Weeks {
  additions: number;
  deletions: number;
}

export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface Links {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposURL;
}

export interface ReposURL {
  github: string[];
  bitbucket: any[];
}

export interface MarketData {
  current_price: { [key: string]: number };
  total_value_locked: null;
  mcap_to_tvl_ratio: null;
  fdv_to_tvl_ratio: null;
  roi: null;
  ath: { [key: string]: number };
  ath_change_percentage: { [key: string]: number };
  ath_date: { [key: string]: string };
  atl: { [key: string]: number };
  atl_change_percentage: { [key: string]: number };
  atl_date: { [key: string]: string };
  market_cap: { [key: string]: number };
  market_cap_rank: number;
  fully_diluted_valuation: { [key: string]: number };
  total_volume: { [key: string]: number };
  high_24h: { [key: string]: number };
  low_24h: { [key: string]: number };
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: { [key: string]: number };
  price_change_percentage_1h_in_currency: { [key: string]: number };
  price_change_percentage_24h_in_currency: { [key: string]: number };
  price_change_percentage_7d_in_currency: { [key: string]: number };
  price_change_percentage_14d_in_currency: { [key: string]: number };
  price_change_percentage_30d_in_currency: { [key: string]: number };
  price_change_percentage_60d_in_currency: { [key: string]: number };
  price_change_percentage_200d_in_currency: { [key: string]: number };
  price_change_percentage_1y_in_currency: { [key: string]: number };
  market_cap_change_24h_in_currency: { [key: string]: number };
  market_cap_change_percentage_24h_in_currency: { [key: string]: number };
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
}

export interface PublicInterestStats {
  alexa_rank: number;
  bing_matches: null;
}

export interface Ticker {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  converted_last: { [key: string]: number };
  converted_volume: { [key: string]: number };
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: null | string;
  token_info_url: null;
  coin_id: string;
  target_coin_id?: string;
}

export interface Market {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}

export interface CoinMarketChart {
  prices: [number, number | null][];
  market_caps: [number, number | null][];
  total_volumes: [number, number | null][];
}
