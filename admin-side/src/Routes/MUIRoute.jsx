import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserOverview from './../Pages/UserOverview/UserOverview';
const MUIRoute = () => {
  return (
    <Routes>
        <Route path='/users' element={<UserOverview />} />
    </Routes>
  )
}

export default MUIRoute