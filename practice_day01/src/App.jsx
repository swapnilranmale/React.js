import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(1);
  const addValue = () => {
    count = count * (count + 1);
    setCount(count);
    console.log("Value added", count);
  };
  const decrementValue = () => {
    count -= 1;
    setCount(count);
    console.log("Value removed", count);
  };

  const resetValue = () => {
    count = 0;
    setCount(count);
  };
  return (
    <>
      <h1>Hello</h1>
      <h2>Count: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decrementValue}>Remove Value</button>
      <button onClick={resetValue}>Reset</button>
    </>
  );
}

export default App;
