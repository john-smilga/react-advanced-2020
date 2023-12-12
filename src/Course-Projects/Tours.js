import React, { Component, useEffect, useState } from "react"
import { information } from "./ToursData"
import ReadMore from "./ReadMore"

const Tour = () => {
  const [data, setData] = useState(information)

  const handleClick = (id) => {
    setData((currentTours) => {
      let newTours = currentTours.filter((tour) => tour.id !== id)

      return newTours
    })
  }
  const handleRefresh = () => {
    window.location.reload()
  }
  return (
    <main>
      <section>
        <h1>Our Tour</h1>
        {data.length === 0 ? (
          <button className="btn" onClick={() => handleRefresh()}>
            Refresh
          </button>
        ) : null}
        <div className="tours">
          <article className="single-tour">
            {data.map((info) => {
              const { id, image, description, name } = info
              return (
                <div className="card" key={id}>
                  <img className="imageTour" src={image} alt="" />
                  <div className="tour-info" style={{ textAlign: "Left" }}>
                    <h5>{name}</h5>
                    <ReadMore text={description} maxLength={100} />
                  </div>
                  <button
                    onClick={() => handleClick(id)}
                    style={{ margin: 5 }}
                    className="btn"
                  >
                    Not Interested
                  </button>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </main>
  )
}
export default Tour
