import React, { useState, useEffect } from 'react';

const ShowHide = () => {
	const [show, setShow] = useState(false);
	// When Item is mounted it renders and calls useEffect once
	// Now when it is mounted again and again Memory leaks occur due to multiple event listeners
	// Here Cleanup function is the best way to prevent this
	return (
		<>
			<button className='btn' onClick={() => setShow(!show)}>
				show/hide
			</button>
			{show && <Item />}
		</>
	);
};

const Item = () => {
	const [size, setSize] = useState(window.innerWidth);
	const checkSize = () => {
		setSize(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', checkSize);
		return () => {
			window.removeEventListener('resize', checkSize);
		};
	}, []);
	return (
		<div style={{ marginTop: '2rem' }}>
			<h1>Window</h1>
			<h2>size : {size}px</h2>
		</div>
	);
};
export default ShowHide;
