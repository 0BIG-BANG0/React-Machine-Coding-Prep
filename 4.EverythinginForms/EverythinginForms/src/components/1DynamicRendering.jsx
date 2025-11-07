import React, { useState } from "react";

function DynamicRendering() {
  const [text, setText] = useState("");
  return (
    <div>
        <div><h3>{text}</h3></div>
      <div>
        <input type="text" onChange={(e)=>setText(e.target.value)} value={text} placeholder="Type something......" />
      </div>
    </div>
  );
}

export default DynamicRendering;
