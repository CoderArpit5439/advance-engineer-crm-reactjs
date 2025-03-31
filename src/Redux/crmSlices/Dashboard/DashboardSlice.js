import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../../Config/Config"


const initialState = {
    data:[],
    loading:false,
    error:null,
    response:[],
    nameList:null,
    quotation:null
}

export const GetDashboardDetails = createAsyncThunk(
    "GetDashboardDetails",async () => {
    
        try {
            const response = await instance.get("dashboard/fetch-dashboard")
          
            return response?.data
        } catch (error) {
            return error
        }
    }
)


export const MyDashboardSlice = createSlice({
    name: "MyDashboardSlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

        builder.addCase(GetDashboardDetails.pending,(state,action) => {
            state.loading = true;
            state.data = null;
            state.response = null;
        });
        builder.addCase(GetDashboardDetails.fulfilled,(state,action) => {
     
            state.loading = false;
           
            state.data = action?.payload;
        });
        builder.addCase(GetDashboardDetails.rejected,(state,action) => {
            state.loading = false;
            state.error = action?.payload;
        })

        
    }
})

export default MyDashboardSlice.reducer;