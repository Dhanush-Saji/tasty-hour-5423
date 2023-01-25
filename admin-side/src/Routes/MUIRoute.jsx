import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserOverview from './../Pages/UserOverview/UserOverview';
import Orders from './../Pages/Orders/Orders';
import Products from './../Pages/Products/Products';
import AddProducts from './../Pages/AddProducts/AddProducts';
import { PrivateRoute } from '../Private/PrivateRoute';
import UpdateProducts from './../Pages/UpdateProducts/UpdateProducts';
import Review from '../Pages/Review/Review';
import FAQ from './../Pages/FAQ/FAQ';
import Help from './../Pages/Help/Help';
import Dashboard from './../Pages/Dashboard';
const MUIRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoute><UserOverview /></PrivateRoute>} />
        <Route path='/orders' element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path='/products' element={<PrivateRoute><Products /></PrivateRoute>} />
        <Route path='/addproducts' element={<PrivateRoute><AddProducts /></PrivateRoute>} />
        <Route path='/updateproducts' element={<PrivateRoute><UpdateProducts /></PrivateRoute>} />
        <Route path='/reviews' element={<PrivateRoute><Review /></PrivateRoute>} />
        <Route path='/faq' element={<PrivateRoute><FAQ /></PrivateRoute>} />
        <Route path='/helpsupport' element={<PrivateRoute><Help /></PrivateRoute>} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default MUIRoute