import React, { useState, useEffect } from 'react';

// cleanup function -> Much required when we have conditional Rendering
// second argument

// use effect is used to take care of sideEffects in react
const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);
	const checkSize = () => {
		setSize(window.innerWidth);
	};
	// useEffect(() => {
	// 	console.log('useEffect');
	// 	// A listener is added every time ->Memory Leak
	// 	// CleanUp Function comes into play
	// 	window.addEventListener('resize', checkSize);

	// 	// CleanUp Function is returned and executes jst before next UseEffect is called
	// 	return () => {
	// 		console.log('cleanUp');
	// 		window.removeEventListener('resize', checkSize);
	// 	};
	// });
	console.log('Render');
	// In this case though, cleanup is not req as we jst add one Event Listener
	// Use the following code
	useEffect(() => {
		window.addEventListener('resize', checkSize);
	}, []);
	// adds eventListener once
	return (
		<>
			<h1>Window</h1>
			<h2>{size}px</h2>
		</>
	);
};

export default UseEffectCleanup;
