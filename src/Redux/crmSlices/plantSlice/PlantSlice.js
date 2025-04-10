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
        formData.append("p_international_domestic", body.p_international_domestic);
      
  
        const response = await instance.post("plant/add-plant", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
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
// export const updateCompany = createAsyncThunk(
//   "company/updateCompany",
//   async (body, { rejectWithValue }) => {
//     try {
//       const formData = new FormData();
  

//       formData.append("c_id", body?.id);
//       formData.append("c_name", body?.c_name);
//       formData.append("c_image", body?.company_image[0]); 
//       formData.append("c_website", body?.c_website);
//       formData.append("c_head_office_address", body?.c_head_office_address);
//       formData.append("c_head_office_contact", body?.c_head_office_contact);
//       formData.append("total_country_plant", body?.total_country_plant);
//       formData.append("total_india_plant", body?.total_india_plant);
//       formData.append("c_type_of_manufacturing", body?.c_type_of_manufacturing);
//       formData.append("c_bank_name", body?.c_bank_name);
//       formData.append("c_bank_ifsc", body?.c_bank_ifsc);
//       formData.append("c_bank_account_no", body?.c_bank_account_no);
//       formData.append("c_bank_branch", body?.c_bank_branch);
//       formData.append(
//         "c_international_domestic",
//         body.c_international_domestic
//       );
//       console.log(formData)
//       const res = await instance.post("company/update-company", formData);
//       return res.data;
      
//     } catch (error) {
//       // Return the error message if something goes wrong
//       return rejectWithValue(
//         error.response ? error.response.data : "An unknown error occurred"
//       );
//     }
//   }
// );

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

    // // Update Company
    // builder.addCase(updateCompany.pending, (state) => {
    //   state.loading = true;
    //   state.response = null;
    //   state.error = null;
    // });
    // builder.addCase(updateCompany.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.response = action.payload;
    // });
    // builder.addCase(updateCompany.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export const { resetCompanyResponse } = plantSlice.actions;
export default plantSlice.reducer;
