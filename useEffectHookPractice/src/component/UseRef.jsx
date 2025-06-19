import React, { useRef, useState } from "react";

function UseRef() {
  const [name, setName] = useState("Ashish");
  const refElement = useRef();
  console.log(refElement);
  const resetFun = () => {
    setName("");
    refElement.current.focus();
  };
  const changeColor = () => {
    refElement.current.style.color = "red";
  };
  return (
    <div>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={resetFun}>Reset</button>
      <button onClick={changeColor}>Change text color</button>
    </div>
  );
}

export default UseRef;
