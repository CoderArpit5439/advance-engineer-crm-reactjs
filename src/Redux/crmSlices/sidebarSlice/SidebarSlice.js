import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";
import axios from "axios";

const initialState = {
    loading: false,
    data: null,
    error: null,
}

export const allPermittedPages = createAsyncThunk(
    "allPermittedPages",
    async (data) => {

        try {
            const response = await instance.get("http://localhost:8081/crm/features/all-permitted-features");
          
            console.log(response);
            return response?.data;

        } catch (error) {
            return error;
        }
    })



export const SidebarSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(allPermittedPages.pending, (state, action) => {
            state.logoutData = null;
            state.loading = true;
        });
        builder.addCase(allPermittedPages.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(allPermittedPages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }

})

export default SidebarSlice.reducer;