import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({initialValue = 0}) {
  const [count, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(count)
  })

  function handleButtonIncrement () {
    setCounter(c => c + 1)
  }

  function handleButtonDecrement () {
    setCounter(c => c - 1)
  }

  function handleButtonReset () {
    setCounter(initialValue)
  }

  return (
    <>
      <CounterDisplay count = {count} />
      <button onClick={handleButtonIncrement}>Increment</button>
      <button onClick={handleButtonDecrement}>Decrement</button>
      <button onClick={handleButtonReset}>Reset</button>
    </>
  );
}

export default Counter;
