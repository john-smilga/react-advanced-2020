import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState("Hey");
  const clickHandler = () => {
    if (text === "Hey") {
      setText("State Changed")
    } else {
      setText("Hey")
    }

  }
  return <React.Fragment>
    <h2>useState basic example</h2>
    <h3>{text}</h3>
    <button className='btn' onClick={clickHandler}>Change Text</button>
  </React.Fragment>
};

export default UseStateBasics;
