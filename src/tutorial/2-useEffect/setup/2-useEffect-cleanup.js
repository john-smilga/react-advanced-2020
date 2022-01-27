import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', checkSize);
		console.log('use effect');
		return () => {
			console.log('clean up');
			window.removeEventListener('resize', checkSize);
		};
	});

	console.log('render');
	return (
		<>
			<h1>window</h1>
			<h2>{size}</h2>
			{/* <button onClick={() => setSize(1200)}>click</button> */}
		</>
	);
};

export default UseEffectCleanup;
