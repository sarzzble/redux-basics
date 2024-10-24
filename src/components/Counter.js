import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  // dispatch, bir action'ı Redux store'a göndermek
  // için kullanılan fonksiyondur.
  const dispatch = useDispatch();

  // useSelector(), Redux mağazasındaki bir state'i almak için kullanılır.
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // fonksiyonları execute ederek "()" eylemlerimizi içeren nesneyi döndürmesini sağlarız.
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch'e verilen ikinci parametre action'dır, ismi bize kalmıştır (REDUX OLMADAN)

    dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
