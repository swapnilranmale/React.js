import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("John");
  function getValue(e) {
    e.preventDefault(); // ⛔ Prevent form reload
    const vowel = name.split("").filter((char) => "aeiouAEIOU".includes(char));
    console.log(vowel);
  }
  return (
    <>
      <form >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <button onClick={getValue}>Submit</button>
      </form>
    </>
  );
}

export default Login;
