import React from 'react'
import { Data } from '../App'

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