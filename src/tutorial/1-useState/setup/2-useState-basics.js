import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hi"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("hello");

  const handleClick = () => {
    if (text === "hello") {
      setText(420);
    } else {
      setText("hello");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
