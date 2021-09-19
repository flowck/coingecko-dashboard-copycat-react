import { useEffect } from "react";
import { RootState } from "@store/index";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FullExchange } from "@exchanges/store/exchanges.interface";
import { getSingleExchange } from "@exchanges/store/exchanges.thunks";

function SingleExchange() {
  const dispatch = useDispatch();
  const { exchangeId } = useParams<{ exchangeId: string }>();
  const exchange = useSelector<RootState, FullExchange | null>(({ exchangesModule }) => exchangesModule.exchange);

  console.log(exchange);

  useEffect(() => {
    dispatch(getSingleExchange(exchangeId));
  }, [exchangeId, dispatch]);

  return <section>{/* <ViewTitle title=""> */}</section>;
}

export default SingleExchange;
