import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  };
  return (
    <>
      <h4>input</h4>
      <article>
        <form>
          <div>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn' onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, name, email, age } = person;
          return (
            <div key={id} style={{ marginTop: '2rem' }}>
              <h4>
                <span>{name} </span>
                <span>{email} </span>
                <span>{age}</span>
              </h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
