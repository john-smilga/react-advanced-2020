import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	// const [state, setState] = useState(initialState)
	const [people, setPeople] = useState(data);

	const removeItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id);
		// console.log(newPeople);
		setPeople(newPeople);
	};

	return (
		<>
			{people.map((person) => {
				const { id, name } = person;
				return (
					<div className='item' key={id}>
						<h4>{name}</h4>
						<button className='btn' onClick={() => removeItem(id)}>
							remove
						</button>
					</div>
				);
			})}
			<button className='btn' onClick={() => setPeople([])}>
				Clear All
			</button>
		</>
	);
};

export default UseStateArray;
