import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
     console.log(title)
  }
  return (
    <section style={{margin: '4rem 0'}}>
      <h2>error example</h2>
      <h3>{title}</h3>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </section>
  );
};

export default ErrorExample;
