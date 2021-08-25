import { CoinsState } from "../coins";
import { createSelector } from "reselect";

const getCoinsSelector = (state: CoinsState) => state.coins;

export const coinsSelector = createSelector(getCoinsSelector, (coins) => {
  return coins.map((coin, index) => {
    return {
      index: index + 1,
      symbol: coin.symbol,
      key: coin.id,
      name: coin.name,
      image: coin.image,
      price: coin.current_price,
      marketCapital: coin.market_cap,
      lastDayVolume: coin.total_volume,
      lastDayPriceChange: coin.price_change_percentage_24h,
    };
  });
});
