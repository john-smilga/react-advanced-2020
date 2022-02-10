import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log('call useEffect');
//     if (value > 0) {
//       document.title = `New Messages(${value})`;
//     }
//   });
  const functionHandler = () =>{
    setValue(value+1);
    document.title = `New Messages(${value+1})`
  }
  console.log('render component');
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={functionHandler}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
