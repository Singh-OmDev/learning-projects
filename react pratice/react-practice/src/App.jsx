import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    // your logic

    if (task.trim() === "")return;

     setTodos([...todos, task]);
     setTask("");



  };

  const deleteTask = (index) => {


    // your logic

     const newTodos =[...todos];
     newTodos.splice(index, 1);
     setTodos(newTodos);
     
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;