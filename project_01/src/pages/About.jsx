import React from "react";

function About() {
  const list = ["CSK", "MI", "RCB", "KKR", "SRH", "DC", "PBKS"];
  const games = ["cricket", "abc"];
  return (
    <div>
      <h1>List</h1>
      {list.map((i, index) => {
        return (
          <h1 key={index}>
            {String.fromCharCode(97 + index)}.{i}
          </h1>
        );
      })}
      <ul>
        {games.map((item, index) => {
          if (index === 1) {
            console.log("Index 1 element:", item);
          }
          return (
            <h1 key={index}>
              {index + 1}. {item}
            </h1>
          );
        })}
      </ul>

      {list
        .filter((item) => item.charAt(0) === "K")
        .map((team, index) => (
          <h1 key={index}>{team}</h1>
        ))}
    </div>
  );
}

export default About;
