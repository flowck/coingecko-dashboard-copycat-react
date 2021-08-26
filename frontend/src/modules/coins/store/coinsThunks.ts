import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../../store";
import { getCoins, setCoinError } from "./coinsActions";
import { CoinsService } from "./../services/coinsService";
import { cacheService } from "./../../../common/services/CacheService";

const coinsService = new CoinsService(cacheService);

export const fetchCoinsPerMarket = (vsCurrency = "USD"): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const coins = await coinsService.getCoinsPerMarket(vsCurrency);
      dispatch(getCoins(coins));
    } catch (error) {
      dispatch(setCoinError(error));
    }
  };
};
