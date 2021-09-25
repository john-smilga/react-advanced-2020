import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	// People is array of people
	// setPeople is handlerForRendering newPeople
	const [people, setPeople] = React.useState(data);

	const removeItem = id => {
		let newPeople = people.filter(person => person.id !== id);
		setPeople(newPeople);
	};
	return (
		<>
			{people.map(person => {
				const { id, name } = person;
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>Clear Item</button>
					</div>
				);
			})}
			<button type='button' className='btn' onClick={() => setPeople([])}>
				Clear Items
			</button>
		</>
	);
};

export default UseStateArray;
