import React from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux.utils";

import "./App.css";

function App({ title = "one", ...props }) {
  return (
    <div className="App">
      <div>
        <button onClick={props.up}>up</button>
        <button onClick={props.down}>down</button>
      </div>
      {title}
      <p>{props.count}</p>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
