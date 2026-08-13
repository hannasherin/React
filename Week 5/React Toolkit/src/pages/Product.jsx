import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setProducts } from '../slice/productSlice'
import { useSelector } from 'react-redux'

const Product = () => {
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user=  useSelector((state)=> state.userInfo.users)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setProducts(productData))
        setProductData({
            title: '',
            description: '',
            price: ''
        })
        
        setTimeout(() => {
            navigate('/productlist')
        }, 1000)
    }
    return (
        <div>
            <h1>Create Product</h1>

            <form onSubmit={handleSubmit}>
                <input type="text"
                    name='title'
                    placeholder='Enter Product Name'
                    value={productData.title}
                    onChange={handleChange}
                />
                <p></p>

                <input type="text"
                    name='description'
                    placeholder='Description'
                    value={productData.description}
                    onChange={handleChange}

                />
                <p></p>
                <input type="number"
                    name='price'
                    placeholder='Price'
                    value={productData.price}
                    onChange={handleChange}

                />
                <p></p>
                <button>Create Product</button>
            </form>
            <hr />
           {user.map((item,i)=>(
            <li key={i}>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <p>{item.email}</p>
            </li>
           ))}

        </div>
    )
}

export default Product
