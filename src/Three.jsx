import React from "react";
import "./App.css";

function App() {
  const [state, setState] = React.useContext(window[Symbol.for("Context")]);
  return (
    <div className="App">
      Two{" "}
      <pre>
        <code>{JSON.stringify(state)}</code>
      </pre>
    </div>
  );
}

export default App;
