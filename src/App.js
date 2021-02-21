import React from 'react';

import ErrorExample from './tutorial/1-useState/setup/1-error-example';
import UseStateBasic from './tutorial/1-useState/setup/2-useState-basics';
import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
import UseStateObject from './tutorial/1-useState/setup/4-useState-object';
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';
import UseEffectBasic from './tutorial/2-useEffect/setup/1-useEffect-basics';
import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
import UseEffectFetch from './tutorial/2-useEffect/setup/3-useEffect-fetch-data';

function App() {
  return (
    <div className='container'>
      <h1>Error Example and useState</h1>
        <ErrorExample />
        <UseStateBasic />
        <UseStateArray />
        <UseStateObject />
        <UseStateCounter />
      <h1>useEffect</h1>
        <UseEffectBasic />
        <UseEffectCleanup />
        <UseEffectFetch />
    </div>
  )
}

export default App
