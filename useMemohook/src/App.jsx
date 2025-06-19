import { useMemo, useState } from "react";
import "./App.css";

function App() {
  let [add, setAdd] = useState(0);
  let [sub, setSub] = useState(100);
  const memoValue = useMemo(
    function multiply() {
      console.log("***");
      return add * 10;
    },
    [add]
  );

  return (
    <>
      <h1>useMemo Hook</h1>
      {memoValue}
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Addition
      </button>
      <span>{add}</span> <br></br>
      <button
        onClick={() => {
          setSub(sub - 1);
        }}
      >
        Substraction
      </button>
      <span>{sub}</span>
    </>
  );
}

export default App;
