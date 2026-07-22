import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const [product, setProduct] = useState([])

  const {id}=useParams()

  useEffect(() => {

    fetch(`http://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => setProduct(result))

  }, [])
  console.log(product)

  return (
    <div>
      <h1>Product Details page</h1>
      <h1>Product id : {id}</h1>
      <h2> {product.title} </h2>
      <img src={product.images} alt="" width={200} />
      <p> {product.description} </p>
    <p> {product.price} </p>
    </div>
  )
}

export default ProductDetails
