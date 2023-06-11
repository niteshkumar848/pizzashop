
import React from 'react'
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
 
import Products from '../Pages/Products';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart'
export default function App() {
    return (
        <>
            <BrowserRouter>

                <Navbar />
                <Routes>
                <Route path='/'element={<Home/>}/>
                <Route path='/cart'element={<Cart/>}/>
                    <Route path='/products'element={<Products/>}/>
                  
                </Routes>
            </BrowserRouter>
        </>

    )
}