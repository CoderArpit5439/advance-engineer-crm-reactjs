import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../../Config/Config"


const initialState = {
    data:null,
    loading:false,
    error:null,
    response:null
}

export const GetCustomerList = createAsyncThunk(
    "GetCustomerList",async (body) => {
        try {
            const response = await instance.get("customer/fetch-customer")
            return response.data
        } catch (error) {
            return error
        }
    }
)

export const CreateCustomer = createAsyncThunk(
    "CreateCustomer",
    async (body) => {
        try {
            const formData = new FormData();
            formData.append("c_fullname", body.c_fullname);
            formData.append("c_address", body.c_address);
            formData.append("c_company_name", body.c_company_name);
            formData.append("c_department", body.c_department);
            formData.append("c_dob", body.c_dob);
            formData.append("c_email", body.c_email);
            formData.append("c_gender", body.c_gender);
            formData.append("c_mobile", body.c_mobile);
            formData.append("c_password", body.c_password);
            formData.append("c_post", body.c_post);
            formData.append("c_rank", body.c_rank);
            formData.append("c_status", body.c_status);
            formData.append("c_no_of_quotation", body.c_no_of_quotation);
            formData.append("c_image", body.c_image[0]);
            const res = await instance.post("customer/add-customer", formData)
            return res.data
        } catch (error) {
            throw error
        }
    }
)



export const CustomerSlice = createSlice({
    name: "CustomerSlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

        builder.addCase(GetCustomerList.pending,(state,action) => {
            state.loading = true;
            state.data = null;
            state.response = null;
        });
        builder.addCase(GetCustomerList.fulfilled,(state,action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(GetCustomerList.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(CreateCustomer.pending,(state,action) => {
            state.loading = true;
            state.response = null;
        });
        builder.addCase(CreateCustomer.fulfilled,(state,action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(CreateCustomer.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })

        
    }
})

export default CustomerSlice.reducer;