import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link className='btn' to='/'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;
