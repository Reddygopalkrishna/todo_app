import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(["Sample Task"]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Start editing a task
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  // Save the edited task
  const saveEdit = (index) => {
    if (editValue.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[index] = editValue;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      <div className="input-container">
        <input
          type="text"
          className="task-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button className="btn add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <div className="task-list">
        <h2>All Tasks</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {editIndex === index ? (
                <div className="edit-container">
                  <input
                    type="text"
                    className="edit-input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button className="btn save-btn" onClick={() => saveEdit(index)}>
                    Save
                  </button>
                </div>
              ) : (
                <div className="task-content">
                  <span>{task}</span>
                  <div className="button-group">
                    <button className="btn edit-btn" onClick={() => startEdit(index)}>
                      Edit
                    </button>
                    <button className="btn delete-btn" onClick={() => deleteTask(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
