import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0)

  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }

  return (
    <>
      <section stlye={{ margin: '4rem 0' }}>
        <h2>more regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
      </section>
      <section stlye={{ margin: '4rem 0' }}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
};

export default UseStateCounter;
