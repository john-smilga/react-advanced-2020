import React from "react";

const ErrorExample = () => {
  const title = "hello world";
  const handleClick = () => {
    console.log("Hi there");
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        click to change
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
