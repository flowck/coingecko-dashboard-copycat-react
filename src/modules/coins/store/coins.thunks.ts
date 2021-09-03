import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../store";
import { getCoinsPerMarket } from "./coins.services";
import { getCoins, setCoinError } from "./coins.actions";

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
