import React, { useEffect, useState } from 'react'
import LoginPage from '../Pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Cookies from 'js-cookie';

const PublicRoute = () => {

 
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default PublicRoute