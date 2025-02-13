import { useState } from "react";
import "./TodoList.css"; // Import CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a task..."
        className="todo-input"
      />
      <button onClick={addTask} className="add-btn">Add</button>
      
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            {task.text}
            <button onClick={() => toggleTask(task.id)} className="task-btn complete-btn">✅</button>
            <button onClick={() => removeTask(task.id)} className="task-btn remove-btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
