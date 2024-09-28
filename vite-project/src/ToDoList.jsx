import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a Shower",
    "Walk the Dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTasks(t=> [...t, newTask]);
    setNewTask("");
  }
  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks]; // watch out for the semicolon
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];

      setTasks(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length-1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index +1], updatedTasks[index]];
      setTasks(updatedTasks)
    }
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

            <button className="move-button" onClick={()=>moveTaskUp(index)}>☝️</button>
            <button className="move-button" onClick={() =>moveTaskDown(index)}>👇</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
