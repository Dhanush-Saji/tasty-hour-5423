import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserOverview from '../Pages/UserOverview/UserOverview';

import LoginPage from './../Pages/Login/LoginPage';

const Allroutes = () => {
  return (
    <Routes>
        
        <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default Allroutes