import React from "react";

const ErrorExample = () => {
  let title = "First one";
  const handleClick = ()=>{
    console.log(title);
    title = "Amazing Title Change";
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick}>
        Amazing
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
