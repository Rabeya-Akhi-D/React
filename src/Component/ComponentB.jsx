import React from 'react'


const ComponentB = () => {
  return (
    <Data.Consumer>

{(name)=> {
  return <h1>{name}</h1>
  
}}
    </Data.Consumer>
  )
}

export default ComponentB