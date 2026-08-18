import React, { useRef } from 'react'

const SingleForm = () => {
    const formRef=useRef(null)

const hadleSubmit=(e)=>{
      e.preventDefault();
      const form=formRef.current;

      console.log(form.elements.name.value)
      console.log(form.elements.email.value)
      console.log(form.elements.password.value)
}

  return (
    <div>
      <form ref={formRef} onSubmit={hadleSubmit}>
        <input type="text"  name='name' placeholder='Name'/> <br /> <br />
        <input type="email" name='email' placeholder='Email' /><br /> <br />
        <input type="password" name='password' placeholder='Password' /><br /> <br />
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default SingleForm
