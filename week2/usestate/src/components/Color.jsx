import { useState } from "react";

 
function Color(){

     const [color,setColor]=useState('')


    return(
        < >
        
        <button onClick={()=>setColor('red')} style={{display:block,width:"120px", height:"50px",backgroundColor:"red"}}>Red</button>

        <button onClick={()=>setColor('green')} style={{display:block,width:"120px", height:"50px",backgroundColor:"green"}}>Green</button>

        <button onClick={()=>setColor('blue')} style={{display:block,width:"120px", height:"50px",backgroundColor:"blue"}}>Blue</button>
        
        <div style={{width:"150px",height:"150px"}}>{color || "?"}</div>
        </>
    )
}
export default Color;