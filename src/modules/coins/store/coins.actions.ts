import { Coin, CoinDetails, CoinMarketChart } from "./coins.interfaces";

export enum COINS_ACTIONS {
  GET_COINS = "GET_COINS",
  SET_ERROR = "SET_SEROR",
  SET_VS_CURRENY = "SET_VS_CURRENCY",
  SET_COIN_DETAILS = "SET_COIN_DETAILS",
  SET_COIN_MARKET_CHART = "SET_COIN_MARKET_CHART",
}

export const SET_COINS_CATEGORIES = "SET_COINS_CATEGORIES";

export const getCoins = (payload: Coin[]) => ({ type: COINS_ACTIONS.GET_COINS, payload });
export const setCoinError = (payload: unknown) => ({ type: COINS_ACTIONS.SET_ERROR, payload });
export const setVsCurrency = (payload: string) => ({ type: COINS_ACTIONS.SET_VS_CURRENY, payload });
export const setCoinDetails = (payload: CoinDetails) => ({ type: COINS_ACTIONS.SET_COIN_DETAILS, payload });
export const setCoinMarketChart = (payload: CoinMarketChart) => ({
  type: COINS_ACTIONS.SET_COIN_MARKET_CHART,
  payload,
});

export type CoinsActionType = COINS_ACTIONS.GET_COINS | COINS_ACTIONS.SET_ERROR;
