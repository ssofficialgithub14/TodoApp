import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React ToDo App 📝</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={addTask} style={{ padding: "8px" }}>
        Add
      </button>
      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => removeTask(index)} style={{ cursor: "pointer", marginBottom: "5px" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
