import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addsupport } from "../../Redux/crmSlices/support/SupportSlice";

import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
const AddSupport = () => {
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
  const onSubmit = (data) => {
    dispatch(addsupport(data));
    navigate("/support-list");
    reset();
  };
  return (
    <div>
      <Header />
      <Sidebar />
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
                          <i className="fas fa-box"></i> Add Support
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
                            {/* Order No */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Order no.:</label>
                                <input
                                  type="number"
                                  placeholder="Order no."
                                  className="form-control"
                                  {...register("s_order_no", {
                                    required: "Order number is required",
                                  })}
                                />
                                {errors.s_order_no && (
                                  <p className="text-danger">
                                    {errors.s_order_no.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Contact */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Contact:</label>
                                <input
                                  type="text"
                                  placeholder="Contact"
                                  className="form-control"
                                  {...register("s_contact", {
                                    required: "Contact is required",
                                  })}
                                />
                                {errors.s_contact && (
                                  <p className="text-danger">
                                    {errors.s_contact.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* POC */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">POC:</label>
                                <input
                                  type="text"
                                  placeholder="POC"
                                  className="form-control"
                                  {...register("s_poc", {
                                    required: "POC is required",
                                  })}
                                />
                                {errors.s_poc && (
                                  <p className="text-danger">
                                    {errors.s_poc.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Item */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Item:</label>
                                <input
                                  type="text"
                                  placeholder="Item"
                                  className="form-control"
                                  {...register("s_item", {
                                    required: "Item is required",
                                  })}
                                />
                                {errors.s_item && (
                                  <p className="text-danger">
                                    {errors.s_item.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Due Date */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Due date:</label>
                                <input
                                  type="date"
                                  placeholder="Due date"
                                  className="form-control"
                                  {...register("s_due_date", {
                                    required: "Due date is required",
                                  })}
                                />
                                {errors.s_due_date && (
                                  <p className="text-danger">
                                    {errors.s_due_date.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Quantity */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Qty:</label>
                                <input
                                  type="number"
                                  placeholder="Quantity"
                                  className="form-control"
                                  {...register("s_qty", {
                                    required: "Quantity is required",
                                  })}
                                />
                                {errors.s_qty && (
                                  <p className="text-danger">
                                    {errors.s_qty.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Pending */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Pndg:</label>
                                <input
                                  type="number"
                                  placeholder="Pending"
                                  className="form-control"
                                  {...register("s_pndg", {
                                    required: "Pending is required",
                                  })}
                                />
                                {errors.s_pndg && (
                                  <p className="text-danger">
                                    {errors.s_pndg.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Done */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Done:</label>
                                <input
                                  type="number"
                                  placeholder="Done"
                                  className="form-control"
                                  {...register("s_done", {
                                    required: "Done is required",
                                  })}
                                />
                                {errors.s_done && (
                                  <p className="text-danger">
                                    {errors.s_done.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Unit */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Unit:</label>
                                <input
                                  type="text"
                                  placeholder="Unit"
                                  className="form-control"
                                  {...register("s_unit", {
                                    required: "Unit is required",
                                  })}
                                />
                                {errors.s_unit && (
                                  <p className="text-danger">
                                    {errors.s_unit.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Status */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Status:</label>
                                <input
                                  type="text"
                                  placeholder="Status"
                                  className="form-control"
                                  {...register("s_status", {
                                    required: "Status is required",
                                  })}
                                />
                                {errors.s_status && (
                                  <p className="text-danger">
                                    {errors.s_status.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Total */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Total:</label>
                                <input
                                  type="text"
                                  placeholder="Total"
                                  className="form-control"
                                  {...register("s_total", {
                                    required: "Total is required",
                                  })}
                                />
                                {errors.s_total && (
                                  <p className="text-danger">
                                    {errors.s_total.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Submit & Close Buttons */}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
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
  );
};

export default AddSupport;
