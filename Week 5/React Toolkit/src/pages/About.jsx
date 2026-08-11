import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {

const user=useSelector((state)=> state.userInfo.users)
console.log(user);

  return (
    <div>
      <h1>Print Users Names</h1>
      <div>
        {user.map((item,i)=>(
            <li key={i}>
                <p>{item.name}</p>
            </li>
        ))}
      </div>
    </div>
  )
}

export default About
