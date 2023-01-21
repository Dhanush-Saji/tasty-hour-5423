import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserOverview from '../Pages/UserOverview/UserOverview';
import Dashboard from './../Pages/Dashboard';

const Allroutes = () => {
  return (
    <Routes>
        {/* <Route path='/' element={<Dashboard />} /> */}
        {/* <Route path='/users' element={<UserOverview />} /> */}
    </Routes>
  )
}

export default Allroutes