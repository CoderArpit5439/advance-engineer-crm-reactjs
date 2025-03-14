import React, { useEffect, useState } from "react";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addInquiry,
  deleteInquiry,
  fetchInquiry,
} from "../../Redux/crmSlices/Inquiry/InquirySlice";
import Header from "../../Layout/Header";
const AddInquiry = () => {
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
  const onSubmit = (inquiry) => {
    dispatch(addInquiry(inquiry));
    navigate("/list-inquiry")
    reset();
  };
  return (
    <div>
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
              {/*end col*/}
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
                          href="#personalDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="fas fa-home" /> Add Inquiry
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row">
                            {/* Inquiry Name */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Inquiry Name:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("inq_name", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.inq_name.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Mobile No. */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Mobile No.:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Mobile No."
                                  className="form-control"
                                  {...register("inq_contact", {
                                    required: "Mobile No. is required",
                                  })}
                                />
                                {errors.inq_contact && (
                                  <p className="text-danger">
                                    {errors.inq_contact.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Email */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                  {...register("inq_email", {
                                    required: "Email is required",
                                    pattern: {
                                      value:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                      message: "Please enter a valid email",
                                    },
                                  })}
                                />
                                {errors.inq_email && (
                                  <p className="text-danger">
                                    {errors.inq_email.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Message */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Message:</label>
                                <input
                                  type="text"
                                  placeholder="Message"
                                  className="form-control"
                                  {...register("inq_message", {
                                    required: "Message is required",
                                  })}
                                />
                                {errors.inq_message && (
                                  <p className="text-danger">
                                    {errors.inq_message.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Status */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Status:</label>
                                <select
                                  className="form-control"
                                  {...register("inq_status", {
                                    required: "Status is required",
                                  })}
                                >
                                  <option value="Complete">Complete</option>
                                  <option value="In-complete">
                                    In-complete
                                  </option>
                                </select>
                                {errors.inq_status && (
                                  <p className="text-danger">
                                    {errors.inq_status.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Submit & Close Buttons */}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary text-5rem"
                                >
                                  Add Inquiry
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
  );
};

export default AddInquiry;
