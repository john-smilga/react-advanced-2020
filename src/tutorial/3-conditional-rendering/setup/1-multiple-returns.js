import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  const fetchUser = async () => {
    await fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsError(true)
      })
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>there was an error</h2>

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns
