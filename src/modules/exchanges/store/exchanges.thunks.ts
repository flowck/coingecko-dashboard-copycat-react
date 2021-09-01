import axios from "axios";
import { AppThunk } from "../../../store/store.types";
import { Exchange, FullExchange } from "./exchanges.interface";
import { SET_ERROR, SET_EXCHANGE, SET_EXCHANGES } from "./exchanges.constants";
import { getCachedData, getRequestOptions, isDataCached, setCache } from "../../../common/utils";

export const getExchanges = (page = 1, perPage = 50): AppThunk => {
  return async (dispatch) => {
    try {
      if (isDataCached("cg.exchanges")) {
        return dispatch({ type: SET_EXCHANGES, payload: getCachedData<Exchange>("cg.exchanges") });
      }

      const { data } = await axios.get<Exchange[]>("/exchanges", getRequestOptions(page, perPage));
      setCache("cg.exchanges", data);
      dispatch({ type: SET_EXCHANGES, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};

export const getSingleExchange = (id: string): AppThunk => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<FullExchange>(`/exchanges/${id}`);
      dispatch({ type: SET_EXCHANGE, payload: data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};
