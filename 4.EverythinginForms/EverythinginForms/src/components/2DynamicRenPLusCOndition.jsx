import React, { useState } from "react";

function DynamicRenPLusCOndition() {
  //Dynamic Redering + COndition that is the text exceeds 20 characters it should turn red
  const [text, setText] = useState("");

  return (
    <div>
      <div>
        {/* Code but repeated */}
        {/* {text.length > 20 ? (
          <h3 style={{ color: "red" }}>{text}</h3>
        ) : (
          <h3 style={{}}>{text}</h3>
        )} */}
        <span>Count : {text.length}</span>
        {/* Concise Code */}
        <h3 style={{ color: text.length>20 ? "red":"black" }}>{text}</h3>
        
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Type something......"
        />
      </div>
    </div>
  );
}

export default DynamicRenPLusCOndition;
