import { useState } from "react"

// Por defecto el valor es 10
export const useCounter = (initialValue = 1) =>{
    
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) =>{
        setCounter( (current) => current + value);
    }
    const decrement = (value = 1) =>{
        counter > 0 && setCounter( (current) => current - value); 
        
    }
    const reset = () =>{
        setCounter(initialValue);
    }
    const random = (min, max) =>{
        const r = Math.floor(Math.random() * (max-min) + min)
        console.log(r);
        setCounter(r);
    }

    return{
        random,
        counter,
        increment,
        decrement,
        reset,
    }
}

// export default useCounter;