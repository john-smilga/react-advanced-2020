import React from 'react';
import State from './tutorial/1-useState/setup/4-useState-object';
// import Final from './tutorial/1-useState/final/2-useState-basics';

function App() {
	return (
		<div className='container'>
			<State />
			{/* <Final /> */}
			<button
				style={{ padding: '0.25rem 2rem', marginTop: '4rem' }}
				onClick={(_) => console.clear()}
			>
				CLEAR
			</button>
		</div>
	);
}

export default App;
