import App from "./App";
import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.baseURL = process.env.REACT_APP_COINGECKO_API;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App></App>
      </Router>
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
