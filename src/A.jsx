import React from "react";

import "./App.css";

function App({ title = "one", ...props }) {
  let [state, { up, down }] = React.useContext(window[Symbol.for("Context")]);

  return (
    <div className="App">
      <div>
        <button onClick={up}>up</button>
        <button onClick={down}>down</button>
      </div>
      {title}
      <p>{props.count}</p>
      <pre>
        <code>{JSON.stringify(state)}</code>
      </pre>
    </div>
  );
}

export default App;
