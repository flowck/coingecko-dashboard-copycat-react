import { CoinsState } from "./coinsInterfaces";
import { COINS_ACTIONS } from "./coinsActions";

const _state: CoinsState = {
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
