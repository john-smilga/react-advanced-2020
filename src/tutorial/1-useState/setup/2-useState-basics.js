import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState("hre"))
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value,handler);
  const clickHandle=()=>{
    if(text == "Random Title")
    setText('Hello World');
    else
    setText("Random Title");
  }
  const [text, setText] = useState("Random Title");
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={clickHandle}>Click me</button>
      </React.Fragment>
  );
};

export default UseStateBasics;
