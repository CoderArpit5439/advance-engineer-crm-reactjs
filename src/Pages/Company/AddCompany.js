import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";

const AddCompany = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      international: false,
      domestic: false,
      both: false,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data) {
      console.log(data);
      dispatch(createCompany(data));
      // navigate("/list-company")
    }
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
                          <i className="fas fa-home" /> Add Company
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
                                <label
                                  htmlFor="c_company_name"
                                  className="form-label"
                                >
                                  Company Name*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.c_company_name ? "is-invalid" : ""
                                  }`}
                                  id="c_company_name"
                                  placeholder="Enter your company"
                                  {...register("c_company_name", {
                                    required: "Company name is required",
                                  })}
                                />
                                {errors.c_company_name && (
                                  <div className="invalid-feedback">
                                    {errors.c_company_name.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="company_logo"
                                  className="form-label"
                                >
                                  Upload company logo*
                                </label>
                                <input
                                  type="file"
                                  className={`form-control ${
                                    errors.company_logo ? "is-invalid" : ""
                                  }`}
                                  id="company_logo"
                                  {...register("company_logo", {
                                    required: "Company logo is required",
                                  })}
                                />
                                {errors.company_logo && (
                                  <div className="invalid-feedback">
                                    {errors.company_logo.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label htmlFor="website" className="form-label">
                                  Website*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.website ? "is-invalid" : ""
                                  }`}
                                  id="website"
                                  placeholder="Enter website URL"
                                  {...register("website", {
                                    required: "Website is required",
                                    pattern: {
                                      value:
                                        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                                      message: "Enter a valid website URL",
                                    },
                                  })}
                                />
                                {errors.website && (
                                  <div className="invalid-feedback">
                                    {errors.website.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="head_office_address"
                                  className="form-label"
                                >
                                  Head Office Address*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.head_office_address
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  id="head_office_address"
                                  placeholder="Enter head office address"
                                  {...register("head_office_address", {
                                    required: "Head office address is required",
                                  })}
                                />
                                {errors.head_office_address && (
                                  <div className="invalid-feedback">
                                    {errors.head_office_address.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="head_office_contact"
                                  className="form-label"
                                >
                                  Head Office Contact No.*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.head_office_contact
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  id="head_office_contact"
                                  placeholder="Enter contact number"
                                  {...register("head_office_contact", {
                                    required: "Contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10,15}$/,
                                      message: "Enter a valid phone number",
                                    },
                                  })}
                                />
                                {errors.head_office_contact && (
                                  <div className="invalid-feedback">
                                    {errors.head_office_contact.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="total_countries_plant"
                                  className="form-label"
                                >
                                  No. of total countries plant*
                                </label>
                                <input
                                  type="number"
                                  className={`form-control ${
                                    errors.total_countries_plant
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  id="total_countries_plant"
                                  placeholder="Enter number"
                                  {...register("total_countries_plant", {
                                    required: "This field is required",
                                    min: {
                                      value: 0,
                                      message: "Must be a positive number",
                                    },
                                  })}
                                />
                                {errors.total_countries_plant && (
                                  <div className="invalid-feedback">
                                    {errors.total_countries_plant.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="total_india_plant"
                                  className="form-label"
                                >
                                  No. of total india plant*
                                </label>
                                <input
                                  type="number"
                                  className={`form-control ${
                                    errors.total_india_plant ? "is-invalid" : ""
                                  }`}
                                  id="total_india_plant"
                                  placeholder="Enter number"
                                  {...register("total_india_plant", {
                                    required: "This field is required",
                                    min: {
                                      value: 0,
                                      message: "Must be a positive number",
                                    },
                                  })}
                                />
                                {errors.total_india_plant && (
                                  <div className="invalid-feedback">
                                    {errors.total_india_plant.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="manufacturing_type"
                                  className="form-label"
                                >
                                  Type of manufacturing*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.manufacturing_type
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  id="manufacturing_type"
                                  placeholder="Enter manufacturing type"
                                  {...register("manufacturing_type", {
                                    required: "Manufacturing type is required",
                                  })}
                                />
                                {errors.manufacturing_type && (
                                  <div className="invalid-feedback">
                                    {errors.manufacturing_type.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="bank_name"
                                  className="form-label"
                                >
                                  Bank Name*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.bank_name ? "is-invalid" : ""
                                  }`}
                                  id="bank_name"
                                  placeholder="Enter bank name"
                                  {...register("bank_name", {
                                    required: "Bank name is required",
                                  })}
                                />
                                {errors.bank_name && (
                                  <div className="invalid-feedback">
                                    {errors.bank_name.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="bank_ifsc"
                                  className="form-label"
                                >
                                  Bank IFSC*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.bank_ifsc ? "is-invalid" : ""
                                  }`}
                                  id="bank_ifsc"
                                  placeholder="Enter IFSC code"
                                  {...register("bank_ifsc", {
                                    required: "IFSC code is required",
                                  })}
                                />
                                {errors.bank_ifsc && (
                                  <div className="invalid-feedback">
                                    {errors.bank_ifsc.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="bank_account"
                                  className="form-label"
                                >
                                  Bank Account*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.bank_account ? "is-invalid" : ""
                                  }`}
                                  id="bank_account"
                                  placeholder="Enter account number"
                                  {...register("bank_account", {
                                    required: "Account number is required",
                                    pattern: {
                                      value: /^[0-9]{9,18}$/,
                                      message: "Enter a valid account number",
                                    },
                                  })}
                                />
                                {errors.bank_account && (
                                  <div className="invalid-feedback">
                                    {errors.bank_account.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="bank_branch"
                                  className="form-label"
                                >
                                  Bank Branch*
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.bank_branch ? "is-invalid" : ""
                                  }`}
                                  id="bank_branch"
                                  placeholder="Enter branch name"
                                  {...register("bank_branch", {
                                    required: "Branch name is required",
                                  })}
                                />
                                {errors.bank_branch && (
                                  <div className="invalid-feedback">
                                    {errors.bank_branch.message}
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

                            <div className="col-lg-12">
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

export default AddCompany;
