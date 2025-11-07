import React from "react";
import { useState } from "react";
import useDebounce from "../hooks/use-debounce";

function DebounceInput() {
  const [inputText, setInputText] = useState("");

  const handleInputCHange = (e) => {
    setInputText(e.target.value);
  };
  const debouncedValue = useDebounce(inputText, 1000);
  return (
    <div>
      <h3>{debouncedValue}</h3>
      <input
        type="text"
        value={inputText}
        placeholder="TypeSomething"
        onChange={handleInputCHange}
      />
    </div>
  );
}

export default DebounceInput;
