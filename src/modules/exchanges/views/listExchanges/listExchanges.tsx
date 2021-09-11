import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "@store/index";
import { Link } from "react-router-dom";
import { numberToCurrency } from "@common/utils";
import { AppThunkDispatch } from "@store/store.types";
import { ExchangeName } from "./listExchanges.styles";
import { Exchange } from "@exchanges/store/exchanges.interface";
import { getExchanges } from "@exchanges/store/exchanges.thunks";
import { DataTable } from "@common/components/dataTable/dataTable";
import { ViewTitle } from "@common/components/viewTitle/viewTitle";
import { TrustScore } from "@exchanges/components/trustScore/trustScore";

interface Props {
  exchanges: Exchange[];
  getExchanges(page: number, perPage: number): void;
}

const columns = [
  {
    label: "",
    name: "name",
    component(row: Exchange) {
      return (
        <ExchangeName>
          <img src={row.image} alt={row.name} />
          <Link to={`/dashboard/exchanges/${row.id}`}>{row.name}</Link>
        </ExchangeName>
      );
    },
  },
  { name: "year_established", label: "year established" },
  { name: "country", label: "" },
  { name: "has_trading_incentive", label: "has trading incentive" },
  {
    name: "trust_score",
    label: "trust score",
    component(row: Exchange) {
      return <TrustScore value={row.trust_score} max={10} />;
    },
  },
  { name: "trust_score_rank", label: "trust score rank" },
  {
    name: "trade_volume_24h_btc",
    label: "trade volume 24h (btc)",
    component: (row: Exchange) => {
      return <span>{numberToCurrency(row.trade_volume_24h_btc, "usd")}</span>;
    },
  },
  { name: "trade_volume_24h_btc_normalized", label: "Trade volume 24h (BTC normalized)" },
];

function ListExchanges({ getExchanges, exchanges }: Props) {
  useEffect(() => {
    getExchanges(1, 50);
  }, [getExchanges]);

  return (
    <section>
      <ViewTitle title="Exchanges" />

      {exchanges.length ? <DataTable columns={columns} rows={exchanges} /> : null}
    </section>
  );
}

const mapDispatchToProps = (dispatch: AppThunkDispatch) => {
  return {
    getExchanges: (page: number, perPage: number) => dispatch(getExchanges(page, perPage)),
  };
};

const mapStateToProps = ({ exchangesModule }: RootState) => {
  return {
    exchanges: exchangesModule.exchanges || [],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListExchanges);
