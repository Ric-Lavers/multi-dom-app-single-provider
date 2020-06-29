import React from "react";

import "./App.css";

function B({ title, ...props }) {
  const [state, setState] = React.useContext(window[Symbol.for("Context")]);
  return (
    <div className="App">
      {title}
      <pre>
        <code>{JSON.stringify(state)}</code>
      </pre>
    </div>
  );
}

export default B;
