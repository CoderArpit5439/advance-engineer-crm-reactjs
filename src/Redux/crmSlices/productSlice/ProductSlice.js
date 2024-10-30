import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../../Config/Config"


const initialState = {
    data:null,
    loading:false,
    error:null,
    response:null,
    nameList:null,

}

export const GetProductList = createAsyncThunk(
    "GetProductList",async (body) => {
        try {
            const response = await instance.get("product/fetch-product")
            return response.data
        } catch (error) {
            return error
        }
    }
)
// export const GetProductNameList = createAsyncThunk(
//     "GetProductNameList",async (body) => {
//         try {
//             const response = await instance.get("customer/fetch-list-customer-name")
//             console.log(response)
//             return response.data
//         } catch (error) {
//             return error
//         }
//     }
// )

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
            console.log(body);
            // const formData = new FormData();
            // formData.append("c_fullname", body.data.c_fullname);
            // formData.append("c_address", body.data.c_address);
            // formData.append("c_company_name", body.data.c_company_name);
            // formData.append("c_department", body.data.c_department);
            // formData.append("c_dob", body.data.c_dob);
            // formData.append("c_email", body.data.c_email);
            // formData.append("c_gender", body.data.c_gender);
            // formData.append("c_mobile", body.data.c_mobile);
            // // formData.append("c_password", body.data.c_password);
            // formData.append("c_post", body.data.c_post);
            // formData.append("c_rank", body.data.c_rank);
            // formData.append("c_status", body.data.c_status);
            // formData.append("c_no_of_quotation", body.data.c_no_of_quotation);
            // const res = await instance.post(`customer/update-customer?id=${body.cId}`, formData)
            // return res.data
        } catch (error) {
            throw error
        }
    }
)



export const ProductSlice = createSlice({
    name: "ProductSlice",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

        builder.addCase(GetProductList.pending,(state,action) => {
            state.loading = true;
            state.data = null;
            state.response = null;
        });
        builder.addCase(GetProductList.fulfilled,(state,action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(GetProductList.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })

        // builder.addCase(GetProductNameList.pending,(state,action) => {
        //     state.loading = true;
        // });
        // builder.addCase(GetProductNameList.fulfilled,(state,action) => {
        //     state.loading = false;
        //     state.nameList = action.payload;
        // });
        // builder.addCase(GetProductNameList.rejected,(state,action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // })

        builder.addCase(CreateProduct.pending,(state,action) => {
            state.loading = true;
            state.response = null;
        });
        builder.addCase(CreateProduct.fulfilled,(state,action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(CreateProduct.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(updateProduct.pending,(state,action) => {
            state.loading = true;
            state.response = null;
        });
        builder.addCase(updateProduct.fulfilled,(state,action) => {
            state.loading = false;
            state.response = action.payload;
        });
        builder.addCase(updateProduct.rejected,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })

        
    }
})

export default ProductSlice.reducer;