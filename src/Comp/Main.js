import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Category from './Category'
import Cart from './Cart'

export default function Main() {
  return (
    <>

        
            <Routes>

        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/cart" element={<Cart/>} />
            </Routes>
      

    </>
  )
}
