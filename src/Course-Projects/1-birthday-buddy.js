import React, { useState } from "react"
import { information } from "./data"

const BirthdayBuddy = () => {
  const [currentData, setData] = useState(information)
  const clearArticle = (id) => {
    setData((currentBirthday) => {
      let newBirthday = currentBirthday.filter((person) => person.id !== id)
      return newBirthday
    })
  }
  return (
    <>
      <h3>{currentData.length} Birthdays Today</h3>
      <section className="container">
        <main>
          {currentData.map((prevData) => {
            const { name, id, age, image } = prevData
            return (
              <article className="person" key={id}>
                <img src={image} alt="" style={{ width: 50 }} />
                <br />
                <div style={{ width: "55%" }}>
                  <h4>{name}</h4>
                  <p>{age}</p>
                </div>
                <br />
                <button className="btn" onClick={() => clearArticle(id)}>
                  Clear
                </button>
              </article>
            )
          })}
        </main>
      </section>
      <button className="btn" onClick={() => setData([])}>
        clear all
      </button>
    </>
  )
}

export default BirthdayBuddy
