import { Table } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { coinsSelector } from "../store/coinsSelectors";
import { fetchCoinsPerMarket } from "../store/coinsThunks";

function ListCoins({ fetchCoins, coins }: any) {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "24h", dataIndex: "lastDayPriceChange", key: "lastDayPriceChange" },
    { title: "24h Volume", dataIndex: "lastDayVolume", key: "lastDayVolume" },
    { title: "Mkt Cap", dataIndex: "marketCapital", key: "marketCapital" },
  ];

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

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
  return { fetchCoins: () => dispatch(fetchCoinsPerMarket()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCoins);
