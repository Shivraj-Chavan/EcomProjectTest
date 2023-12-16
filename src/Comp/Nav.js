import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import { useNavigate } from 'react-router-dom'
export default function Nav() {

    const navigate = useNavigate()
    const [brand,setbrand]=useState("")
    const [css,setcss]=useState("nav-link")


    useEffect(()=>{
        const data=localStorage.getItem("UserName")
        setbrand(data)
        
    })

    const logout=()=>{
        navigate("/")
        localStorage.removeItem("UserName")
    }
//category use Effect ==> 
    useEffect(()=>{
        const data=localStorage.getItem("UserName")

       data ? (setcss("nav-link")):(setcss("nav-link disabled"))

    })

  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">{brand}</a>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={css} aria-current="page" to="/category">Category</NavLink>
        </li>
        {

        brand? (

                <>
                    <li className="nav-item">
          <NavLink className="nav-link " onClick={logout} aria-current="page" to="/">logout</NavLink>
        </li>
                </>

            ):(
                <>
                    <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Login</NavLink>
        </li>
                </>
            )

        }
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/cart">Cart</NavLink>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>

  )
}
