import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call UseEffect');
    if(value > 0) {
      document.title = `New Message ${value}`
    }
  }, [value])
  console.log('render componenet')
  
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click ME
      </button>
    </>
  )
};

export default UseEffectBasics;
