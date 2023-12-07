import React, { useState, useEffect } from "react"
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  const increaseTittle = () => {
    setValue(value + 1)
  }
  useEffect(() => {
    if (value > 0) {
      document.title = `New number(${value})`
    }
  })
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => increaseTittle()}>
        {" "}
        change{" "}
      </button>
    </>
  )
}

export default UseEffectBasics
