import { connect } from "react-redux";
import { fetchCoins } from "../store/coinsThunks";

function ListCoins(props: any) {
  return (
    <section>
      A list of coins :)
      <button onClick={() => props.fetchCoins()}>Get coins</button>
    </section>
  );
}

function mapStateToProps({ coins }: any, props: any) {
  return {
    coins,
  };
}

function mapDispatchToProps(dispatch: any) {
  return { fetchCoins: () => dispatch(fetchCoins()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCoins);
