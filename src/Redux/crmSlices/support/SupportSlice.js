import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: [],
};

export const addsupport = createAsyncThunk(
  "addsupport",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("s_order_no", body.s_order_no);
      formData.append("s_contact", body.s_contact);
      formData.append("s_poc", body.s_poc);
      formData.append("s_item", body.s_item);
      formData.append("s_due_date", body.s_due_date);
      formData.append("s_qty", body.s_qty);
      formData.append("s_pndg", body.s_pndg);
      formData.append("s_done", body.s_done);
      formData.append("s_unit", body.s_unit);
      formData.append("s_status", body.s_status);
      formData.append("s_total", body.s_total);

      const res = await instance.post("support/add-support", formData);
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

export const fetchSupport = createAsyncThunk("fetchSupport", async () => {
  try {
    const res = await instance.get("support/fetch-support");
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const deleteSupport = createAsyncThunk(
  "deleteSupport",
  async (s_id, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `support/remove-support?s_id=${s_id}`
      );
      return res; // Return the deleted user ID
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// CreateSlice for managing the lead state
export const SupportSlice = createSlice({
  name: "SupportSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addsupport.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(addsupport.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addsupport.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });
    // Fetch Leads
    builder.addCase(fetchSupport.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; 
    });
    builder.addCase(fetchSupport.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(fetchSupport.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; 
    });

    //remove Leads
    builder.addCase(deleteSupport.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(deleteSupport.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteSupport.rejected, (state, action) => {
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

export default SupportSlice.reducer;
