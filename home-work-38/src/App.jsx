import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const handleChange = (e) => {
    console.log("Input value:", e.target.value);
  };

  return (
    <div className="app">
      <h1>React Components</h1>

      <div className="section">
        <h2>Button Component</h2>
        <Button text="Click me" type="button" onClick={handleClick} />
      </div>

      <div className="section">
        <h2>Input Component</h2>
        <Input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
