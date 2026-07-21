import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <ul>
       <li> <Link to="/" style={{textDecoration:"none ",color:"white  "}}>Home</Link> </li>
      <li> <Link to="/Product" style={{textDecoration:"none ",color:"white  "}}>Product</Link> </li> 
      
      <li>Product Details</li>
    </ul>
    </div>
  )
}

export default Navbar
