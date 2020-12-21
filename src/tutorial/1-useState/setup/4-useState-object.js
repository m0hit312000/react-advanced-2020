import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24, 
    message: 'Random Message'
  });
  // const [message, setMessage] = useState('random message');

  // const changeMessage = () => {
  //   setMessage('Hello World');
  // }

  const changeMsg = () => {
    setPerson({...person, message: 'Hello World'})
  }
  return(
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMsg}>Change Message</button>
    </>
  ) 
};

export default UseStateObject;
