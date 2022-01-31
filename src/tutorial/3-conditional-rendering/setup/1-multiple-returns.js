import { toHaveFormValues } from '@testing-library/jest-dom/dist/to-have-form-values';
import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';
const MultipleReturns = () => {
  const [isloading,setLoading] = useState(true);
  const [isError,setIsError] = useState(false);
  const [user,setUser] = useState('default user');
  
  useEffect(()=>{
    fetch(url)
    .then((resp)=>{
      if(resp.status>=200 && resp.status<=299)
      {
        return resp.json()
      }
      else{
        setLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    })
    .then((user)=>{
      const {login} = user;
      setLoading(false);
      setUser(login);
    })
    .catch((error)=>console.log(error));
  },[])
  if(isloading)
  {
    return <div>
      <h1>Loading...</h1>
    </div>
  }
  if(isError)
  {
     return (
       <div>
         <h1>Error...</h1>
       </div>
     );
  }
  return (
    <>
      <div>
        <h1>{user}</h1>
      </div>
    </>
  );
};

export default MultipleReturns;
