import React, { useEffect, useState } from 'react'

const UserApi = () => {

    const[userdata,setUserdata]=useState([])

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=> res.json())
    //     .then((result)=>setUserdata(result))
    // },[])
    // console.log(userdata)

      useEffect(()=>{
          const fetchData=async()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await res.json()
            setUserdata(data)
          }
       fetchData()
           
      },[])



  return (
    <div>
     <div>
        {userdata.map((user)=>(
            <div key={user.id}>
                <p>Id : {user.id} </p>
                <h1>User Name : {user.name}</h1>
                <p>Email : {user.email} </p>
                <hr />
            </div>
        ))}
        </div> 
     
    </div>
  )
}

export default UserApi
