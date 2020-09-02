import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = ({ name }) => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* {if(isError){console.log('something');}} */}

      {text && <h1>hello world</h1>}
      {!text && <h1>hello people</h1>}
      <h1> {name || 'john doe'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError ? (
        <p>there is an error !!!!!</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
