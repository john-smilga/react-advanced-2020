import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const clearClickHandler = () => {
    setPeople([]);
  };
  const removeItem = (id) => {
    setPeople((prevPeople) => {
      let newPeople = prevPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={clearClickHandler}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
