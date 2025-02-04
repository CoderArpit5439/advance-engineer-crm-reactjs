import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: [],
};

export const addTask = createAsyncThunk(
  "addTask",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("t_name", body.t_name);
      formData.append("t_due_date", body.t_due_date);
      formData.append("t_description", body.t_description);
      formData.append("t_assign_to", body.t_assign_to);
      formData.append("t_status", body.t_status);
  

      const res = await instance.post("task/add-task", formData);
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

export const fetchTask = createAsyncThunk("fetchTask", async () => {
  try {
    const res = await instance.get("task/fetch-task");
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const deleteTask = createAsyncThunk(
  "deleteTask",
  async (t_id, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `task/remove-task?t_id=${t_id}`
      );
      return res; // Return the deleted user ID
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// CreateSlice for managing the lead state
export const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });
    // Fetch Leads
    builder.addCase(fetchTask.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(fetchTask.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message; // Set error properly
    });

    //remove Leads
    builder.addCase(deleteTask.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null; // Reset the error when starting a new request
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(deleteTask.rejected, (state, action) => {
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

export default TaskSlice.reducer;
