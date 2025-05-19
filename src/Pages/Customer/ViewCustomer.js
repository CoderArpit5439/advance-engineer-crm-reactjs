import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleCustomer } from "../../Redux/crmSlices/customerSlice/CustomerSlice";

const ViewCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error } = useSelector((state) => {
    return {
      data: state.rootReducer.CustomerSlice?.singleCustomer?.data,
      error: state.rootReducer.CustomerSlice?.singleCustomer?.error,
    };
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleCustomer(id));
    }
  }, []);

  console.log(741, data);
  return (
    <div>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="card mt-n4 mx-n4">
                  <div class="bg-warning-subtle">
                    <div class="card-body px-4 pb-4">
                      <div class="row mb-3">
                        <div class="col-md">
                          <div class="row align-items-center g-3">
                            <div class="col-md">
                              <div>
                                <h4 class="fw-bold">{data?.c_fullname}</h4>
                                <div class="hstack gap-3 flex-wrap">
                                  <div>
                                    <i class="ri-building-line align-bottom me-1"></i>{" "}
                                    {data?.c_address}
                                  </div>
                                  <div class="vr"></div>
                                  <div>
                                    <i class="ri-map-pin-2-line align-bottom me-1"></i>{" "}
                                    {data?.c_address}
                                  </div>
                                  <div class="vr"></div>
                                  <div>
                                    Post Date :{" "}
                                    <span class="fw-medium">
                                      {data?.c_created_at}
                                    </span>
                                  </div>
                                  <div class="vr"></div>
                                  <div class="badge rounded-pill bg-success fs-12">
                                    {data?.c_status}
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

            <div class="row mt-n5">
              <div class="col-xxl-3">
                <div class="card">
                  <div class="card-header">
                    <h5 class="mb-0">Overview</h5>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive table-card">
                      <table class="table mb-0">
                        <tbody>
                          <tr>
                            <td class="fw-medium">Company Name</td>
                            <td>Product Designer</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Plant Name</td>
                            <td>Themesbrand</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Unit Name</td>
                            <td>Zuweihir, UAE</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Department</td>
                            <td>Zuweihir, UAE</td>
                          </tr>
                          {/* <tr>
                            <td class="fw-medium">Email</td>
                            <td>54 Application</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Mobile No.</td>
                            <td>15 Sep, 2021</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Gender</td>
                            <td>Master Degree</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Address</td>
                            <td>Master Degree</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Date of birth</td>
                            <td>$35k - $45k</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Rank</td>
                            <td>$35k - $45k</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Status</td>
                            <td>$35k - $45k</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Username</td>
                            <td>$35k - $45k</td>
                          </tr>
                          <tr>
                            <td class="fw-medium">Password</td>
                            <td>$35k - $45k</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                    <div class="mt-4 pt-2 hstack gap-2">
                      <a href="#!" class="btn btn-primary w-100">
                        Edit Profile
                      </a>
                      <a href="#!" class="btn btn-secondary w-100">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-9">
               <div class="email-content minimal-border">
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
                              $
                              <span class="counter-value" data-target="559.25">
                                559.25
                              </span>
                              k{" "}
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
                                36,894
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
                                183.35
                              </span>
                              M{" "}
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
                              $
                              <span class="counter-value" data-target="165.89">
                                165.89
                              </span>
                              k{" "}
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
               
                  <div class="p-4 pb-0">
                    <div class="border-bottom border-bottom-dashed">
                      <div class="row align-items-end mt-3">
                        <div class="col">
                          <div id="mail-filter-navlist">
                            <ul
                              class="nav nav-tabs nav-tabs-custom nav-success gap-1 text-center border-bottom-0"
                              role="tablist"
                            >
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link fw-semibold"
                                  id="inquiry-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#inquiry"
                                  type="button"
                                  role="tab"
                                  aria-controls="inquiry"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  <i class="ri-inbox-fill align-bottom d-inline-block"></i>
                                  <span class="ms-1 d-none d-sm-inline-block">
                                    Inquiry
                                  </span>
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link fw-semibold"
                                  id="quotation-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#quotation"
                                  type="button"
                                  role="tab"
                                  aria-controls="quotation"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  <i class="ri-inbox-fill align-bottom d-inline-block"></i>
                                  <span class="ms-1 d-none d-sm-inline-block">
                                    Quotation
                                  </span>
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link fw-semibold"
                                  id="order-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#order"
                                  type="button"
                                  role="tab"
                                  aria-controls="order"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  <i class="ri-inbox-fill align-bottom d-inline-block"></i>
                                  <span class="ms-1 d-none d-sm-inline-block">
                                    Order
                                  </span>
                                </button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button
                                  class="nav-link fw-semibold"
                                  id="invoice-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#invoice"
                                  type="button"
                                  role="tab"
                                  aria-controls="invoice"
                                  aria-selected="false"
                                  tabindex="-1"
                                >
                                  <i class="ri-inbox-fill align-bottom d-inline-block"></i>
                                  <span class="ms-1 d-none d-sm-inline-block">
                                    Invoice
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="tab-content">
                      <div
                        class="tab-pane fade"
                        id="inquiry"
                        role="tabpanel"
                        aria-labelledby="inquiry-tab"
                      >
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
                              $
                              <span class="counter-value" data-target="559.25">
                                559.25
                              </span>
                              k{" "}
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
                                36,894
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
                                183.35
                              </span>
                              M{" "}
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
                              $
                              <span class="counter-value" data-target="165.89">
                                165.89
                              </span>
                              k{" "}
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
                        <div class="table-responsive table-card mt-3 mb-1">
                          <table
                            class="table align-middle table-nowrap"
                            id="dataTableExample1"
                          >
                            <thead class="table-light">
                              <tr>
                                <th class="sort" data-sort="inq_name">
                                  Inquiry Name
                                </th>
                                <th class="sort" data-sort="inq_contact">
                                  Mobile No.
                                </th>
                                <th class="sort" data-sort="inq_email">
                                  Email
                                </th>
                                <th class="sort" data-sort="inq_message">
                                  Message
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  Status
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  Product Name
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  Size
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  MOC
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  Thickness
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  DRG
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  Code
                                </th>
                                <th class="sort" data-sort="inq_status">
                                  Information
                                </th>
                              </tr>
                            </thead>
                            <tbody class="list form-check-all">
                              <tr>
                                <td colspan="12" class="text-center">
                                  No Inquiry found
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content">
                      <div
                        class="tab-pane fade"
                        id="quotation"
                        role="tabpanel"
                        aria-labelledby="quotation-tab"
                      >
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
                              $
                              <span class="counter-value" data-target="559.25">
                                559.25
                              </span>
                              k{" "}
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
                                36,894
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
                                183.35
                              </span>
                              M{" "}
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
                              $
                              <span class="counter-value" data-target="165.89">
                                165.89
                              </span>
                              k{" "}
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
                        <div class="table-responsive table-card mt-3 mb-1">
                          <table
                            class="table align-middle table-nowrap"
                            id="dataTableExample1"
                          >
                            <thead class="table-light">
                              <tr>
                                <th class="sort" data-sort="quo_name">
                                  Name
                                </th>
                                <th class="sort" data-sort="quo_number">
                                  Number
                                </th>
                                <th class="sort" data-sort="quo_date">
                                  Date
                                </th>
                                <th class="sort" data-sort="quo_subject">
                                  Subject
                                </th>
                                <th class="sort" data-sort="quo_total">
                                  Total
                                </th>
                                <th class="sort" data-sort="quo_created_at">
                                  Created at
                                </th>
                              </tr>
                            </thead>
                            <tbody class="list form-check-all">
                              <tr>
                                <td colspan="6" class="text-center">
                                  No quotation found
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content">
                      <div
                        class="tab-pane fade"
                        id="order"
                        role="tabpanel"
                        aria-labelledby="order-tab"
                      >
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
                              $
                              <span class="counter-value" data-target="559.25">
                                559.25
                              </span>
                              k{" "}
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
                                36,894
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
                                183.35
                              </span>
                              M{" "}
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
                              $
                              <span class="counter-value" data-target="165.89">
                                165.89
                              </span>
                              k{" "}
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
                        <div class="table-responsive table-card mt-3 mb-1">
                          <table
                            class="table align-middle table-nowrap"
                            id="customerTable"
                          >
                            <thead class="table-light">
                              <tr>
                                <th class="sort" data-sort="email">
                                  Customer
                                </th>
                                <th class="sort" data-sort="date">
                                  Contact
                                </th>
                                <th class="sort" data-sort="status">
                                  Order NO
                                </th>
                                <th class="sort" data-sort="action">
                                  CSTR P.O
                                </th>
                                <th class="sort" data-sort="action">
                                  item
                                </th>
                                <th class="sort" data-sort="action">
                                  Due Date
                                </th>
                                <th class="sort" data-sort="action">
                                  Quantity
                                </th>
                                <th class="sort" data-sort="action">
                                  PNDG
                                </th>
                                <th class="sort" data-sort="action">
                                  Done
                                </th>
                                <th class="sort" data-sort="action">
                                  Unit
                                </th>
                                <th class="sort" data-sort="action">
                                  Total
                                </th>
                                <th class="sort" data-sort="action">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody class="list form-check-all">
                              <tr>
                                <td colspan="12" class="text-center">
                                  No order found
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content">
                      <div
                        class="tab-pane fade"
                        id="invoice"
                        role="tabpanel"
                        aria-labelledby="invoice-tab"
                      >
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
                              $
                              <span class="counter-value" data-target="559.25">
                                559.25
                              </span>
                              k{" "}
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
                                36,894
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
                                183.35
                              </span>
                              M{" "}
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
                              $
                              <span class="counter-value" data-target="165.89">
                                165.89
                              </span>
                              k{" "}
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
                        <div class="table-responsive table-card mt-3 mb-1">
                          <table
                            class="table align-middle table-nowrap"
                            id="dataTableExample1"
                          >
                            <thead class="table-light">
                              <tr>
                                <th class="sort" data-sort="emp_name">
                                  SNO
                                </th>
                                <th class="sort" data-sort="emp_name">
                                  invoice Name
                                </th>
                                <th class="sort" data-sort="emp_role">
                                  invoice Number
                                </th>
                                <th class="sort" data-sort="action">
                                  Transport
                                </th>
                                <th class="sort" data-sort="action">
                                  GST
                                </th>
                                <th class="sort" data-sort="action">
                                  Discount
                                </th>
                                <th class="sort" data-sort="action">
                                  invoice Date
                                </th>
                                <th class="sort" data-sort="action">
                                  Total
                                </th>
                              </tr>
                            </thead>
                            <tbody class="list form-check-all">
                              <tr>
                                <td colspan="8" class="text-center">
                                  No invoice found
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
      <Footer />
    </div>
  );
};

export default ViewCustomer;
