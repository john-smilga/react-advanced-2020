import React, { useState, useContext } from 'react';
import { data } from '../../../data';

// use only if more than one level
// set it up globally
// fix - context api, redux (for more complex cases)
const PersonContext = React.createContext();
// two components Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <List />
    </PersonContext.Provider>
  );
};
const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person}></SinglePerson>;
      })}
    </>
  );
};
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}></button>
    </div>
  );
};

export default ContextAPI;
