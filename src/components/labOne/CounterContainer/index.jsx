import { useState } from "react";
import CounterAction from "./../CounterAction";
import Counter from "./../Counter";
const CounterContainer = () => {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(++counter);
  };
  const decrement = () => {
    counter > 0 && setCounter(--counter);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="counter-countainer text-center mt-5">
      <Counter counter={counter} />
      <CounterAction
        increaseNumber={increment}
        decreaseNumber={decrement}
        reset={reset}
      />
    </div>
  );
};

export default CounterContainer;
