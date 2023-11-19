import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter-wrapper">
      <h3 className="counter-title">Count: {count}</h3>
      <button
        className="counter-button btn--increment"
        onClick={handleIncrement}
      >
        Increment(+)
      </button>
      <button
        className="counter-button btn--decrement"
        onClick={handleDecrement}
      >
        Decrement(-)
      </button>
    </div>
  );
};

export default Counter;
