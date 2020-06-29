import React from "react";
import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./redux.utils";
import "./App.css";

function App({ title = "Two", ...props }) {
  return (
    <div className="App">
      {title} <p>{props.count}</p>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
