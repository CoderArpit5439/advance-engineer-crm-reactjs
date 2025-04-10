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
import AddManufacturing from '../Pages/Manufacturing/AddManufacturing'
import Task from '../Pages/Task'
import GraphicsList from '../Pages/Graphics/GraphicsList'
import AddEmployee from '../Pages/Employee/AddEmployee'
import ListEmployee from '../Pages/Employee/ListEmployee'
import Manufacturinglist from '../Pages/Manufacturing/Manufacturinglist'
import Addaccount from '../Pages/Account/Addaccount'
import AccountList from '../Pages/Account/AccountList'
import AddInquiry from '../Pages/Inquiry/AddInquiry'
import Inquirylist from '../Pages/Inquiry/Inquirylist'
import AddTask from '../Pages/Task/AddTask'
import TaskList from '../Pages/Task/TaskList'
import SupportList from "../Pages/Support/SupportList"
import AddSupport from "../Pages/Support/AddSupport"
import AddInventory from '../Pages/Inventory/AddInventory'
import InventoryList from '../Pages/Inventory/InventoryList'
import AddNewLead from '../Pages/Lead/AddNewLead'
import LeadList from '../Pages/Lead/LeadList'
import AddGraphics from '../Pages/Graphics/AddGraphics'
import TestingInvoice from '../Pages/Invoice/TestingInvoice'
import EditInvoice from '../Pages/Invoice/EditInvoice'
import EditLead from '../Pages/Lead/EditLead'
import ListCompany from '../Pages/Company/ListCompany'
import AddCompany from '../Pages/Company/AddCompany'
import ViewCompany from '../Pages/Company/ViewCompany'
import AddPlant from '../Pages/Plant/AddPlant'
import ListPlant from '../Pages/Plant/ListPlant'
import ViewPlant from '../Pages/Plant/ViewPlant'
import EditCompany from '../Pages/Company/EditCompany'
const PrivateRoute = () => {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='/add-customer' element={<AddCustomer />} />
                <Route path='/list-customer' element={<ListCustomer />} />

                <Route path='/add-company' element={<AddCompany />} />
                <Route path='/list-company' element={<ListCompany />} />
                <Route path='/edit-company' element={<EditCompany />} />

                <Route path='/add-plant' element={<AddPlant />} />
                <Route path='/list-plant' element={<ListPlant />} />
                <Route path='/view-plant' element={<ViewPlant />} />

                <Route path='/list-quotation' element={<ListQuotation />} />
                <Route path='/create-quotation' element={<CreateQuotation />} />
                <Route path='/testing-quotation' element={<TestingQuotation />} />

                <Route path='/list-invoice' element={<ListInvoice />} />
                <Route path='/create-invoice' element={<CreateInvoice />} />
                <Route path='/testing-invoice' element={<TestingInvoice />} />
                <Route path='/edit-invoice' element={<EditInvoice />} />

                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/list-product' element={<ListProduct />} />

                <Route path='/add-category' element={<AddCategory />} />
                <Route path='/list-category' element={<ListCategory />} />
           
                <Route path='/list-lead' element={<Lead />} />

                <Route path='/add-inquiry' element={<AddInquiry />} />
                <Route path='/inquiry-list' element={<Inquirylist />} />

                <Route path='/list-order' element={<Order />} />
                <Route path='/list-support' element={<Support />} />
                <Route path='/list-inventory' element={<Inventory />} />
                
                <Route path='/add-account' element={<Addaccount />} />
                <Route path='/account-list' element={<AccountList />} />

                <Route path='/add-manufacturing' element={<AddManufacturing />} />
                <Route path='/manufacturing-list' element={<Manufacturinglist />} />
                
                <Route path='/add-task' element={<AddTask />} />
                <Route path='/task-list' element={<TaskList />} />

                <Route path='/graphics-list' element={<GraphicsList/>}/>

                <Route path='/add-employee' element={<AddEmployee/>}/>
                <Route path='/employe-list' element={<ListEmployee/>}/> 

                <Route path='/support-list' element={<SupportList />} />
                <Route path='/add-support' element={<AddSupport />} />

                <Route path='/inventory-list' element={<InventoryList />} />
                <Route path='/add-inventory' element={<AddInventory />} />

                <Route path='/add-lead' element={<AddNewLead />} />
                <Route path='/lead-list' element={<LeadList />} />
                <Route path='/update-lead' element={<EditLead />} />

                <Route path='/add-graphics' element={<AddGraphics />} />
                <Route path='/Graphic-list' element={<GraphicsList />} />

            </Routes>
        </>
    )
}

export default PrivateRoute