import React from "react";
import Userprofile from "./Component/Userprofile";
import { UserProvider } from "./Component/UserContext";
import UpdateUser from "./Component/UpdateUser"
const App = () => {
  return (
    <UserProvider>
      <Userprofile />
      <UpdateUser />
    </UserProvider>
    
  );
};

export default App;
