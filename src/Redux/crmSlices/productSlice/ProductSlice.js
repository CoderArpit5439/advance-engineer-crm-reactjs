import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../../Config/Config"


const initialState = {
    data: null,
    loading: false,
    error: null,
    response: null,
    nameList: null,
    categoryList: null
}

export const GetProductList = createAsyncThunk(
    "GetProductList", async (body) => {
        try {
            const response = await instance.get("product/fetch-product")
            return response.data
        } catch (error) {
            return error
        }
    }
)
export const GetCategoryNameList = createAsyncThunk(
    "GetCategoryNameList", async (body) => {
        try {
            const response = await instance.get("category/fetch-list-category")
            console.log(response)
            return response.data
        } catch (error) {
            return error
        }
    }
)

export const CreateProduct = createAsyncThunk(
    "CreateProduct",
    async (body) => {
        try {
            console.log(body)
            const formData = new FormData();
            const fieldsToAppend = [
                "p_name",
                "p_category",
                "p_unique_id",
                "p_price",
                "p_material",
                "p_moc",
                "p_dimension",
                "p_brand",
                "p_color",
                "p_weight",
                "p_description",
                "p_manufacturer",
                "p_country",
                "p_code",
                "p_drawing_no",
                "p_finish_type",
                "p_status",
                "p_media",
            ];

            fieldsToAppend.forEach(field => {
                if (field === "p_media") {
                    for (let i = 0; i < body.p_media.length; i++) {
                        // 'images' name of the formData values must match the action method param on your controller
                        formData.append('p_media[]', body.p_media[i]);
                    }
                } else {
                    formData.append(field, body[field]);
                }
            });
            const res = await instance.post("product/add-product", formData)
            return res.data
        } catch (error) {
            throw error
        }
    }
)

export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (body) => {
        try {
            const formData = new FormData();
            const fieldsToAppend = [
                "p_name",
                "p_category",
                "p_unique_id",
                "p_price",
                "p_material",
                "p_moc",
                "p_dimension",
                "p_brand",
                "p_color",
                "p_weight",
                "p_description",
                "p_manufacturer",
                "p_country",
                "p_code",
                "p_drawing_no",
                "p_finish_type",
                "p_status",
            ];

            fieldsToAppend.forEach(field => {
                formData.append(field, body.data[field]);
            });
            const res = await instance.post(`product/update-product?id=${body.id}`, formData)
            return res.data
        } catch (error) {
            throw error
        }
    }
)



export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(GetProductList.pending, (state, action) => {
            state.loading = true;
            state.data = null;
            state.response = null;
        });
        builder.addCase(GetProductList.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(GetProductList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(GetCategoryNameList.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(GetCategoryNameList.fulfilled, (state, action) => {
            state.loading = false;
            state.categoryList = action.payload;
        });
        builder.addCase(GetCategoryNameList.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(CreateProduct.pending, (state, action) => {
            state.loading = true;
            state.response = null;
        });
        builder.addCase(CreateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(CreateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(updateProduct.pending, (state, action) => {
            state.loading = true;
            state.response = null;
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })


    }
})

export default ProductSlice.reducer;