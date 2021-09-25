import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: 24,
		message: 'Spider Cop',
	});

	// This also Works Essentially -> State Handler Pairs
	// const [name, setName] = useState('peter');
	// const [age, setAge] = useState(24);
	// const [message, setMessage] = useState('SpiderCop');
	const changeMessage = () => {
		// setPerson('hello World');   // Error
		//
		// setPerson({message: 'hello world'});   // Object Changes
		//
		setPerson({ ...person, message: 'hello World' });
		//
		// setMessage('Hello World');
	};
	const { name, age, message } = person;
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
