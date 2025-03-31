import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

// Define initial state structure
const initialState = {
  data: null,
  loading: false,
  error: null,
  response: [],
  count: 0,
  leads: [], // Added for managing searchLead results
  status: 'idle', // Added to track loading states for searchLead
};

export const AddLead = createAsyncThunk(
  "AddLead",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("l_name", body.lead_name);
      formData.append("l_mobile", body.lead_number);
      formData.append("l_email", body.lead_email);
      formData.append("l_address", body.lead_address);
      formData.append("l_type", body.lead_type);
      formData.append("l_join", body.lead_join);
      formData.append("l_source", body.lead_source);

      const res = await instance.post("lead/add-lead", formData);
      return res.data;
    } catch (error) {
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
      return rejectWithValue(
        error.response ? error.response.data : "An unknown error occurred"
      );
    }
  }
);

export const fetchLead = createAsyncThunk(
  "fetchData",
  async ({ offset, limit }) => {
    try {
      const res = await instance.get("lead/fetch-lead", {
        params: { offset, limit },
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const searchLead = createAsyncThunk(
  "searchLead",
  async ({ search, offset, limit }) => {
    try {
      const res = await instance.get("lead/search-lead-by-mobile", {
        params: { search, offset, limit },
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteLead = createAsyncThunk(
  "deleteLead",
  async (leadId, { rejectWithValue }) => {
    try {
      const res = await instance.get(`/lead/remove-lead?lead_id=${leadId}`);
      return res; // Return the deleted user ID
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
); 

// CreateSlice for managing the lead state
export const LeadSlice = createSlice({
  name: "LeadSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // AddLead
    builder.addCase(AddLead.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(AddLead.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(AddLead.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    // Fetch Leads
    builder.addCase(fetchLead.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(fetchLead.fulfilled, (state, action) => {
      state.loading = false;
      state.count = action.payload.count;
      state.response = action.payload;
    });
    builder.addCase(fetchLead.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    // Delete Lead
    builder.addCase(deleteLead.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(deleteLead.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteLead.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });

    // Update Lead
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

    // Search Leads
    builder.addCase(searchLead.pending, (state) => {
      state.status = 'loading'; 
      state.leads = []; 
    });

    builder.addCase(searchLead.fulfilled, (state, action) => {
      state.status = 'succeeded'; 
      console.log(action.payload,111)
      state.response = action.payload.data;  
    });

    builder.addCase(searchLead.rejected, (state, action) => {
      state.status = 'failed'; 
      state.error = action.error.message;  
    });
  },
});

export default LeadSlice.reducer;
