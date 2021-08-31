import thunk from "redux-thunk";
import logger from "redux-logger";
import { coinsReducer } from "../modules/coins/store";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import { exchangesReducer } from "./../modules/exchanges/store/exchanges.reducer";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Assemble all reducers
 */
const reducers = combineReducers({
  coinsModule: coinsReducer,
  exchangesModule: exchangesReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;
export type RootState = ReturnType<typeof store.getState>;
