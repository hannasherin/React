import React from 'react'
import Child from './Child'
const Parent = () => {
  let name="Hanna Sherin"
  let greet="Hello, I'm From Parent component "
  return (
    <div>
        <h1>Parent Component</h1>
      <Child username={name} greet={greet}/>
    </div>
  )
}

export default Parent
