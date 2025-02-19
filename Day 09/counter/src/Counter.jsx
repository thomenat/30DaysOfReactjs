import { useState } from "react";

function Counter () {
    const [count, setCount] = useState(0);

    function increaseCounter() {
        setCount(count + 1);
    }

    function decrementCounter() {
        setCount(count - 1);
    }


return (
        <div>
          <h2>Counter: {count}</h2>
          {/* Step 3: Pass the correct props to child components */}
          <IncrementButton onIncrease={increaseCounter} />
          <DecrementButton onDecrease={decrementCounter} />
        </div>
      );
    }
    
    // Step 4: Implement child components
    function IncrementButton({ onIncrease }) {
      return <button onClick={onIncrease}>+</button>;
    }
    
    function DecrementButton({ onDecrease }) {
      return <button onClick={onDecrease}>-</button>;
    }

export default Counter