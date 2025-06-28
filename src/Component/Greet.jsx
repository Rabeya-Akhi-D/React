import React from 'react'
const Morning = ()=> <h1>Good morning</h1>
const Afternoon = ()=> <h1>Good afternoon</h1>
const Greet = ({timeOfDay}) => {
  return timeOfDay? <Morning/>: <Afternoon/>
}

export default Greet