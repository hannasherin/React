import React from "react"
// import GrandChild from "./GrandChild"

// function Child(props){
//function Child({username , place ,data , user}){ props destructuring 
function Child({setCount,count}) {
    return (
        <>
            {/* <h1>Child Component</h1>
        <h2>Hi, My name is {username }  </h2>
        <h2>I'm from {place}</h2>
        <h3>{data.name} from {data.city}</h3>
        <h4>id no :{user.id} in {user.department} department</h4> */}

            <h1>Child Component</h1>
            {/* <GrandChild value={username}/> */}
            <button onClick={()=> setCount (count+1)}>+</button>
        </>
    )
}
export default Child