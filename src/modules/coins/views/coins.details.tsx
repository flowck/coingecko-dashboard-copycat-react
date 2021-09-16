import { useEffect } from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import { RootState } from "@store/index";
import { useParams } from "react-router";
import { numberToCurrency } from "@common/utils";
import { Card } from "@common/components/card/card";
import { useDispatch, useSelector } from "react-redux";
import { ViewTitle } from "@common/components/viewTitle/viewTitle";
import { CoinDetails, CoinMarketChart } from "@coins/store/coins.interfaces";
import { fetchCoinDetails, fetchCoinMarketChart } from "@coins/store/coins.thunks";
import { TimeSeriesChart } from "@coins/components/timeSeriesChart/timeSeriesChart";

const CoinTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  h1 {
    margin: 0;
  }
`;

const CoinMarketStats = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-bottom: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export function CoinsDetails() {
  const dispatch = useDispatch();
  const { coinId } = useParams<Record<string, string>>();
  const coin = useSelector<RootState, CoinDetails | null>(({ coinsModule }) => coinsModule.coin);
  const vsCurrency = useSelector<RootState, string>(({ coinsModule }) => coinsModule.coinsPerMarketVsCurrency);
  const coinChart = useSelector<RootState, CoinMarketChart | null>(({ coinsModule }) => coinsModule.coinChart);

  useEffect(() => {
    dispatch(fetchCoinDetails(coinId));
  }, [dispatch, coinId]);

  useEffect(() => {
    dispatch(fetchCoinMarketChart(coinId, vsCurrency));
  }, [dispatch, coinId, vsCurrency]);

  return (
    <section>
      <CoinTitle>
        <img src={coin?.image?.small} alt={coin?.name} />
        <ViewTitle title={coin?.name || ""} />
      </CoinTitle>

      <CoinMarketStats>
        <Card>
          <h1>Current price</h1>
          {numberToCurrency(coin?.market_data?.current_price?.usd || 0, vsCurrency)}
        </Card>

        <Card>
          <h1>Market cap.</h1>
          {numberToCurrency(coin?.market_data?.market_cap[vsCurrency.toLowerCase()] || 0, vsCurrency)}
        </Card>

        <Card>
          <h1>Market cap. ranking</h1>
          {coin?.market_cap_rank}
        </Card>

        <Card>
          <h1>Genesis date</h1>
          {coin?.genesis_date}
        </Card>
      </CoinMarketStats>

      <Card className="space-top-bottom--medium">
        {coinChart ? <TimeSeriesChart currency={vsCurrency} name="Prices" serie={coinChart.prices} /> : null}
      </Card>

      <Card>
        <h1>About</h1>

        {parse(coin?.description?.en || "")}
      </Card>
    </section>
  );
}
