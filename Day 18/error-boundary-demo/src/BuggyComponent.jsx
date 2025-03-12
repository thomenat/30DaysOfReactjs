import React, { useState } from "react";

function BuggyComponent() {
  const [count, setCount] = useState(0);

  if (count > 3) {
    throw new Error("Oops! Something went wrong.");
  }

  return (
    <div>
      <h2>Click the button to increase the count:</h2>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
    </div>
  );
}

export default BuggyComponent;
