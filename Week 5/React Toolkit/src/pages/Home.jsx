import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../slice/userSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        email: ''
    })

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }
    // console.log(inputData);
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setUsers(inputData))
        setInputData({
            name:'',
            age:'',
            email:''
        })
        alert('User Created Sucessfully')
        setTimeout(()=>{
            navigate('/users')
        },1000)
    }
    


    return (
        <div>
            <h1>Create User</h1> <hr />
            <form onSubmit={handleSubmit}>

                <input type="text"
                    placeholder='Enter Name'
                    name='name'
                    value={inputData.name}
                    onChange={handleChange}

                />
                <p></p>

                <input type="number"
                    placeholder='Enter Age'
                    name='age'
                    value={inputData.age}
                    onChange={handleChange}


                />
                <p></p>

                <input type="email"
                    placeholder='Enter Email'
                    name='email'
                    value={inputData.email}
                    onChange={handleChange}

                />
                <p></p>

                <button>Create Button</button>


            </form>
        </div>
    )
}

export default Home
