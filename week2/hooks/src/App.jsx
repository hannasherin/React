import { useState } from "react"

function App() {
 const [name,setName]=useState('Rahan')
 const [number,setNumber]=useState(0)
 const [color,setColor]=useState("Yellow")

  return (
    <>
      <h1 style={{color:color}}>{name}</h1>
      <h1>{number}</h1>
     
      <button onClick={()=>setName('Hanna')}>Change Name</button>
      <button onClick={()=>setNumber(20)}>Change Num</button>
      <button onClick={()=>setColor('Red')}>change color</button>
    </>
  )
}

export default App
