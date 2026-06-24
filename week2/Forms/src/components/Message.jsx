import { useState } from "react";
function Message(){

    const[text,setText]=useState("");
    function handleChange(e){
         setText(e.target.value)
    }
    return(
        <>
        
        <textarea name="" id="" 
        placeholder="Enter Text"
        onChange={handleChange}></textarea>
        <p>{text}</p>
        
        </>
    )
}
export default Message;