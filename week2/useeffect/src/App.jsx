import { useEffect, useState } from "react"

function App() {
  
  const [count,setCount]=useState(0)
const [name,setName]=useState("Zara")


useEffect(()=>{
console.log('Component Mounted');
},[count , name])


useEffect(()=>{
let count=0
const intervel= setInterval(() => {
  count++
  console.log(count);
  
}, 2000);

// cleanUp function 
return ()=>{
  clearInterval(intervel)
  console.log("clear");
  
}


},[])



  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    <h2>Name : {name}</h2>
    <button onClick={()=>setName("John")}>Change Name</button>
    </>
  )
}

export default App
