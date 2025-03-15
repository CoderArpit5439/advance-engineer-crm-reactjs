import React, { useState, useEffect } from "react";
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  addInventory,

} from "../../Redux/crmSlices/Inventory/InventorySlice";
const AddInventory = () => {
    const dispatch = useDispatch();
      const navigate = useNavigate();
     const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
        watch,
        reset,
      } = useForm();
        const { data, count, loading, response } = useSelector((state) => ({
          data: state.rootReducer.InventorySlice?.data?.data,
          loading: state.rootReducer.InventorySlice?.loading,
          response: state.rootReducer.InventorySlice?.response,
        }));
      
        // Form Submission Handler
        const onSubmit = (data) => {
          dispatch(addInventory(data));
          navigate("/inventory-list")
          reset();
        };
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <div className="position-relative mx-n4 mt-n4">
        <div className="">
          <img src="" className="profile-wid-img" alt="" />
          <div className="overlay-content">
            <div className="text-end p-3">
              <div className="p-0 ms-auto rounded-circle profile-photo-edit"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-12 mb-10">
          <div className="card mt-xxl-n5">
            <div className="card-header">
              <ul
                className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#inventoryDetails"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-box"></i> Add Inventory
                  </a>
                </li>
              </ul>
            </div>

            <div className="card-body p-4">
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="inventoryDetails"
                  role="tabpanel"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      {/* Inventory Name */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Inventory Name:</label>
                          <input
                            type="text"
                            placeholder="Enter Inventory Name"
                            className="form-control"
                            {...register("in_name", {
                              required: "Inventory Name is required",
                            })}
                          />
                          {errors.in_name && (
                            <p className="text-danger">
                              {errors.in_name.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Code */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Code:</label>
                          <input
                            type="number"
                            placeholder="Enter Code"
                            className="form-control"
                            {...register("in_code", {
                              required: "Code is required",
                            })}
                          />
                          {errors.in_code && (
                            <p className="text-danger">
                              {errors.in_code.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Category */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Category:</label>
                          <input
                            type="text"
                            placeholder="Enter Category"
                            className="form-control"
                            {...register("in_cat", {
                              required: "Category is required",
                            })}
                          />
                          {errors.in_cat && (
                            <p className="text-danger">
                              {errors.in_cat.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Quantity:</label>
                          <input
                            type="number"
                            placeholder="Enter Quantity"
                            className="form-control"
                            {...register("in_qty", {
                              required: "Quantity is required",
                            })}
                          />
                          {errors.in_qty && (
                            <p className="text-danger">
                              {errors.in_qty.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Rate */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Rate:</label>
                          <input
                            type="number"
                            placeholder="Enter Rate"
                            className="form-control"
                            {...register("in_rate", {
                              required: "Rate is required",
                            })}
                          />
                          {errors.in_rate && (
                            <p className="text-danger">
                              {errors.in_rate.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Value */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Value:</label>
                          <input
                            type="number"
                            placeholder="Enter Value"
                            className="form-control"
                            {...register("in_value", {
                              required: "Value is required",
                            })}
                          />
                          {errors.in_value && (
                            <p className="text-danger">
                              {errors.in_value.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Submit & Close Buttons */}
                      <div className="col-lg-12">
                        <div className="hstack gap-2 justify-content-end">
                      
                          <button type="submit" className="btn btn-success">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*end tab-pane*/}
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
  </div>
</div>

    </div>
  )
}

export default AddInventory
