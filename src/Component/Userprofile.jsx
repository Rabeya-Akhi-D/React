import React, { useContext } from 'react'
import { UserContext } from './UserContext'
const Userprofile = () => {
   const {user} = useContext(UserContext)
  return (
    <div>
      <h1>user Profile</h1>
      <p>Name:{user.name}</p>
       </div>
  )
}

export default Userprofile