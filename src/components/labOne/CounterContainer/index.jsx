import CounterAction from "./../CounterAction";
import Counter from "./../Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  restCounter,
} from "../../redux/counterNumberSlice";

const CounterContainer = () => {
  const CounterGlobalState = useSelector((state) => state.counterStore.counter);
  // console.log("CounterGlobalState", CounterGlobalState);

  // dispatch hook
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(incrementCount(4));
  };
  const decrement = () => {
    CounterGlobalState > 0 && dispatch(decrementCount(4));
  };
  const reset = () => {
    dispatch(restCounter());
  };
  return (
    <div className="counter-countainer text-center mt-5">
      <Counter counter={CounterGlobalState} />
      <CounterAction
        increaseNumber={increment}
        decreaseNumber={decrement}
        reset={reset}
      />
    </div>
  );
};

export default CounterContainer;
