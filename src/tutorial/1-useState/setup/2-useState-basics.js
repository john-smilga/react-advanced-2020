import React, { useState } from 'react';

const UseStateBasics = () => {
	// console.log(useState('hello world')[1]);

	// const value = useState(1)[0];
	// console.log(value);

	// const handler = useState(1)[1];
	// console.log(handler);
	const [text, setText] = useState('random title');

	const handleClick = () => {
		text === 'random title' ? setText('hello world') : setText('random title');
		// setText('hello world');
		console.log(text);
		console.log(text);
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
