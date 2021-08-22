import { Dispatch } from "redux";
import { Coin } from "./coinsInterfaces";
import { getCoins } from "./coinsActions";

export const fetchCoins = () => async (dispatch: Dispatch) => {
  try {
    let coins = retrieveCoins();
    const apiBase = process.env.REACT_APP_COINGECKO_API;

    if (!coins) {
      const response = await fetch(`${apiBase}/coins/list`);
      coins = (await response.json()) as Coin[];
      persistCoins(coins);
    }

    dispatch(getCoins(coins));
  } catch (error) {
    throw error;
  }
};

function persistCoins(coins: Coin[]) {
  window.sessionStorage.setItem("cg.coins", JSON.stringify(coins));
}

function retrieveCoins(): Coin[] | null {
  const coins = window.sessionStorage.getItem("cg.coins");
  return coins ? JSON.parse(coins) : null;
}
