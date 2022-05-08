import React from 'react';

const ErrorExample = () => {
  let clickHandler = () => {
    title = "second title"
    console.log(title)
  }
  let title = "First title"
  return <React.Fragment>
    <h1>Error example</h1>
    <h2>{title}</h2>
    <button className='btn' onClick={clickHandler}>Change Title</button>
  </React.Fragment>
};

export default ErrorExample;
