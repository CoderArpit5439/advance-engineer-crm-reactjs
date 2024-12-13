import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import AddCustomer from '../Pages/Customer/AddCustomer'
import ListCustomer from '../Pages/Customer/ListCustomer'
import ListQuotation from '../Pages/Quotation/ListQuotation'
import CreateQuotation from '../Pages/Quotation/CreateQuotation'
import AddProduct from '../Pages/Product/AddProduct'
import ListProduct from '../Pages/Product/ListProduct'
import AddCategory from '../Pages/Category/AddCategory'
import ListCategory from '../Pages/Category/ListCategory'
import TestingQuotation from '../Pages/Quotation/TestingQuotation'
import ListInvoice from '../Pages/Invoice/ListInvoice'
import CreateInvoice from '../Pages/Invoice/CreateInvoice'

const PrivateRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='/add-customer' element={<AddCustomer />} />
                <Route path='/list-customer' element={<ListCustomer />} />

                <Route path='/list-quotation' element={<ListQuotation />} />
                <Route path='/create-quotation' element={<CreateQuotation />} />
                <Route path='/testing-quotation' element={<TestingQuotation />} />

                <Route path='/list-invoice' element={<ListInvoice />} />
                <Route path='/create-invoice' element={<CreateInvoice />} />

                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/list-product' element={<ListProduct />} />

                <Route path='/add-category' element={<AddCategory />} />
                <Route path='/list-category' element={<ListCategory />} />
            </Routes>
        </>
    )
}

export default PrivateRoute