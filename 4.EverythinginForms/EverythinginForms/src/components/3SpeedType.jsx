import React, { useState } from "react";

function SpeedType() {
  const sentence =
    "And whoever fears Allah He will make for him a way out and will provide for him from where he does not expect. And whoever relies upon Allah then He is sufficient for him";

  const [text, setText] = useState("");
  return (
    <div>
      <div>
        <h2>
          {sentence.split("").map((char, index) => {
            if (index < text.length) {
              if (text[index] === char) {
                return <span key={index} style={{ color: "green" }}>{char}</span>;
              } else {
                return <span key={index} style={{ color: "red" }}>{char}</span>;
              }
            } else {
                // not typed yet
                return <span key={index}>{char}</span>
            }
          })}
        </h2>
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

export default SpeedType;
