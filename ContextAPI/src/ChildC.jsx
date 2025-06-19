import React, { useContext } from "react";
import { des } from "./App";
function ChildC() {
  const dess = useContext(des);

  return (
    <div>
      <h1>{dess} </h1>
    </div>
  );
}

export default ChildC;
