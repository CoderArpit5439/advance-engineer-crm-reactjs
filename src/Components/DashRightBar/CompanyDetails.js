import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";

const CompanyDetails = ({ cData, cId }) => {
  const dispatch = useDispatch();

  const { data, plantList, unitList,customerList, error } = useSelector((state) => {
    return {
      data: state.rootReducer.companySlice?.singleCompany?.data,
      plantList: state.rootReducer.companySlice?.singleCompany?.plantList,
      unitList: state.rootReducer.companySlice?.singleCompany?.unitList,
      customerList: state.rootReducer.companySlice?.singleCompany?.customerList,
      error: state.rootReducer.companySlice?.singleCompany?.error,
    };
  });

  useEffect(() => {
    if (cData?.p_company_id) {
      dispatch(fetchSingleCompany(cData.p_company_id));
    } else if (cId) {
      console.log(852, cId);
      dispatch(fetchSingleCompany(cId));
    }
  }, [cData, cId]);

  return (
    <div>
      <div
        // className="offcanvas offcanvas-end border-0 w-50"
        // tabindex="-1"
        // id="theme-settings-offcanvas-company"
      >
        <div className="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header">
          {/* <h5 className="m-0 me-2 text-white">{cData.company_name}</h5> */}
          <h5 className="m-0 me-2 text-white">Company Details</h5>

          <button
            type="button"
            className="btn-close btn-close-white ms-auto"
            id="customizerclose-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          {data ? (
            <div class="container-fluid pt-3">
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
                                      <a
                                        href={data?.c_website}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i class="ri-building-line align-bottom me-1"></i>
                                        {data?.c_website}
                                      </a>
                                    </div>
                                    <div class="vr"></div>
                                    <div>
                                      Create Date :{" "}
                                      <span class="fw-medium">
                                        {data?.c_created_at}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div class="col-md-auto">
                                                <div class="hstack gap-1 flex-wrap">
                                                    <button type="button" class="btn py-0 fs-16 favourite-btn active">
                                                        <i class="ri-star-fill"></i>
                                                    </button>
                                                    <button type="button" class="btn py-0 fs-16 text-body">
                                                        <i class="ri-share-line"></i>
                                                    </button>
                                                    <button type="button" class="btn py-0 fs-16 text-body">
                                                        <i class="ri-flag-line"></i>
                                                    </button>
                                                </div>
                                            </div> */}
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
              <div class="row">
                <div class="col-lg-12">
                  <div class="tab-content text-muted">
                    <div
                      class="tab-pane fade show active"
                      id="project-overview"
                      role="tabpanel"
                    >
                      <div class="row">
                        <div class="col-xl-12 col-lg-12">
                          <div class="card">
                            <div class="card-body">
                              <div class="text-muted">
                                <h6 class="mb-3 fw-semibold text-uppercase">
                                  Summary
                                </h6>
                                <p>{data?.c_description}</p>

                                <ul class="ps-4 vstack gap-2">
                                  <li>
                                    <span className="text-warning">
                                      Phone Number:
                                    </span>{" "}
                                    <a
                                      href={
                                        "tel:" + data?.c_head_office_contact
                                      }
                                    >
                                      {data?.c_head_office_contact}
                                    </a>
                                  </li>
                                  <li>
                                    <span className="text-warning">
                                      {" "}
                                      Head Quarter:{" "}
                                    </span>{" "}
                                    {data?.c_head_office_address}
                                  </li>
                                  <li>
                                    <span className="text-warning">
                                      {" "}
                                      Four Dashboards :{" "}
                                    </span>{" "}
                                    Ecommerce, Analytics, Project,etc.
                                  </li>
                                </ul>

                                <div>
                                  {/* <button type="button" class="btn btn-link link-success p-0">Read more</button> */}
                                </div>

                                <div class="pt-3 border-top border-top-dashed mt-4">
                                  <div class="row">
                                    <div class="col-lg-3 col-sm-6">
                                      <div>
                                        <p class="mb-2 text-uppercase fw-medium">
                                          Total Plants:
                                        </p>
                                        <div class="fs-12">
                                          <a href="#">
                                            {data?.total_country_plant}
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                      <div>
                                        <p class="mb-2 text-uppercase fw-medium">
                                          Total India Plants:
                                        </p>
                                        <div class="fs-12">
                                          <a href="#">
                                            {data?.total_india_plant}
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                      <div>
                                        <p class="mb-2 text-uppercase fw-medium">
                                          Total Quotations:
                                        </p>
                                        <div class="fs-12">0</div>
                                      </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                      <div>
                                        <p class="mb-2 text-uppercase fw-medium">
                                          Total Invoices:
                                        </p>
                                        <div class="fs-12">0</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* <div class="pt-3 border-top border-top-dashed mt-4">
                                                            <h6 class="mb-3 fw-semibold text-uppercase">Resources</h6>
                                                            <div class="row g-3">
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="border rounded border-dashed p-2">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="flex-shrink-0 me-3">
                                                                                <div class="avatar-sm">
                                                                                    <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                                                        <i class="ri-folder-zip-line"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex-grow-1 overflow-hidden">
                                                                                <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">App pages.zip</a></h5>
                                                                                <div>2.2MB</div>
                                                                            </div>
                                                                            <div class="flex-shrink-0 ms-2">
                                                                                <div class="d-flex gap-1">
                                                                                    <button type="button" class="btn btn-icon text-muted btn-sm fs-18"><i class="ri-download-2-line"></i></button>
                                                                                    <div class="dropdown">
                                                                                        <button class="btn btn-icon text-muted btn-sm fs-18 dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i class="ri-more-fill"></i>
                                                                                        </button>
                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item" href="#"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Rename</a></li>
                                                                                            <li><a class="dropdown-item" href="#"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xxl-4 col-lg-6">
                                                                    <div class="border rounded border-dashed p-2">
                                                                        <div class="d-flex align-items-center">
                                                                            <div class="flex-shrink-0 me-3">
                                                                                <div class="avatar-sm">
                                                                                    <div class="avatar-title bg-light text-secondary rounded fs-24">
                                                                                        <i class="ri-file-ppt-2-line"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="flex-grow-1 overflow-hidden">
                                                                                <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">Velzon admin.ppt</a></h5>
                                                                                <div>2.4MB</div>
                                                                            </div>
                                                                            <div class="flex-shrink-0 ms-2">
                                                                                <div class="d-flex gap-1">
                                                                                    <button type="button" class="btn btn-icon text-muted btn-sm fs-18"><i class="ri-download-2-line"></i></button>
                                                                                    <div class="dropdown">
                                                                                        <button class="btn btn-icon text-muted btn-sm fs-18 dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i class="ri-more-fill"></i>
                                                                                        </button>
                                                                                        <ul class="dropdown-menu">
                                                                                            <li><a class="dropdown-item" href="#"><i class="ri-pencil-fill align-bottom me-2 text-muted"></i> Rename</a></li>
                                                                                            <li><a class="dropdown-item" href="#"><i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete</a></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                              </div>
                            </div>
                          </div>

                          {/* <div class="card">
                                                <div class="card-header align-items-center d-flex">
                                                    <h4 class="card-title mb-0 flex-grow-1">Comments</h4>
                                                    <div class="flex-shrink-0">
                                                        <div class="dropdown card-header-dropdown">
                                                            <a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <span class="text-muted">Recent<i class="mdi mdi-chevron-down ms-1"></i></span>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <a class="dropdown-item" href="#">Recent</a>
                                                                <a class="dropdown-item" href="#">Top Rated</a>
                                                                <a class="dropdown-item" href="#">Previous</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="card-body">

                                                    <div data-simplebar style={{height:'300px'}} class="px-3 mx-n3 mb-2">
                                                        <div class="d-flex mb-4">
                                                            <div class="flex-shrink-0">
                                                                <img src="assets/images/users/avatar-8.jpg" alt="" class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1 ms-3">
                                                                <h5 class="fs-13">Joseph Parker <small class="text-muted ms-2">20 Dec 2021 - 05:47AM</small></h5>
                                                                <p class="text-muted">I am getting message from customers that when they place order always get error message .</p>
                                                                <a href="javascript: void(0);" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i> Reply</a>
                                                                <div class="d-flex mt-4">
                                                                    <div class="flex-shrink-0">
                                                                        <img src="assets/images/users/avatar-10.jpg" alt="" class="avatar-xs rounded-circle" />
                                                                    </div>
                                                                    <div class="flex-grow-1 ms-3">
                                                                        <h5 class="fs-13">Alexis Clarke <small class="text-muted ms-2">22 Dec 2021 - 02:32PM</small></h5>
                                                                        <p class="text-muted">Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.</p>
                                                                        <a href="javascript: void(0);" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i> Reply</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex mb-4">
                                                            <div class="flex-shrink-0">
                                                                <img src="assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1 ms-3">
                                                                <h5 class="fs-13">Donald Palmer <small class="text-muted ms-2">24 Dec 2021 - 05:20PM</small></h5>
                                                                <p class="text-muted">If you have further questions, please contact Customer Support from the “Action Menu” on your <a href="javascript:void(0);" class="text-decoration-underline">Online Order Support</a>.</p>
                                                                <a href="javascript: void(0);" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i> Reply</a>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0">
                                                                <img src="assets/images/users/avatar-10.jpg" alt="" class="avatar-xs rounded-circle" />
                                                            </div>
                                                            <div class="flex-grow-1 ms-3">
                                                                <h5 class="fs-13">Alexis Clarke <small class="text-muted ms-2">26 min ago</small></h5>
                                                                <p class="text-muted">Your <a href="javascript:void(0)" class="text-decoration-underline">Online Order Support</a> provides you with the most current status of your order. To help manage your order refer to the “Action Menu” to initiate return, contact Customer Support and more.</p>
                                                                <div class="row g-2 mb-3">
                                                                    <div class="col-lg-1 col-sm-2 col-6">
                                                                        <img src="assets/images/small/img-4.jpg" alt="" class="img-fluid rounded"/>
                                                                    </div>
                                                                    <div class="col-lg-1 col-sm-2 col-6">
                                                                        <img src="assets/images/small/img-5.jpg" alt="" class="img-fluid rounded"/>
                                                                    </div>
                                                                </div>
                                                                <a href="javascript: void(0);" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i> Reply</a>
                                                                <div class="d-flex mt-4">
                                                                    <div class="flex-shrink-0">
                                                                        <img src="assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle" />
                                                                    </div>
                                                                    <div class="flex-grow-1 ms-3">
                                                                        <h5 class="fs-13">Donald Palmer <small class="text-muted ms-2">8 sec ago</small></h5>
                                                                        <p class="text-muted">Other shipping methods are available at checkout if you want your purchase delivered faster.</p>
                                                                        <a href="javascript: void(0);" class="badge text-muted bg-light"><i class="mdi mdi-reply"></i> Reply</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form class="mt-4">
                                                        <div class="row g-3">
                                                            <div class="col-12">
                                                                <label for="exampleFormControlTextarea1" class="form-label text-body">Leave a Comments</label>
                                                                <textarea class="form-control bg-light border-light" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your comment..."></textarea>
                                                            </div>
                                                            <div class="col-12 text-end">
                                                                <button type="button" class="btn btn-ghost-secondary btn-icon waves-effect me-1"><i class="ri-attachment-line fs-16"></i></button>
                                                                <a href="javascript:void(0);" class="btn btn-success">Post Comments</a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div> */}
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
                            <h5 class="card-title flex-grow-1">All Plants</h5>
                          </div>
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="table-responsive table-card">
                                <table class="table table-borderless align-middle mb-0">
                                  <thead class="table-light">
                                    <tr>
                                      <th scope="col">Accountant</th>
                                      <th scope="col">Security</th>
                                      <th scope="col">Store</th>
                                      <th scope="col">Other</th>
                                      <th scope="col">GST</th>
                                      <th scope="col">City</th>
                                      <th scope="col">State</th>
                                      <th scope="col">Pin Code</th>
                                      <th scope="col">Area Working</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {plantList?.map((plant, i) => {
                                      return (
                                        <tr>
                                          <td>
                                            <div>{plant.p_account_contact}</div>
                                            <div>
                                              <div>
                                                {plant.p_account_email}
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div>{plant.p_security_contact}</div>
                                            <div>
                                              <div>
                                                {plant.p_security_email}
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div>{plant.p_store_contact}</div>
                                            <div>
                                              <div>
                                                {plant.p_store_email}
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div>{plant.p_other_contact}</div>
                                            <div>
                                              <div>
                                                {plant.p_other_email}
                                              </div>
                                            </div>
                                          </td>
                                          <td>{plant.p_gst}</td>
                                          <td>{plant.p_city}</td>
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
                            <h5 class="card-title flex-grow-1">All Units</h5>
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
                            <h5 class="card-title flex-grow-1">All Customer</h5>
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
                                          <td>{customer.c_fullname}</td>
                                          <td>{customer.c_company_name}</td>
                                          <td>
                                            <div>{customer.c_mobile}</div>
                                            <div>
                                              <div>
                                                {customer.c_email}
                                              </div>
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
                      id="project-activities"
                      role="tabpanel"
                    >
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Activities</h5>
                          <div class="acitivity-timeline py-3">
                            <div class="acitivity-item d-flex">
                              <div class="flex-shrink-0">
                                <img
                                  src="assets/images/users/avatar-1.jpg"
                                  alt=""
                                  class="avatar-xs rounded-circle acitivity-avatar"
                                />
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">
                                  Oliver Phillips{" "}
                                  <span class="badge bg-primary-subtle text-primary align-middle">
                                    New
                                  </span>
                                </h6>
                                <p class="text-muted mb-2">
                                  We talked about a project on linkedin.
                                </p>
                                <small class="mb-0 text-muted">Today</small>
                              </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                              <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                  N
                                </div>
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">
                                  Nancy Martino{" "}
                                  <span class="badge bg-secondary-subtle text-secondary align-middle">
                                    In Progress
                                  </span>
                                </h6>
                                <p class="text-muted mb-2">
                                  <i class="ri-file-text-line align-middle ms-2"></i>{" "}
                                  Create new project Building product
                                </p>
                                <div class="avatar-group mb-2">
                                  <a
                                    href="javascript: void(0);"
                                    class="avatar-group-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Christi"
                                  >
                                    <img
                                      src="assets/images/users/avatar-4.jpg"
                                      alt=""
                                      class="rounded-circle avatar-xs"
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    class="avatar-group-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Frank Hook"
                                  >
                                    <img
                                      src="assets/images/users/avatar-3.jpg"
                                      alt=""
                                      class="rounded-circle avatar-xs"
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    class="avatar-group-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title=" Ruby"
                                  >
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle bg-light text-primary">
                                        R
                                      </div>
                                    </div>
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    class="avatar-group-item"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="more"
                                  >
                                    <div class="avatar-xs">
                                      <div class="avatar-title rounded-circle">
                                        2+
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <small class="mb-0 text-muted">Yesterday</small>
                              </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                              <div class="flex-shrink-0">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  alt=""
                                  class="avatar-xs rounded-circle acitivity-avatar"
                                />
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">
                                  Natasha Carey{" "}
                                  <span class="badge bg-success-subtle text-success align-middle">
                                    Completed
                                  </span>
                                </h6>
                                <p class="text-muted mb-2">
                                  Adding a new event with attachments
                                </p>
                                <div class="row">
                                  <div class="col-xxl-4">
                                    <div class="row border border-dashed gx-2 p-2 mb-2">
                                      <div class="col-4">
                                        <img
                                          src="assets/images/small/img-2.jpg"
                                          alt=""
                                          class="img-fluid rounded"
                                        />
                                      </div>
                                      <div class="col-4">
                                        <img
                                          src="assets/images/small/img-3.jpg"
                                          alt=""
                                          class="img-fluid rounded"
                                        />
                                      </div>
                                      <div class="col-4">
                                        <img
                                          src="assets/images/small/img-4.jpg"
                                          alt=""
                                          class="img-fluid rounded"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <small class="mb-0 text-muted">25 Nov</small>
                              </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                              <div class="flex-shrink-0">
                                <img
                                  src="assets/images/users/avatar-6.jpg"
                                  alt=""
                                  class="avatar-xs rounded-circle acitivity-avatar"
                                />
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">Bethany Johnson</h6>
                                <p class="text-muted mb-2">
                                  added a new member to velzon dashboard
                                </p>
                                <small class="mb-0 text-muted">19 Nov</small>
                              </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                              <div class="flex-shrink-0">
                                <div class="avatar-xs acitivity-avatar">
                                  <div class="avatar-title rounded-circle bg-danger-subtle text-danger">
                                    <i class="ri-shopping-bag-line"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">
                                  Your order is placed{" "}
                                  <span class="badge bg-danger-subtle text-danger align-middle ms-1">
                                    Out of Delivery
                                  </span>
                                </h6>
                                <p class="text-muted mb-2">
                                  These customers can rest assured their order
                                  has been placed.
                                </p>
                                <small class="mb-0 text-muted">16 Nov</small>
                              </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                              <div class="flex-shrink-0">
                                <img
                                  src="assets/images/users/avatar-7.jpg"
                                  alt=""
                                  class="avatar-xs rounded-circle acitivity-avatar"
                                />
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">Lewis Pratt</h6>
                                <p class="text-muted mb-2">
                                  They all have something to say beyond the
                                  words on the page. They can come across as
                                  casual or neutral, exotic or graphic.{" "}
                                </p>
                                <small class="mb-0 text-muted">22 Oct</small>
                              </div>
                            </div>
                            <div class="acitivity-item py-3 d-flex">
                              <div class="flex-shrink-0">
                                <div class="avatar-xs acitivity-avatar">
                                  <div class="avatar-title rounded-circle bg-info-subtle text-info">
                                    <i class="ri-line-chart-line"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">Monthly sales report</h6>
                                <p class="text-muted mb-2">
                                  <span class="text-danger">2 days left</span>{" "}
                                  notification to submit the monthly sales
                                  report.{" "}
                                  <a
                                    href="javascript:void(0);"
                                    class="link-warning text-decoration-underline"
                                  >
                                    Reports Builder
                                  </a>
                                </p>
                                <small class="mb-0 text-muted">15 Oct</small>
                              </div>
                            </div>
                            <div class="acitivity-item d-flex">
                              <div class="flex-shrink-0">
                                <img
                                  src="assets/images/users/avatar-8.jpg"
                                  alt=""
                                  class="avatar-xs rounded-circle acitivity-avatar"
                                />
                              </div>
                              <div class="flex-grow-1 ms-3">
                                <h6 class="mb-1">
                                  New ticket received{" "}
                                  <span class="badge bg-success-subtle text-success align-middle">
                                    Completed
                                  </span>
                                </h6>
                                <p class="text-muted mb-2">
                                  User{" "}
                                  <span class="text-secondary">Erica245</span>{" "}
                                  submitted a ticket.
                                </p>
                                <small class="mb-0 text-muted">26 Aug</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="project-team"
                      role="tabpanel"
                    >
                      <div class="row g-4 mb-3">
                        <div class="col-sm">
                          <div class="d-flex">
                            <div class="search-box me-2">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="Search member..."
                              />
                              <i class="ri-search-line search-icon"></i>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#inviteMembersModal"
                            >
                              <i class="ri-share-line me-1 align-bottom"></i>{" "}
                              Invite Member
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="team-list list-view-filter">
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      alt=""
                                      class="img-fluid d-block rounded-circle"
                                    />
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Nancy Martino</h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      Team Leader & HR
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">225</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">197</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn active"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <div class="avatar-title bg-danger-subtle text-danger rounded-circle">
                                      HB
                                    </div>
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Henry Baird</h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      Full Stack Developer
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">352</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">376</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn active"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-3.jpg"
                                      alt=""
                                      class="img-fluid d-block rounded-circle"
                                    />
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Frank Hook</h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      Project Manager
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">164</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">182</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-8.jpg"
                                      alt=""
                                      class="img-fluid d-block rounded-circle"
                                    />
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">
                                        Jennifer Carter
                                      </h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      UI/UX Designer
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">225</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">197</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <div class="avatar-title bg-success-subtle text-success rounded-circle">
                                      ME
                                    </div>
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Megan Elmore</h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      Team Leader & Web Developer
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">201</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">263</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-4.jpg"
                                      alt=""
                                      class="img-fluid d-block rounded-circle"
                                    />
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Alexis Clarke</h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      Backend Developer
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">132</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">147</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <div class="avatar-title bg-info-subtle text-info rounded-circle">
                                      NC
                                    </div>
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Nathan Cole</h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      Front-End Developer
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">352</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">376</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-7.jpg"
                                      alt=""
                                      class="img-fluid d-block rounded-circle"
                                    />
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Joseph Parker</h5>
                                    </a>
                                    <p class="text-muted mb-0">
                                      Team Leader & HR
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">64</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">93</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <img
                                      src="assets/images/users/avatar-5.jpg"
                                      alt=""
                                      class="img-fluid d-block rounded-circle"
                                    />
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Erica Kernan</h5>
                                    </a>
                                    <p class="text-muted mb-0">Web Designer</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">345</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">298</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card team-box">
                          <div class="card-body px-4">
                            <div class="row align-items-center team-row">
                              <div class="col team-settings">
                                <div class="row align-items-center">
                                  <div class="col">
                                    <div class="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        class="btn fs-16 p-0 favourite-btn"
                                      >
                                        <i class="ri-star-fill"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="col text-end dropdown">
                                    <a
                                      href="javascript:void(0);"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <i class="ri-more-fill fs-17"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-eye-fill text-muted me-2 align-bottom"></i>
                                          View
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-star-fill text-muted me-2 align-bottom"></i>
                                          Favourite
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          class="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          <i class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>
                                          Delete
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="team-profile-img">
                                  <div class="avatar-lg img-thumbnail rounded-circle">
                                    <div class="avatar-title border bg-light text-primary rounded-circle">
                                      DP
                                    </div>
                                  </div>
                                  <div class="team-content">
                                    <a href="#" class="d-block">
                                      <h5 class="fs-16 mb-1">Donald Palmer</h5>
                                    </a>
                                    <p class="text-muted mb-0">Wed Developer</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col">
                                <div class="row text-muted text-center">
                                  <div class="col-6 border-end border-end-dashed">
                                    <h5 class="mb-1">97</h5>
                                    <p class="text-muted mb-0">Projects</p>
                                  </div>
                                  <div class="col-6">
                                    <h5 class="mb-1">135</h5>
                                    <p class="text-muted mb-0">Tasks</p>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-2 col">
                                <div class="text-end">
                                  <a
                                    href="pages-profile.html"
                                    class="btn btn-light view-btn"
                                  >
                                    View Profile
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row g-0 text-center text-sm-start align-items-center mb-3">
                        <div class="col-sm-6">
                          <div>
                            <p class="mb-sm-0">Showing 1 to 10 of 12 entries</p>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                            <li class="page-item disabled">
                              {" "}
                              <a href="#" class="page-link">
                                <i class="mdi mdi-chevron-left"></i>
                              </a>{" "}
                            </li>
                            <li class="page-item">
                              {" "}
                              <a href="#" class="page-link">
                                1
                              </a>{" "}
                            </li>
                            <li class="page-item active">
                              {" "}
                              <a href="#" class="page-link">
                                2
                              </a>{" "}
                            </li>
                            <li class="page-item">
                              {" "}
                              <a href="#" class="page-link">
                                3
                              </a>{" "}
                            </li>
                            <li class="page-item">
                              {" "}
                              <a href="#" class="page-link">
                                4
                              </a>{" "}
                            </li>
                            <li class="page-item">
                              {" "}
                              <a href="#" class="page-link">
                                5
                              </a>{" "}
                            </li>
                            <li class="page-item">
                              {" "}
                              <a href="#" class="page-link">
                                <i class="mdi mdi-chevron-right"></i>
                              </a>{" "}
                            </li>
                          </ul>
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
  );
};

export default CompanyDetails;
