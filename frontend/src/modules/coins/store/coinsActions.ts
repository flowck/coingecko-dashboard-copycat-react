import { Coin } from "./coinsInterfaces";

export enum COINS_ACTIONS {
  GET_COINS = "GET_COINS",
}

export function getCoins(payload: Coin[]) {
  return { type: COINS_ACTIONS.GET_COINS, payload };
}

export type CoinsActionType = COINS_ACTIONS.GET_COINS;
