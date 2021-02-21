import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  
  useEffect(()=> {
    if(value > 1) {
      console.log('call');
      document.title = `New Messages(${value})`
    }
  }, [value])
  console.log('render')

  return (
  <section style={{margin: '1rem 0'}}>
    <h3>useEffect basics</h3>
    <h3>{value}</h3>
    <button className="btn" onClick={() => setValue(value + 1)}>click me</button>
  </section>
  )
};

export default UseEffectBasics;
