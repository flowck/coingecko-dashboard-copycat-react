import { Table } from "antd";
import { Action } from "redux";
import { Coin } from "../coins";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../../store";
import { useEffect, useState } from "react";
import { coinsSelector } from "../store/coins.selectors";
import { fetchCoinsPerMarket } from "../store/coins.thunks";
import { CoinColumnName } from "../components/CoinColumnName";

interface ListCoinsProps {
  coins: Coin[];
  fetchCoins(vsCurrency: string): void;
}

function ListCoins({ fetchCoins, coins }: ListCoinsProps) {
  const [vsCurrency] = useState("usd");

  const columns = [
    { title: "#", dataIndex: "index", key: "index" },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      render: (text: string, coin: Coin) => {
        return <CoinColumnName coin={coin} />;
      },
    },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "24h", dataIndex: "lastDayPriceChange", key: "lastDayPriceChange" },
    { title: "24h Volume", dataIndex: "lastDayVolume", key: "lastDayVolume" },
    { title: "Mkt Cap", dataIndex: "marketCapital", key: "marketCapital" },
  ];

  useEffect(() => {
    fetchCoins(vsCurrency);
  }, [fetchCoins, vsCurrency]);

  return (
    <section>
      <h1>Coins</h1>

      {coins.length ? <Table dataSource={coins} columns={columns}></Table> : null}
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
