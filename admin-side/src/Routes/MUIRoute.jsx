import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserOverview from './../Pages/UserOverview/UserOverview';
import Orders from './../Pages/Orders/Orders';
import Products from './../Pages/Products/Products';
import AddProducts from './../Pages/AddProducts/AddProducts';
const MUIRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<UserOverview />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/products' element={<Products />} />
        <Route path='/addproducts' element={<AddProducts />} />
    </Routes>
  )
}

export default MUIRoute