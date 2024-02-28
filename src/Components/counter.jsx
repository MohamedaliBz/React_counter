import { useState } from "react"
import "./counter.css"
function Counter() {    

    const [number,setNumber] =useState(0)
    const [message,setMessage] = useState('')

    const increment = ()=>{
        setNumber(number+1)
        setMessage("");
    }
    const decrement = ()=>{
        if(number>0){
        setNumber(number-1)
        setMessage("");
    }else{
        setMessage("counter already have 0 as value");
    }
    }
    return(
        <div className="container">
            <h1>Counter App</h1>
            <h1 className="number">{number}</h1>

            <button className="increment-bitton" onClick={increment}>+</button>
            <button className="decrement-bitton" onClick={decrement}>-</button>
            <button className="reset-bitton" onClick={()=>{setNumber(0);setMessage("")}}>reset</button>
            
            {
                message.length>0 && <h1 className="warning">{message}</h1>
            }

        </div>
    )
}
export default Counter;