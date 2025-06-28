import React from 'react'
const Admin = () => <h1>Welcome Admin</h1>
const User = () => <h1>Welcome User</h1>
const UserStatus = ({LoggedIn,isAdmin}) => {
  
   return LoggedIn? (isAdmin? <Admin/> : <User/>) : <h2>please log in</h2>
}

export default UserStatus