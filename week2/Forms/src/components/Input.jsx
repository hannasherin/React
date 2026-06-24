import { useState } from "react";

function Input(){

    const[inputData,setInputData]=useState("")

    const handleChange=(e)=>{
        //  console.log(e.target.value)
        setInputData(e.target.value)
    }
    return(
        <>
      
        <input type="text"
        placeholder="Type YOur Text"
        onChange={handleChange} />
        <p>{inputData}</p>

        </>
    )
}
export default Input