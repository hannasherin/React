import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-amber-900'>
      <ul className='flex space-x-6 text-white font-semibold p-4'>
        <li className='cursor-pointer hover:text-amber-700'>Create Task</li>
        <li className=' hover:text-amber-700 cursor-pointer'>Add</li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
