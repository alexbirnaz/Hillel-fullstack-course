import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButtons from "./components/IconButtons";
import IdleTimer from "./components/IdleTimer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Libraries</h1>

      <div className="card">
        <h2>React Icons + Toastify</h2>
        <IconButtons />
      </div>

      <div className="card">
        <h2>Idle Timer</h2>
        <IdleTimer />
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
