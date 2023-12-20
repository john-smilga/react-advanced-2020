import React, { useState, useEffect } from "react"
const url = "https://api.github.com/users/QuincyLarson"
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("default user")

  // const getUser = async () => {
  //   const information = await fetch(url)
  //   const format = await information.json()
  // } \***This is separate function

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (isError) {
    return <h3>Error...</h3>
  }
  return <h3>{user}</h3>
}

export default MultipleReturns
