import thunk from "redux-thunk";
import logger from "redux-logger";
import { coinsReducer } from "../modules/coins/store";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import { exchangesReducer } from "./../modules/exchanges/store/exchanges.reducer";

const persistConfig = {
  key: "cg",
  storage: sessionStorage,
};
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Assemble all reducers
 */
const reducers = combineReducers({
  coinsModule: coinsReducer,
  exchangesModule: exchangesReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk, logger)));
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
