import React from "react";
import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count:${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count+4)}>Increment</button>

    </div>
  );
};

export default CounterEffect;
