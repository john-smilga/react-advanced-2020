import { set } from 'lodash';
import React, { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);

	const complexIncrease = () => {
		setTimeout(() => {
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 2000);
	};

	return (
		<>
			<section style={{ margin: '4rem 0' }}>
				<h2>Counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={() => setValue(value - 1)}>
					Decrease
				</button>
				<button className='btn' onClick={() => setValue(0)}>
					Reset
				</button>
				<button className='btn' onClick={() => setValue(value + 1)}>
					Increase
				</button>
			</section>
			<section style={{ margin: '4rem 0' }}>
				<h2>Complex Counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={complexIncrease}>
					Increase Later
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;
