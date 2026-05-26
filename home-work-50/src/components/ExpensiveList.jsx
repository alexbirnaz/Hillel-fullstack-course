import { useState, useMemo } from "react";

function ExpensiveList() {
  const [count, setCount] = useState(0);
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // Without useMemo - runs every render
  // const sum = numbers.reduce((a, b) => a + b, 0);

  // With useMemo - runs only when numbers change
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return (
    <div className="card">
      <h2>useMemo Example</h2>
      <p>Sum of numbers: {sum}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p className="hint">
        Open console - "Calculating sum..." appears only once
      </p>
    </div>
  );
}

export default ExpensiveList;
