import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 23,
    message: "Subarashi!",
  });

  const changeHandler = () => {
    // const message='helo manu'
    // setPerson({ ...person, message: "Hello chikccaa" });
    setMessage('No! its a beautiful world')
  };

  const [name, setName] = useState("pingu");
  const [age, setAge] = useState(29);
  const [message, setMessage] = useState("What a ugly world!");
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeHandler}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
