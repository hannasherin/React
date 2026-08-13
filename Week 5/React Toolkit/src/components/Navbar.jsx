import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const user=  useSelector((state)=> state.userInfo.users)

  return (
    <div>
      <ul>
        <li> <Link to='/' style={{ textDecoration: 'none', color: "white" }}>Home</Link> </li>
        <li> <Link to='/users' style={{ textDecoration: 'none', color: "white" }}>UsersList</Link> </li>
        <li><Link to='/about' style={{ textDecoration: 'none', color: "white" }}>About</Link> </li>
        <li><Link to='/product' style={{ textDecoration: 'none', color: "white" }}>Product</Link></li>
        <li><Link to='/productlist' style={{ textDecoration: 'none', color: "white" }}>ProductList</Link></li>
         <button>user count ({user.length}) </button>  
      </ul>
    </div>
  )
}

export default Navbar
