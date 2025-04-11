import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  loading: false,
  error: null,
  response: null,
};
export const addPlant = createAsyncThunk(
  "addPlant",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      // Append all form data to the FormData object
      formData.append("company_id", body.company);
      formData.append("p_state", body.state);
      formData.append("p_city", body.city);
      formData.append("p_area_working", body.workingArea);
      formData.append("p_tax_type", body.taxType);
      formData.append("p_pincode", body.pinCode);
      formData.append("p_address", body.address);
      formData.append("p_gst", body.gst);
      formData.append("p_security_contact", body.securityContactNumber);
      formData.append("p_account_contact", body.accountContactNumber);
      formData.append("p_store_contact", body.storeContactNumber);
      formData.append("p_other_contact", body.otherContactNumber);
      formData.append("p_security_email", body.securityEmail);
      formData.append("p_account_email", body.accountEmail);
      formData.append("p_store_email", body.storeEmail);
      formData.append("p_other_email", body.otherEmail);
      formData.append(
        "p_international_domestic",
        body.p_international_domestic
      );

      const response = await instance.post("plant/add-plant", formData, {
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

export const fetchPlants = createAsyncThunk("fetchPlants", async () => {
  try {
    const res = await instance.get("plant/get-plant");
    return res.data;
  } catch (error) {
    throw error;
  }
});
export const updatePlant = createAsyncThunk(
  "updatePlant",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();

      formData.append("c_id", body?.c_id);
      formData.append("p_id",body?.p_id)
      formData.append("p_state", body?.p_state);
      formData.append("p_city", body?.p_city);
      formData.append("p_area_working", body?.p_area_working);
      formData.append("p_tax_type", body?.p_tax_type);
      formData.append("p_pincode", body?.p_pincode);
      formData.append("p_address", body?.p_address);
      formData.append("p_gst", body?.p_gst);
      formData.append("p_security_contact", body?.p_security_contact);
      formData.append("p_account_contact", body?.p_account_contact);
      formData.append("p_store_contact", body?.p_store_contact);
      formData.append("p_other_contact", body?.p_other_contact);
      formData.append("p_security_email", body?.p_security_email);
      formData.append("p_account_email", body.p_account_email);
      formData.append("p_store_email", body?.p_store_email);
      formData.append("p_other_email", body?.p_other_email);
      formData.append(
        "p_international_domestic",
        body?.p_international_domestic
      );

      const res = await instance.post("plant/update-plant", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "An unknown error occurred"
      );
    }
  }
);

export const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    resetCompanyResponse: (state) => {
      state.response = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create Company
    builder.addCase(addPlant.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(addPlant.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addPlant.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Get Company List
    builder.addCase(fetchPlants.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(fetchPlants.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Company
    builder.addCase(updatePlant.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(updatePlant.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updatePlant.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { resetCompanyResponse } = plantSlice.actions;
export default plantSlice.reducer;
