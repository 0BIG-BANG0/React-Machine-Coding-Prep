import React, { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleresize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleresize);
  }, []);
  return (
    <>
      <h1>Dynamic Width: {width}</h1>
    </>
  );
}

export default App;
