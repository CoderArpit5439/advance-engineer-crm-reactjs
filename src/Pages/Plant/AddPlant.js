import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPlant } from "../../Redux/crmSlices/plantSlice/PlantSlice";
import { fetchCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";

const AddPlant = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      company: "",
      state: "",
      city: "",
      workingArea: "",
      taxType: "",
      pinCode: "",
      address: "",
      gst: "",
      securityContactNumber: "",
      accountContactNumber: "",
      storeContactNumber: "",
      otherContactNumber: "",
      securityEmail: "",
      accountEmail: "",
      storeEmail: "",
      otherEmail: "",
      p_international_domestic: "",
    },
  });

  const { data, count, loading, response, status, error } = useSelector(
    (state) => {
      return {
        data: state.rootReducer.companySlice?.data?.data,
        loading: state.rootReducer.companySlice?.loading,
        response: state.rootReducer.companySlice?.response,
        count: state.rootReducer.companySlice?.count,
        status: state.rootReducer.companySlice?.status,
        error: state.rootReducer.companySlice?.error,
      };
    }
  );

  console.log(data, response);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCompany());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(addPlant(data));
    navigate("/list-plant");
  };

  return (
    <>
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
                          <i className="fas fa-home" /> Add Plant
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
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Select Company
                                </label>
                                <select
                                  className={`form-control ${
                                    errors.company ? "is-invalid" : ""
                                  }`}
                                  {...register("company", {
                                    required: "Company is required",
                                  })}
                                >
                                  <option value="">-- Select company --</option>
                                  {data?.map((company) => (
                                    <option
                                      key={company.c_id}
                                      value={company.c_id}
                                    >
                                      {company.c_name}
                                    </option>
                                  ))}
                                  {/* Add your company options here */}
                                </select>
                                {errors.company && (
                                  <div className="invalid-feedback">
                                    {errors.company.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">State</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.state ? "is-invalid" : ""
                                  }`}
                                  placeholder="State"
                                  {...register("state", {
                                    required: "State is required",
                                  })}
                                />
                                {errors.state && (
                                  <div className="invalid-feedback">
                                    {errors.state.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">City</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.city ? "is-invalid" : ""
                                  }`}
                                  placeholder="City"
                                  {...register("city", {
                                    required: "City is required",
                                  })}
                                />
                                {errors.city && (
                                  <div className="invalid-feedback">
                                    {errors.city.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Working area
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.workingArea ? "is-invalid" : ""
                                  }`}
                                  placeholder="Working area"
                                  {...register("workingArea", {
                                    required: "Working area is required",
                                  })}
                                />
                                {errors.workingArea && (
                                  <div className="invalid-feedback">
                                    {errors.workingArea.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Select Tax type
                                </label>
                                <select
                                  className={`form-control ${
                                    errors.taxType ? "is-invalid" : ""
                                  }`}
                                  {...register("taxType", {
                                    required: "Tax type is required",
                                  })}
                                >
                                  <option value="">
                                    -- Select Tax type --
                                  </option>
                                  <option value="GST">GST (18%)</option>
                                  <option value="SEZ">SEZ (0%)</option>
                                </select>
                                {errors.taxType && (
                                  <div className="invalid-feedback">
                                    {errors.taxType.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Pin code</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.pinCode ? "is-invalid" : ""
                                  }`}
                                  placeholder="Pin code"
                                  {...register("pinCode", {
                                    required: "Pin code is required",
                                    pattern: {
                                      value: /^[0-9]{6}$/,
                                      message: "Pin code must be 6 digits",
                                    },
                                  })}
                                />
                                {errors.pinCode && (
                                  <div className="invalid-feedback">
                                    {errors.pinCode.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Address</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.address ? "is-invalid" : ""
                                  }`}
                                  placeholder="Address"
                                  {...register("address", {
                                    required: "Address is required",
                                  })}
                                />
                                {errors.address && (
                                  <div className="invalid-feedback">
                                    {errors.address.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">GST</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.gst ? "is-invalid" : ""
                                  }`}
                                  placeholder="GST"
                                  {...register("gst", {
                                    required: "GST is required",
                                  })}
                                />
                                {errors.gst && (
                                  <div className="invalid-feedback">
                                    {errors.gst.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Security Contact Number
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.securityContactNumber
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  placeholder="Security Contact Number"
                                  {...register("securityContactNumber", {
                                    required:
                                      "Security contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.securityContactNumber && (
                                  <div className="invalid-feedback">
                                    {errors.securityContactNumber.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Account Contact Number
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.accountContactNumber
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  placeholder="Account Contact Number"
                                  {...register("accountContactNumber", {
                                    required:
                                      "Account contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.accountContactNumber && (
                                  <div className="invalid-feedback">
                                    {errors.accountContactNumber.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Store Contact Number
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.storeContactNumber
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  placeholder="Store Contact Number"
                                  {...register("storeContactNumber", {
                                    required:
                                      "Store contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.storeContactNumber && (
                                  <div className="invalid-feedback">
                                    {errors.storeContactNumber.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Other Contact Number
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.otherContactNumber
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  placeholder="Other Contact Number"
                                  {...register("otherContactNumber", {
                                    required:
                                      "Other contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.otherContactNumber && (
                                  <div className="invalid-feedback">
                                    {errors.otherContactNumber.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Security Email Id
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.securityEmail ? "is-invalid" : ""
                                  }`}
                                  placeholder="Security Email Id"
                                  {...register("securityEmail", {
                                    required: "Security email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.securityEmail && (
                                  <div className="invalid-feedback">
                                    {errors.securityEmail.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Account Email Id
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.accountEmail ? "is-invalid" : ""
                                  }`}
                                  placeholder="Account Email Id"
                                  {...register("accountEmail", {
                                    required: "Account email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.accountEmail && (
                                  <div className="invalid-feedback">
                                    {errors.accountEmail.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Store Email Id
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.storeEmail ? "is-invalid" : ""
                                  }`}
                                  placeholder="Store Email Id"
                                  {...register("storeEmail", {
                                    required: "Store email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.storeEmail && (
                                  <div className="invalid-feedback">
                                    {errors.storeEmail.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Other Email Id
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.otherEmail ? "is-invalid" : ""
                                  }`}
                                  placeholder="Other Email Id"
                                  {...register("otherEmail", {
                                    required: "Other email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.otherEmail && (
                                  <div className="invalid-feedback">
                                    {errors.otherEmail.message}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  International & Domestic and Both*
                                </label>

                                <div className="d-block">
                                  <input
                                    type="radio"
                                    id="international"
                                    value="International"
                                    {...register("p_international_domestic", {
                                      required: true,
                                    })}
                                  />
                                  <label htmlFor="international">
                                    International
                                  </label>
                                </div>

                                <div className="d-block">
                                  <input
                                    type="radio"
                                    id="domestic"
                                    value="Domestic"
                                    {...register("p_international_domestic", {
                                      required: true,
                                    })}
                                  />
                                  <label htmlFor="domestic">Domestic</label>
                                </div>

                                <div className="d-block">
                                  <input
                                    type="radio"
                                    id="both"
                                    value="Both"
                                    {...register("p_international_domestic", {
                                      required: true,
                                    })}
                                  />
                                  <label htmlFor="both">Both</label>
                                </div>

                                {errors.p_international_domestic && (
                                  <div className="text-danger small">
                                    Please select one option
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mt-4">
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                >
                                  Submit
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddPlant;
