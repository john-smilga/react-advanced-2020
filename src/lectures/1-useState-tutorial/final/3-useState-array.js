import React from 'react';

const UseStateArray = () => {
  const data = [
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
  ];
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div className="example">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} style={{ marginBottom: '3rem' }}>
            <h2>{name}</h2>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
