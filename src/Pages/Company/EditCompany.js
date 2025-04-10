import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";

const EditCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoUrl, setLogoUrl] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { loading } = useSelector((state) => ({
    loading: state.rootReducer.LeadSlice?.loading,
  }));

  useEffect(() => {
    const storedData = localStorage.getItem("editCompany");
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      setValue("c_id", parsedData.c_id);
      setValue("c_company_name", parsedData.c_name);
      setValue("website", parsedData.c_website);
      setValue("head_office_address", parsedData.c_head_office_address);
      setValue("head_office_contact", parsedData.c_head_office_contact);
      setValue("total_countries_plant", parsedData.total_country_plant);
      setValue("total_india_plant", parsedData.total_india_plant);
      setValue("manufacturing_type", parsedData.c_type_of_manufacturing);
      setValue("bank_name", parsedData.c_bank_name);
      setValue("bank_ifsc", parsedData.c_bank_ifsc);
      setValue("bank_account", parsedData.c_bank_account_no);
      setValue("bank_branch", parsedData.c_bank_branch);
      setValue("p_international_domestic", parsedData.c_international_domestic);

      // 👇 Save logo URL to state
      setLogoUrl(parsedData.c_image);
    }
  }, [setValue]);

  const onSubmit = (formData) => {
    const storedData = JSON.parse(localStorage.getItem("editCompany"));
    const updatedData = {
      c_name: formData.c_company_name,
      c_image: formData.c_image,
      c_website: formData.website,
      c_head_office_address: formData.head_office_address,
      c_head_office_contact: formData.head_office_contact,
      total_country_plant: formData.total_countries_plant,
      total_india_plant: formData.total_india_plant,
      c_type_of_manufacturing: formData.manufacturing_type,
      c_bank_name: formData.bank_name,
      c_bank_ifsc: formData.bank_ifsc,
      c_bank_account_no: formData.bank_account,
      c_bank_branch: formData.bank_branch,
      c_international_domestic: formData.p_international_domestic,
      id: storedData?.c_id,
    };
  
    dispatch(updateCompany(updatedData));
    // navigate("/list-company");
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-12 mb-10">
                <div className="card">
                  <div className="card-header">
                    <ul className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="fas fa-home" /> Edit Company
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-lg-3 mb-3">
                          <label className="form-label">Company Name*</label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.c_company_name ? "is-invalid" : ""
                            }`}
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

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">Website*</label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.website ? "is-invalid" : ""
                            }`}
                            {...register("website", {
                              required: "Website is required",
                              pattern: {
                                value:
                                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/,
                                message: "Invalid URL",
                              },
                            })}
                          />
                          {errors.website && (
                            <div className="invalid-feedback">
                              {errors.website.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">
                            Head Office Address*
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.head_office_address ? "is-invalid" : ""
                            }`}
                            {...register("head_office_address", {
                              required: "Required",
                            })}
                          />
                          {errors.head_office_address && (
                            <div className="invalid-feedback">
                              {errors.head_office_address.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">
                            Head Office Contact*
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.head_office_contact ? "is-invalid" : ""
                            }`}
                            {...register("head_office_contact", {
                              required: "Required",
                              pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: "Invalid number",
                              },
                            })}
                          />
                          {errors.head_office_contact && (
                            <div className="invalid-feedback">
                              {errors.head_office_contact.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">
                            Total Country Plant*
                          </label>
                          <input
                            type="number"
                            className={`form-control ${
                              errors.total_countries_plant ? "is-invalid" : ""
                            }`}
                            {...register("total_countries_plant", {
                              required: "Required",
                              min: 0,
                            })}
                          />
                          {errors.total_countries_plant && (
                            <div className="invalid-feedback">
                              {errors.total_countries_plant.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">
                            Total India Plant*
                          </label>
                          <input
                            type="number"
                            className={`form-control ${
                              errors.total_india_plant ? "is-invalid" : ""
                            }`}
                            {...register("total_india_plant", {
                              required: "Required",
                              min: 0,
                            })}
                          />
                          {errors.total_india_plant && (
                            <div className="invalid-feedback">
                              {errors.total_india_plant.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">
                            Type of Manufacturing*
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.manufacturing_type ? "is-invalid" : ""
                            }`}
                            {...register("manufacturing_type", {
                              required: "Required",
                            })}
                          />
                          {errors.manufacturing_type && (
                            <div className="invalid-feedback">
                              {errors.manufacturing_type.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">Bank Name*</label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.bank_name ? "is-invalid" : ""
                            }`}
                            {...register("bank_name", { required: "Required" })}
                          />
                          {errors.bank_name && (
                            <div className="invalid-feedback">
                              {errors.bank_name.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">Bank IFSC*</label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.bank_ifsc ? "is-invalid" : ""
                            }`}
                            {...register("bank_ifsc", { required: "Required" })}
                          />
                          {errors.bank_ifsc && (
                            <div className="invalid-feedback">
                              {errors.bank_ifsc.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">Bank Account No*</label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.bank_account ? "is-invalid" : ""
                            }`}
                            {...register("bank_account", {
                              required: "Required",
                              pattern: {
                                value: /^[0-9]{9,18}$/,
                                message: "Invalid account number",
                              },
                            })}
                          />
                          {errors.bank_account && (
                            <div className="invalid-feedback">
                              {errors.bank_account.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">Bank Branch*</label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.bank_branch ? "is-invalid" : ""
                            }`}
                            {...register("bank_branch", {
                              required: "Required",
                            })}
                          />
                          {errors.bank_branch && (
                            <div className="invalid-feedback">
                              {errors.bank_branch.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">
                            International/Domestic/Both*
                          </label>
                          <div className="d-flex gap-3">
                            <div>
                              <input
                                type="radio"
                                id="international"
                                value="International"
                                {...register("p_international_domestic", {
                                  required: true,
                                })}
                              />
                              <label htmlFor="international" className="ms-1">
                                International
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="domestic"
                                value="Domestic"
                                {...register("p_international_domestic", {
                                  required: true,
                                })}
                              />
                              <label htmlFor="domestic" className="ms-1">
                                Domestic
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="both"
                                value="Both"
                                {...register("p_international_domestic", {
                                  required: true,
                                })}
                              />
                              <label htmlFor="both" className="ms-1">
                                Both
                              </label>
                            </div>
                          </div>
                          {errors.p_international_domestic && (
                            <div className="text-danger small">
                              Please select an option
                            </div>
                          )}
                        </div>

                        <div className="col-lg-3 mb-3">
                          <label className="form-label">Company Logo*</label>

                          {logoUrl && (
                            <div className="mb-2">
                              <img
                                src={logoUrl}
                                alt="Company Logo"
                                style={{
                                  width: "100px",
                                  height: "auto",
                                  border: "1px solid #ddd",
                                }}
                              />
                            </div>
                          )}

                          {/* File upload input */}
                          <input
                            type="file"
                            accept="image/*"
                            className={`form-control ${
                              errors.c_image ? "is-invalid" : ""
                            }`}
                            {...register("c_image", {
                              required: logoUrl
                                ? false
                                : "Company logo is required", // only required if no existing logo
                            })}
                          />
                          {errors.c_image && (
                            <div className="invalid-feedback">
                              {errors.c_image.message}
                            </div>
                          )}
                        </div>

                        <div className="col-lg-12 mt-4">
                          <button type="submit" className="btn btn-success">
                            Submit
                          </button>
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
      <Footer />
    </>
  );
};

export default EditCompany;
