import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <section style={{margin: '1rem 0'}}>
      <h3>useEffect cleanup</h3>
      <h3>Window</h3>
      <h3>{size} pX</h3>
    </section>
  )
};

export default UseEffectCleanup;
