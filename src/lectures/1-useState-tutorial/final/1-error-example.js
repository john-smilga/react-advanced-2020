import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <div className="example">
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </div>
  );
};

export default ErrorExample;
