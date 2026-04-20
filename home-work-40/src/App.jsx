import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React Forms and useEffect</h1>
      <ControlledForm />
      <UncontrolledForm />
      <UsersList />
    </div>
  );
}

export default App;
