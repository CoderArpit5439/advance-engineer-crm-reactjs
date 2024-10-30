import React from 'react'
import LoginPage from '../Pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import AddCustomer from '../Pages/Customer/AddCustomer'
import ListCustomer from '../Pages/Customer/ListCustomer'
import ListQuotation from '../Pages/Quotation/ListQuotation'
import CreateQuotation from '../Pages/Quotation/CreateQuotation'
import AddProduct from '../Pages/Product/AddProduct'
import ListProduct from '../Pages/Product/ListProduct'

const PublicRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage  />} />
        <Route path='/dashboard' element={<Dashboard  />} />
 
        <Route path='/add-customer' element={<AddCustomer  />} />
        <Route path='/list-customer' element={<ListCustomer  />} />
 
        <Route path='/list-quotation' element={<ListQuotation  />} />
        <Route path='/create-quotation' element={<CreateQuotation  />} />
 
        <Route path='/add-product' element={<AddProduct  />} />
        <Route path='/list-product' element={<ListProduct  />} />
        
      </Routes>
    </div>
  )
}

export default PublicRoute