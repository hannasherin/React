import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCart } from '../slice/cartslice'

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 50000
  },
  {
    id: 2,
    name: 'Mouse',
    price: 1000
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 2000
  },
  {
    id: 4,
    name: 'Keyboard Stand',
    price: 15000
  },
]

const ProductList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddtocart=(product)=>{
    dispatch(setCart(product))
    navigate('/cart')
  }

  return (
    <div>
      <h1>Product Lists</h1>

      <div>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.id}</p>
            <h1>{product.name}</h1>
            <p>{product.price}</p>

            <button onClick={()=>handleAddtocart(product)}>Add To Cart</button>
            <hr />
          </li>
        ))}
      </div>


    </div>
  )
}

export default ProductList
