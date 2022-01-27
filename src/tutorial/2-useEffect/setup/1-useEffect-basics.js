import React, { useState, useEffect } from 'react';
// cleanup function
// second parameter
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	// useEffect(() => {doSomething, [everyTimeThisChanges]})
	useEffect(() => {
		// calls after every render
		if (value >= 1) {
			document.title = `New Messages (${value})`;
		}
	}, [value]); // runs on change of the values passed here

	console.log('render component');
	return (
		<>
			<h1>{value}</h1>
			<button className='btn' onClick={() => setValue(value + 1)}>
				click
			</button>
		</>
	);
};

export default UseEffectBasics;
