import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'daniel',
    age: 29,
    message: 'I love javascript'
  }); 



  const changePerson = () => {
    setPerson({name: 'james', age: 30, message: 'hello world'})
  }
  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>useState object example</h2>;
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className="btn" onClick={changePerson}>change person</button>
      </section>
    </>
    ) 
  };

export default UseStateObject;
