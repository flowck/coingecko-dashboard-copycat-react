import { useEffect } from "react";
import parse from "html-react-parser";
import { connect } from "react-redux";
import styled from "styled-components";
import { RootState } from "@store/index";
import { useParams } from "react-router";
import { numberToCurrency } from "@common/utils";
import { Card } from "@common/components/card/card";
import { AppThunkDispatch } from "@store/store.types";
import { ViewTitle } from "@common/components/viewTitle/viewTitle";
import { CoinDetails, CoinMarketChart } from "@coins/store/coins.interfaces";
import { fetchCoinDetails, fetchCoinMarketChart } from "@coins/store/coins.thunks";
import { TimeSeriesChart } from "@coins/components/timeSeriesChart/timeSeriesChart";

interface Props {
  vsCurrency: string;
  coin: CoinDetails | null;
  coinChart: CoinMarketChart | null;
  _fetchCoinDetails(id: string): void;
  _fetchCoinMarketData(id: string, vsCurrency: string, days?: number): void;
}

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

function CoinsDetails({ coin, vsCurrency, coinChart, _fetchCoinDetails, _fetchCoinMarketData }: Props) {
  const { coinId } = useParams<Record<string, string>>();
  useEffect(() => _fetchCoinDetails(coinId), [_fetchCoinDetails, coinId]);
  useEffect(() => _fetchCoinMarketData(coinId, vsCurrency), [_fetchCoinMarketData, coinId, vsCurrency]);

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

const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
  return {
    _fetchCoinDetails: (id: string) => dispatch(fetchCoinDetails(id)),
    _fetchCoinMarketData: (id: string, vsCurrency: string, days?: number) =>
      dispatch(fetchCoinMarketChart(id, vsCurrency, days)),
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    coin: state.coinsModule.coin,
    coinChart: state.coinsModule.coinChart,
    vsCurrency: state.coinsModule.coinsPerMarketVsCurrency,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinsDetails);
