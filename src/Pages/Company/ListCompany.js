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
                          {" "}
                          Total Sales
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                          Rs.
                          <span class="counter-value" data-target="559.25">
                            {cards?.totalSell}
                          </span>
                        </h4>
                      </div>
                      <div class="avatar-sm flex-shrink-0">
                        <span class="avatar-title bg-success-subtle rounded fs-3">
                          <i class="bx bx-dollar-circle text-success"></i>
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
            </div>
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Company List</h4>
                  </div>
                  {/* end card header */}
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
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
                      </div>
                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="customerTable"
                        >
                          <thead className="table-light">
                            <tr>
                              {/* <th className="sort" data-sort="customer_name">
                                Photo
                              </th> */}
                              <th className="sort" data-sort="phone">
                                Logo
                              </th>
                              <th className="sort" data-sort="email">
                                Name
                              </th>
                              <th className="sort" data-sort="date">
                                Web
                              </th>

                              <th className="sort" data-sort="action">
                                Head office add
                              </th>
                              <th className="sort" data-sort="action">
                                Head office contact
                              </th>
                              <th className="sort" data-sort="action">
                                No. Of total contries plant
                              </th>
                              <th className="sort" data-sort="action">
                                No. Of total india plant
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>

                          <tbody className="list form-check-all">
                            {data && data.length > 0 ? (
                              data.map((company, index) => (
                                <tr key={index}>
                                  <td className="">
                                    {company.c_image ? (
                                      <img
                                        src={company.c_image}
                                        height="50px"
                                        width="50px"
                                        alt={`${company.c_name} logo`}
                                      />
                                    ) : (
                                      <span class="d-flex align-items-center">
                                        <img
                                          class="rounded-circle header-profile-user"
                                          src="../assets/images/users/user-dummy-img.jpg"
                                          alt="Header Avatar"
                                        />
                                      </span>
                                    )}
                                  </td>
                                  <td className="">
                                    <a
                                      // href="javascript:void(0)"
                                      // data-bs-toggle="offcanvas"
                                      // data-bs-target="#theme-settings-offcanvas-company"
                                      // aria-controls="theme-settings-offcanvas-company"
                                      className="text-decoration-underline"
                                      // rel="noreferrer"
                                      // onClick={ () => onClickCompany(company)}
                                      onClick={() =>
                                        navigate(
                                          `/view-company/${company.c_id}`
                                        )
                                      }
                                    >
                                      {company.c_name}
                                    </a>
                                  </td>
                                  <td className="">
                                    <a
                                      href={company.c_website}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="underline"
                                    >
                                      {company.c_website}
                                    </a>
                                  </td>

                                  <td className="">
                                    {company.c_head_office_address}
                                  </td>
                                  <td className="">
                                    {company.c_head_office_contact}
                                  </td>
                                  <td className="">
                                    {company.total_country_plant}
                                  </td>
                                  <td className="">
                                    {company.total_india_plant}
                                  </td>
                                  <td className="">
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-info"
                                      onClick={() => handleEdit(company)}
                                    >
                                      <i className="fa fa-pencil-o"></i> Update
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="9" className="text-center">
                                  No companies found.
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        <div className="noresult" style={{ display: "none" }}>
                          <div className="text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/msoeawqm.json"
                              trigger="loop"
                              colors="primary:#121331,secondary:#08a88a"
                              style={{ width: 75, height: 75 }}
                            />
                            <h5 className="mt-2">Sorry! No Result Found</h5>
                            <p className="text-muted mb-0">
                              We've searched more than 150+ Orders We did not
                              find any orders for you search.
                            </p>
                          </div>
                        </div>
                        {/* <CompanyDetails cData={companyDetails} cId={companyDetails?.c_id}/> */}
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
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
