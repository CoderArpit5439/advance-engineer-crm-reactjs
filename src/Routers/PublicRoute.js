import React from 'react'
import LoginPage from '../Pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import AddCustomer from '../Pages/Customer.js/AddCustomer'
import ListCustomer from '../Pages/Customer.js/ListCustomer'

const PublicRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage  />} />
        <Route path='/dashboard' element={<Dashboard  />} />
        <Route path='/add-customer' element={<AddCustomer  />} />
        <Route path='/list-customer' element={<ListCustomer  />} />
        
      </Routes>
    </div>
  )
}

export default PublicRoute