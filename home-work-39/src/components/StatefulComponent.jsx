import { useState } from "react";

function StatefulComponent({ initialCount, step }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevState) => prevState + step);
  };

  const decrement = () => {
    setCount((prevState) => prevState - step);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div className="card">
      <h2>Counter</h2>
      <p>Step: {step}</p>
      <p className="count">Count: {count}</p>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default StatefulComponent;
