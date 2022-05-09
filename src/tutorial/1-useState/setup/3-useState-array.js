import React from "react";
import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const clickHandler = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const listing = (person) => {
    const { id, name } = person;
    return (
      <>
        <h4 key={id} className="item">
          {name}
          <span>
            <button className="btn" onClick={() => clickHandler(id)}>
              Clear
            </button>
          </span>
        </h4>
      </>
    );
  };

  return (
    <div>
      <h1>useState Array</h1>
      {people.map(listing)}
      <button className="btn" onClick={clearAll}>
        clear all
      </button>
    </div>
  );
};

export default UseStateArray;
