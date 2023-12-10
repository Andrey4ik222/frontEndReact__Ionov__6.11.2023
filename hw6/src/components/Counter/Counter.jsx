import "./Counter.css";

import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";

const Counter = () => {
  const { state, onIncrement, onDecrement, onReset } =
    useContext(CounterContext);

  return (
    <div className="counter-wrapper">
      <h3 className="counter-title">Count value: {state.count}</h3>
      <button className="button-increment btn" onClick={onIncrement}>
        Increment
      </button>
      <button className="button-decrement btn" onClick={onDecrement}>
        Decrement
      </button>
      <button className="button-reset btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
