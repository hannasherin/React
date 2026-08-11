import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const cartitem= useSelector((state)=>state.cartInfo.cartitem)
  

  return (
    <div>
      <ul>
        <li><Link to='/' style={{textDecoration:'none',color:'brown'}}>ProductList</Link></li>
        <li><Link to='/cart' style={{textDecoration:'none',color:'brown'}}>Cart ({cartitem.length}) </Link></li>
      </ul>

    </div>
  )
}

export default Navbar
