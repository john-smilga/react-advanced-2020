import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello world")
  }
  return <>
    <h2>controlled inputs</h2>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name="firstName"></input>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email"></input>
        </div>
        <button type="submit">add person</button>
      </form>
    </article>
  </>
};

export default ControlledInputs;
