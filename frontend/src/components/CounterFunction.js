 import React, { useState } from "react";

 function CounterFunction(){

 
    let [number, setNumber] = useState(0)
    function Increment(){
        setNumber(number+1);
    }
    function Decrement(){
        setNumber(number-1)
    }
    return(
        <div>
            <h3>Functional Component</h3>
            <h1>Counter = {number} </h1>
            <button onClick ={e => Increment()}>Increace</button>
            <button onClick ={e => Decrement()}>Decrement</button>

        </div>
    )
 }


export default CounterFunction;