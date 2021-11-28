import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect')
    if (value > 1) document.title = `New Messages (${value})`
  }, [value])
  return (
    <>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseEffectBasics
