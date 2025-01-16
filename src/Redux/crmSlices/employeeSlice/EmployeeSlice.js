import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";


const initialState = {
  data: null,
  loading: false,
  error: null,
  response: null,
};

export const AddUser = createAsyncThunk("AddUser", async (body) => {
  try {
 
    const formData = new FormData();
    formData.append("emp_name", body.user_name);
    formData.append("emp_password", body.user_pass);
    formData.append("emp_image", body.user_image[0]);
    formData.append("emp_role", body.user_role);
    const res = await instance.post("employee/add-employe",formData)
    return res.data
  } catch (error) {
    throw error;
  }
});


// Fetch all employees
export const fetchUser = createAsyncThunk("fetchUser", async () => {
  try {
    const res = await instance.get("employee/get-employees");
    return res.data;
  } catch (error) {
    throw error;
  }
});


export const EmployeeSlice = createSlice({
  name: "EmployeeSlice",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(AddUser.pending, (state, action) => {
      state.loading = true;
      state.response = null;
    });
    builder.addCase(AddUser.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(AddUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
