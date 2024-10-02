import React, {useState, useEffect} from "react"

function MyComponent()  {
    const[count, setCount] = useState(0);
    const[color, setColor] = useState("green")


    useEffect(() => {
        document.title = `Count: ${count} ${color}`
        return () => {
            // SOME CLEANUP CODE
            console.log("Cleanup code executed");
          };
        }, [count,color]) 
        // dependencies are added so that when the the values change, what are put inside 
        // the dependencies will aslo be changed, 

    function addCount(){
        setCount(c => c+1)
    }

    function subtractCount(){
        setCount(c => c-1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }
    return(<>
    <p style= {{color: color}} >Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Substract</button>
    <br />
    <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponent