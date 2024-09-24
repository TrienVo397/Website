import React,{useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");//initial state
    const [age, setAge] = useState(18);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () =>{
        setName("Trien")
    }
    const incrementAge =()=>{
        setAge(age+1)
    }
    const toggleEmployedStatus = ()=>
    {
        setIsEmployed(!isEmployed) // to toggle
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick ={updateName}>Set name</button>
        <p>Age: {age}</p>
        <button onClick ={incrementAge}>Increment age</button>
        <p>Is employed: {isEmployed ? "Yes" :"No" }</p>
        <button onClick ={toggleEmployedStatus}>Toggle Status</button>


    </div>)


}

export default MyComponent