import React from 'react'
import GrandChild from './GrandChild'

const Child = ({username , greet}) => {
  return (
    <div>
      <h1>Child Component</h1>
      <p>{username}</p>
      <GrandChild value={username} greet={greet}/>
    </div>
  )
}

export default Child
