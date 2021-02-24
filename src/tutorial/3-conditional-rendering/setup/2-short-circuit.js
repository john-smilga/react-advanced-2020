import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('random');
  const [isError, setIsError] = useState(false);
  //const firstValue = text || 'hello world';
  //const secondValue = text && 'hello world';

  return (
    <>
    <h2>short circuit</h2>
      {/* <h3>{firstValue}</h3>
      <h3>value : {secondValue}</h3> */}
      <h3>{text || 'DanSam'}</h3>
      {text && <h3>hello world</h3>}
      {!text && <h3>helloWorld</h3>}
      <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
      {isError && <h3>Error...</h3>}
      {isError ? <p>there is an error..</p> : <div><h3>there is no error..</h3></div>}
    </>
  )
};

export default ShortCircuit;
