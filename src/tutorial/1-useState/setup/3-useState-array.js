import React, { useState } from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  //2 way to use clearItem function
  //        |
  //        |
  //        |
  //        |
  // const clearItem = (id) => {
  //   let newPeople = people.filter((person) => person.id !== id)
  //   setPeople(newPeople)
  // }

  //        |
  //        |
  //        |
  //        |
  //        |
  //
  const clearItem = (id) => {
    setPeople((oldPeople) => {
      console.log(oldPeople)
      let newPeople = oldPeople.filter((person) => person.id !== id)
      console.log(newPeople)
      return newPeople
    })
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
