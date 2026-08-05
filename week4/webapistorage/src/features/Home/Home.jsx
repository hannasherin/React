import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
 
const navigate=useNavigate()


const handleLogout=()=>{
  localStorage.setItem('isloggedIn',false)
  alert('User LOgout')
  navigate('/login')
}

const user=JSON.parse(localStorage.getItem('user'))
  return (
    <div className='home-container'>
        <div className='home-card'>
      <h1>Home</h1>
      <h1>{user.username}</h1>
      <h1>{user.email}</h1>
      <button onClick={handleLogout}>LogOut</button>
    </div>
    </div>
  )
}

export default Home
