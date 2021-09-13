import { AppAction } from "@store/store.types";
import { SET_EXCHANGE, SET_EXCHANGES } from "./exchanges.constants";
import { Exchange, ExchangesRootState, FullExchange } from "./exchanges.interface";

const defaultState: ExchangesRootState = {
  exchanges: [],
  exchange: null,
};

export const exchangesReducer = (state = defaultState, action: AppAction): ExchangesRootState => {
  switch (action.type) {
    case SET_EXCHANGES:
      return { ...state, exchanges: action.payload as Exchange[] };
    case SET_EXCHANGE:
      return { ...state, exchange: action.payload as FullExchange };
    default:
      return state;
  }
};
