import { useState } from "react";

function Counter(){
const[count,setCount]=useState(0);

 return(
    <>
    <h1>Counter : {count}</h1>
    {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
    <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
    {/* <button onClick={()=>setCount(count-1)}>Decrement</button> */}
    <button onClick={()=>setCount((prev)=>prev === 0 ? 0 : prev-1)}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
     
    </>
 )
}

export default Counter;