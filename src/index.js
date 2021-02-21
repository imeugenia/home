import React from "react";
import { render } from "react-snapshot";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
