import React, { createContext } from "react";
import { useContext } from "react";
 const UserContext = createContext();
  const UserProvider = createContext();
const UserContext = () => {
     const Country = "Bangladesh"
    const Code = 2345;

 
  return <div>
    <UserContext.Provider value={Country}/>
  </div>;
};

export default UserContext;
