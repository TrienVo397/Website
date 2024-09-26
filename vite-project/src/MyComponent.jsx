import React, { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  function handleAddFood(event) {
    const newFood = document.querySelector("#foodInput").value;
    document.querySelector("#foodInput").value = ""; // to make the text field empty
    setFoods(f => [...f, newFood]); // updater function with spread operator
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_,i) => i!==index)) 
    //Using underscore is a convention that indicates the param being passed to the function is ignored
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick = {()=>handleRemoveFood(index)}>{food} </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default MyComponent;
