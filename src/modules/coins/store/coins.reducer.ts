import { CoinsModuleState } from "./coins.interfaces";
import { COINS_ACTIONS } from "./coins.actions";

const _state: CoinsModuleState = {
  coins: [],
  error: "",
  coinsPerMarketVsCurrency: "USD",
};

export const coinsReducer = (state = _state, { payload, type }: any) => {
  switch (type) {
    case COINS_ACTIONS.GET_COINS:
      return { ...state, coins: payload };
    case COINS_ACTIONS.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
