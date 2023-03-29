import { React, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through 2px solid  #cf972e" : "none" }}
            onClick={() => deleteTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div className="input-wrapper">
        <input
          type="text"
          value={todo}
          placeholder=" Create a new todo"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
}
