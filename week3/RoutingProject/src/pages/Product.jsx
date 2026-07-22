import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Product.css"
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const [data, setData] = useState([])
    const navigate=useNavigate()

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((result) => setData(result.products))

    }, [])
    console.log(data);


    return (
        <div>
            <h1>Product Page</h1>

            <div className='main'>
                {data.map((item) => (
                    <div className='cart' key={item.id}>
                        <img src={item.images} alt="" width={200} />
                        <p>id : {item.id}</p>
                        <p>title : {item.title}</p>
                        <button onClick={()=>navigate(`/product/${item.id}`)}>View details</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
