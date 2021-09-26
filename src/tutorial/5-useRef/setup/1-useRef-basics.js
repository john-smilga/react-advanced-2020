import React, { useEffect, useRef } from 'react';
// it more or less works like useEffect
// but it does not trigger re-render

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	// useRef
	const refContainer = useRef(null);
	const divContainer = useRef(null);
	const handleSubmit = e => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(divContainer.current);
	};
	useEffect(() => {
		console.log(refContainer.current);
		// Focus on the input area when page loads
		refContainer.current.focus();
	});
	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<div>
					{/* ref attr can be added to any html element */}
					<input type='text' ref={refContainer} />
					<button type='submit' className='btn'>
						submit
					</button>
				</div>
				<div ref={divContainer}>Hello World</div>
			</form>
		</>
	);
};

export default UseRefBasics;
