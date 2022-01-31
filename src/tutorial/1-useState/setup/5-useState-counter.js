import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increseCount = () => {
    setCount(count + 1);
  };
  const decreseCount = () => {
    if (count == 0) setCount(0);
    else {
      setCount(count - 1);
    }
  };
  const increseDelay = () => {
    setTimeout(() => {
      setCount((prevState)=>{
        return prevState+1;
      });
    }, 2000);
  };
  return (
    <>
      <section className="container">
        <h1>{count}</h1>
        <button className="btn" onClick={() => increseCount(count)}>
          plus
        </button>
        <button className="btn" onClick={() => decreseCount(count)}>
          minus
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn" onClick={increseDelay}>
          Increse later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
