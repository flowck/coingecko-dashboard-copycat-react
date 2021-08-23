import { Dispatch } from "redux";
import { CoinMarket } from "./coinsInterfaces";
import { getCoins, setCoinError } from "./coinsActions";

export const fetchCoinsPerMarket = (vsCurrency = "USD") => {
  return async (dispatch: Dispatch) => {
    try {
      let coins = retrieveCoins();
      const apiBase = process.env.REACT_APP_COINGECKO_API;

      if (!coins) {
        const url = `${apiBase}/coins/markets?vs_currency=${vsCurrency}&per_page=100`;
        const response = await fetch(url);
        coins = (await response.json()) as CoinMarket[];
        persistCoins(coins);
      }

      dispatch(getCoins(coins));
    } catch (error) {
      dispatch(setCoinError(error));
    }
  };
};

function persistCoins(coins: CoinMarket[]) {
  window.sessionStorage.setItem("cg.coinsPerMarket", JSON.stringify(coins));
}

function retrieveCoins(): CoinMarket[] | null {
  const coins = window.sessionStorage.getItem("cg.coinsPerMarket");
  return coins ? JSON.parse(coins) : null;
}
