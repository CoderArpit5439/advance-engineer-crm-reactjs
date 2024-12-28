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
import Lead from '../Pages/Lead'
import Inquiry from '../Pages/Inquiry'
import Order from '../Pages/Order'
import Support from '../Pages/Support'
import Inventory from '../Pages/Inventory'
import Account from '../Pages/Account'
import Manufacturing from '../Pages/Manufacturing'
import Task from '../Pages/Task'

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
           
                <Route path='/list-lead' element={<Lead />} />
                <Route path='/list-inquiry' element={<Inquiry />} />
                <Route path='/list-order' element={<Order />} />
                <Route path='/list-support' element={<Support />} />
                <Route path='/list-inventory' element={<Inventory />} />
                <Route path='/list-account' element={<Account />} />
                <Route path='/list-manufacturing' element={<Manufacturing />} />
                <Route path='/list-task' element={<Task />} />
             

            </Routes>
        </>
    )
}

export default PrivateRoute