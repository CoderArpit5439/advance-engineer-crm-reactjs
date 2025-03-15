import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: [],
};

export const addInventory = createAsyncThunk(
  "addInventory",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("in_name", body.in_name);
      formData.append("in_code", body.in_code);
      formData.append("in_cat", body.in_cat);
      formData.append("in_qty", body.in_qty);
      formData.append("in_rate", body.in_rate);
      formData.append("in_value", body.in_value);

      const res = await instance.post("inventory/add-inventory", formData);
      return res.data;
    } catch (error) {
      // Handling error and rejecting with a custom message
      return rejectWithValue(
        error.response ? error.response.data : "An unknown error occurred"
      );
    }
  }
);

export const updateLead = createAsyncThunk(
  "updateLead",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("l_id", body.l_id);
      formData.append("l_name", body.l_name);
      formData.append("l_mobile", body.l_mobile);
      formData.append("l_email", body.l_email);
      formData.append("l_address", body.l_address);
      formData.append("l_type", body.l_type);
      formData.append("l_join", body.l_join);
      formData.append("l_source", body.l_source);

      const res = await instance.post("lead/update-lead", formData);
      return res.data;
    } catch (error) {
      // Handling error and rejecting with a custom message
      return rejectWithValue(
        error.response ? error.response.data : "An unknown error occurred"
      );
    }
  }
);

export const fetchInventory = createAsyncThunk("fetchInventory", async () => {
  try {
    const res = await instance.get("inventory/fetch-inventory");
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const deleteInventory = createAsyncThunk(
  "deleteInventory",
  async (in_id, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `inventory/remove-inventory?in_id=${in_id}`
      );
      return res; // Return the deleted user ID
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// CreateSlice for managing the lead state
export const InventorySlice = createSlice({
  name: "InventorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addInventory.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(addInventory.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addInventory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });
    // Fetch Leads
    builder.addCase(fetchInventory.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(fetchInventory.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(fetchInventory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });

    //remove Leads
    builder.addCase(deleteInventory.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(deleteInventory.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteInventory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });

    // Update Leads
    builder.addCase(updateLead.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(updateLead.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateLead.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
  },
});

export default InventorySlice.reducer;
