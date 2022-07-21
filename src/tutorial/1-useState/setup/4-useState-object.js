import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "dina",
    age: 24,
    message: "hello ",
  });

  // const [name, setName] = useState("dina");
  // const [age, setAge] = useState(26);
  // const [message, setMessage] = useState("hello");

  const changeMessage = () => {
    setPerson({ ...person, message: "bye" });
    // setMessage("bye");
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
