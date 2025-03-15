import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import instance from "../../../Config/Config";
import axios from "axios";

const initialState = {
    loading: false,
    data: null,
    error: null,
}

export const loginAuth = createAsyncThunk(
    "loginAuth",
    async (data) => {

        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        try {
            const response = await axios.post("https://api.advanceengineerings.com/crm/auth/login", formData);
          
            if (response?.data?.token) {
                const now = new Date();
                const midnight = new Date(now.getFullYear(), now.getMonth(), (now.getDate() + 1)); // Midnight of the next day
                Cookies.set('authToken', response.data.token, { expires: midnight }); // Expires in 1 days
            }
            return response?.data;

        } catch (error) {
            return error;
        }
    })



export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(loginAuth.pending, (state, action) => {
            state.logoutData = null;
            state.loading = true;
        });
        builder.addCase(loginAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(loginAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }

})

export default AuthSlice.reducer;