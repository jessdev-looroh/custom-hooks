import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  const decrement = (value = 1) => {
    setCounter((current) => (current - value < 0 ? current : current - value));
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
