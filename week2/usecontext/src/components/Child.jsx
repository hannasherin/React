import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { ThemeContext } from '../Context/ThemeContext'

const Child = () => {
  const{user,SetUser}= useContext(UserContext)
  // console.log(useContext(ThemeContext));
  
  const {theme , toggleTheme  }=useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: theme ==='dark' ? 'black' : 'white',
      color : theme ==='dark' ? 'white' : 'black',
      padding:'20px',
      marginTop:'20px'
    }}>
      <h1>Child Component</h1>
      <h2>{user}</h2>
      <h2>{theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme{theme === "dark" ? "🌑" : "🌕"}</button>
      <hr />
    </div>
  )
}

export default Child
