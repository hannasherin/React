import React, { useState , useEffect } from 'react'

const ApiProduct = () => {

    const[data,setData]=useState([])

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
      const res=await fetch('https://dummyjson.com/products')
      const prodata=await res.json()
      setData(prodata.products)
    }
    fetchData()
  },[])



    


  return (
    <div>
      <h1>API product List</h1>
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
        <button>View Details</button>

        <hr />
    </div>
  ))}
  </div>

    </div>
  )
}

export default ApiProduct
