import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartitem= useSelector((state)=>state.cartInfo.cartitem)
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartitem.length===0 ?(
<p>No products in Cart</p>
      ):(
        cartitem.map((item)=>(
          <li key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </li>
        ))
      )}
    </div>
  )
}

export default Cart
