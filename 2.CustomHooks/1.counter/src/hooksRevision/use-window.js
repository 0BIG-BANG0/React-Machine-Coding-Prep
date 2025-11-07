import React, { useEffect, useState } from "react";

function useWindow() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //TO make it dynamic i have to use UseEffect and it should render for every state change as our component is small
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    //Cleanup the event Listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return [width, height];
}

export default useWindow;
