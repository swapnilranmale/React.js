import { memo } from "react";
import { React } from "react";

function ChildA({ Learning }) {
  console.log("Child Component");
  return <div>ChildA</div>;
}

export default memo(ChildA);
