import thunk from "redux-thunk";
import logger from "redux-logger";
import { coinsReducer } from "../modules/coins/store";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Assemble all reducers
 */
const reducers = combineReducers({
  coins: coinsReducer,
});

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk, logger))
);
