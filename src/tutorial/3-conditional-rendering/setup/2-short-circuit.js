import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('h');
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return<>
    <h1>{text && 'Peter'}</h1>
  </>;
};

export default ShortCircuit;
