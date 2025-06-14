import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import TopCards from "../../Components/TopCards";

const ListMachine = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 class="mb-sm-0">Machines</h4>
                </div>
              </div>
            </div>
            <TopCards />
            <div class="card">
              <div class="card-header border-0 rounded">
                <div class="row g-2">
                  <div class="col-xl-3">
                    <div class="search-box">
                      <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        id="searchResultList"
                        placeholder="Search for machines &amp; owner name or something..."
                      />{" "}
                      <i class="ri-search-line search-icon"></i>
                    </div>
                  </div>
                  <div class="col-xxl-3 ms-auto">
                    <div>
                      <div
                        class="choices"
                        data-type="select-one"
                        tabindex="0"
                        role="listbox"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <select
                          class="form-control choices__input"
                          id="category-select"
                          hidden=""
                          tabindex="-1"
                          data-choice="active"
                        >
                          <option value="All" selected="">
                            Select Categories
                          </option>
                          <option value="All">All</option>
                          <option value="Retailer">Retailer</option>
                          <option value="Health &amp; Medicine">
                            Health &amp; Medicine
                          </option>
                          <option value="Manufacturer">Manufacturer</option>
                          <option value="Food Service">Food Service</option>
                          <option value="Computers &amp; Electronics">
                            Computers &amp; Electronics
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-auto">
                    <div class="hstack gap-2">
                      <button type="button" class="btn btn-danger">
                        <i class="ri-equalizer-fill me-1 align-bottom"></i>{" "}
                        Filters
                      </button>
                      <button
                        class="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#addMachine"
                      >
                        <i class="ri-add-fill me-1 align-bottom"></i> Add
                        Machine
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div class="col-xl-3 col-lg-6">
                <div class="card ribbon-box right overflow-hidden">
                  <div class="card-body text-center p-4">
                    <div class="ribbon ribbon-info ribbon-shape trending-ribbon">
                      <i class="ri-flashlight-fill text-white align-bottom"></i>
                      <span class="trending-ribbon-text">Trending</span>
                    </div>
                    <img
                      src="assets/images/companies/img-1.png"
                      alt="img-1.png"
                      height="45"
                    />
                    <h5 class="mb-1 mt-4">
                      <a
                        href="apps-ecommerce-Machine-details.html"
                        class="link-primary"
                      >
                        Force Medicines
                      </a>
                    </h5>
                    <p class="text-muted mb-4">David Marshall</p>
                    <div class="row mt-4">
                      {" "}
                      <div class="col-lg-6 border-end-dashed border-end">
                        {" "}
                        <h5>452</h5> <span class="text-muted">Item Stock</span>{" "}
                      </div>{" "}
                      <div class="col-lg-6">
                        {" "}
                        <h5>$45,415</h5>{" "}
                        <span class="text-muted">Wallet Balance</span>{" "}
                      </div>{" "}
                    </div>
                    <div class="mt-4">
                      {" "}
                      <a
                        onClick={() => navigate(`/view-machine/${1}`)}
                        class="btn btn-light w-100"
                      >
                        View Details
                      </a>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row align-items-center mb-4 text-center text-sm-start"
              id="pagination-element"
              style={{ display: "flex" }}
            >
              <div class="col-sm">
                <div class="text-muted">Showing 1 to 8 of 12 entries</div>
              </div>
              <div class="col-sm-auto  mt-3 mt-sm-0">
                <div class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                  <div class="page-item disabled">
                    <a
                      href="javascript:void(0);"
                      class="page-link"
                      id="page-prev"
                    >
                      <i class="mdi mdi-chevron-left"></i>
                    </a>
                  </div>
                  <span id="page-num" class="pagination">
                    <div class="page-item active">
                      <a
                        class="page-link clickPageNumber"
                        href="javascript:void(0);"
                      >
                        1
                      </a>
                    </div>
                  </span>
                  <div class="page-item disabled">
                    <a
                      href="javascript:void(0);"
                      class="page-link"
                      id="page-next"
                    >
                      <i class="mdi mdi-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ADD VENDOR MODEL start */}
            <div
              class="modal fade zoomIn"
              id="addMachine"
              tabindex="-1"
              aria-labelledby="addMachine"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="addMachine">
                      Add Machine
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-content border-0 mt-3">
                    <ul
                      class="nav nav-tabs nav-tabs-custom nav-success p-2 pb-0 bg-light"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link active"
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          Personal Details
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#businessDetails"
                          role="tab"
                          aria-selected="false"
                          tabindex="-1"
                        >
                          Business Details
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#bankDetails"
                          role="tab"
                          aria-selected="false"
                          tabindex="-1"
                        >
                          Bank Details
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="modal-body">
                    <div class="tab-content">
                      <div
                        class="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                        <form action="#">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="firstnameInput" class="form-label">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="firstnameInput"
                                  placeholder="Enter your firstname"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="lastnameInput" class="form-label">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="lastnameInput"
                                  placeholder="Enter your lastname"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="contactnumberInput"
                                  class="form-label"
                                >
                                  Contact Number
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="contactnumberInput"
                                  placeholder="Enter your number"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="phonenumberInput"
                                  class="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="phonenumberInput"
                                  placeholder="Enter your number"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="emailidInput" class="form-label">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="emailidInput"
                                  placeholder="Enter your email"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="birthdayidInput" class="form-label">
                                  Date of Birth
                                </label>
                                <input
                                  type="text"
                                  id="birthdayidInput"
                                  class="form-control flatpickr-input"
                                  data-provider="flatpickr"
                                  placeholder="Enter your date of birth"
                                  readonly="readonly"
                                />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mb-3">
                                <label for="cityidInput" class="form-label">
                                  City
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="cityidInput"
                                  placeholder="Enter your city"
                                />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mb-3">
                                <label for="countryidInput" class="form-label">
                                  Country
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="countryidInput"
                                  placeholder="Enter your country"
                                />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mb-3">
                                <label for="zipcodeidInput" class="form-label">
                                  Zip Code
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="zipcodeidInput"
                                  placeholder="Enter your zipcode"
                                />
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="mb-3">
                                <label
                                  for="exampleFormControlTextarea1"
                                  class="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  class="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                  placeholder="Enter description"
                                ></textarea>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="hstack gap-2 justify-content-end">
                                <button
                                  class="btn btn-link link-success text-decoration-none fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i class="ri-close-line me-1 align-middle"></i>{" "}
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">
                                  <i class="ri-save-3-line align-bottom me-1"></i>{" "}
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane"
                        id="businessDetails"
                        role="tabpanel"
                      >
                        <form action="#">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="mb-3">
                                <label
                                  for="companynameInput"
                                  class="form-label"
                                >
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="companynameInput"
                                  placeholder="Enter your company name"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="choices-single-default"
                                  class="form-label"
                                >
                                  Company Type
                                </label>
                                <select
                                  class="form-control"
                                  data-trigger=""
                                  name="choices-single-default"
                                  id="choices-single-default"
                                >
                                  <option value="">Select type</option>
                                  <option value="All" selected="">
                                    All
                                  </option>
                                  <option value="Merchandising">
                                    Merchandising
                                  </option>
                                  <option value="Manufacturing">
                                    Manufacturing
                                  </option>
                                  <option value="Partnership">
                                    Partnership
                                  </option>
                                  <option value="Corporation">
                                    Corporation
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="pancardInput" class="form-label">
                                  Pan Card Number
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="pancardInput"
                                  placeholder="Enter your pan-card number"
                                />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mb-3">
                                <label for="websiteInput" class="form-label">
                                  Website
                                </label>
                                <input
                                  type="url"
                                  class="form-control"
                                  id="websiteInput"
                                  placeholder="Enter your URL"
                                />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mb-3">
                                <label for="faxInput" class="form-label">
                                  Fax
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="faxInput"
                                  placeholder="Enter your fax"
                                />
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="mb-3">
                                <label
                                  for="companyemailInput"
                                  class="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="companyemailInput"
                                  placeholder="Enter your email"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="worknumberInput" class="form-label">
                                  Number
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="worknumberInput"
                                  placeholder="Enter your number"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="companylogoInput"
                                  class="form-label"
                                >
                                  Company Logo
                                </label>
                                <input
                                  type="file"
                                  class="form-control"
                                  id="companylogoInput"
                                />
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="hstack gap-2 justify-content-end">
                                <button
                                  class="btn btn-link link-success text-decoration-none fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i class="ri-close-line me-1 align-middle"></i>{" "}
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">
                                  <i class="ri-save-3-line align-bottom me-1"></i>{" "}
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="tab-pane" id="bankDetails" role="tabpanel">
                        <form action="#">
                          <div class="row">
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="banknameInput" class="form-label">
                                  Bank Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="banknameInput"
                                  placeholder="Enter your bank name"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="branchInput" class="form-label">
                                  Branch
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="branchInput"
                                  placeholder="Branch"
                                />
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="mb-3">
                                <label
                                  for="accountnameInput"
                                  class="form-label"
                                >
                                  Account Holder Name
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="accountnameInput"
                                  placeholder="Enter account holder name"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label
                                  for="accountnumberInput"
                                  class="form-label"
                                >
                                  Account Number
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="accountnumberInput"
                                  placeholder="Enter account number"
                                />
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="mb-3">
                                <label for="ifscInput" class="form-label">
                                  IFSC
                                </label>
                                <input
                                  type="number"
                                  class="form-control"
                                  id="ifscInput"
                                  placeholder="IFSC"
                                />
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="hstack gap-2 justify-content-end">
                                <button
                                  class="btn btn-link link-success text-decoration-none fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i class="ri-close-line me-1 align-middle"></i>{" "}
                                  Close
                                </button>
                                <button type="submit" class="btn btn-primary">
                                  <i class="ri-save-3-line align-bottom me-1"></i>{" "}
                                  Save
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
            {/* ADD VENDOR MODEL end */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListMachine;
