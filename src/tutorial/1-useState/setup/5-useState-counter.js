import React, { useState } from "react"

const UseStateCounter = () => {
  const [count, setCounter] = useState(0)

  const increaseLater = () => {
    // setTimeout(() => setCounter(count + 1), 2000) // when click 1 time it's work, but when click more than 1 time not working
    setTimeout(() => {
      // this solved when clicking many time
      setCounter((myCount) => {
        return myCount + 1
      })
    }, 2000)
  }
  return (
    <div className="container">
      <h2>Regular Counter</h2>
      <h1>{count}</h1>
      <section>
        <button className="btn" onClick={() => setCounter(count - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setCounter(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setCounter(count + 1)}>
          Increase
        </button>
      </section>
      <br />
      <h2>More complex Counter</h2>
      <h1>{count}</h1>
      <section>
        <button className="btn" onClick={() => increaseLater()}>
          Increase Later
        </button>
      </section>
    </div>
  )
}

export default UseStateCounter
