import React, { useRef } from 'react'


const SeperateRef = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const passwordRef=useRef(null)

    const  handleSubmit=(e)=>{
     e.preventDefault()

     const formData={
        name: nameRef.current.value,
        email: emailRef.current.value,
        password:passwordRef.current.value,
     }
     console.log(formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='text' ref={nameRef} /> <br /> <br />
        <input type="email" name='email'  ref={emailRef}/><br /> <br />
        <input type="password" name='password' ref={passwordRef} /> <br /> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SeperateRef
