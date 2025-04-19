import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../../Config/Config";

const initialState = {
  data: null,
  loading: false,
  error: null,
  response: null,
};
export const addOrder = createAsyncThunk(
  "addOrder",
  async (body, { rejectWithValue }) => {
    console.log(body);
    try {
      const formData = new FormData();
      formData.append("or_customer", body.customer);
      formData.append("or_contact", body.contactNo);
      formData.append("or_order_no", body.orderNo);
      formData.append("or_cstr_p_o", body.cstrPO);
      formData.append("or_item", body.item);
      formData.append("or_due_date", body.dueDate);
      formData.append("or_qty", body.quantity);
      formData.append("or_pndg", body.pndg);
      formData.append("or_done", body.done);
      formData.append("or_unit", body.unit);
      formData.append("or_total", body.total);
      formData.append("or_status", body.status);

      const response = await instance.post("order/add-order", formData, {
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

export const getOrder = createAsyncThunk("getOrder", async () => {
  try {
    const res = await instance.get("order/get-order");
    return res.data;
  } catch (error) {
    throw error;
  }
});
export const updateOrder = createAsyncThunk(
  "updateOrder",
  async (body, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("or_id", body.orderId);
      formData.append("or_customer", body.formData.or_customer);
      formData.append("or_contact", body.formData.or_contact);
      formData.append("or_order_no", body.formData.or_order_no);
      formData.append("or_cstr_p_o", body.formData.or_cstr_p_o);
      formData.append("or_item", body.formData.or_item);
      formData.append("or_due_date", body.formData.or_due_date);
      formData.append("or_qty", body.formData.or_qty);
      formData.append("or_pndg", body.formData.or_pndg);
      formData.append("or_done", body.formData.or_done);
      formData.append("or_unit", body.formData.or_unit);
      formData.append("or_total", body.formData.or_total);
      formData.append("or_status", body.formData.or_status);

      const res = await instance.post("order/update-order", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "An unknown error occurred"
      );
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetCompanyResponse: (state) => {
      state.response = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // // Create Company
    builder.addCase(updateOrder.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(updateOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // // Get Orders List
    builder.addCase(getOrder.pending, (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    });
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Update Company
    builder.addCase(addOrder.pending, (state) => {
      state.loading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { resetCompanyResponse } = orderSlice.actions;
export default orderSlice.reducer;
