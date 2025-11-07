import React, { useState } from "react";
import useDebounce from "../hooksRevision/use-debounce";

function DebounceInput1() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const debouncedValue = useDebounce(input, 1000);
  return (
    <div>
      <h2>{debouncedValue}</h2>
      <input type="text" value={input} onChange={handleInputChange} />
    </div>
  );
}

export default DebounceInput1;
