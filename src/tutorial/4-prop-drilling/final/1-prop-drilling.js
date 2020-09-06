import React, { useState } from 'react';
// lifting up the state
// on purpose more components
// normally separate components
// fix - context api, redux (for more complex cases)

const PropDrilling = ({ data }) => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          ></SinglePerson>
        );
      })}
    </>
  );
};
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <RemoveButton id={id} removePerson={removePerson}></RemoveButton>
    </div>
  );
};
const RemoveButton = ({ id, removePerson }) => {
  return <button onClick={() => removePerson(id)}>remove</button>;
};
export default PropDrilling;
