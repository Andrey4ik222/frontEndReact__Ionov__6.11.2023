import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer";
import { decrement, increment, reset } from "../actionCreators";

export const CounterContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const providedValue = {
    state,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };

  return (
    <CounterContext.Provider value={providedValue}>
      {children}
    </CounterContext.Provider>
  );
};
