import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({ name: 'Timmy', age: 24, message: 'Halleo Meototos' });

	const changeMessage = () => {
		// set the new state value as all person values but change "message" value
		setPerson({ ...person, message: 'hello world' });
	};

	console.log(person);

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className='btn' onClick={changeMessage}>
				Change Message
			</button>
		</>
	);
};

export default UseStateObject;
