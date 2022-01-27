import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	// const [state, setState] = useState(initialState)
	const [people, setPeople] = useState(data);

	// If callback passed as argument for setState, callback parameter is the old value
	const removeItem = (id) => {
		setPeople((oldPeople) => {
			return oldPeople.filter((person) => person.id !== id);
		});
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
