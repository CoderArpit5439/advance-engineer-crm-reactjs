import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  loading: false,
  error: null,
  response: null,
};

// Thunk to add a graphic image
export const AddGraphicsImage = createAsyncThunk(
  "AddGraphicsImage",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("graphic_title", body.graphic_title);
      formData.append("graphic_image", body.graphic_image[0]); // Assuming single image upload

      const res = await instance.post("/graphic/add-graphic", formData);
      return res.data;
    } catch (error) {
      // Return error with more control
      return rejectWithValue(
        error.response?.data || "An error occurred while adding graphics image"
      );
    }
  }
);

// Thunk to fetch graphic images with additional query support
export const fetchGraphicsImage = createAsyncThunk(
  "fetchGraphicsImage",
  async (params, { rejectWithValue }) => {
    try {
      // Build query string dynamically
      const { page = 1, search = "", limit = 20 } = params || {};
      const query = `graphic/fetch-graphic?page=${page}&search=${search}&limit=${limit}`;

      const response = await instance.get(query);
      return response.data;
    } catch (error) {
      // Return error with more control
      return rejectWithValue(
        error.response?.data || "An error occurred while fetching graphics"
      );
    }
  }
);

export const imageApproved = createAsyncThunk("imageApproved",async(body,{rejectWithValue})=>{
  try {
    console.log(body)
    const formData = new FormData();
    formData.append("graphic_id",body.graphic_id);
    formData.append("graphic_approved",body.graphic_approved);
   const res = await instance.post("graphic/approve-graphic",formData);
   return res.data
  } catch (error) {
    return rejectWithValue(
      error.response?.data || "An error occurred while update graphics image status"
    );
  }
} 

)

const GraphicsSlice = createSlice({
  name: "GraphicsSlice",
  initialState,
  reducers: {
    // Optionally, you can add sync reducers for local state updates here
  },
  extraReducers: (builder) => {
    // Add Graphics Image Thunk
    builder
      .addCase(AddGraphicsImage.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.response = null;
      })
      .addCase(AddGraphicsImage.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = null;
      })
      .addCase(AddGraphicsImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add graphics image";
      });

    // Fetch Graphics Image Thunk
    builder
      .addCase(fetchGraphicsImage.pending, (state) => {
        state.loading = true;
        state.data = null;
        state.error = null; // Clear errors on new request
        state.response = null;
      })
      .addCase(fetchGraphicsImage.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchGraphicsImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch graphics images";
      });

      // Image aprroved 
   builder
      .addCase(imageApproved.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.response = null;
      })
      .addCase(imageApproved.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        state.error = null;
      })
      .addCase(imageApproved.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to Upadte status graphics image";
      });
  },
});

export default GraphicsSlice.reducer;
