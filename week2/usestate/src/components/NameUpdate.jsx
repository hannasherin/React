import {useState} from 'react'

function NameUpdate(){

    const[name,setName]=useState("hanna")
    const[number,setNumber]=useState(100)
    const[color,setColor]=useState('red')
    return(
        <>
         <h1>Name Change</h1>
         <p style={{color: color}}>{name}</p>
         <button onClick={()=> setName("Nived")}>Change Name</button>

         <h1>Number Change</h1>
         <p>{number}</p>
         <button onClick={()=> setNumber(1000)}>Change Number</button>
         <button onClick={()=>setColor('blue')}>Change Color</button>
        </>
    )
}
export default NameUpdate