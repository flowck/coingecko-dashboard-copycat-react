import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.querySelector("#root")
);
