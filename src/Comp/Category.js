import React, { useEffect, useState } from 'react'
import Layout from './Layout'

export default function Category() {

    const [data,setdata]=useState([])

    const fun=async()=>{

      const  response=await fetch("https://fakestoreapi.com/products/")
    const  result=await response.json()

    setdata(result)

    }

    useEffect(()=>{

        fun()
    
    })


  return (
    

    <Layout>
        <h1>Caterogyr</h1>
    <div className='d-flex flex-wrap justify-content-center align-items-center'>
        {
            data.map((value,index)=>{
                return(
  <div className="card m-3" style={{width: '18rem'}}>
  <img src={value.image} style={{height:"200px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{value.title}</h5>
    <p className="card-text">{value.price}</p>
    <a href="#" className="btn btn-primary">Add Cart</a>
  </div>
</div>
                )
            })
        }
</div>

    </Layout>

  )
}
