import { useState } from "react";
import React from "react";

function CountInput(){
    const[count,setCount]=useState(0)
    const[input,setInput]=useState(null)

    const handleChange=(e)=>{
        setInput(Number(e.target.value))
    }
 
    function handleClick(){
        // setCount(count + input)
        setCount((pre)=>pre + input)
    }

    return(
        <>
        <input
         type="number"
         placeholder="Type a numbrt"
         onChange={handleChange} />
        <br />
        <p>{count}</p>
        
        <button
        onClick={handleClick}>Count</button>
        </>
    )
}
export default CountInput