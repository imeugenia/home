import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const rootElement = document.getElementById("root");
const Application = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);

if (rootElement.hasChildNodes()) {
  hydrate(<Application />, rootElement);
} else {
  render(<Application />, rootElement);
}
