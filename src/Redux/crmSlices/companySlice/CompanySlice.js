import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  pagination: {
    currentPage: 1,
    perPage: 10,
    totalPages: 0,
    totalItems: 0,
  },
  loading: false,
  error: null,
  response: null,
};

export const createCompany = createAsyncThunk(
  "company/createCompany",
  async (body) => {
    try {
      const formData = new FormData();
      formData.append("c_name", body.c_company_name);
      formData.append("c_image", body.company_logo[0]);
      formData.append("c_website", body.website);
      formData.append("c_head_office_address", body.head_office_address);
      formData.append("c_head_office_contact", body.head_office_contact);
      formData.append("total_country_plant", body.total_countries_plant);
      formData.append("total_india_plant", body.total_india_plant);
      formData.append("c_type_of_manufacturing", body.manufacturing_type);
      formData.append("c_bank_name", body.bank_name);
      formData.append("c_bank_ifsc", body.bank_ifsc);
      formData.append("c_bank_account_no", body.bank_account);
      formData.append("c_bank_branch", body.bank_branch);
      formData.append(
        "c_international_domestic",
        body.p_international_domestic
      );
      const res = await instance.post("company/add-company", formData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCompany = createAsyncThunk("fetchCompany", async () => {
  try {
    const res = await instance.get("company/get-company");
    return res.data;
  } catch (error) {
    throw error;
  }
});
export const updateCompany = createAsyncThunk(
  "company/updateCompany",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("c_id", body.id);
      formData.append("c_name", body.c_name);
      formData.append("c_image", body.c_image[0]); 
      formData.append("c_website", body.c_website);
      formData.append("c_head_office_address", body.c_head_office_address);
      formData.append("c_head_office_contact", body.c_head_office_contact);
      formData.append("total_country_plant", body.total_country_plant);
      formData.append("total_india_plant", body.total_india_plant);
      formData.append("c_type_of_manufacturing", body.c_type_of_manufacturing);
      formData.append("c_bank_name", body.c_bank_name);
      formData.append("c_bank_ifsc", body.c_bank_ifsc);
      formData.append("c_bank_account_no", body.c_bank_account_no);
      formData.append("c_bank_branch", body.c_bank_branch);
      formData.append(
        "c_international_domestic",
        body.c_international_domestic
      );
       
      const res = await instance.post("company/update-company", formData);
      return res.data;
      
    } catch (error) {
      // Return the error message if something goes wrong
      return rejectWithValue(
        error.response ? error.response.data : "An unknown error occurred"
      );
    }
  }
);

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    resetCompanyResponse: (state) => {
      state.response = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Create Company
    builder.addCase(createCompany.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(createCompany.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(createCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Get Company List
    builder.addCase(fetchCompany.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(fetchCompany.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Company
    builder.addCase(updateCompany.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(updateCompany.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateCompany.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { resetCompanyResponse } = companySlice.actions;
export default companySlice.reducer;
