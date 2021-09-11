import { Coin } from "./coins.interfaces";

export enum COINS_ACTIONS {
  GET_COINS = "GET_COINS",
  SET_ERROR = "SET_SEROR",
  SET_VS_CURRENY = "SET_VS_CURRENCY",
}

export const SET_COINS_CATEGORIES = "SET_COINS_CATEGORIES";

export const setCoinError = (payload: unknown) => ({ type: COINS_ACTIONS.SET_ERROR, payload });
export const getCoins = (payload: Coin[]) => ({ type: COINS_ACTIONS.GET_COINS, payload });
export const setVsCurrency = (payload: string) => ({ type: COINS_ACTIONS.SET_VS_CURRENY, payload });

export type CoinsActionType = COINS_ACTIONS.GET_COINS | COINS_ACTIONS.SET_ERROR;
