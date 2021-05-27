import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const handleClick = () =>{
    setPeople([])
  }

  const removeItem = (id) =>{
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return(
    <>
      {
        people.map((person) => {
          const {id, name} = person
          return <div className="item" key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        })
      }
      <button className="btn" type='button' onClick={handleClick}>
        clear item
      </button>
    </>
  )
};

export default UseStateArray;
