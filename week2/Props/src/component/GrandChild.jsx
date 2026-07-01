
import React from 'react'

const GrandChild = ({count ,name}) => {
  return (
    <div>
      <h1>GrandChild Component</h1>
      {/* <h2>From parent {value}</h2> */}
      <h2>Count : {count}</h2>
      <h1>{name}</h1>
    </div>
  )
}

export default GrandChild
