import { combineReducers } from "@reduxjs/toolkit";
import CustomerSlice from "./crmSlices/customerSlice/CustomerSlice";
const rootReducer = combineReducers({
    CustomerSlice
})

export default rootReducer; 