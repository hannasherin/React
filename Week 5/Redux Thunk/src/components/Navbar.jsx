import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-amber-900'>
      <ul className='flex space-x-6 text-white font-semibold p-4'>
        <li className='cursor-pointer hover:text-amber-700'> <Link to='/'> Create Task</Link></li>
        <li className=' hover:text-amber-700 cursor-pointer'> <Link to='/tasklist'>Task Link</Link> </li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
