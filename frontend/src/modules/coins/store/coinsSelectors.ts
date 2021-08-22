import { CoinsState } from "./coinsInterfaces";
import { createSelector } from "reselect";

const getCoinsSelector = (state: CoinsState) => state.coins;

export const coinsSelector = createSelector(getCoinsSelector, (coins) => {
  return coins;
});