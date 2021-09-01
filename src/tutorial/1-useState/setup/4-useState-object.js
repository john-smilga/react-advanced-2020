import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'peter', age: 24, message: 'Random message'})
  console.log(person)
  
  const [name, setName] = useState('peter')
  const [age, setage] = useState(24)
  const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({...person, message: 'Hello World'})
  }
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button className='btn' onClick={changeMessage}>
        change Message
      </button>
    </>
  )
};

export default UseStateObject;
