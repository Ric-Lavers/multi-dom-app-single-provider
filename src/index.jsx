import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import One from "./One";
import Two from "./Two";
// import Three from "./Three";
import * as serviceWorker from "./serviceWorker";
import "./index.context";
import { store } from "./redux.utils";
ReactDOM.render(
  <Provider store={store}>
    <One />
  </Provider>,
  document.getElementById("root_1")
);

ReactDOM.render(
  <Provider store={store}>
    <Two />
  </Provider>,
  document.getElementById("root_2")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
