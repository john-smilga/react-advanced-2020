import React, { useState, useEffect } from "react";

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setvalue] = useState(0);

  // CANNOT PLACE HOOKS INSIDE CONDITIONAL FUNCTIONS
  // if (value > 0) {
  //   useEffect(() => {
  //     console.log("call useEffect");
  //     document.title = `New Messages(${value})`;
  //   });
  // }

  // with dependency list
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `useEffect called: ${value}`;
    }
    // document.title = `New Messages(${value})`;
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setvalue(value + 1)}>
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;
