import React from 'react';
import { useContext } from 'react';
import { Data, Data1 } from '../App';


const ComponentC = () => {
  const userName = useContext(Data)
  const age = useContext(Data1)
  return (
    <h1>Myname is : {userName} and i am {age} years old</h1>
  );
};

export default ComponentC;
