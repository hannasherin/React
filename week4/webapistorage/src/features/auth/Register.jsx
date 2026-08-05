import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [errors, setError] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    // console.log(formData);


    const handleRegister = (e) => {
        e.preventDefault()

        if (validateRegister()) {
            localStorage.setItem('user', JSON.stringify(formData))
            alert("Register Sucessfully")
            setFormData({
                username: '',
                email: '',
                password: ''
            })

            setError({})

            setTimeout(() => {
                navigate('/login')
            }, 2000);

        }
    }


    const validateRegister = () => {
        const newError = {}
        //    username 
        if (formData.username.trim() === "") {
            newError.username = "Username is Required"
        }
        //    email 
        if (formData.email.trim() === "") {
            newError.email = "Email is Required"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            newError.email = "Enter the Valid Format"
        }
        // password 
        if (formData.password.trim() === "") {
            newError.password = "Password Required"
        }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
            newError.password = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
        }

        setError(newError)

        return Object.keys(newError).length === 0
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
                    <p> {errors.username}</p>
                    {/* email  */}
                    <input
                        type="email"
                        placeholder='Enter your Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <p> {errors.email} </p>

                    {/* password  */}
                    <input
                        type="password"
                        placeholder='Enter Password'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <p> {errors.password} </p>

                    <button type='submit'> Register</button>
                </form>



            </div>
        </div>
    )
}

export default Register
