import React, { useState } from "react";

const UseStateBasics = () => {
  let initTitle = "Random title";
  const [title, setTitle] = useState(initTitle);
  const btnClickHandler = () => {
    if (title === initTitle) {
      setTitle("Hello World");
    } else {
      setTitle(initTitle);
    }
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={btnClickHandler}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
