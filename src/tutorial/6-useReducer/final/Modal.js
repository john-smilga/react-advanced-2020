import React, { useEffect } from 'react';

const Modal = ({ closeModal, modalContent }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
    const stop = setInterval(() => {
      console.count('hello');
    }, 1000);
    return () => clearInterval(stop);
  }, []);
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
