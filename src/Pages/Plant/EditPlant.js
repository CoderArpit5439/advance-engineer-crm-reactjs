import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updatePlant } from "../../Redux/crmSlices/plantSlice/PlantSlice"; // Make sure this import is correct
import { fetchCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";

const EditPlant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentComapnyID, setCurrentComapnyID] = useState("");
  const [comapnyName, setComapnyName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Fetch companies for dropdown
  useEffect(() => {
    dispatch(fetchCompany());
  }, [dispatch]);

  const { loading, data: companies } = useSelector((state) => ({
    loading: state.rootReducer.LeadSlice?.loading,
    data: state.rootReducer.companySlice?.data?.data,
  }));

  useEffect(() => {
    const storedData = localStorage.getItem("editPlant");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(parsedData,currentComapnyID)
      setCurrentComapnyID(parsedData?.c_id);
      setComapnyName(parsedData?.company_name);
      setValue("p_state", parsedData?.p_state);
      setValue("p_city", parsedData?.p_city);
      setValue("p_area_working", parsedData?.p_area_working);
      setValue("p_tax_type", parsedData?.p_tax_type);
      setValue("p_pincode", parsedData?.p_pincode);
      setValue("p_address", parsedData?.p_address);
      setValue("p_gst", parsedData?.p_gst);
      setValue("p_security_contact", parsedData?.p_security_contact);
      setValue("p_account_contact", parsedData?.p_account_contact);
      setValue("p_store_contact", parsedData?.p_store_contact);
      setValue("p_other_contact", parsedData?.p_other_contact);
      setValue("p_security_email", parsedData?.p_security_email);
      setValue("p_account_email", parsedData?.p_account_email);
      setValue("p_store_email", parsedData?.p_store_email);
      setValue("p_other_email", parsedData?.p_other_email);
      setValue(
        "p_international_domestic",
        parsedData?.p_international_domestic
      );
    }
  }, [setValue]);

  const onSubmit = (formData) => {
    const storedData = JSON.parse(localStorage.getItem("editPlant"));
    const updatedData = {
      p_id: storedData?.p_id,
      c_id: currentComapnyID,
      p_state: formData.p_state,
      p_city: formData.p_city,
      p_area_working: formData.p_area_working,
      p_tax_type: formData.p_tax_type,
      p_pincode: formData.p_pincode,
      p_address: formData.p_address,
      p_gst: formData.p_gst,
      p_security_contact: formData.p_security_contact,
      p_account_contact: formData.p_account_contact,
      p_store_contact: formData.p_store_contact,
      p_other_contact: formData.p_other_contact,
      p_security_email: formData.p_security_email,
      p_account_email: formData.p_account_email,
      p_store_email: formData.p_store_email,
      p_other_email: formData.p_other_email,
      p_international_domestic: formData.p_international_domestic,
    };
    dispatch(updatePlant(updatedData));
    localStorage.removeItem("editPlant");
    navigate("/list-plant");
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
                          <i className="fas fa-home" /> Edit Plant
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
                                    errors.c_id ? "is-invalid" : ""
                                  }`}
                                  onChange={(e) =>
                                    setCurrentComapnyID(e.target.value)
                                  }
                                
                                >
                                  <option value={currentComapnyID}>
                                    {comapnyName}
                                  </option>
                                  {companies?.map((company) => (
                                    <option
                                      key={company.c_id}
                                      value={company.c_id}
                                    >
                                      {company.c_name}
                                    </option>
                                  ))}
                                </select>
                                {errors.c_id && (
                                  <div className="invalid-feedback">
                                    {errors.c_id.message}
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
                                    errors.p_state ? "is-invalid" : ""
                                  }`}
                                  placeholder="State"
                                  {...register("p_state", {
                                    required: "State is required",
                                  })}
                                />
                                {errors.p_state && (
                                  <div className="invalid-feedback">
                                    {errors.p_state.message}
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
                                    errors.p_city ? "is-invalid" : ""
                                  }`}
                                  placeholder="City"
                                  {...register("p_city", {
                                    required: "City is required",
                                  })}
                                />
                                {errors.p_city && (
                                  <div className="invalid-feedback">
                                    {errors.p_city.message}
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
                                    errors.p_area_working ? "is-invalid" : ""
                                  }`}
                                  placeholder="Working area"
                                  {...register("p_area_working", {
                                    required: "Working area is required",
                                  })}
                                />
                                {errors.p_area_working && (
                                  <div className="invalid-feedback">
                                    {errors.p_area_working.message}
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
                                    errors.p_tax_type ? "is-invalid" : ""
                                  }`}
                                  {...register("p_tax_type", {
                                    required: "Tax type is required",
                                  })}
                                >
                                  <option value="">
                                    -- Select Tax type --
                                  </option>
                                  <option value="GST">GST (18%)</option>
                                  <option value="SEZ">SEZ (0%)</option>
                                </select>
                                {errors.p_tax_type && (
                                  <div className="invalid-feedback">
                                    {errors.p_tax_type.message}
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
                                    errors.p_pincode ? "is-invalid" : ""
                                  }`}
                                  placeholder="Pin code"
                                  {...register("p_pincode", {
                                    required: "Pin code is required",
                                    pattern: {
                                      value: /^[0-9]{6}$/,
                                      message: "Pin code must be 6 digits",
                                    },
                                  })}
                                />
                                {errors.p_pincode && (
                                  <div className="invalid-feedback">
                                    {errors.p_pincode.message}
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
                                    errors.p_address ? "is-invalid" : ""
                                  }`}
                                  placeholder="Address"
                                  {...register("p_address", {
                                    required: "Address is required",
                                  })}
                                />
                                {errors.p_address && (
                                  <div className="invalid-feedback">
                                    {errors.p_address.message}
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
                                    errors.p_gst ? "is-invalid" : ""
                                  }`}
                                  placeholder="GST"
                                  {...register("p_gst", {
                                    required: "GST is required",
                                  })}
                                />
                                {errors.p_gst && (
                                  <div className="invalid-feedback">
                                    {errors.p_gst.message}
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
                                    errors.p_security_contact
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  placeholder="Security Contact Number"
                                  {...register("p_security_contact", {
                                    required:
                                      "Security contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.p_security_contact && (
                                  <div className="invalid-feedback">
                                    {errors.p_security_contact.message}
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
                                    errors.p_account_contact ? "is-invalid" : ""
                                  }`}
                                  placeholder="Account Contact Number"
                                  {...register("p_account_contact", {
                                    required:
                                      "Account contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.p_account_contact && (
                                  <div className="invalid-feedback">
                                    {errors.p_account_contact.message}
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
                                    errors.p_store_contact ? "is-invalid" : ""
                                  }`}
                                  placeholder="Store Contact Number"
                                  {...register("p_store_contact", {
                                    required:
                                      "Store contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.p_store_contact && (
                                  <div className="invalid-feedback">
                                    {errors.p_store_contact.message}
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
                                    errors.p_other_contact ? "is-invalid" : ""
                                  }`}
                                  placeholder="Other Contact Number"
                                  {...register("p_other_contact", {
                                    required:
                                      "Other contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "Phone number must be 10 digits",
                                    },
                                  })}
                                />
                                {errors.p_other_contact && (
                                  <div className="invalid-feedback">
                                    {errors.p_other_contact.message}
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
                                    errors.p_security_email ? "is-invalid" : ""
                                  }`}
                                  placeholder="Security Email Id"
                                  {...register("p_security_email", {
                                    required: "Security email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.p_security_email && (
                                  <div className="invalid-feedback">
                                    {errors.p_security_email.message}
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
                                    errors.p_account_email ? "is-invalid" : ""
                                  }`}
                                  placeholder="Account Email Id"
                                  {...register("p_account_email", {
                                    required: "Account email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.p_account_email && (
                                  <div className="invalid-feedback">
                                    {errors.p_account_email.message}
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
                                    errors.p_store_email ? "is-invalid" : ""
                                  }`}
                                  placeholder="Store Email Id"
                                  {...register("p_store_email", {
                                    required: "Store email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.p_store_email && (
                                  <div className="invalid-feedback">
                                    {errors.p_store_email.message}
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
                                    errors.p_other_email ? "is-invalid" : ""
                                  }`}
                                  placeholder="Other Email Id"
                                  {...register("p_other_email", {
                                    required: "Other email is required",
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid email address",
                                    },
                                  })}
                                />
                                {errors.p_other_email && (
                                  <div className="invalid-feedback">
                                    {errors.p_other_email.message}
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
                                  disabled={loading}
                                >
                                  {loading ? "Updating..." : "Update Plant"}
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
    </div>
  );
};

export default EditPlant;
