import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";
import { useNavigate, useParams } from "react-router-dom";

const ViewCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, plantList, unitList, customerList, error } = useSelector(
    (state) => {
      return {
        data: state.rootReducer.companySlice?.singleCompany?.data,
        plantList: state.rootReducer.companySlice?.singleCompany?.plantList,
        unitList: state.rootReducer.companySlice?.singleCompany?.unitList,
        customerList:
          state.rootReducer.companySlice?.singleCompany?.customerList,
        error: state.rootReducer.companySlice?.singleCompany?.error,
      };
    }
  );

  useEffect(() => {
    if (id) {
      console.log(852, id);
      dispatch(fetchSingleCompany(id));
    }
  }, []);

  console.log(741, data, plantList, unitList, customerList);
  return (
    <>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row mb-4">
              <div class="col-xl-12">
                <div class="card crm-widget">
                  <div class="card-body p-0">
                    <div class="row row-cols-xxl-5 row-cols-md-3 row-cols-1 g-0">
                      <div class="col">
                        <div class="py-4 px-3">
                          <h5 class="text-muted text-uppercase fs-13">
                            Quotations{" "}
                            <i class="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                          </h5>
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <i class="ri-space-ship-line display-6 text-muted cfs-22"></i>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h2 class="mb-0 cfs-22">
                                <span class="counter-value" data-target="197">
                                  197
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="mt-3 mt-md-0 py-4 px-3">
                          <h5 class="text-muted text-uppercase fs-13">
                            Invoices{" "}
                            <i class="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                          </h5>
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <i class="ri-exchange-dollar-line display-6 text-muted cfs-22"></i>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h2 class="mb-0 cfs-22">
                                $
                                <span class="counter-value" data-target="489.4">
                                  489.4
                                </span>
                                k
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="mt-3 mt-md-0 py-4 px-3">
                          <h5 class="text-muted text-uppercase fs-13">
                            Orders{" "}
                            <i class="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i>
                          </h5>
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <i class="ri-pulse-line display-6 text-muted cfs-22"></i>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h2 class="mb-0 cfs-22">
                                <span class="counter-value" data-target="32.89">
                                  32.89
                                </span>
                                %
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="mt-3 mt-lg-0 py-4 px-3">
                          <h5 class="text-muted text-uppercase fs-13">
                            Total sales{" "}
                            <i class="ri-arrow-down-circle-line text-danger fs-18 float-end align-middle"></i>
                          </h5>
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <i class="ri-service-line display-6 text-muted cfs-22"></i>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h2 class="mb-0 cfs-22">
                                <span class="counter-value" data-target="2659">
                                  2,659
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="py-4 px-3">
                          <h5 class="text-muted text-uppercase fs-13">
                            Inquiry's{" "}
                            <i class="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                          </h5>
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                              <i class="ri-space-ship-line display-6 text-muted cfs-22"></i>
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h2 class="mb-0 cfs-22">
                                <span class="counter-value" data-target="197">
                                  197
                                </span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card mt-n4 mx-n4">
                  <div class="bg-warning-subtle">
                    <div class="card-body pb-0 px-4">
                      <div class="row mb-3">
                        <div class="col-md">
                          <div class="row align-items-center g-3">
                            <div class="col-md-auto">
                              <div class="avatar-md">
                                <div class="avatar-title bg-white rounded-circle">
                                  <img
                                    src={data?.c_image}
                                    alt=""
                                    class="avatar-xs"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md">
                              <div>
                                <h4 class="fw-bold">{data?.c_name}</h4>
                                <div class="hstack gap-3 flex-wrap">
                                  <div>
                                    <i class="ri-building-line align-bottom me-1"></i>{" "}
                                    {data?.c_head_office_address}
                                  </div>
                                  <div class="vr"></div>
                                  <div>
                                    Create Date :{" "}
                                    <span class="fw-medium">
                                      {data?.c_created_at}
                                    </span>
                                  </div>
                                  <div class="vr"></div>
                                  <div>
                                    Website :{" "}
                                    <span class="fw-medium">
                                      {" "}
                                      <a
                                        href={data?.c_website}
                                        target="_blank"
                                        className="underline"
                                      >
                                        {data?.c_website}
                                      </a>
                                    </span>
                                  </div>
                                  <div class="vr"></div>
                                  <div class="badge rounded-pill bg-info fs-12">
                                    New
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-auto"></div>
                      </div>
                      <ul
                        class="nav nav-tabs-custom border-bottom-0"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link active fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-overview"
                            role="tab"
                          >
                            Overview
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-plants"
                            role="tab"
                          >
                            Plants
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-units"
                            role="tab"
                          >
                            Units
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-customer"
                            role="tab"
                          >
                            Customer
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-quotations"
                            role="tab"
                          >
                            Quotations
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-invoices"
                            role="tab"
                          >
                            Invoices
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas-body p-0">
              {data ? (
                <div class="container-fluid pt-3">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="tab-content text-muted">
                        <div
                          class="tab-pane fade show active"
                          id="project-overview"
                          role="tabpanel"
                        >
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="tab-content text-muted">
                                <div
                                  class="tab-pane fade show active"
                                  id="project-overview"
                                  role="tabpanel"
                                >
                                  <div class="row">
                                    <div class="col-xl-12">
                                      <div class="card">
                                        <div className="card-header">
                                          {data?.c_description}
                                        </div>
                                        <div class="card-body">
                                          <div class="text-muted">
                                            <div class="">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Head Office Address :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_head_office_address
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Head Office Contact No. :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_head_office_contact
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      No. of total countries
                                                      plant :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.total_country_plant
                                                      }
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12">High</div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      No. of total india plant :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.total_india_plant}
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Type of manufacturing :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_type_of_manufacturing
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Internation Domestic &
                                                      Both :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_international_domestic
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total no. of quotation :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      10
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12">High</div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total no of order :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      12
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank Branch :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_branch}
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank IFSC code :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_ifsc}
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank Name :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_name}
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12"></div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank Account :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_account_no}
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total amount of this year
                                                      :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      12000
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total pending amount :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      2000
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total no. of Staff :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      20
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12">High</div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total receive amount :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      10000
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
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
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="project-plants"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Plants
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">City</th>
                                          <th scope="col">Accountant</th>
                                          <th scope="col">Security</th>
                                          <th scope="col">Store</th>
                                          <th scope="col">Other</th>
                                          <th scope="col">GST</th>
                                          <th scope="col">State</th>
                                          <th scope="col">Pin Code</th>
                                          <th scope="col">Area Working</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {plantList?.map((plant, i) => {
                                          return (
                                            <tr>
                                              <td
                                                className="text-decoration-underline"
                                                onClick={() =>
                                                  navigate(
                                                    `/view-plant/${plant.p_id}`
                                                  )
                                                }
                                              >
                                                {plant.p_city}
                                              </td>
                                              <td>
                                                <div>
                                                  {plant.p_account_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {plant.p_account_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <div>
                                                  {plant.p_security_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {plant.p_security_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <div>
                                                  {plant.p_store_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {plant.p_store_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <div>
                                                  {plant.p_other_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {plant.p_other_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>{plant.p_gst}</td>
                                              <td>{plant.p_state}</td>
                                              <td>{plant.p_pincode}</td>
                                              <td>{plant.p_area_working}</td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                  {/* <div class="text-center mt-3">
                                                        <a href="javascript:void(0);" class="text-success "><i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </a>
                                                    </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-units"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Units
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Name</th>
                                          {/* <th scope="col">Contact</th> */}
                                          <th scope="col">Plant</th>
                                          <th scope="col">Create at</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {unitList?.map((unit, i) => {
                                          return (
                                            <tr>
                                              <td>{unit.u_name}</td>
                                              <td>{unit.plant_name}</td>
                                              <td>{unit.u_created_at}</td>
                                              {/* <td>
                                            <div>{unit.p_account_contact}</div>
                                            <div>
                                              <div>
                                                {unit.p_account_email}
                                              </div>
                                            </div>
                                          </td> */}
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                  {/* <div class="text-center mt-3">
                                                        <a href="javascript:void(0);" class="text-success "><i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </a>
                                                    </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-customer"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Customer
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Name</th>
                                          <th scope="col">Company</th>
                                          <th scope="col">Contact</th>
                                          <th scope="col">Department</th>
                                          <th scope="col">Address</th>
                                          <th scope="col">Created at</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {customerList?.map((customer, i) => {
                                          return (
                                            <tr>
                                              <td
                                               className="text-decoration-underline"
                                                onClick={() =>
                                                  navigate(
                                                    `/view-customer/${customer.c_id}`
                                                  )}
                                                  >{customer.c_fullname}</td>
                                              <td>{customer.c_company_name}</td>
                                              <td>
                                                <div>{customer.c_mobile}</div>
                                                <div>
                                                  <div>{customer.c_email}</div>
                                                </div>
                                              </td>
                                              <td>{customer.c_department}</td>
                                              <td>{customer.c_address}</td>
                                              <td>{customer.c_created_at}</td>
                                              {/* <td>
                                            <div>{unit.p_account_contact}</div>
                                            <div>
                                              <div>
                                                {unit.p_account_email}
                                              </div>
                                            </div>
                                          </td> */}
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                  {/* <div class="text-center mt-3">
                                                        <a href="javascript:void(0);" class="text-success "><i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </a>
                                                    </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-quotations"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Quotations
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0 text-center">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Quotation No.</th>
                                          <th scope="col">Plant</th>
                                          <th scope="col">Unit</th>
                                          <th scope="col">Customer Name</th>
                                          <th scope="col">Item Code</th>
                                          <th scope="col">Drg no.</th>
                                          <th scope="col">Description</th>
                                          <th scope="col">Dimension</th>
                                          <th scope="col">Material</th>
                                          <th scope="col">Weight</th>
                                          <th scope="col">QTY</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Total AMT</th>
                                          <th scope="col">Thickness</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {/* {quotationList?.map((customer, i) => { */}
                                          {/* return ( */}
                                            <tr>
                                           
                                              <td>145824</td>
                                              <td>Lupin plant</td>
                                              <td>Lupin unit</td>
                                              <td>Rahul Sharma</td>
                                              <td>1023</td>
                                              <td>AEG1021</td>
                                              <td>SS Chair</td>
                                              <td>L 500 X W 500</td>
                                              <td>SS 304</td>
                                              <td>15 KG</td>
                                              <td>1</td>
                                              <td>1300</td>
                                              <td>1300</td>
                                              <td>1.2 mm</td>
                                              <td>
                                              <div>
                                                <button className="btn btn-sm m-1 btn-success">Follow Up</button>
                                                <button className="btn btn-sm m-1 btn-warning">View</button>
                                                <button className="btn btn-sm m-1 btn-info">Order</button>
                                                <button className="btn btn-sm m-1 btn-danger">Remove</button>
                                              </div>
                                              <div>
                                                <button className="btn btn-sm m-1 btn-primary">Reject</button>
                                                <button className="btn btn-sm m-1 btn-secondary">Print</button>
                                                <button className="btn btn-sm m-1 btn-link">Email</button>
                                              </div>
                                              </td>
                                              
                                            </tr>
                                          {/* ); */}
                                        {/* })} */}
                                      </tbody>
                                    </table>
                                  </div>
                                  {/* <div class="text-center mt-3">
                                                        <a href="javascript:void(0);" class="text-success "><i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </a>
                                                    </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-invoices"
                          role="tabpanel"
                        >
                         <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Invoices
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0 text-center">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Invoice No.</th>
                                          <th scope="col">Plant</th>
                                          <th scope="col">Unit</th>
                                          <th scope="col">Customer Name</th>
                                          <th scope="col">Item Code</th>
                                          <th scope="col">Drg no.</th>
                                          <th scope="col">Description</th>
                                          <th scope="col">Dimension</th>
                                          <th scope="col">Material</th>
                                          <th scope="col">Weight</th>
                                          <th scope="col">QTY</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Total AMT</th>
                                          <th scope="col">Thickness</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {/* {quotationList?.map((customer, i) => { */}
                                          {/* return ( */}
                                            <tr>
                                           
                                              <td>145824</td>
                                              <td>Lupin plant</td>
                                              <td>Lupin unit</td>
                                              <td>Rahul Sharma</td>
                                              <td>1023</td>
                                              <td>AEG1021</td>
                                              <td>SS Chair</td>
                                              <td>L 500 X W 500</td>
                                              <td>SS 304</td>
                                              <td>15 KG</td>
                                              <td>1</td>
                                              <td>1300</td>
                                              <td>1300</td>
                                              <td>1.2 mm</td>
                                              <td>
                                              <div>
                                                <button className="btn btn-sm m-1 btn-success">Follow Up</button>
                                                <button className="btn btn-sm m-1 btn-warning">View</button>
                                                <button className="btn btn-sm m-1 btn-info">Order</button>
                                                <button className="btn btn-sm m-1 btn-danger">Remove</button>
                                              </div>
                                              <div>
                                                <button className="btn btn-sm m-1 btn-primary">Reject</button>
                                                <button className="btn btn-sm m-1 btn-secondary">Print</button>
                                                <button className="btn btn-sm m-1 btn-link">Email</button>
                                              </div>
                                              </td>
                                              
                                            </tr>
                                          {/* ); */}
                                        {/* })} */}
                                      </tbody>
                                    </table>
                                  </div>
                                  {/* <div class="text-center mt-3">
                                                        <a href="javascript:void(0);" class="text-success "><i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load more </a>
                                                    </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="container-fluid pt-3">Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewCompany;
