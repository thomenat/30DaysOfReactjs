import React from "react";
import Greeting from "./Greeting"; // Import the Greeting component

function App() {
  return (
    <div className="greeting-container">
      <div className="greeting-text">
      <h1 className="header">My React Challenge</h1>
      {/* Passing different props */}
      <div className="greetings">
      <Greeting name="React Developer 🚀" message="Keep up the great work!" />
      <Greeting name="World 🌎" /> {/* This one uses the default message */}
      </div>
      </div>
    </div>
  );
}

export default App;
