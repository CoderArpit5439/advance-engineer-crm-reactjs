import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLead } from "../../Redux/crmSlices/Lead/LeadSlice"; // Make sure you have this action

const EditLeadForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { loading } = useSelector((state) => ({
    loading: state.rootReducer.LeadSlice?.loading,
  }));

  useEffect(() => {
    const storedData = localStorage.getItem("editData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Set each form field individually
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  const onSubmit = (formData) => {
    // Add the lead ID from localStorage or wherever you're storing it
    const storedData = JSON.parse(localStorage.getItem("editData"));
    const updatedLead = {
      ...formData,
      id: storedData.id,
    };
    dispatch(updateLead(updatedLead));
    navigate("/lead-list");
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content mt-10" style={{ marginTop: "30px" }}>
        <div className="page-content">
          <div className="container-fluid">
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
                          <i className="fas fa-home" /> Edit Lead
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
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="space-y-6"
                        >
                          <input type="hidden" {...register("l_id")} />
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
                                  {...register("l_name", {
                                    required: "Lead Name is required",
                                  })}
                                />
                                {errors.l_name && (
                                  <span className="text-red-500">
                                    {errors.l_name.message}
                                  </span>
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
                                  {...register("l_email", {
                                    required: "Email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.l_email && (
                                  <span className="text-red-500">
                                    {errors.l_email.message}
                                  </span>
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
                                  type="tel"
                                  className="form-control"
                                  id="leadMobileInput"
                                  placeholder="Enter Mobile"
                                  {...register("l_mobile", {
                                    required: "Mobile is required",
                                    pattern: {
                                      value: /^[0-9]{10,15}$/,
                                      message: "Invalid phone number",
                                    },
                                  })}
                                />
                                {errors.l_mobile && (
                                  <span className="text-red-500">
                                    {errors.l_mobile.message}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="leadEmailInput"
                                  className="form-label"
                                >
                                  Type:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="leadEmailInput"
                                  placeholder="Enter type"
                                  {...register("l_type", {
                                    required: "type is required",
                                    pattern: {
                                      message: "required",
                                    },
                                  })}
                                />
                                {errors.l_type && (
                                  <span className="text-red-500">
                                    {errors.l_type.message}
                                  </span>
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
                                  id="leadEmailInput"
                                  placeholder="Enter type"
                                  {...register("l_source", {
                                    required: "type is required",
                                    pattern: {
                                      message: "required",
                                    },
                                  })}
                                />
                                {errors.l_source && (
                                  <span className="text-red-500">
                                    {errors.l_source.message}
                                  </span>
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
                                  {...register("l_join", {
                                    required: "Lead Join is required",
                                  })}
                                />
                                {errors.l_join && (
                                  <span className="text-red-500">
                                    {errors.l_join.message}
                                  </span>
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
                              {...register("l_address", {
                                required: "Address is required",
                                minLength: {
                                  value: 10,
                                  message:
                                    "Address must be at least 10 characters",
                                },
                              })}
                            ></textarea>
                            {errors.l_address && (
                              <span className="text-red-500">
                                {errors.l_address.message}
                              </span>
                            )}
                          </div>

                          {/* Modal Footer - Buttons */}
                          <div className="modal-footer flex justify-center mt-3 space-x-4">
                            <button
                              type="submit"
                              disabled={loading}
                              className="btn btn-success flex justify-end px-8 py-3 text-xl font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                              {loading ? "Saving..." : "Save Changes"}
                            </button>
                            <button
                              type="button"
                              onClick={() => navigate("/lead-list")}
                              className="btn btn-danger flex justify-end px-8 py-3 text-xl font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLeadForm;
