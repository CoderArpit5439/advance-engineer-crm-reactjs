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
    const res = await instance.get("employee/get-employe");
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const deleteUser = createAsyncThunk("deleteUser", async (userId, { rejectWithValue }) => {
  try {
   const res =  await instance.get(`/employee/remove-employe?emp_id=${userId}`);
    return res; // Return the deleted user ID
  } catch (error) {
    return rejectWithValue(error.response.data);
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

    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
      state.response = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder
    .addCase(deleteUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    })
    .addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});


export default EmployeeSlice.reducer