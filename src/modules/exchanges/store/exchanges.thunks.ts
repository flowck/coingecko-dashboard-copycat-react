import axios from "axios";
import { AppThunk } from "@store/store.types";
import { getRequestOptions } from "@common/utils";
import { Exchange, FullExchange } from "./exchanges.interface";
import { SET_ERROR, SET_EXCHANGE, SET_EXCHANGES } from "./exchanges.constants";

export const getExchanges = (page = 1, perPage = 50): AppThunk => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get<Exchange[]>("/exchanges", getRequestOptions(page, perPage));
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
