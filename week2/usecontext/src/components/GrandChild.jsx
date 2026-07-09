import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
const GrandChild = () => {
  const{ setUser}=useContext(UserContext)
  return (
    <div>
      <h1>Grand Child Component</h1>
      <button onClick={()=>setUser("Hanna")}>Change Name</button>
    </div>
  )
}

export default GrandChild
