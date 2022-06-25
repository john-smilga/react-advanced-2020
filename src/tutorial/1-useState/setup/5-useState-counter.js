import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increaceHandler = () => {
    setCount(count + 1);
  };
  const clearHandler = () => {
    setCount(0);
  };
  const decreaceHandler = () => {
    setCount(count - 1);
  };
  return (
    <>
      <seciont style={{ margin: "4rem 0" }}>
        <h2>simple counter</h2>
        <h1>{count}</h1>
      </seciont>
      <button type="button" className="btn" onClick={increaceHandler}>
        +
      </button>
      <button type="button" className="btn" onClick={clearHandler}>
        Clear
      </button>
      <button type="button" className="btn" onClick={decreaceHandler}>
        -
      </button>
    </>
  );
};

export default UseStateCounter;
