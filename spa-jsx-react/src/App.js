import React from "react";
import "./styles/App.scss";
import data from "./data/data.json";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1>People list</h1>
        <List data={data} />
      </main>
    </div>
  );
}

export default App;
