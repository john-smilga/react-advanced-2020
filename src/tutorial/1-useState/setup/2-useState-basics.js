import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("hello");
  // console.log(text);
  const handleClick = () => {
    if (text === "hello") {
      setText("hi");
    } else {
      setText("hello");
    }
  };

  return (
    <React.Fragment>
      {/* <h2>useState basic example</h2> */}
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Click
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
