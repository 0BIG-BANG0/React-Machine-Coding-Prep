import React from "react";
import DynamicRendering from "./components/1DynamicRendering";
import DynamicRenPLusCOndition from "./components/2DynamicRenPLusCOndition";
import SpeedType from "./components/3SpeedType";
import Employee from "./components/4Employee";

function App() {
  return (
    <div>
      <h1>Everything in Forms</h1>
      <ol>
        <li>
          <h2> DynamicRendering</h2>
          <DynamicRendering />
        </li>
        <li>
          <h2> Dynamic Rendering + Condition</h2>
          <DynamicRenPLusCOndition />
        </li>
        <li>
          <h2> Speed Type</h2>
          <SpeedType />
        </li>
        <li>
          <h2> Employee Table</h2>
          <Employee />
        </li>
      </ol>
    </div>
  );
}

export default App;
