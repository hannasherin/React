import React from 'react'
import { useSelector } from 'react-redux'

const ProductList = () => {
        const products=useSelector((state)=> state.productInfo.products)

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((item,i)=>(
            <li key={i}>
                <p>{item.title}</p>
                <p>{item.description}</p>
            </li>
        ))}
      </div>
    </div>
  )
}

export default ProductList
