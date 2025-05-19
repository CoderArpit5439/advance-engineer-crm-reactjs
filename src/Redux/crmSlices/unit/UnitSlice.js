import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  singleUnit: null,
  loading: false,
  error: null,
  response: null,
};
export const addUnit = createAsyncThunk(
  "addUnit",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      // Append all form data to the FormData object
      formData.append("u_name", body.u_name);
      formData.append("u_company_id", body.u_company_id);
      formData.append("u_plant_id", body.u_plant_id);

      const response = await instance.post("unit/add-unit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchUnits = createAsyncThunk("fetchUnits", async () => {
  try {
    const res = await instance.get("unit/get-unit");
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const updateUnit = createAsyncThunk(
  "updateUnit",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();

     formData.append("u_name", body.u_name);
      formData.append("u_company_id", body.u_company_id);
      formData.append("u_plant_id", body.u_plant_id);

      const res = await instance.post("unit/update-unit", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "An unknown error occurred"
      );
    }
  }
);

export const fetchSingleUnit = createAsyncThunk("fetchSingleUnit", async (id) => {
  try {
    const res = await instance.get(`unit/fetch-single-unit?id=${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
});

export const UnitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    resetCompanyResponse: (state) => {
      state.response = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create Company
    builder.addCase(addUnit.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(addUnit.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addUnit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Get Company List
    builder.addCase(fetchUnits.pending, (state) => {
      state.loading = true;
      // state.data = null;
      state.error = null;
    });
    builder.addCase(fetchUnits.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUnits.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchSingleUnit.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchSingleUnit.fulfilled, (state, action) => {
      state.loading = false;
      state.singleUnit = action.payload;
    });
    builder.addCase(fetchSingleUnit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Company
    builder.addCase(updateUnit.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(updateUnit.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateUnit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { resetCompanyResponse } = UnitSlice.actions;
export default UnitSlice.reducer;
