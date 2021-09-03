import { createSelector } from "reselect";
import { CoinsModuleState } from "./coins.interfaces";

const getCoinsSelector = (state: CoinsModuleState) => state.coins;

export const coinsSelector = createSelector(getCoinsSelector, (coins) => {
  return coins.map((coin, index) => {
    return {
      id: coin.id,
      key: coin.id,
      name: coin.name,
      index: index + 1,
      image: coin.image,
      symbol: coin.symbol,
      price: coin.current_price,
      marketCapital: coin.market_cap,
      lastDayVolume: coin.total_volume,
      lastDayPriceChange: coin.price_change_percentage_24h,
    };
  });
});
