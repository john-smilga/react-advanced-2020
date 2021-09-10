import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  //Option 1 for creating a funtion for setState
  // const eventHandler = () => {
  //   setPeople([])
  // }
  
  const removeName = (id) => {
    let newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  }

  return <>
    {
      people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeName(id)}>remove name</button>
          </div>
        )
      })
    }
    <button className='btn' onClick={() => setPeople([])}>Clear people</button>
  </>
};

export default UseStateArray;
