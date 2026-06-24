import { useState } from "react"
import Counter from "./components/Counter";
import Alert from "./components/Alert";
import Show from "./components/Show";
import Color from "./components/Color";

function App() {

  const [number,setNumber]=useState(10);
  const[name,setName]=useState('Hanna Sherin');
  const[isActive,setIsactive]=useState(false)


  return (
    <>
      <h1>useState</h1>
      <hr />
      <h2>Number : {number}</h2>
      <h2>Name : {name}</h2>
      <h2>is Active : {isActive ? 'true Value':'false Value'}</h2>
      <button onClick={()=>setNumber(100)}>Change Number</button><br /> <br />
      <button onClick={()=>setName('Hanna Basheer')}>Change Name</button> <br /> <br />
      {/* <button onClick={()=>setIsactive(true)} > is Active</button> */}
       <button onClick={()=>setIsactive(!isActive)} > is Active</button> 

       <hr />
       <Counter/>

     
     <hr />
     <Alert/>


     <hr />
     <br />
     <br />
     < Show/>
     <hr />
     <br />
     <br />
     {/* <Color/> */}
    </>
  )
}

export default App
