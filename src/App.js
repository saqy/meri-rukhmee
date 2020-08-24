import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div className="">
      <Timer initialTime={new Date('2020-11-01T15:42:16.420Z')} />
    </div>
  );
}

export default App;
