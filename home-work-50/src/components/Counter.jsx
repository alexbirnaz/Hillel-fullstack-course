import { useState, useCallback } from "react";
import ChildButton from "./ChildButton";

function Counter() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // With useCallback - function stays the same
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // Without useCallback - new function every render
  const updateOther = () => {
    setOther((o) => o + 1);
  };

  return (
    <div className="card">
      <h2>useCallback + React.memo Example</h2>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <ChildButton onClick={increment} label="Increment (memoized)" />
      <ChildButton onClick={updateOther} label="Update Other (not memoized)" />
      <p className="hint">Open console - see which button re-renders</p>
    </div>
  );
}

export default Counter;
