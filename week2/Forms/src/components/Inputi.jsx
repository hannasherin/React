import { useState } from "react";
function Inputi(){

 const[input,setInput]=useState("")
 const handleChange=(e)=>{
//   console.log(e.target.value);
  setInput(e.target.value)
 }
    return(
        <>
        <input type="text"
        placeholder="Enter Your Text"
        onChange={handleChange} />
        <p>{input}</p>
        </>
    )
}
export default Inputi