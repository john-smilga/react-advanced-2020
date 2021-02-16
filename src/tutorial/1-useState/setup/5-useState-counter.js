import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
   
  const reset = () => {
    setValue(0);
  }

  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000);
  }

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>useState counter example</h2>
        <h3>regular counter</h3>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value -1)}>decrease</button>
        <button className="btn" onClick={reset}>reset</button>
        <button className="btn" onClick={(v) => setValue(value + 1)}>increase</button>
        <h3 style={{margin: '1rem 0'}}>complex counter</h3>
        <h3>{value}</h3>
        <button className="btn" onClick={complexIncrease}>increase</button>
      </section>
    </>

  );
};

export default UseStateCounter;
