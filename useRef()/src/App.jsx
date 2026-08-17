import React, { useRef } from 'react'

const App = () => {

const inputRef=useRef(null)
const showpswd=()=>{
  inputRef.current.type='text'
}

  return (
    <div>
      
  <input type="password" name='password' ref={inputRef} />
  <button onClick={showpswd}>Show Password</button>

    </div>
  )
}

export default App
