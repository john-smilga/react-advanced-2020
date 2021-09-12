import React from 'react';

import ErrorExample from './tutorial/1-useState/setup/1-error-example';
import UseStateBasic from './tutorial/1-useState/setup/2-useState-basics';
import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
import UseStateObject from './tutorial/1-useState/setup/4-useState-object';
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';
import UseEffectBasic from './tutorial/2-useEffect/setup/1-useEffect-basics';
import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
import UseEffectFetch from './tutorial/2-useEffect/setup/3-useEffect-fetch-data';
import MultipleReturn from './tutorial/3-conditional-rendering/setup/1-multiple-returns';
import ShortCircuit from './tutorial/3-conditional-rendering/setup/2-short-circuit';
import ShowHide from './tutorial/3-conditional-rendering/setup/3-show-hide';
import ControlledInputs from './tutorial/4-forms/setup/1-controlled-inputs';

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
      <h1>conditional rendering</h1>
        <MultipleReturn />
        <ShortCircuit />
        <ShowHide />
      <h1>Forms</h1>
        <ControlledInputs />
    </div>
  )
}

export default App
