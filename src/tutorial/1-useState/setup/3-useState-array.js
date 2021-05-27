import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  return(
    <>
      {
        people.map((person) => {
          const {id, name} = person
          return <div className="item" key={id}>
            <h4>{name}</h4>
          </div>
        })
      }
      <button className="btn" type='button' onClick={() => setPeople([])}>
        clear item
      </button>
    </>
  )
};

export default UseStateArray;
