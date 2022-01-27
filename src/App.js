import React from 'react';
import State from './tutorial/1-useState/setup/5-useState-counter';
import StateArr from './tutorial/1-useState/setup/3-useState-array';
// import Final from './tutorial/1-useState/final/2-useState-basics';

function App() {
	return (
		<div className='container'>
			<State />
			<StateArr />
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
