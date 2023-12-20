import React, { useState, useEffect } from "react"

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <ThisComponent />}
    </>
  )
}
const ThisComponent = () => {
  const [size, setSize] = useState(0)
  const changeSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", changeSize)
    return () => {
      window.removeEventListener("resize", changeSize)
    }
  }, [])
  return (
    <div>
      <h4>window</h4>
      <h4>size: {size}</h4>
    </div>
  )
}

export default ShowHide
