import React, { useState } from "react";

const UseStateObject = () => {
  const initObj = {
    name: "Lance",
    age: "33",
    message: "random message",
  };
  const [person, setPerson] = useState(initObj);
  const { name, age, message } = person;
  const msgChangeHanlder = () => {
    setPerson({ ...person, message: "new message" });
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={msgChangeHanlder}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
