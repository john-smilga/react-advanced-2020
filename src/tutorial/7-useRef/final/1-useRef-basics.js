import React, { useEffect, useRef } from 'react';

const UseRefBasics = () => {
  const refContainer = useRef(null);
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <h4>useRef input example</h4>
      <input type='text' ref={refContainer} />
    </>
  );
};

export default UseRefBasics;
