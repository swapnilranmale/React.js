import { useState } from "react";
import "./App.css";
import ChildA from "./ChildA";
import { useCallback } from "react";

function App() {
  const [add, setAdd] = useState(1);
  const Learning = useCallback(() => {}, [add]);
  return (
    <>
      <h1>useMemo hook</h1>
      <ChildA Learning={Learning} />
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Add
      </button>
      <span>{add}</span>
    </>
  );
}

export default App;
