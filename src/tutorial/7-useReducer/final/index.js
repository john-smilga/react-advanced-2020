import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// reducer function
function reducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const newItems = [...state.items, action.payload];
    return {
      ...state,
      items: newItems,
      showModal: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newItems = state.items.filter((item) => item.id !== action.payload);
    return { ...state, items: newItems };
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, showModal: true, modalContent: 'please enter value' };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, showModal: false };
  }
  return state;
}

const Index = () => {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    showModal: false,
  });
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getMilliseconds().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.showModal && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>
          add
        </button>
      </form>
      {state.items.map((item) => {
        return (
          <div key={item.id} className='item'>
            <h4>{item.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: item.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
