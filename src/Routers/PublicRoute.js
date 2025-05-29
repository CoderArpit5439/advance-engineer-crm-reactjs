import React, { useEffect, useState } from 'react'
import LoginPage from '../Pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Cookies from 'js-cookie';
import Gallery from '../Pages/Gallery/Gallery';
import Register from '../Pages/SignUp/Register';

const PublicRoute = () => {

 
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign-up' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default PublicRoute