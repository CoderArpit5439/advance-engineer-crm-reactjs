import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUnit } from "../../Redux/crmSlices/unit/UnitSlice";
import { fetchCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";
// import { addUnit } from "../../Redux/crmSlices/plantSlice/PlantSlice";
// import { fetchCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";

const AddUnit = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm();

  const { data, plantData, count, loading, response, status, error } =
    useSelector((state) => {
      return {
        data: state.rootReducer.companySlice?.data?.data,
        plantData: state.rootReducer.companySlice?.data?.plantData,
        loading: state.rootReducer.companySlice?.loading,
        response: state.rootReducer.companySlice?.response,
        count: state.rootReducer.companySlice?.count,
        status: state.rootReducer.companySlice?.status,
        error: state.rootReducer.companySlice?.error,
      };
    });

  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCompany());
  }, []);

  const onSubmit = (data) => {
    dispatch(addUnit(data));
  };

  const selectedCompanyId = watch("u_company_id");

  const filteredPlantData = plantData?.filter((plant) => {
    return plant.c_id === selectedCompanyId;
  });


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
                          <i className="fas fa-home" /> Add Unit
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
                                    errors.u_company_id ? "is-invalid" : ""
                                  }`}
                                  {...register("u_company_id", {
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
                                {errors.u_company_id && (
                                  <div className="invalid-feedback">
                                    {errors.u_company_id.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Select Plant
                                </label>
                                <select
                                  className={`form-control ${
                                    errors.u_plant_id ? "is-invalid" : ""
                                  }`}
                                  {...register("u_plant_id", {
                                    required: "Plant is required",
                                  })}
                                >
                                  <option value="">-- Select Plant --</option>
                                  {filteredPlantData?.map((plant) => (
                                    <option key={plant.p_id} value={plant.p_id}>
                                      {plant.p_city}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">
                                  Unit name
                                </label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.u_name
                                      ? "is-invalid"
                                      : ""
                                  }`}
                                  placeholder="Unit name"
                                  {...register("u_name", {
                                    required:
                                      "Unit name is required",
                                  })}
                                />
                                {errors.u_name && (
                                  <div className="invalid-feedback">
                                    {errors.u_name.message}
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

export default AddUnit;
