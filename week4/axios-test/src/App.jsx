import { useEffect, useState } from "react"
import api from "./api/axios"


function App() {

  const[userData,setUserData]=useState([])
 
const fetchData=async()=>{

try {
   const responce=await api.get("/users")
     const data=await responce.data
     setUserData(data)
  
} catch (error) {
   console.log('server Error')
}

    
}

useEffect(()=>{
  fetchData()
},[])


// useEffect(()=>{
//   api.get('/users')
//   .then((res)=>res.data)
//   .then((result)=>setUserData(result))
//   .catch((err)=>console.log('server error'))
// },[])
console.log(userData);


const deleteastudent=async(id)=>{
  const is_confirmed=window.confirm(
    'Are you sure'
  )
  if(is_confirmed){
      await api.delete(`/users/${id}`)
      fetchData()
  }
}

  return (
    <>
    <ul>
      {userData.map((item)=>(
        <li key={item.id}>
          <p> {item.id} </p>
          <p> {item.name} </p>
          <p> {item.username} </p>
          <p> {item.email} </p>
          <button type="submit" onClick={()=>deleteastudent(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
