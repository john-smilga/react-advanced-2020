import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        name: firstName,
        email,
      };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    }
  };
  return (
    <>
      <h4>input</h4>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' className='btn'>
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, name, email } = person;
          return (
            <div key={id} style={{ marginTop: '2rem' }}>
              <h4>
                <span>{name} </span>
                <span>{email}</span>
              </h4>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
