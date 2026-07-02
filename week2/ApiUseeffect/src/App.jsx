import { useEffect, useState } from "react"
function App() {
  const [userData,setUserData]=useState([])


  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=> res.json())
  //   .then((result)=>setUserData(result))
  // },[])
  // console.log(userData);
  
  useEffect(()=>{
    const fetchData=async()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/users")
      const data=await res.json()
      setUserData(data)
    }
    fetchData()
  },[])

console.log(userData);



  return (
    <>
  <ul>
    {userData.map((user)=>(
      <li key={user.id}>
        <p>Id : {user.id}</p>
        <p>Username : {user.usrname}</p>
        <p>Eamil : {user.email}</p>
        <hr />
      </li>
    ))}
  </ul>

    </>
  )
}

export default App
