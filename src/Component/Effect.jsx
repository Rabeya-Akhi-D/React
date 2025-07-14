import React from 'react'
import { useState,useEffect } from 'react'
const Effect = () => {
    const[value,setvalue]=useState(0);
    useEffect(()=>{
        if (value>0){
 console.log("call usEffect");
        document.title = `Increment ${value}`;
       
        }
       

    }, [value])
  return (
    <div><h2>{value}</h2>
    <button onClick={() => setvalue(value+1)}>Click Me</button>
    
    
    </div>
  )
}

export default Effect