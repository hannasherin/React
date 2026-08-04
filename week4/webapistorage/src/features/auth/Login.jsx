import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const[loginData,setLoginData]=useState({
        email:'',
        password:''
    })

    const navigate=useNavigate()

const handleChange=(e)=>{
    const{name,value}=e.target 
    setLoginData({...loginData,[name]:value})
}

const handleLogin=(e)=>{
    e.preventDefault()
    const storedData=JSON.parse(localStorage.getItem('user')) 
    
    if(!storedData){
        alert('No user found,please register')
        return
    }

if(loginData.email===storedData.email && loginData.password===storedData.password){
    localStorage.setItem('isloggedIn',true)
    alert('login Sucessfully')
    navigate('/home')
}else{
    alert('Invalid email or Password    ')
}

}

    return (
        <div className='login-container'>
             
      <div className='login-form'>
        <h1 className='heading'>Login</h1>
       
            <form  onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder=' enter your Email'
                    name='email'
                    value={loginData.email}
                    onChange={handleChange}
                />
                <p></p>

                <input
                    type="password"
                    placeholder='enter password'
                    name='password'
                    value={loginData.password}
                    onChange={handleChange}
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
