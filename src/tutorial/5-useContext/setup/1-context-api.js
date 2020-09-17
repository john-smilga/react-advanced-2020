import React, { useState } from 'react';
import { data } from '../../../data';
// use only if more than one level
// set it up globally
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
const List = ({ people, removePerson }) => {
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
      <button id={id} onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
