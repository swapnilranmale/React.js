import React, { PureComponent } from "react";
function Header(props) {
  return (
    <div>
      <h1>Hey {props.name}</h1>
    </div>
  );
}

export default Header;
