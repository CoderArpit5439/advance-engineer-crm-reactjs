import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  loading: false,
  error: null,
  response: null,
};

// Fetch Manufacturing data
export const fetchManufacturing = createAsyncThunk(
  "fetchManufacturing",
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get("manufacturing/get-manufacturing");
      return res.data;
    } catch (error) {
     console.log("Get Api Not Responding")
    }
  }
);

// Add Manufacturing
export const addManufacturing = createAsyncThunk(
  "addManufacturing",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("m_category", body.m_category);
      formData.append("m_product", body.m_product);
      formData.append("m_code", body.m_code);
      formData.append("m_customer", body.m_customer);
      formData.append("m_launch", body.m_launch);
      formData.append("m_target", body.m_target);
      formData.append("m_stage", body.m_stage);
      formData.append("m_quantity", body.m_quantity);
      formData.append("m_unit", body.m_unit);

      const res = await instance.post("manufacturing/add-manufacturing", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : "An unknown error occurred");
    }
  }
);

//Update 
export const updateManufacturing = createAsyncThunk(
    "updateManufacturing",
    async (body, { rejectWithValue }) => {
      try {
        const formData = new FormData();
        formData.append("m_id",body.m_id)
        formData.append("m_category", body.m_category);
        formData.append("m_product", body.m_product);
        formData.append("m_code", body.m_code);
        formData.append("m_customer", body.m_customer);
        formData.append("m_launch", body.m_launch);
        formData.append("m_target", body.m_target);
        formData.append("m_stage", body.m_stage);
        formData.append("m_quantity", body.m_quantity);
        formData.append("m_unit", body.m_unit);
  
        const res = await instance.post("manufacturing/update-manufacturing", formData);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.response ? error.response.data : "An unknown error occurred");
      }
    }
  );
  

// Remove Manufacturing
export const removeManufacturing = createAsyncThunk(
  "removeManufacturing",
  async (m_id, { rejectWithValue }) => {
    try {
      const res = await instance.get(`manufacturing/remove-manufacturing?m_id=${m_id}`);
      return res.data;
    } catch (error) {
        console.log("api not responding")
    }
  }
);

export const ManufacturingSlice = createSlice({
  name: "ManufacturingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add Manufacturing
    builder.addCase(addManufacturing.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(addManufacturing.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(addManufacturing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    // Fetch Manufacturing
    builder.addCase(fetchManufacturing.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(fetchManufacturing.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(fetchManufacturing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    // Update Manufacturing
    builder.addCase(updateManufacturing.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(updateManufacturing.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateManufacturing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    // Remove Manufacturing
    builder.addCase(removeManufacturing.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(removeManufacturing.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(removeManufacturing.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export default ManufacturingSlice.reducer;
