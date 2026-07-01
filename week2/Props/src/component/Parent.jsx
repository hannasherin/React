import React from "react"
// import Child from "./Child"

function Parent({name}){
    // const name="Riya"
    
    return(
        <>
        <h1>Parent Component</h1>
        {/* <Child username={name} place={location} data={person} user={user}/> */}
        <h1>My name is {name}</h1>

        </>
    )
}
export default  Parent