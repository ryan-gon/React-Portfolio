import React from "react";
import "./me.css";

function Me(props) {
  return (
    <div className="head text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Me;
