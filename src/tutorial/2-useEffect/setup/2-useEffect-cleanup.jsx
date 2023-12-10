import React, { useEffect, useState } from "react"

// cleanup function
// second argument
const UseEffectCleanup = () => {
  const [size, sizeValue] = useState(window.innerWidth)

  const checkSize = () => {
    sizeValue(window.innerWidth)
  }

  useEffect(() => {
    console.log("hi")
    window.addEventListener("resize", checkSize)
    return () => {
      window.removeEventListener("resize", checkSize)
    }
  }, []) //[]=> this happen when component is initialized

  return (
    <>
      <h1 className="container">{size} PX</h1>
    </>
  )
}

export default UseEffectCleanup
