import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import EgA from "./A";
import EgB from "./B";

import * as serviceWorker from "./serviceWorker";

const Context = React.createContext({ count: 0 });
window[Symbol.for("Context")] = Context;

const CProvider = ({ children }) => {
  const [state, setState] = React.useState({ count: 0 });

  const up = () => {
    setState(({ count, ...prev }) => ({ count: count + 1, ...prev }));
  };
  const down = () => {
    setState(({ count, ...prev }) => ({ count: count - 1, ...prev }));
  };

  return (
    <Context.Provider value={[state, { setState, up, down }]}>
      {children}
    </Context.Provider>
  );
};

const A = ReactDOM.createPortal(
  <EgA title="A" />,
  document.getElementById("ctx_root_1")
);

const B = ReactDOM.createPortal(
  <EgB title="B" />,
  document.getElementById("ctx_root_2")
);

ReactDOM.render(
  <CProvider>
    {A}
    {B}
  </CProvider>,
  document.getElementById("ctx_root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
