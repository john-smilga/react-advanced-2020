import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  const btnClickHandler = () => {
    title = "Changing Title";
    console.log(title);
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

export default ErrorExample;
