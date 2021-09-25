import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// useEffect is more or less onUpdate
// Can't place hooks in conditionals
const UseEffectBasics = () => {
	const [value, setValue] = useState(0);
	//
	//  useEffect has a 2nd parameter -> Dependancy array
	// if it is empty useEffect runs only once
	// Otherwise it runs if any value in dependancy changes
	// Can have multiple useEffect Similar to useState
	// PS: if same value is assigned it wont call this useEffect
	useEffect(() => {
		console.log('call useEffect');
		if (value > 1) {
			document.title = `New Messages(${value})`;
		}
	}, [value]);

	useEffect(() => {
		console.log('Only Once');
	}, []);
	// May show twice if Strict Mode is used
	console.log('render Component');
	return (
		<>
			<h1>{value}</h1>
			<button
				className='btn'
				onClick={() => setValue(value > 10 ? 11 : value + 1)}
			>
				click me
			</button>
		</>
	);
};

export default UseEffectBasics;
