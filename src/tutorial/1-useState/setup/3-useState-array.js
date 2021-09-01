import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
          const { id, name } = person
            return <div key={id} className='item'>
                    <h1>{name}</h1>
                    <button onClick={() => removeItem(id)}>Remove</button>
                  </div>
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
