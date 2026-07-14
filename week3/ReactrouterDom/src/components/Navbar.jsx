import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main'>
      <ul>
        <li><Link to="/" style={{color:'white',textDecoration:'none'}}>Home </Link> </li>
        <li><Link to="/about" style={{color:'white',textDecoration:'none'}}>About</Link></li>
        <li><Link to="/contact" style={{color:'white',textDecoration:'none'}}>Contact</Link> </li>
        <li> <Link to="/apiproduct" style={{color:'white',textDecoration:'none'}}>ApiProduct</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
