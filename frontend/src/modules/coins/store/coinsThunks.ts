import { Dispatch } from "redux";
import { getCoins, setCoinError } from "./coinsActions";
import { CoinsService } from "./../services/coinsService";
import { cacheService } from "./../../../common/services/CacheService";

const coinsService = new CoinsService(cacheService);

export const fetchCoinsPerMarket = (vsCurrency = "USD") => {
  return async (dispatch: Dispatch) => {
    try {
      const coins = await coinsService.getCoinsPerMarket(vsCurrency);
      dispatch(getCoins(coins));
    } catch (error) {
      dispatch(setCoinError(error));
    }
  };
};
