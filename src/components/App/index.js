import React from "react";
import Summary from "#/Summary";
import "./style.less";

export default function App() {
  return (
    <div className="app">
      <img src="/assets/pattern-background-desktop.svg" alt="" className="background-image" />
      <Summary />
    </div>
  );
}
