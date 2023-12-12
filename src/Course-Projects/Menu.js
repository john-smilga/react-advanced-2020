import React, { Component, useEffect, useState } from "react"
import { menuData } from "./MenuData"

const Menu = () => {
  const [menu, setMenu] = useState(menuData)
  const styles = {
    backgroundColor: "#f59e0b",
    color: "#fff",
    padding: "0.25rem 0.5rem",
    letterSpacing: "1px",
    borderRadius: ".25rem",
    alignSelf: "flex-start",
    marginLeft: 5,
  }
  const handleClick = (parm) => {
    setMenu((prevState) => {
      if (parm === "all") return menuData
      return menuData.filter((item) => item.category === parm)
    })
  }
  return (
    <>
      <main>
        <section>
          <h1>Our Menu</h1>
          <div className="" style={{ display: "block" }}>
            <button onClick={() => handleClick("all")} style={styles}>
              all
            </button>
            <button onClick={() => handleClick("breakfast")} style={styles}>
              breakfast
            </button>
            <button style={styles} onClick={() => handleClick("lunch")}>
              lunch
            </button>
            <button style={styles} onClick={() => handleClick("shakes")}>
              shakes
            </button>
          </div>

          <div className="tours">
            <article className="single-tour">
              {menu.map((item) => {
                const { id, title, price, img, desc } = item
                return (
                  <div className="card" key={id}>
                    <img className="imageTour" src={img} alt="" />
                    <div className="tour-info" style={{ textAlign: "Left" }}>
                      <h5>{title}</h5>
                      <p>{desc}</p>
                    </div>
                    <span style={styles}>{price}</span>
                  </div>
                )
              })}
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
export default Menu
