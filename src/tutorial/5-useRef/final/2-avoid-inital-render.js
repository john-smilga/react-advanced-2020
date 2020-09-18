import React, { useState, useEffect, useRef } from 'react';

const InitialRender = () => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
    } else {
      console.log('consecutive render');
    }
  });

  return (
    <div className='example'>
      <h2>useRef second example</h2>
    </div>
  );
};

export default InitialRender;
