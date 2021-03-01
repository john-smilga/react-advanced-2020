import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  let [text, setText] = useState("random title");

  const changeHandler = () => {
    if (text === "random title") setText("hello world");
    else setText("random title");
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={changeHandler}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
