import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ApiProduct = () => {

    const[data,setData]=useState([])
    const[isloading,setIsLoading]=useState(false)
    const navigate=useNavigate()

    //  promise 
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products')
    //   .then((res)=> res.json())
    // .then((result)=>setData(result.products))
    // },[])
    // console.log(data);

    // async await 
    useEffect(()=>{
    const fetchData=async()=>{
      setIsLoading(true)
      const res=await fetch('https://dummyjson.com/products')
      const prodata=await res.json()
      setData(prodata.products)
      setIsLoading(false)
    }
    fetchData()
  },[])



    


  return (
    <div>
      <h1>API product List</h1>
      {isloading && <h1>Loading....</h1>}
  <div>
      {/* <ul>
    {data.map((products)=>(
      <li key={products.id}>
        <p>Id : {products.id}</p>
        <p>Title : {products.title}</p>
        <p>Description : {products.description}</p>
       
      </li>
    ))}
  </ul> */}

  {data.map(item=>(
    <div key={item.id}>
        <p>Product ID : {item.id}</p>
        <p>Item : {item.title}</p>
        <p>Description : {item.description}</p>
        <button onClick={()=>navigate(`/apiproduct/${item.id}`)}>View Details</button>

        <hr />
    </div>
  ))}
  </div>

    </div>
  )
}

export default ApiProduct
