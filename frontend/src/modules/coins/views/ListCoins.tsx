import { Table } from "antd";
import { Coin } from "../coins";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { coinsSelector } from "../store/coinsSelectors";
import { fetchCoinsPerMarket } from "../store/coinsThunks";
import { CoinColumnName } from "../components/CoinColumnName";

function ListCoins({ fetchCoins, coins }: any) {
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

function mapStateToProps(state: any, props: any) {
  return {
    coins: coinsSelector(state.coins),
  };
}

function mapDispatchToProps(dispatch: any) {
  return { fetchCoins: (vsCurrency: string) => dispatch(fetchCoinsPerMarket(vsCurrency)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCoins);
