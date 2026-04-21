import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Redux TODO</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
