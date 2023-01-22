import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserOverview from './../Pages/UserOverview/UserOverview';
import Orders from './../Pages/Orders/Orders';
import Products from './../Pages/Products/Products';
import AddProducts from './../Pages/AddProducts/AddProducts';
import { PrivateRoute } from '../Private/PrivateRoute';
import UpdateProducts from './../Pages/UpdateProducts/UpdateProducts';
const MUIRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><UserOverview /></PrivateRoute>} />
        <Route path='/orders' element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path='/products' element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path='/addproducts' element={<PrivateRoute><AddProducts /></PrivateRoute>} />
        <Route path='/updateproducts' element={<PrivateRoute><UpdateProducts /></PrivateRoute>} />
    </Routes>
  )
}

export default MUIRoute