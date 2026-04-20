import { useState } from "react";
import { FaCheck, FaUndo, FaTrash, FaPlus, FaSearch } from "react-icons/fa";
import styles from "./TodoList.module.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);

  const loadTodos = () => {
    if (!userId) return;
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const todo = {
      id: new Date().getTime(),
      title: newTodo,
      completed: false,
    };
    setTodos([todo, ...todos]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          type="number"
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={loadTodos}>
          <FaSearch /> Load
        </button>
      </div>

      <div className={styles.addTodo}>
        <input
          type="text"
          placeholder="New todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>
          <FaPlus /> Add
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <ul className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? styles.completed : ""}>
            <span>{todo.title}</span>
            <div className={styles.buttons}>
              <button onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? <FaUndo /> : <FaCheck />}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
