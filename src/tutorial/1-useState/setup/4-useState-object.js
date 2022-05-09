import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Harry",
    age: 25,
    message: "random message"
  })

  const changeMessage = ()=>{
    setPerson({...person, message:"Hello World"})
  }

  return <div>
    <h2>useState object example</h2>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.message}</h1>
    <button className='btn' onClick={changeMessage}>Change Message</button>
  </div>
};

export default UseStateObject;
