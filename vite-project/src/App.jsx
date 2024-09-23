import List from "./List.jsx"
function App() {
  const fruits =[
    {id :1, name: "apple", calories: "apple"}, 
    {id :2,name: "banana", calories: 45}, 
    {id :3,name: "cherry", calories: 105}, 
    {id :4,name: "pineapple", calories: 159}, 
    {id :5,name: "elderberry", calories: 37}]

    const vegetables = [
      { id: 1, name: "carrot", calories: 25 },
      { id: 2, name: "broccoli", calories: 55 },
      { id: 3, name: "spinach", calories: 23 },
      { id: 4, name: "potato", calories: 77 },
      { id: 5, name: "tomato", calories: 18 }
    ];
  return(
    <>
    {/* {fruits.length >0 ?<List items ={fruits} category ="Fruits"></List> :null}
    {vegetables.length >0 ?<List items ={vegetables} category ="Vegetables"></List> :null} */}
    {fruits.length >0 && <List items ={fruits} category ="Fruits"></List>}
    {vegetables.length >0 && <List items ={vegetables} ></List>}
     {/* null to not render the list along the category AKA Shortcircuiting*/}

    </>
  );
}

export default App
