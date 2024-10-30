import { combineReducers } from "@reduxjs/toolkit";
import CustomerSlice from "./crmSlices/customerSlice/CustomerSlice";
import AuthSlice from "./crmSlices/authSlice/AuthSlice";
import ProductSlice from "./crmSlices/productSlice/ProductSlice";

const rootReducer = combineReducers({
    ProductSlice,
    CustomerSlice,
    AuthSlice
})

export default rootReducer; 