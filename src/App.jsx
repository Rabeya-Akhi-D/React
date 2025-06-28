import React from "react";
import Cart from "./Component/Cart";
import Weather from "./Component/Weather";
import UserStatus from "./Component/UserStatus";
import Greet from "./Component/Greet";


const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h2>Invalid Password</h2>;
const Password = ({ isValid }) => {
  // first way of rendering
  //   if (isValid){
  //     return<ValidPassword/>
  //   }
  //   return<InvalidPassword/>

  // 2nd way of rendering
  return isValid ? <ValidPassword /> : <InvalidPassword />;
};
const App = () => {
  return (
    <div>
      <Password isValid={false} />
      <Cart />
      <Weather/>
      <UserStatus LoggedIn={true} isAdmin={false}/>
      <Greet timeOfDay={false}/>
    </div>
  );
};

export default App;
