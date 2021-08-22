export interface Coin {
  id: string;
  name: string;
  symbol: string;
}

export interface CoinsState {
  coins: Coin[];
}
