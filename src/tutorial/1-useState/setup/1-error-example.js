import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const clickHandler = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={clickHandler}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
