import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import AddCustomer from "../Pages/Customer/AddCustomer";
import ListCustomer from "../Pages/Customer/ListCustomer";
import ListQuotation from "../Pages/Quotation/ListQuotation";
import CreateQuotation from "../Pages/Quotation/CreateQuotation";
import AddProduct from "../Pages/Product/AddProduct";
import ListProduct from "../Pages/Product/ListProduct";
import AddCategory from "../Pages/Category/AddCategory";
import ListCategory from "../Pages/Category/ListCategory";
import TestingQuotation from "../Pages/Quotation/TestingQuotation";
import ListsInvoice from "../Pages/Invoice/ListsInvoice";

import CreateInvoice from "../Pages/Invoice/CreateInvoice";
import Lead from "../Pages/Lead";
import Inquiry from "../Pages/Inquiry";
import Order from "../Pages/Order";
import Support from "../Pages/Support";
import Inventory from "../Pages/Inventory";
import Account from "../Pages/Account";
import AddManufacturing from "../Pages/Manufacturing/AddManufacturing";
import Task from "../Pages/Task";
import GraphicsList from "../Pages/Graphics/GraphicsList";
import AddEmployee from "../Pages/Employee/AddEmployee";
import ListEmployee from "../Pages/Employee/ListEmployee";
import Manufacturinglist from "../Pages/Manufacturing/Manufacturinglist";
import Addaccount from "../Pages/Account/Addaccount";
import AccountList from "../Pages/Account/AccountList";
import AddInquiry from "../Pages/Inquiry/AddInquiry";
import Inquirylist from "../Pages/Inquiry/Inquirylist";
import AddTask from "../Pages/Task/AddTask";
import TaskList from "../Pages/Task/TaskList";
import SupportList from "../Pages/Support/SupportList";
import AddSupport from "../Pages/Support/AddSupport";
import AddInventory from "../Pages/Inventory/AddInventory";
import InventoryList from "../Pages/Inventory/InventoryList";
import AddNewLead from "../Pages/Lead/AddNewLead";
import LeadList from "../Pages/Lead/LeadList";
import AddGraphics from "../Pages/Graphics/AddGraphics";
import TestingInvoice from "../Pages/Invoice/TestingInvoice";
import EditInvoice from "../Pages/Invoice/EditInvoice";
import EditLead from "../Pages/Lead/EditLead";
import ListCompany from "../Pages/Company/ListCompany";
import AddCompany from "../Pages/Company/AddCompany";
import ViewCompany from "../Pages/Company/ViewCompany";
import AddPlant from "../Pages/Plant/AddPlant";
import ListPlant from "../Pages/Plant/ListPlant";
import ViewPlant from "../Pages/Plant/ViewPlant";
import EditCompany from "../Pages/Company/EditCompany";
import EditPlant from "../Pages/Plant/EditPlant";
import AddOrder from "../Pages/Order/AddOrder";
import AllOrders from "../Pages/Order/AllOrders";
import EditOrder from "../Pages/Order/EditOrder";
import LoginActivityList from "../Pages/LoginActivity/LoginActivityList";
import AddUnit from "../Pages/Unit/AddUnit";
import ListUnit from "../Pages/Unit/ListUnit";
import ViewCustomer from "../Pages/Customer/ViewCustomer";
import CalendarEvent from "../Pages/Calender/CalendarEvent";
import ProductDetail from "../Pages/Product/ProductDetail";
import ViewOrder from "../Pages/Order/ViewOrder";
import ListVendor from "../Pages/Vendor/ListVendor";
import ViewVendor from "../Pages/Vendor/ViewVendor";
import Contacts from "../Pages/Contacts/Contacts";
import NewInvoice from "../Pages/Invoice/NewInvoice";
import Chat from "../Pages/Chat/Chat";
import Gallery from "../Pages/Gallery/Gallery";
import FileManager from "../Pages/FileManager/FileManager";
import DashboardEmployee from "../Pages/Employee/DashboardEmployee";
import ListMachine from "../Pages/Machine/ListMachine";
import ViewMachine from "../Pages/Machine/ViewMachine";
import AddProject from "../Pages/Project/AddProject";
import AllProjects from "../Pages/Project/AllProjects";
import OverviewProject from "../Pages/Project/OverviewProject";
import NewCompanyList from "../Pages/Company/NewCompanyList";
import MoreDetails from "../Pages/Company/MoreDetails";
import Transportation from "../Pages/Transport/Transportation";
import ListDrawing from "../Pages/Drawing/ListDrawing";
import ViewDrawing from "../Pages/Drawing/ViewDrawing";
const PrivateRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarEvent />} />

        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/list-customer" element={<ListCustomer />} />
        <Route path="/view-customer/:id" element={<ViewCustomer />} />

        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/list-company" element={<ListCompany />} />
         <Route path="/more-details" element={<MoreDetails />} />
        <Route path="/edit-company" element={<EditCompany />} />
        <Route path="/view-company/:id" element={<ViewCompany />} />
        <Route path='/gallery' element={<Gallery/>} />

        <Route path="/add-plant" element={<AddPlant />} />
        {/* <Route path='/list-plant' element={<ListPlant />} /> */}
        <Route path="/edit-plant" element={<EditPlant />} />
        <Route path="/view-plant/:id" element={<ViewPlant />} />

         <Route path="/chat-list" element={<Chat />} />

        <Route path="/add-unit" element={<AddUnit />} />
        <Route path="/transportation" element={<Transportation />} />
        {/* <Route path='/list-unit' element={<ListUnit />} /> */}

        <Route path="/list-quotation" element={<ListQuotation />} />
        <Route path="/create-quotation" element={<CreateQuotation />} />
        <Route path="/testing-quotation" element={<TestingQuotation />} />

        <Route path="/list-invoice" element={<ListsInvoice />} />
        <Route path="/create-invoice" element={<NewInvoice />} />
        <Route path="/testing-invoice" element={<TestingInvoice />} />
        <Route path="/edit-invoice" element={<EditInvoice />} />

         <Route path="/contact-list" element={<Contacts />} />
          <Route path="/accounts-details" element={<AccountList />} />

        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-product/:id" element={<ProductDetail />} />
        <Route path="/list-product" element={<ListProduct />} />

        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/list-category" element={<ListCategory />} />

        <Route path="/list-lead" element={<Lead />} />

        <Route path="/add-inquiry" element={<AddInquiry />} />
        <Route path="/inquiry-list" element={<Inquirylist />} />

        <Route path="/add-order" element={<AddOrder />} />
        <Route path="/all-order" element={<AllOrders />} />
        <Route path="/view-order/:id" element={<ViewOrder />} />
        <Route path="/edit-order-details" element={<EditOrder />} />

        <Route path="/list-vendor" element={<ListVendor />} />
        <Route path="/view-vendor/:id" element={<ViewVendor />} />

        {/* not used routes */}
        <Route path="/list-order" element={<Order />} />
        <Route path="/list-support" element={<Support />} />
        <Route path="/list-inventory" element={<Inventory />} />

        <Route path="/add-account" element={<Addaccount />} />
        <Route path="/account-list" element={<AccountList />} />

        <Route path="/add-manufacturing" element={<AddManufacturing />} />
        <Route path="/manufacturing-list" element={<Manufacturinglist />} />

        <Route path="/add-task" element={<AddTask />} />
        <Route path="/task-list" element={<TaskList />} />

        <Route path="/graphics-list" element={<GraphicsList />} />

        <Route path="/list-machine" element={<ListMachine />} />
        <Route path="/view-machine/:id" element={<ViewMachine />} />

        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/list-employee" element={<ListEmployee />} />
        <Route path="/dashboard-employee" element={<DashboardEmployee />} />

        <Route path="/login-activity-list" element={<LoginActivityList />} />

        <Route path="/support-list" element={<SupportList />} />
        <Route path="/add-support" element={<AddSupport />} />

        <Route path="/inventory-list" element={<InventoryList />} />
        <Route path="/add-inventory" element={<AddInventory />} />

        <Route path="/add-lead" element={<AddNewLead />} />
        <Route path="/lead-list" element={<LeadList />} />
        <Route path="/update-lead" element={<EditLead />} />
        
        <Route path="/file-manager" element={<FileManager />} />

        <Route path="/add-graphics" element={<AddGraphics />} />
        <Route path="/Graphic-list" element={<GraphicsList />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="/add-project" element={<AddProject/>}/>
        <Route path="/project-list" element={<AllProjects/>}/>
        <Route path="/overview-project" element={<OverviewProject/>}/>
        
        <Route path="/list-drawing" element={<ListDrawing />}/>
        <Route path="/view-drawing" element={<ViewDrawing />}/>


      
      </Routes>
    </>
  );
};

export default PrivateRoute;
