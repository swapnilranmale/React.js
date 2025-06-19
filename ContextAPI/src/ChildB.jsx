import React from "react";
import { data } from "./App";
import { data1 } from "./App";

function ChildB() {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h1>
                    Name: {name} &nbsp; Gender: {gender}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
}

export default ChildB;
