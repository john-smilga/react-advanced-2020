import React, { useState } from 'react';

const useStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if(text === 'random title'){
      setText('hello world');
    } else {
      setText('random title')
    }
  };
  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>useState basics example</h2>
        <h3>{text}</h3>
        <button className="btn" onClick={handleClick}>change title</button>
      </section>
    </>
  )
};

export default useStateBasics;
