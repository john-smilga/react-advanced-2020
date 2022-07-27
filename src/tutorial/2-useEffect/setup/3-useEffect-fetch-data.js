import React, { useState, useEffect } from 'react'

const url = 'http://211.255.17.229:9090/kr/api/books?pageNum=1&pageSize=10'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users.data.list)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {/* {users.map((user) => {
          const [bookId, bookTitle] = user
          return (
            <li key={bookId}>
              <div>
                <h4>{bookTitle}</h4>
              </div>
            </li>
          )
        })} */}

        {users.map((user) => {
          const { bookId, bookTitle } = user
          return (
            <li key={bookId}>
              <div>
                <h4>{bookTitle}</h4>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
