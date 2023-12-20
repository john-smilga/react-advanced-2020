import React, { useState } from "react"

const UseStateObject = () => {
  // const [note, setNote] = useState(false)
  // const [person, setPerson] = useState({
  //   name: "Saif",
  //   age: 36,
  //   message: "Hello World",
  // })

  const [name, setName] = useState("Saif")
  const [age, setAge] = useState(36)
  const [message, setMessage] = useState("Hello World")

  // const changeMessage = () => {
  //   setMessage((prev) => {
  //     return {
  //       ...prev,
  //       message: prev.message === "Hello World" ? "hi" : "Hello World", //// this when using object as above
  //     }
  //   })
  // }
  const changeMessage = () => {
    message === "Hello World" ? setMessage("hi") : setMessage("Hello World")
  }

  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{message}</h4>
      <button onClick={() => changeMessage()} className="btn">
        Change Message
      </button>
    </>
  )
}

export default UseStateObject
