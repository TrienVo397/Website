import React,{useState} from 'react';

function MyComponent(){
    const[car, setCar] = useState ({
        year: 2024,
        make:"Ford",
        model:"Mustang"
    })

    function handleYearChange(event){
        // setCar({year: 2024, make:"Ford" , model: "Mustang", year:2025})
        //... is Spread Operator
        setCar(c=>({...c, year: event.target.value})) // exactly like above but shorter
        
    }

    function handleMakeChange(event){
    setCar(c =>({...c, make:event.target.value}))

    }

    function handleModelChange(event){
        setCar(c =>({...c, model:event.target.value}))
    }

    return(
        <div>
            <p>Your favorite car is {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} />
            <input type="text" value={car.make} onChange={handleMakeChange}  />
            <input type="text" value={car.model} onChange={handleModelChange} />
        </div>
    )


}

export default MyComponent