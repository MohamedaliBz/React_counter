import { useState } from "react"
import "./counter.css"
function Counter() {    

    const [number,setNumber] =useState(0)

    function increment(){
        setNumber(number+1)
    }
    function decrement(){
        if(number>0){
        setNumber(number-1)
    }else{
        window.alert(" you can not decrement the counter anymore");
    }
    }
    function reset(){
        setNumber(0)
    }
    return(
        <div className="container">
            <h1 className="number">{number}</h1>
            <button className="increment-bitton" onClick={increment}>+</button>
            <button className="decrement-bitton" onClick={decrement}>-</button>
            <button className="reset-bitton" onClick={reset}>reset</button>

        </div>
    )

}

export default Counter;