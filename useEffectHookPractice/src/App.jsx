import { useEffect, useState } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Calculator from "./component/Calculator";
import UseRef from "./component/UseRef";

function App() {
  const navigate = useNavigate();
  let [count, setCount] = useState(1);
  useEffect(() => {
    console.log("Component mouted");
  }, [count]);
  const goToNext = () => {
    navigate("/calc");
  };
  const addvalue = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>useEffect hook</h1>
      <h1>Value: {count}</h1>
      <button onClick={addvalue}>Inc</button>
      <button>Dec</button>
      <button onClick={goToNext}>Go to next page</button>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/calc" element={<Calculator data={count} />}></Route>4
        <Route path="/useRef" element={<UseRef />}></Route>
      </Routes>
    </>
  );
}

export default App;
