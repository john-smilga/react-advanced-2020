import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user')

  useEffect(()=>{
    fetch(url)
    .then((resp) => {
      if(resp.status >= 200 && resp.status <=299) {
        return resp.json()
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
    .then((user) => {
      const { login } = user;
      setUser(login);
      setIsLoading(false)
    }).catch((error) => console.log(error))
  }, [])

  if (loading) {
    return (
      <div>
        <h2>multiple return</h2>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>multiple return</h2>
        <h3>Error..</h3>
      </div>
    )
  }

  return (
    <div>
      <h2>multiple return</h2>
      <h3>{user}</h3>
    </div>
  )
  
};

export default MultipleReturns;
