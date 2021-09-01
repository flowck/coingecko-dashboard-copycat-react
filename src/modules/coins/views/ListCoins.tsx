import { Action } from "redux";
import { Coin } from "../coins";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { coinsSelector } from "../store/coins.selectors";
import { numberToCurrency } from "../../../common/utils";
import { fetchCoinsPerMarket } from "../store/coins.thunks";
import { CoinColumnName } from "../components/coinColumnName";
import { DataTable } from "../../../common/components/dataTable/dataTable";
import { ViewTitle } from "../../../common/components/viewTitle/viewTitle";

interface ListCoinsProps {
  coins: Coin[];
  fetchCoins(vsCurrency: string): void;
}

function ListCoins({ fetchCoins, coins }: ListCoinsProps) {
  const [vsCurrency] = useState("usd");

  const columns = [
    { label: "#", name: "index" },
    {
      name: "name",
      label: "Name",
      component: (row: Coin) => {
        return <CoinColumnName coin={row} />;
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

      {coins.length ? <DataTable rows={coins} columns={columns}></DataTable> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCoins);
