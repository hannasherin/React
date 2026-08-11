import React from 'react'
import { useSelector } from 'react-redux'

const Userslist = () => {

const user=  useSelector((state)=> state.userInfo.users)
console.log(user);


  return (
    <div>
      <h1>Userlist</h1>
      <div>
      {user.map((item,i)=>(
        <li key={i}>
         <p>{item.name}</p>
         <p>{item.age}</p>
         <p>{item.email}</p>
        <hr />
        </li>
      )


      )}
      </div>
   
    </div>
  )
}

export default Userslist
