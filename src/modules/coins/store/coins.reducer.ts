import { CoinsModuleState } from "./coins.interfaces";
import { COINS_ACTIONS, SET_COINS_CATEGORIES } from "./coins.actions";

const _state: CoinsModuleState = {
  coins: [],
  coin: null,
  error: "",
  categories: [],
  coinChart: null,
  coinsPerMarketVsCurrency: "USD",
};

export const coinsReducer = (state = _state, { payload, type }: any) => {
  switch (type) {
    case COINS_ACTIONS.GET_COINS:
      return { ...state, coins: payload };
    case COINS_ACTIONS.SET_ERROR:
      return { ...state, error: payload };
    case SET_COINS_CATEGORIES:
      return { ...state, categories: payload };
    case COINS_ACTIONS.SET_COIN_DETAILS:
      return { ...state, coin: payload };
    case COINS_ACTIONS.SET_COIN_MARKET_CHART:
      return { ...state, coinChart: payload };
    default:
      return state;
  }
};
