import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

// Define initial state structure
const initialState = {
  data: null,
  loading: false,
  error: null,
  response: [],
  count: 0,
  loginActivitiesList: [], // Added for managing searchLead results
  status: 'idle', // Added to track loading states for searchLead
};



export const individualLoginActivity = createAsyncThunk(
  "individualLoginActivity",
  async () => {
    try {
      const res = await instance.get("login-activities/individuals-login-activities");

      console.log(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

// CreateSlice for managing the lead state
export const LoginActivitySlice = createSlice({
  name: "LoginActivitySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // AddLead
    builder.addCase(individualLoginActivity.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(individualLoginActivity.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(individualLoginActivity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
    
  },
});

export default LoginActivitySlice.reducer;
