// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev >=9) {
          clearInterval(intervalId);
        }
        return prev+1;
      });

       
    }, 1000);

    function cleanupFunc(){
        clearInterval(intervalId)
    }

    return cleanupFunc;
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
