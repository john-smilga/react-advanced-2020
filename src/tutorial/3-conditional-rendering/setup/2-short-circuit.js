import React, { useState } from 'react';
// short-circuit evaluation ->truthy falsey
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);
	// Truthy and Falsey
	const firstValue = text || 'hello world';
	const secondValue = text && 'hello world';

	return (
		<>
			{/* <h1>{firstValue}</h1>
			<h1>value: {secondValue}</h1> */}
			<h1>{text || 'john Wick'}</h1>
			<button
				className='btn'
				onClick={() => {
					setIsError(!isError);
				}}
			>
				toggle error
			</button>
			{isError && <h1>Error...</h1>}
			{isError ? (
				<p>There is an error</p>
			) : (
				<div>
					<h2>There is no Error</h2>
				</div>
			)}
		</>
	);
};

export default ShortCircuit;
