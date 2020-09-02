import React, { useState } from 'react';

const UseStateObject = () => {
  const [value, setValue] = useState(0);

  const decrease = () => {
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  const increase = () => {
    setValue(value + 1);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 3000);
  };
  return (
    <>
      <section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={decrease}>
          decrease
        </button>
        <button type='button' className='btn' onClick={reset}>
          reset
        </button>
        <button type='button' className='btn' onClick={increase}>
          increase
        </button>
      </section>
      <section>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateObject;
