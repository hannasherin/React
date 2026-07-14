import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleNavigate=()=>{
    setTimeout(()=>{
      navigate("/apiproduct")
    },1000)
  }
  return (
    <div>
      <h1>Home Page </h1>
      <button onClick={handleNavigate}>Go Product Page</button>
    </div>
  )
}

export default Home
