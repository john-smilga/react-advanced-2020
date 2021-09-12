import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <h2>show/hide</h2>
      <button className="btn" onClick={()=> setShow(!show)}>show/hide</button>
      {show && <Item />}
    </>
  )
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(()=> {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, []);

  return (
    <div>
      <h3>window</h3>
      <h4>size: {size} px </h4>
    </div>
  )
}

export default ShowHide;
