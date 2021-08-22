import { Divider, Table } from "antd";
import { connect } from "react-redux";
import { fetchCoins } from "../store/coinsThunks";
import { coinsSelector } from "../store/coinsSelectors";
import { useEffect } from "react";
import { Coin } from "../store/coinsInterfaces";

function ListCoins({ fetchCoins, coins }: any) {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Symbol", dataIndex: "symbol", key: "symbol" },
    { title: "Name", dataIndex: "name", key: "name" },
  ];

  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  const list = coins.map((item: Coin) => <div>{item.name}</div>);

  return (
    <section>
      <h1>Coins</h1>

      {list()}
      {/* <Table dataSource={coins} columns={columns}></Table> */}
    </section>
  );
}

function mapStateToProps(state: any, props: any) {
  return {
    coins: coinsSelector(state.coins),
  };
}

function mapDispatchToProps(dispatch: any) {
  return { fetchCoins: () => dispatch(fetchCoins()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCoins);
