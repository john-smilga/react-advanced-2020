import React, { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Saif",
    age: 36,
    message: "Hello World",
  })
  const changeMessage = () => {
    setPerson((prev) => {
      return {
        ...prev,
        message: prev.message === "Hello World" ? "hi" : "Hello World",
      }
    })
  }
  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button onClick={changeMessage.bind()} className="btn">
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
