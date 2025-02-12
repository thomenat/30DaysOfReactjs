import React from "react";
import "./Greeting.css";

function Greeting({ name, message = "Hope you have a great day!" }) {
  return (
    <h2>
      Hello, {name}! <br></br>{message}
    </h2>
  );
}

export default Greeting;
