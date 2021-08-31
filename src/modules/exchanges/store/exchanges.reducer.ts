import { SET_EXCHANGES } from "./exchanges.constants";
import { AppAction } from "../../../store/store.types";
import { Exchange, ExchangesRootState } from "./exchanges.interface";

const defaultState: ExchangesRootState = {
  exchanges: [],
};

export const exchangesReducer = (state = defaultState, action: AppAction): ExchangesRootState => {
  switch (action.type) {
    case SET_EXCHANGES:
      return { ...state, exchanges: action.payload as Exchange[] };
    default:
      return state;
  }
};
