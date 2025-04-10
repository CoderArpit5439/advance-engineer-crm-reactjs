import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { AddLead } from "../../Redux/crmSlices/Lead/LeadSlice";
const AddNewLead = () => {
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
  const { data, count, loading, response } = useSelector((state) => {
    return {
      data: state.rootReducer.LeadSlice?.data?.data,
      loading: state.rootReducer.LeadSlice?.loading,
      response: state.rootReducer.LeadSlice?.response,
    };
  });

  const onSubmit = (lead) => {
    dispatch(AddLead(lead));
    navigate("/lead-list");
    reset();
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content mt-10">
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
                <div className="card ">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="fas fa-home" /> Add Lead
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-4">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                        {/* Refactored Form Starts Here */}
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="space-y-6"
                        >
                          {/* Lead Name and Email */}
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="leadNameInput"
                                  className="form-label"
                                >
                                  Lead Name:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="leadNameInput"
                                  placeholder="Enter Lead Name"
                                  {...register("lead_name", {
                                    required: "Lead Name is required",
                                  })}
                                />
                                {errors.lead_name && (
                                  <span className="text-red-500">
                                    {errors.lead_name.message}
                                  </span> // Red text
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="leadEmailInput"
                                  className="form-label"
                                >
                                  Email:
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="leadEmailInput"
                                  placeholder="Enter Email"
                                  {...register("lead_email", {
                                    required: "Email is required",
                                  })}
                                />
                                {errors.lead_email && (
                                  <span className="text-red-500">
                                    {errors.lead_email.message}
                                  </span> // Red text
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Mobile and Type */}
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="leadMobileInput"
                                  className="form-label"
                                >
                                  Mobile:
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="leadMobileInput"
                                  placeholder="Enter Mobile"
                                  {...register("lead_number", {
                                    required: "Mobile is required",
                                  })}
                                />
                                {errors.lead_number && (
                                  <span className="text-red-500">
                                    {errors.lead_number.message}
                                  </span> // Red text
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="leadTypeInput"
                                  className="form-label"
                                >
                                  Type:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="leadTypeInput"
                                  placeholder="Enter Type"
                                  {...register("lead_type", {
                                    required: "Type is required",
                                  })}
                                />
                                {errors.lead_type && (
                                  <span className="text-red-500">
                                    {errors.lead_type.message}
                                  </span> // Red text
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Lead Source and Lead Join */}
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="leadSourceInput"
                                  className="form-label"
                                >
                                  Lead Source:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="leadSourceInput"
                                  placeholder="Enter Lead Source"
                                  {...register("lead_source", {
                                    required: "Lead Source is required",
                                  })}
                                />
                                {errors.lead_source && (
                                  <span className="text-red-500">
                                    {errors.lead_source.message}
                                  </span> // Red text
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="leadJoinInput"
                                  className="form-label"
                                >
                                  Lead Join:
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="leadJoinInput"
                                  placeholder="Enter Lead Join"
                                  {...register("lead_join", {
                                    required: "Lead Join is required",
                                  })}
                                />
                                {errors.lead_join && (
                                  <span className="text-red-500">
                                    {errors.lead_join.message}
                                  </span> // Red text
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Address */}
                          <div className="mb-3">
                            <label
                              htmlFor="leadAddressInput"
                              className="form-label"
                            >
                              Address:
                            </label>
                            <textarea
                              id="leadAddressInput"
                              className="form-control"
                              rows="3"
                              placeholder="Enter Address"
                              {...register("lead_address", {
                                required: "Address is required",
                              })}
                            ></textarea>
                            {errors.lead_address && (
                              <span className="text-red-500">
                                {errors.lead_address.message}
                              </span>
                            )}
                          </div>

                          {/* Modal Footer - Buttons */}
                          <div className="modal-footer flex justify-center mt-3 space-x-4">
                            {/* Save Button */}
                            <button
                              type="submit" // This will trigger form submission
                              className=" btn btn-success flex justifiy-end    px-8 py-3 text-xl font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                              Save
                            </button>
                          </div>
                        </form>

                        {/* Refactored Form Ends Here */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewLead;
