import App from "./App";
import React from "react";
import axios from "axios";
import store from "./store";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_COINGECKO_API;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
