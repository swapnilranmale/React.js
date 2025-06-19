import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  const [name, setName] = useState("Swap");
  let refElement = useRef();
  console.log(refElement);
  let [data, setData] = useState(new Date());
  let [greeting, setGreeting] = useState("Welcome to thinkitive");

  const addValue = () => {
    setCounter(counter + 1);
  };

  const getData = () => {
    setData(new Date());
  };

  const addGreeting = () => {
    setGreeting("Swapnil");
  };

  const resetFun = () => {
    setName("");
    refElement.current.focus();
  };

  const handleInput = () => {
    refElement.current.style.color = "red";
  };

  useEffect(() => {
    console.log("component mounted");
  }, [data, greeting]);

  return (
    <>
      <h1> useEffect Hook </h1>
      <h2>Value:{counter}</h2>
      <h3>Today:{data.toLocaleString()}</h3>
      <p>{greeting}</p>
      <button onClick={addValue}>Add</button>
      <button onClick={getData}>Today</button>
      <button onClick={addGreeting}>Hey </button>
      <hr></hr>
      <h1>useRef Hook</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetFun}>Reset</button>
      <button onClick={handleInput}>Handle Input</button>
      
    </>
  );
}

export default App;
