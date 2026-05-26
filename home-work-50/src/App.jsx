import ExpensiveList from "./components/ExpensiveList";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Memoization</h1>
      <ExpensiveList />
      <Counter />
    </div>
  );
}

export default App;
