
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  loading: false,
  error: null,
  response: null,
};


export const addInquiry = createAsyncThunk(
  "addInquiry",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("inq_contact", body.inq_contact);
      formData.append("inq_message", body.inq_message);
      formData.append("inq_name", body.inq_name);
      formData.append("inq_email", body.inq_email);
      formData.append("inq_status", body.inq_status);
    

      const res = await instance.post("inquiry/add-inquiry", formData);
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

export const fetchInquiry = createAsyncThunk("fetchInquiry",async ()=>{
    try {
        const res = await instance.get("inquiry/fetch-inquiry");
        return res.data;
      } catch (error) {
        throw error;
      }
})

export const deleteInquiry = createAsyncThunk("deleteInquiry", async (inq_id, { rejectWithValue }) => {
    try {
     const res =  await instance.get(`/inquiry/remove-inquiry?inq_id=${inq_id}`);
      return res; // Return the deleted user ID
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });

// CreateSlice for managing the lead state
export const InquirySlice = createSlice({
  name: "InquirySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addInquiry.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(addInquiry.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(addInquiry.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });
    // Fetch Leads
    builder.addCase(fetchInquiry.pending, (state) => {
        state.loading = true;
        state.response = null;
        state.error = null; // Reset the error when starting a new request
      });
      builder.addCase(fetchInquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      });
      builder.addCase(fetchInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Set error properly
      });

      //remove Leads
      builder.addCase(deleteInquiry.pending, (state) => {
        state.loading = true;
        state.response = null;
        state.error = null; // Reset the error when starting a new request
      });
      builder.addCase(deleteInquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      });
      builder.addCase(deleteInquiry.rejected, (state, action) => {
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

export default InquirySlice.reducer;
