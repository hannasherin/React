import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
             
      <div className='login-form'>
        <h1 className='heading'>Login</h1>
       
            <form >

                <input
                    type="email"
                    placeholder=' enter your Email'
                    name='email'
                />
                <p></p>

                <input
                    type="password"
                    placeholder='enter password'
                    name='password'
                />
                <p>

                </p>
                <button>Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login
