import { useState } from "react";
import './Counter.css'

function Counter () {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function increaseCounter() {
        setCount(count + step);
    }

    function decrementCounter() {
        if (count > 0 && step > 0) {
            setCount(Math.max(count - step, 0)); // Prevents negative numbers
        } else {
            setCount(0);
        }
    }
    

    function resetCounter() {
        setCount(0);
    }


    return (
        <div className="counter-container">
          <h2>Counter: {count}</h2>
          <label>
            Step:
            <input
             className="step-input"
              type="number"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              min="1"
            />
          </label>
          <div className="button-container">
          <IncrementButton onIncrease={increaseCounter} />
          <DecrementButton onDecrease={decrementCounter} />
          <ResetButton onReset={resetCounter} />
          </div>
        </div>
      );
    }
    
    function IncrementButton({ onIncrease }) {
      return <button className="increment-btn" onClick={onIncrease}>+
      </button>;
    }
    
    function DecrementButton({ onDecrease }) {

      return <button className="decrement-btn" onClick={onDecrease}>-</button>;
    }

    function ResetButton({ onReset}) {
        return <button className="reset-btn" onClick={onReset}>Reset</button>;
    }

export default Counter