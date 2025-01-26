
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  loading: false,
  error: null,
  response: null,
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
      // Handling error and rejecting with a custom message
      return rejectWithValue(error.response ? error.response.data : "An unknown error occurred");
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
      return rejectWithValue(error.response ? error.response.data : "An unknown error occurred");
    }
  }
);

export const fetchLead = createAsyncThunk("fetchData",async ()=>{
    try {
        const res = await instance.get("lead/fetch-lead");
        return res.data;
      } catch (error) {
        throw error;
      }
})

export const deleteLead = createAsyncThunk("deleteLead", async (leadId, { rejectWithValue }) => {
    try {
     const res =  await instance.get(`/lead/remove-lead?lead_id=${leadId}`);
      return res; // Return the deleted user ID
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

// CreateSlice for managing the lead state
export const LeadSlice = createSlice({
  name: "LeadSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AddLead.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(AddLead.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(AddLead.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });
    // Fetch Leads
    builder.addCase(fetchLead.pending, (state) => {
        state.loading = true;
        state.response = null;
        state.error = null; // Reset the error when starting a new request
      });
      builder.addCase(fetchLead.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      });
      builder.addCase(fetchLead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Set error properly
      });

      //remove Leads
      builder.addCase(deleteLead.pending, (state) => {
        state.loading = true;
        state.response = null;
        state.error = null; // Reset the error when starting a new request
      });
      builder.addCase(deleteLead.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      });
      builder.addCase(deleteLead.rejected, (state, action) => {
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

export default LeadSlice.reducer;
