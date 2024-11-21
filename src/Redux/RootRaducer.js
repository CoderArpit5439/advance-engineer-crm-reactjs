import { combineReducers } from "@reduxjs/toolkit";
import CustomerSlice from "./crmSlices/customerSlice/CustomerSlice";
import AuthSlice from "./crmSlices/authSlice/AuthSlice";
import ProductSlice from "./crmSlices/productSlice/ProductSlice";
import CategorySlice from "./crmSlices/categorySlice/CategorySlice";

const rootReducer = combineReducers({
    ProductSlice,
    CustomerSlice,
    AuthSlice,
    CategorySlice,
})

export default rootReducer; 