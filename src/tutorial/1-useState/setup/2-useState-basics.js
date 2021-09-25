import React, { useState } from 'react';
// useState -> function from react

// Has to be capital if component uses hook
const UseStateBasics = () => {
	// console.log(useState('hello World'));
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler);
	//
	// Array Destructuring
	const [text, setText] = useState('Random Title');

	const handleClick = () => {
		if (text === 'Random Title') {
			setText('Hello World');
		} else {
			setText('Random Title');
		}
	};
	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className='btn' onClick={handleClick}>
				Change Title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
