import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../store";
import { Exchange } from "../../store/exchanges.interface";
import { getExchanges } from "../../store/exchanges.thunks";
import { AppThunkDispatch } from "../../../../store/store.types";
import { DataTable } from "../../../../common/components/dataTable/dataTable";
import { ExchangeName } from "./ListExchanges.styles";

interface Props {
  exchanges: Exchange[];
  getExchanges(page: number, perPage: number): void;
}

const columns = [
  {
    name: "name",
    label: "",
    component(row: Exchange) {
      return (
        <ExchangeName>
          <img src={row.image} alt={row.name} />
          {row.name}
        </ExchangeName>
      );
    },
  },
  { name: "year_established", label: "" },
  { name: "country", label: "" },
  { name: "has_trading_incentive", label: "" },
  { name: "trust_score", label: "" },
  { name: "trust_score_rank", label: "" },
  { name: "trade_volume_24h_btc", label: "" },
  { name: "trade_volume_24h_btc_normalized", label: "Trade volume 24h (BTC normalized)" },
];

function ListExchanges({ getExchanges, exchanges }: Props) {
  useEffect(() => {
    getExchanges(1, 50);
  }, [getExchanges]);

  return (
    <section>
      <h1>Exchanges</h1>

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
