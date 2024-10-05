import React,{useState, useEffect} from 'react'

function DigitalClockApp(){
    const[time, setTime] = useState(new Date())
    
    useEffect(() =>{
        const intervalId= setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () =>{
            clearInterval(intervalId)
        }
    },[])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >=12 ? "PM": "AM"

        hours = hours % 12 || 12; 
        // In JavaScript, 0 is considered a falsy value.
        //When hours % 12 results in 0, the expression 0 || 12 evaluates to 12 because 0 is falsy and 12 is truthy.
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(meridiem)}`
    }

    function padZero(number){
        return (number < 10 ? "0":"") + number
    }

    
    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default DigitalClockApp;