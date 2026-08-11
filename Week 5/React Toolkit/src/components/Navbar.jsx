import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li> <Link to='/' style={{textDecoration:'none',color:"white"}}>Home</Link> </li>
        <li> <Link to='/users' style={{textDecoration:'none',color:"white"}}>UsersList</Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
