import React from 'react'
import GgChild from './GgChild'

const GrandChild = ({value , greet}) => {
  return (
    <div>
      <h1>GrandChild Component</h1>
      <h1>{value}</h1>
      <GgChild greet={greet}/>
    </div>
  )
}

export default GrandChild
