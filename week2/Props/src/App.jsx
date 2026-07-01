import Parent from "./component/Parent"
import Child from "./component/Child"
import GrandChild from "./component/GrandChild"
import { useState } from "react"
function App() {
const[count,setCount]=useState(100)
const name="joy"
  return (
    <>
     <h1>Props</h1>
     <Parent name={name}/> <hr />
     <Child
      setCount={setCount}
     count={count}/> <hr />
     <GrandChild count={count}
     name={name}/>
    </>
  )
}

export default App
