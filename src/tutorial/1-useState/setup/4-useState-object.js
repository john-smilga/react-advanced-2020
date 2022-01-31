import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState(
    {
      name:"peter",
      age:24,
      message:'random message'
    });
  const [name,setName] = useState('peter');
  const [age,setAge] = useState('24');
  const [message,setMessage] = useState('Hello World');
  const changeMessage = ()=>
  {
    //setPerson({...person,message:'Hello world'});
    setMessage('New One');
  }

  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change by click</button>
  </>;
};

export default UseStateObject;
