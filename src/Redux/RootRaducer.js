import { combineReducers } from "@reduxjs/toolkit";
import CustomerSlice from "./crmSlices/customerSlice/CustomerSlice";
import AuthSlice from "./crmSlices/authSlice/AuthSlice";
import ProductSlice from "./crmSlices/productSlice/ProductSlice";
import CategorySlice from "./crmSlices/categorySlice/CategorySlice";
import GraphicsSlice from "./crmSlices/graphicsSlice/GraphicsSlice"
import  EmployeeSlice  from "./crmSlices/employeeSlice/EmployeeSlice";
import  LeadSlice  from "./crmSlices/Lead/LeadSlice";

const rootReducer = combineReducers({
    ProductSlice,
    CustomerSlice,
    AuthSlice,
    CategorySlice,
    GraphicsSlice,
    EmployeeSlice,
    LeadSlice
    
})

export default rootReducer; 