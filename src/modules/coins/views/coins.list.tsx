import { Action } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { Coin } from "../store/coins.interfaces";
import { coinsSelector } from "../store/coins.selectors";
import { numberToCurrency } from "../../../common/utils";
import { fetchCoinsPerMarket } from "../store/coins.thunks";
import { CoinColumnName } from "../components/coinColumnName";
import { DataTable } from "../../../common/components/dataTable/dataTable";
import { ViewTitle } from "../../../common/components/viewTitle/viewTitle";

interface CoinsListProps {
  coins: Coin[];
  fetchCoins(vsCurrency: string): void;
}

function CoinsList({ fetchCoins, coins }: CoinsListProps) {
  const [vsCurrency] = useState("usd");

  const columns = [
    { label: "#", name: "index" },
    {
      name: "name",
      label: "Name",
      component: (row: Coin) => {
        return (
          <Link to={`/dashboard/coins/${row.id}`}>
            <CoinColumnName coin={row} />
          </Link>
        );
      },
    },
    {
      label: "Price",
      name: "price",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.price, vsCurrency)}</span>;
      },
    },
    { label: "24h", name: "lastDayPriceChange" },
    {
      label: "24h Volume",
      name: "lastDayVolume",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.lastDayVolume, vsCurrency)}</span>;
      },
    },
    {
      label: "Mkt Cap",
      name: "marketCapital",
      component: (row: Coin) => {
        return <span>{numberToCurrency(row.marketCapital, vsCurrency)}</span>;
      },
    },
  ];

  useEffect(() => {
    fetchCoins(vsCurrency);
  }, [fetchCoins, vsCurrency]);

  return (
    <section>
      <ViewTitle title="Cryptocurrency Prices by Market Cap" />

      {coins.length ? <DataTable rows={coins} columns={columns} /> : null}
    </section>
  );
}

function mapStateToProps(state: RootState, props: any) {
  return {
    coins: coinsSelector(state.coinsModule),
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<RootState, void, Action>) {
  return {
    fetchCoins: (vsCurrency: string) => dispatch(fetchCoinsPerMarket(vsCurrency)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsList);
