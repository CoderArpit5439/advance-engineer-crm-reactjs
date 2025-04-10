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
const ListCompany = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

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
  useEffect(() => {
    dispatch(fetchCompany());
  }, [dispatch]);

  const handleEdit = (data) => {
    if (data) {
      localStorage.setItem("editCompany", JSON.stringify(data));
      navigate("/edit-company");
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    {/* <h4 className="card-title mb-0">Add, Edit &amp; Remove</h4> */}
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
                              Add
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
                              <th className="sort" data-sort="status">
                                Email
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
                                  <td className="text-center">
                                    <img
                                      src={company.c_image}
                                      height="50px"
                                      width="50px"
                                      alt={`${company.c_name} logo`}
                                    />
                                  </td>
                                  <td className="text-center">
                                    {company.c_name}
                                  </td>
                                  <td className="text-center">
                                    <a
                                      href={company.c_website}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="underline"
                                    >
                                      {company.c_website}
                                    </a>
                                  </td>
                                  <td className="text-center">
                                    {company.c_email ?? "N/A"}
                                  </td>
                                  <td className="text-center">
                                    {company.c_head_office_address}
                                  </td>
                                  <td className="text-center">
                                    {company.c_head_office_contact}
                                  </td>
                                  <td className="text-center">
                                    {company.total_country_plant}
                                  </td>
                                  <td className="text-center">
                                    {company.total_india_plant}
                                  </td>
                                  <td className="text-center">
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
