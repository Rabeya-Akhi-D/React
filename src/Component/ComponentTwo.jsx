import React from 'react'

const ComponentTwo = ({count,onclickHandler})=>{
    

 const handleClick2 = ()=>onclickHandler()
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick2}>Decrement</button>
    </div>
  )
}

export default ComponentTwo