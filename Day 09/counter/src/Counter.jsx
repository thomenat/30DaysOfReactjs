import { useState } from "react";
import './Counter.css'

function Counter () {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function increaseCounter() {
        setCount(count + step);
    }

    function decrementCounter() {
        if (count > 0) {
            setCount(count - step);
        } else  {
            (setCount(0));
    }}

    function resetCounter() {
        setCount(0);
    }


    return (
        <div>
          <h2>Counter: {count}</h2>
          <label>
            Step:
            <input
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </label>
          <IncrementButton onIncrease={increase} />
          <DecrementButton onDecrease={decrease} />
          <ResetButton onReset={reset} />
        </div>
      );
    }
    
    function IncrementButton({ onIncrease }) {
      return <button onClick={onIncrease}>+
      </button>;
    }
    
    function DecrementButton({ onDecrease }) {

      return <button onClick={onDecrease}>-</button>;
    }

    function ResetButton({ onReset}) {
        return <button onClick={onReset}>Reset</button>;
    }

export default Counter