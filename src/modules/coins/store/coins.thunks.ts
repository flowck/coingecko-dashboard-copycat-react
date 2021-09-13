import { AppThunk } from "@store/store.types";
import { getCoinDetails, getCoinsCategories, getCoinsPerMarket, getCoinMarketChart } from "./coins.services";
import { getCoins, setCoinDetails, setCoinError, setCoinMarketChart, SET_COINS_CATEGORIES } from "./coins.actions";

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

export function fetchCoinDetails(id: string): AppThunk {
  return async (dispatch) => {
    try {
      const coin = await getCoinDetails(id);
      dispatch(setCoinDetails(coin));
    } catch (error) {
      dispatch(setCoinError(error));
    }
  };
}

export function fetchCoinMarketChart(id: string, vsCurrency: string, days = 30): AppThunk {
  return async (dispatch) => {
    try {
      const data = await getCoinMarketChart(id, vsCurrency, days);
      dispatch(setCoinMarketChart(data));
    } catch (error) {
      console.log(error);
      dispatch(setCoinError(error));
    }
  };
}
