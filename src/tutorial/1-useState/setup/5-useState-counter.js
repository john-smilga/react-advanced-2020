import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const increaceHandler = () => {
    setTimeout(() => {
      console.log("click");
      // setCount(count + 1);
      setCount((prevState) => prevState + 1);
    }, 2000);
    // console.log(count);
    // setCount((prevCount) => prevCount + 1);
    // console.log(count);
    // setCount((prevCount) => prevCount + 1);
    // console.log(count);
    // console.log(count);
    // setCount(count + 1);
    // console.log(count);
    // setCount(count + 1);
    // console.log(count);
  };
  // setTimeout(
  //   () => {
  //     setCount(count + 1);
  //   },
  //   // setCount((prevState) => {
  //   //   console.log(prevState);
  //   //   return prevState + 1;
  //   // }),

  //   2000
  // );
  // setCount(count + 1);

  const clearHandler = () => {
    setCount(0);
  };
  const decreaceHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>simple counter</h2>
        <h1>{count}</h1>
      </section>
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
