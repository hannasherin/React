import React, { useRef } from 'react'

const Useref = () => {
    const inputRef=useRef(null)
    const showPassword=()=>{
      
        inputRef.current.type='text'
        
    }
  return (
    
    <div>
        <input type="password" name='password' ref={inputRef} />
        <button onClick={showPassword}> Show password</button>
    </div>
  )
}

export default Useref
