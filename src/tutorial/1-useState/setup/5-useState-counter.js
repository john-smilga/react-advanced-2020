import React, { useState } from 'react';

//
//
//

const UseStateCounter = () => {
	// initial State for regular Counter
	const [value, setValue] = useState(0);
	const reset = () => {
		setValue(0);
	};

	console.log(setValue);
	const complexIncrease = () => {
		// About SetTimeout -> It is asynchronous Meaning parameters used inside
		// doesn't change for 2s -> value will be 0 for first 2s and no matter how many times
		// u click on button every action results in value: value + 1 giving result 1
		setTimeout(() => {
			// setValue(value + 1);

			// Functional update forms need a return else setValue will be without parameter
			// prevState is prevState value information stored in the state 'x'
			// keeps track of state changes in realTime
			// Use Cases SetTimeout or using setValue Multiple times
			setValue(prevState => {
				return prevState + 1;
			});
		}, 2000);
	};
	return (
		<>
			<section style={{ margin: '4rem 0' }}>
				<h2>Regular Counter</h2>
				<h1>{value}</h1>
				<button
					className='btn'
					onClick={() => {
						setValue(value - 1);
					}}
				>
					Decrease
				</button>
				<button className='btn' onClick={reset}>
					Reset
				</button>
				<button
					className='btn'
					onClick={() => {
						setValue(value + 1);
					}}
				>
					Increase
				</button>
			</section>

			<section style={{ margin: '4rem 0' }}>
				<h2>More Complex Counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={complexIncrease}>
					Complex Increase
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;
