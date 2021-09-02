import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  console.log(isError)


  return (
    <>
    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}
    {/* {text && <h1>hello world</h1>}
    {!text && <h1>hello world</h1>} */}
    <h1>{text || 'john doe'}</h1>
    <button className='btn' onClick={() => setIsError(!isError)}>TOGGLE</button>
    {isError && <h1>Error...</h1>}
    {isError ? <p>Hi World</p> : <div>
        <h1>Hi People</h1>
      </div>}
    </>
  )
};

export default ShortCircuit;
