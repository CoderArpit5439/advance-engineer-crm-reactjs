import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomer,
  GetCustomerList,
  updateCustomer,
} from "../../Redux/crmSlices/customerSlice/CustomerSlice";
import Pagination from "../../Components/Pagination";
import Swal from "sweetalert2";
import { fetchCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";
import CompanyDetails from "../../Components/DashRightBar/CompanyDetails";
const ListCompany = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [companyDetails, setCompanyDetails] = useState({});

  const { data, count, loading, response, status, error, cards } = useSelector(
    (state) => {
      return {
        cards: state.rootReducer.companySlice?.data?.cards,
        data: state.rootReducer.companySlice?.data?.data,
        loading: state.rootReducer.companySlice?.loading,
        response: state.rootReducer.companySlice?.response,
        count: state.rootReducer.companySlice?.count,
        status: state.rootReducer.companySlice?.status,
        error: state.rootReducer.companySlice?.error,
      };
    }
  );
  useEffect(() => {
    dispatch(fetchCompany());
  }, [dispatch]);

  const handleEdit = (data) => {
    if (data) {
      localStorage.setItem("editCompany", JSON.stringify(data));
      navigate("/edit-company");
    }
  };

  const onClickCompany = (companyInfo) => {
    setCompanyDetails(companyInfo);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div class="row">

              <div class="col-xl-3 col-md-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Total company
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span class="counter-value" data-target="183.35">
                            {cards?.totalCompany}
                          </span>
                        </h4>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-warning-subtle rounded fs-3">
                          <i class="bx bx-user-circle text-warning"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Total Plants
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span class="counter-value" data-target="36894">
                            {cards?.totalPlant}
                          </span>
                        </h4>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-info-subtle rounded fs-3">
                          <i class="bx bx-shopping-bag text-info"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Total Units
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span class="counter-value" data-target="165.89">
                            {cards?.totalUnit}
                          </span>
                        </h4>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-primary-subtle rounded fs-3">
                          <i class="bx bx-wallet text-primary"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                          Total Customer
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          <span class="counter-value" data-target="165.89">
                            {cards?.totalCustomer}
                          </span>
                        </h4>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-primary-subtle rounded fs-3">
                          <i class="bx bx-wallet text-primary"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1">
                        <h4 className="card-title mb-0">Company List</h4>
                      </div>
                      <div class="flex-shrink-0">
                        <div className="listjs-table " id="customerList">
                          <div className="row g-4 mb-3">
                            <div className="col-sm-auto">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-success add-btn"
                                  id="create-btn"
                                  onClick={() => navigate("/add-company")}
                                >
                                  <i className="ri-add-line align-bottom me-1" />{" "}
                                  Company
                                </button>
                              </div>
                            </div>
                            <div className="col-sm-auto">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-success add-btn"
                                  id="create-btn"
                                  onClick={() => navigate("/add-plant")}
                                >
                                  <i className="ri-add-line align-bottom me-1" />{" "}
                                  Plant
                                </button>
                              </div>
                            </div>
                            <div className="col-sm-auto">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-success add-btn"
                                  id="create-btn"
                                  onClick={() => navigate("/add-unit")}
                                >
                                  <i className="ri-add-line align-bottom me-1" />{" "}
                                  Unit
                                </button>
                              </div>
                            </div>
                            <div className="col-sm-auto">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-success add-btn"
                                  id="create-btn"
                                  onClick={() => navigate("/add-customer")}
                                >
                                  <i className="ri-add-line align-bottom me-1" />{" "}
                                  Customer
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 
                     */}
                  </div>
                </div>
                <div class="row row-cols-xxl-5 row-cols-lg-4 row-cols-1">
                  {data && data.length > 0 ? (
                    data.map((company, index) => (
                      <div class="col">
                        <div class="card card-body">
                          <div class="d-flex mb-4 align-items-center">
                            <div class="flex-shrink-0">
                              {company.c_image ?
                                <img src={company.c_image} alt={`${company.c_name} logo`} class="avatar-sm rounded-circle" />
                                :
                                <img src="../assets/images/users/user-dummy-img.jpg" alt={`${company.c_name} logo`} class="avatar-sm rounded-circle" />
                              }
                            </div>
                            <div class="flex-grow-1 ms-2">
                              <h5 class="card-title mb-1 underline"
                                onClick={() =>
                                  navigate(
                                    `/view-company/${company.c_id}`
                                  )
                                }
                              >{company.c_name}</h5>
                              <a class="text-muted mb-0 underline" href={company.c_website} target="_blank" >{company.c_website}</a>
                            </div>
                          </div>
                          <h6 class="mb-1">$15,548</h6>
                          <p class="card-text text-muted">Expense Account</p>
                          <a href="javascript:void(0)" class="btn btn-primary btn-sm">See Details</a>
                        </div>
                      </div>
                      // <tr key={index}>
                      //   <td className="">
                      //     {company.c_image ? (
                      //       <img
                      //         src={company.c_image}
                      //         height="50px"
                      //         width="50px"
                      //         alt={`${company.c_name} logo`}
                      //       />
                      //     ) : (
                      //       <span class="d-flex align-items-center">
                      //         <img
                      //           class="rounded-circle header-profile-user"
                      //           src="../assets/images/users/user-dummy-img.jpg"
                      //           alt="Header Avatar"
                      //         />
                      //       </span>
                      //     )}
                      //   </td>
                      //   <td className="">
                      //     <a
                      //       // href="javascript:void(0)"
                      //       // data-bs-toggle="offcanvas"
                      //       // data-bs-target="#theme-settings-offcanvas-company"
                      //       // aria-controls="theme-settings-offcanvas-company"
                      //       className="text-decoration-underline"
                      //       // rel="noreferrer"
                      //       // onClick={ () => onClickCompany(company)}
                      //       onClick={() =>
                      //         navigate(
                      //           `/view-company/${company.c_id}`
                      //         )
                      //       }
                      //     >
                      //       {company.c_name}
                      //     </a>
                      //   </td>
                      //   <td className="">
                      //     <a
                      //       href={company.c_website}
                      //       target="_blank"
                      //       rel="noreferrer"
                      //       className="underline"
                      //     >
                      //       {company.c_website}
                      //     </a>
                      //   </td>

                      //   <td className="">
                      //     {company.c_head_office_address}
                      //   </td>
                      //   <td className="">
                      //     {company.c_head_office_contact}
                      //   </td>
                      //   <td className="">
                      //     {company.total_country_plant}
                      //   </td>
                      //   <td className="">
                      //     {company.total_india_plant}
                      //   </td>
                      //   <td className="">
                      //     <button
                      //       type="button"
                      //       className="btn btn-sm btn-info"
                      //       onClick={() => handleEdit(company)}
                      //     >
                      //       <i className="fa fa-pencil-o"></i> Update
                      //     </button>
                      //   </td>
                      // </tr>
                    ))
                  ) : (
                    <div class="col">
                      <div class="card card-body">
                        <h6 class="mb-1">No company found</h6>
                      </div>
                    </div>
                  )}

                </div>

                {/* <CompanyDetails cData={companyDetails} cId={companyDetails?.c_id}/> */}


                {/* end card */}

                {/* end col */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListCompany;
