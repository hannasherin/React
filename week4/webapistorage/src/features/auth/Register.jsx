import React, { useState } from 'react'
import './Register.css'

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    return (
        <div className='register-container '>
            <div className='register-card'>
            <h1 className='title'>Register</h1>

            <form>

                {/* username */}
                <input
                    type="text"
                    placeholder='Enter your Username'
                    name='username'
                    value={formData.username}
                />
                <p></p>
                {/* email  */}
                <input
                    type="email"
                    placeholder='Enter your Email'
                    name='email'
                    value={formData.email}
                />
                <p></p>

                {/* password  */}
                <input
                    type="password"
                    placeholder='Enter Password'
                    name='password'
                    value={formData.password}
                />
                <p></p>

                <button type='submit'> Register</button>
            </form>



</div>
        </div>
    )
}

export default Register
