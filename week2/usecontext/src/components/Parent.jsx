import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Parent = () => {
//  console.log(useContext(UserContext));
  const { user , setUser} = useContext(UserContext)
  
  return (
    <div>
       <h1>Parent Component </h1>
       <h2>{user}</h2>
       <button onClick={()=> setUser("Zara")}>Change Name</button>
       <hr />
    </div>
  )
}

export default Parent
