import { AppThunk } from "./../../../store/store.types";
import { getCoinsCategories, getCoinsPerMarket } from "./coins.services";
import { getCoins, setCoinError, SET_COINS_CATEGORIES } from "./coins.actions";

export const fetchCoinsPerMarket = (vsCurrency = "USD", page = 1, category?: string): AppThunk => {
  return async (dispatch) => {
    try {
      const coins = await getCoinsPerMarket(vsCurrency, page, category);
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
