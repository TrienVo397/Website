import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTask] = useState([
    "Eat Breakfast",
    "Take a Shower",
    "Walk the Dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTask(t=> [...tasks, newTask]);
    setNewTask("");
  }
  function removeTask(index) {
    setTask(tasks.filter((_, i) => i !== index));
  }
  return (
    <div className="to-do-list">
        <h2>List of Task</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter Task"
      />
      <button onClick={addTask} className="add-button">Add</button>
      <ol>
        {tasks.map((curElement, index) => (
          <li key={index}>
            <span className="text1">{curElement}</span>
            <button onClick={() => removeTask(index)} className="delete-button"
                >Delete</button>

            <button className="move-button">☝️</button>
            <button className="move-button">👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
