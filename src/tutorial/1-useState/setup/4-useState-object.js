import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({ name: 'Timmy', age: 24, message: 'Halleo Meototos' });

	const changeMessage = () => {
		// set the new state value as all person values but change "message" value
		// setPerson({ ...person, message: 'hello world' });
		setMessage('hello world');
	};

	const [name, setName] = useState('peter');
	const [age, setAge] = useState(24);
	const [message, setMessage] = useState('motorlalalalal s');

	// console.log(person);

	return (
		<>
			<h3>{name}</h3>
			<h3>{age}</h3>
			<h3>{message}</h3>
			<button className='btn' onClick={changeMessage}>
				Change Message
			</button>
		</>
	);
};

export default UseStateObject;
