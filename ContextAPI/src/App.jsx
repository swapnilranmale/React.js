import { createContext } from "react";
import "./App.css";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
const data = createContext();
const data1 = createContext();
const des = createContext();
function App() {
  const name = "Swapnil";
  const gender = "Male";
  const designation = "SWE";
  return (
    <>
      {/* <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildB />
        </data1.Provider>
      </data.Provider> */}
      <des.Provider value={designation}>
        <ChildC />
      </des.Provider>
    </>
  );
}

export default App;
export { data };
export { data1, des };
