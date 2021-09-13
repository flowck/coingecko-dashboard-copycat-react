import { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "@store/index";
import { useParams } from "react-router-dom";
import { AppThunkDispatch } from "@store/store.types";
import { FullExchange } from "@exchanges/store/exchanges.interface";
import { getSingleExchange } from "@exchanges/store/exchanges.thunks";

interface Props {
  exchange: FullExchange | null;
  getSingleExchange(id: string): void;
}

function SingleExchange({ exchange, getSingleExchange }: Props) {
  const { exchangeId } = useParams<{ exchangeId: string }>();

  useEffect(() => {
    getSingleExchange(exchangeId);
  }, [exchangeId, getSingleExchange]);

  return <section>{/* <ViewTitle title=""> */}</section>;
}

function mapStateToProps(state: RootState) {
  return {
    exchange: state.exchangesModule.exchange,
  };
}

function mapDispatchToProps(dispatch: AppThunkDispatch) {
  return {
    getSingleExchange: (id: string) => dispatch(getSingleExchange(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleExchange);
