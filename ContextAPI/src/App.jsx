import { createContext } from "react";
import "./App.css";
import ChildB from "./ChildB";
const data = createContext();
const data1 = createContext();

function App() {
  const name = "Swapnil";
  const gender = "Male";
  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildB />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export { data };
export { data1 };
