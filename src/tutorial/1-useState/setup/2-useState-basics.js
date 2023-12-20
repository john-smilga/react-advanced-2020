import React, { useState } from "react"

const UseStateBasics = () => {
  const [text, setText] = useState("Hello World")

  const handleChange = () => {
    // if (text === "Hello World") {
    //   setText("Nice")
    // } else {
    //   setText("Hello World")
    // }
    text === "Hello World" ? setText("Nice") : setText("Hello World")
  }
  return (
    <div>
      <h2>
        useState basic example<br></br>
        {text}
      </h2>
      <button className="btn" onClick={handleChange}>
        Change me
      </button>
    </div>
  )
}

export default UseStateBasics
