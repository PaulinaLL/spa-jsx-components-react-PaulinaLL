import React from "react";
import "./styles/App.scss";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1>People list</h1>
        <List />
      </main>
    </div>
  );
}

export default App;
