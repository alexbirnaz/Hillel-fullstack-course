import { useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import UserList from "./components/UserList";
import "./App.css";

function Content() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="app">
      <h1>React Context</h1>
      <button onClick={toggleTheme}>Theme: {theme}</button>
      <UserList />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <Content />
    </AppProvider>
  );
}

export default App;
