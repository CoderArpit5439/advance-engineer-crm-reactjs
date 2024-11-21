import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../../Config/Config"


const initialState = {
    data:null,
    loading:false,
    error:null,
    response:null,
}

export const GetCategoryList = createAsyncThunk(
    "GetCategoryList",async (body) => {
        try {
            const response = await instance.get(`category/fetch-category?page=${body.page}`)
            return response.data
        } catch (error) {
            return error
        }
    }
)

export const CreateCategory = createAsyncThunk(
    "CreateCategory",
    async (body) => {
        try {
            const formData = new FormData();
            formData.append("cat_name", body.cat_name);
            formData.append("cat_code", body.cat_code);
            formData.append("cat_image", body.cat_image[0]);
            const res = await instance.post("category/add-category", formData)
            return res.data
        } catch (error) {
            throw error
        }
    }
)

export const updateCategory = createAsyncThunk(
    "updateCategory",
    async (body) => {
        try {
            const formData = new FormData();
            formData.append("cat_name", body.data.cat_name);
            formData.append("cat_code", body.data.cat_code);
            // formData.append("cat_image", body.data.cat_image[0]);
            const res = await instance.post(`category/update-category?id=${body.cId}`, formData)
            return res.data
        } catch (error) {
            throw error
        }
    }
)



export const CategorySlice = createSlice({
    name: "CategorySlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

        builder.addCase(GetCategoryList.pending,(state,action) => {
            state.loading = true;
            state.data = null;
            state.response = null;
        });
        builder.addCase(GetCategoryList.fulfilled,(state,action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(GetCategoryList.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })


        builder.addCase(CreateCategory.pending,(state,action) => {
            state.loading = true;
            state.response = null;
        });
        builder.addCase(CreateCategory.fulfilled,(state,action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(CreateCategory.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(updateCategory.pending,(state,action) => {
            state.loading = true;
            state.response = null;
        });
        builder.addCase(updateCategory.fulfilled,(state,action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(updateCategory.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })

        
    }
})

export default CategorySlice.reducer;