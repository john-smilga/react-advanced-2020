import React, { useState } from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const clearItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person

        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => clearItem(id)}> Clear</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  )
}

export default UseStateArray
