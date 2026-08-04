import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData,[name]:value})
    }
    // console.log(formData);


    const handleRegister=(e)=>{
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify(formData))
        alert("Register Sucessfully")

        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }
    

    return (
        <div className='register-container '>
            <div className='register-card'>
                <h1 className='title'>Register</h1>

                <form onSubmit={handleRegister}>

                    {/* username */}
                    <input
                        type="text"
                        placeholder='Enter your Username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <p></p>
                    {/* email  */}
                    <input
                        type="email"
                        placeholder='Enter your Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p></p>

                    {/* password  */}
                    <input
                        type="password"
                        placeholder='Enter Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p></p>

                    <button type='submit'> Register</button>
                </form>



            </div>
        </div>
    )
}

export default Register
