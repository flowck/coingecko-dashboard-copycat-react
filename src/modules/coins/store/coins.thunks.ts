import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../store";
import { getCoinsCategories, getCoinsPerMarket } from "./coins.services";
import { AppThunk } from "./../../../store/store.types";
import { getCoins, setCoinError, SET_COINS_CATEGORIES } from "./coins.actions";

export const fetchCoinsPerMarket = (vsCurrency = "USD"): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const coins = await getCoinsPerMarket(vsCurrency);
      dispatch(getCoins(coins));
    } catch (error) {
      dispatch(setCoinError(error));
    }
  };
};

export function fetchCoinsCategories(): AppThunk {
  return async (dispatch) => {
    try {
      const categories = await getCoinsCategories();
      dispatch({ type: SET_COINS_CATEGORIES, payload: categories });
    } catch (error) {
      dispatch(setCoinError(error));
    }
  };
}
