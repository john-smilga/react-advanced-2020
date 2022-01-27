import React from 'react';
import State from './tutorial/2-useEffect/setup/2-useEffect-cleanup';

function App() {
	return (
		<div className='container'>
			<State />
			<button
				style={{ padding: '0.25rem 2rem', marginTop: '4rem' }}
				onClick={(_) => console.clear()}
			>
				CLEAR LOG
			</button>
		</div>
	);
}

export default App;
