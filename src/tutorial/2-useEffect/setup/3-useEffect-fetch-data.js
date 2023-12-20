import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

const UseEffectFetchData = () => {
  const [user, setUser] = useState([])

  const getUser = async () => {
    const response = await fetch(url)
    const responseFormat = await response.json()

    setUser(responseFormat)
    // console.log(format)
  }
  useEffect(() => {
    getUser() //if I used the function like this it will lead to infinite loop, because it will edit the state then run the useEffect
  }, []) // to solve the problem above we have to add the [] to do run function ones the component is render
  return (
    <>
      <ul className="users">
        {user.map((person) => {
          const { avatar_url, html_url, login, id } = person
          return (
            <li key={id}>
              <img src={avatar_url} alt="user"></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
