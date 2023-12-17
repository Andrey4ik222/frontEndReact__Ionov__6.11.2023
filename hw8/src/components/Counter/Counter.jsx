import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../../redux/slices/counterSlice";

import "./Counter.css";

const Counter = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counter);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddInputValue = () => {
    dispatch(incrementByValue(+inputValue));
    setInputValue("");
  };

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="counter-wrapper">
      <h3 className="counter-title">Count: {count}</h3>
      <input
        className="counter-input"
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Write the number..."
      />
      <button
        className="counter-button__input btn"
        onClick={handleAddInputValue}
      >
        Add input value
      </button>
      <button
        className="counter-button__increment btn"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="counter-button__decrement btn"
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button className="counter-button__reset btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
