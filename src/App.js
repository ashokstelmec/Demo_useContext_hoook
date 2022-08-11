import React, { createContext } from 'react'
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={"Anil"}>
      <LastName.Provider value={"Malhotra"}>

        <ComA />
      </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
