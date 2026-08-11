import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li> <Link to='/' style={{ textDecoration: 'none', color: "white" }}>Home</Link> </li>
        <li> <Link to='/users' style={{ textDecoration: 'none', color: "white" }}>UsersList</Link> </li>
        <li><Link to='/about' style={{ textDecoration: 'none', color: "white" }}>About</Link> </li>
        <li><Link to='/product' style={{ textDecoration: 'none', color: "white" }}>Product</Link></li>
        <li><Link to='/productlist' style={{ textDecoration: 'none', color: "white" }}>ProductList</Link></li>

      </ul>
    </div>
  )
}

export default Navbar
