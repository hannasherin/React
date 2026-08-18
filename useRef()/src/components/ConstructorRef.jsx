import React from 'react'
import { useRef } from 'react'

const ConstructorRef = () => {
    const formRef=useRef(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        console.log(formData.get('name'));
        console.log(formData.get('email'));
        console.log(formData.get('password'));
        
        
        
    }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text"  name='name' placeholder='Name'/> <br /> <br />
        <input type="email" name='email' placeholder='Email' /><br /> <br />
        <input type="password" name='password' placeholder='Password' /><br /> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ConstructorRef
