import { createSelector } from "reselect";
import { CoinsState } from "./coinsInterfaces";

const getCoinsSelector = (state: CoinsState) => state.coins;

export const coinsSelector = createSelector(getCoinsSelector, (coins) => {
  return coins.map((coin) => {
    return {
      key: coin.id,
      name: coin.name,
      price: coin.current_price,
      marketCapital: coin.market_cap,
      lastDayVolume: coin.total_volume,
      lastDayPriceChange: coin.price_change_percentage_24h,
    };
  });
});
