import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './../Pages/HomePage/HomePage';
import ProductPage from '../Pages/ProductPage/ProductPage';
import CartPage from './../Pages/CartPage/CartPage';
import CheckoutPage from './../Pages/CheckoutPage/CheckoutPage';
import Wishlist from './../Pages/Wishlist/Wishlist';
import SinglePage from './../Pages/SinglePage/SinglePage';

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
    <Route path="/product" element={<ProductPage/>}/>
      <Route path='/singlepage' element={<SinglePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/wishlist' element={<Wishlist />} />
    </Routes>
    </>
  )
}

export default AllRoutes