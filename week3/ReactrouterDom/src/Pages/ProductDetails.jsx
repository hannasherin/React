import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState([])
  // console.log(useParams()); return object its a hook
  const [isloading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
   
    fetch(`http://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => setProduct(result))
    setIsLoading(false)

  }, [])
  console.log(product);


  return (
    <div>
      <h1>Product Details </h1>
     <h1> {isloading && "Loading...."}</h1>

      <h1>Product Id : {id}</h1>
      <h2>{product.title}</h2>
      <img src={product.images} alt="" width={200} />
      <p> {product.price} </p>
      <p> {product.availabilityStatus} </p>
      <p> {product.description} </p>
    </div>
  )
}

export default ProductDetails
