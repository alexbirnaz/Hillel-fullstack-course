import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
} from "../redux/slices/todosSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const loadTodos = () => {
    if (!userId) return;
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => dispatch(setTodos(data)));
  };

  const handleAdd = () => {
    if (!newTodo.trim()) return;
    dispatch(
      addTodo({
        id: new Date().getTime(),
        title: newTodo,
        completed: false,
      }),
    );
    setNewTodo("");
  };

  return (
    <div>
      <div className="controls">
        <input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={loadTodos}>Load</button>
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "done" : ""}>
            <span>{todo.title}</span>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
