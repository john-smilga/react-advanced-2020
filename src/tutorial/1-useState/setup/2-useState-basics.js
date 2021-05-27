import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText]  = useState('random title')

  const handleClick = () => {
    if ( text === 'random title'){
      setText('hello hashan')
    }
    else{
      setText('random title')
    }
    
  }

   return <React.Fragment>
     <h1>
       {text}
       <button className='btn' type='button' onClick={handleClick}>
         change Title
       </button>
     </h1>
   </React.Fragment>
};

export default UseStateBasics;
