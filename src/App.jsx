import React from "react";
import { createContext } from "react";
import ComponentA from "./Component/ComponentA";
import ComponentB from "./Component/ComponentB";
import ComponentC from "./Component/ComponentC";

export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = "Akhi";
  const age = 22;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
          <ComponentC/>
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};
export default App;
