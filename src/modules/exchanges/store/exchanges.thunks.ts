import axios from "axios";
import { AppThunk } from "@store/store.types";
import { Exchange, FullExchange } from "./exchanges.interface";
import { SET_ERROR, SET_EXCHANGE, SET_EXCHANGES } from "./exchanges.constants";
import { getCachedData, getRequestOptions, isDataCached, setCache } from "@common/utils";

export const getExchanges = (page = 1, perPage = 50): AppThunk => {
  return async (dispatch) => {
    const key = "cg.exchanges";
    try {
      if (isDataCached(key)) {
        return dispatch({ type: SET_EXCHANGES, payload: getCachedData<Exchange>(key) });
      }

      const { data } = await axios.get<Exchange[]>("/exchanges", getRequestOptions(page, perPage));
      setCache(key, data);
      dispatch({ type: SET_EXCHANGES, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};

export const getSingleExchange = (id: string): AppThunk => {
  return async (dispatch) => {
    try {
      const key = `cg.exchanges.${id}`;
      if (isDataCached(key)) {
        return dispatch({ type: SET_EXCHANGE, payload: getCachedData(key) });
      }

      const { data } = await axios.get<FullExchange>(`/exchanges/${id}`);
      setCache(key, data);
      dispatch({ type: SET_EXCHANGE, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};
