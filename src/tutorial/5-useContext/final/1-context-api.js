import React, { useState, useContext } from 'react';

const PersonContext = React.createContext();
// two components Provider, Consumer

const ContextAPI = ({ data }) => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson }}>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person}></SinglePerson>;
      })}
    </PersonContext.Provider>
  );
};
const SinglePerson = ({ id, name }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <RemoveButton id={id}></RemoveButton>
    </div>
  );
};
const RemoveButton = ({ id }) => {
  const { removePerson } = useContext(PersonContext);
  return <button onClick={() => removePerson(id)}>remove</button>;
};
export default ContextAPI;
