import React, { useState } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination";

const ListDrawing = () => {
  const navigate = useNavigate();
  
    const [showItems, setShowItems] = useState([]); //pagination and search for map function
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
                  <h4 class="mb-sm-0">Drawings</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Ecommerce</a>
                      </li>
                      <li class="breadcrumb-item active">Drawings</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------- */}
            <div class="row">
              <div class="col">
                <div class="h-100">
                  <div class="row mb-3 pb-1">
                    <div class="col-12">
                      <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                        <div class="flex-grow-1">
                          <h4 class="fs-16 mb-1">Good Morning, Anna!</h4>
                          <p class="text-muted mb-0">
                            Here's what's happening with your store today.
                          </p>
                        </div>
                        <div class="mt-3 mt-lg-0">
                          <form action="javascript:void(0);">
                            <div class="row g-3 mb-0 align-items-center">
                              <div class="col-sm-auto">
                                <div class="input-group">
                                  <input
                                    type="text"
                                    class="form-control border-0 minimal-border dash-filter-picker shadow flatpickr-input"
                                    data-provider="flatpickr"
                                    data-range-date="true"
                                    data-date-format="d M, Y"
                                    data-deafult-date="01 Jan 2022 to 31 Jan 2022"
                                    readonly="readonly"
                                  />
                                  <div class="input-group-text bg-primary border-primary text-white">
                                    <i class="ri-calendar-2-line"></i>
                                  </div>
                                </div>
                              </div>

                              <div class="col-auto">
                                <button
                                  type="button"
                                  class="btn btn-soft-success material-shadow-none"
                                  onClick={()=>{navigate('/view-drawing')}}
                                >
                                  <i class="ri-add-circle-line align-middle me-1"></i>{" "}
                                  View all
                                </button>
                              </div>

                              <div class="col-auto">
                                <button
                                  type="button"
                                  class="btn btn-soft-info btn-icon waves-effect material-shadow-none waves-light layout-rightside-btn"
                                >
                                  <i class="ri-pulse-line"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xl-3 col-md-6">
                      <div class="card card-animate">
                        <div class="card-body">
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                                {" "}
                                Total Earnings
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-success fs-14 mb-0">
                                <i class="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                                +16.24 %
                              </h5>
                            </div>
                          </div>
                          <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                $
                                <span
                                  class="counter-value"
                                  data-target="559.25"
                                >
                                  559.25
                                </span>
                                k{" "}
                              </h4>
                              <a href="" class="text-decoration-underline">
                                View net earnings
                              </a>
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
                                Orders
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-danger fs-14 mb-0">
                                <i class="ri-arrow-right-down-line fs-13 align-middle"></i>{" "}
                                -3.57 %
                              </h5>
                            </div>
                          </div>
                          <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                <span class="counter-value" data-target="36894">
                                  36,894
                                </span>
                              </h4>
                              <a href="" class="text-decoration-underline">
                                View all orders
                              </a>
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
                                Customers
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-success fs-14 mb-0">
                                <i class="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                                +29.08 %
                              </h5>
                            </div>
                          </div>
                          <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                <span
                                  class="counter-value"
                                  data-target="183.35"
                                >
                                  183.35
                                </span>
                                M{" "}
                              </h4>
                              <a href="" class="text-decoration-underline">
                                See details
                              </a>
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
                                {" "}
                                My Balance
                              </p>
                            </div>
                            <div class="flex-shrink-0">
                              <h5 class="text-muted fs-14 mb-0">+0.00 %</h5>
                            </div>
                          </div>
                          <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                $
                                <span
                                  class="counter-value"
                                  data-target="165.89"
                                >
                                  165.89
                                </span>
                                k{" "}
                              </h4>
                              <a href="" class="text-decoration-underline">
                                Withdraw money
                              </a>
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

                  <div class="row">
                    <div className="chat-wrapper col-md-12 col-lg-2 d-lg-flex">
                      <div
                        className="chat-leftsidebar-modify"
                        style={{ height: "auto" }}
                      >
                        {/* Side bar  */}
                        <div
                          className="sidebar bg-white"
                          style={{
                            width: "280px",
                            height: "100vh",
                            borderRight: "1px solid #eee",
                          }}
                        >
                          <div
                            className="sidebar-content"
                            style={{
                              padding: "16px 0",
                              height: "100%",
                              overflowY: "auto",
                            }}
                          >
                            {/* Logo / Brand */}
                            <div className="px-4 py-3 mb-2">
                              <h4 className="mb-0 fw-bold">Dashboard</h4>
                            </div>

                            {/* Main Navigation */}
                            <ul className="list-unstyled mb-0">
                              {/* Dashboard */}
                              <li className="px-3 mb-1">
                                <a
                                  href="#"
                                  className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                                >
                                  <i className="ri-dashboard-line me-3"></i>
                                  <span>Dashboard</span>
                                </a>
                              </li>

                              {/* Leads */}
                              <li className="px-3 mb-1">
                                <a
                                  href="#"
                                  className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                                >
                                  <i className="ri-contacts-line me-3"></i>
                                  <span>Leads</span>
                                  <span className="badge bg-primary ms-auto">
                                    12
                                  </span>
                                </a>
                              </li>

                              {/* Employees */}
                              <li className="px-3 mb-1">
                                <a
                                  href="#"
                                  className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                                >
                                  <i className="ri-team-line me-3"></i>
                                  <span>Employees</span>
                                </a>
                              </li>

                              {/* Employers */}
                              <li className="px-3 mb-1">
                                <a
                                  href="#"
                                  className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                                >
                                  <i className="ri-building-line me-3"></i>
                                  <span>Employers</span>
                                </a>
                              </li>

                              {/* Projects */}
                              <li className="px-3 mb-1">
                                <a
                                  href="#"
                                  className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                                >
                                  <i className="ri-task-line me-3"></i>
                                  <span>Projects</span>
                                </a>
                              </li>

                              {/* Reports */}
                              <li className="px-3 mb-1">
                                <a
                                  href="#"
                                  className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                                >
                                  <i className="ri-bar-chart-line me-3"></i>
                                  <span>Reports</span>
                                </a>
                              </li>

                              {/* Settings */}
                              <li className="px-3 mb-1">
                                <a
                                  href="#"
                                  className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                                >
                                  <i className="ri-settings-3-line me-3"></i>
                                  <span>Settings</span>
                                </a>
                              </li>
                            </ul>

                            {/* Divider */}
                            <hr className="my-3 mx-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-lg-10">
                      <div>
                        <div class="card">
                          <div class="card-header border-0">
                            <div class="row g-4">
                              <div class="col-sm-auto">
                                <div>
                                  <a
                                    onClick={() => navigate("/add-drawing")}
                                    class="btn btn-success"
                                    id="adddrawing-btn"
                                  >
                                    <i class="ri-add-line align-bottom me-1"></i>{" "}
                                    Add Drawing
                                  </a>
                                </div>
                              </div>
                              <div class="col-sm">
                                <div class="d-flex justify-content-sm-end">
                                  <div class="search-box ms-2">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="searchDrawingList"
                                      placeholder="Search Drawings..."
                                    />
                                    <i class="ri-search-line search-icon"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-header">
                            <div class="row align-items-center">
                              <div class="col-auto">
                                <div id="selection-element">
                                  <div class="my-n1 d-flex align-items-center text-muted">
                                    Select{" "}
                                    <div
                                      id="select-content"
                                      class="text-body fw-semibold px-1"
                                    ></div>{" "}
                                    Result{" "}
                                    <button
                                      type="button"
                                      class="btn btn-link link-danger p-0 ms-3 material-shadow-none"
                                      data-bs-toggle="modal"
                                      data-bs-target="#removeItemModal"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="card-body">
                            <div class="tab-content text-muted">
                              <div
                                class="tab-pane active"
                                id="drawingnav-all"
                                role="tabpanel"
                              >
                                <div
                                  id="table-drawing-list-all"
                                  class="table-card gridjs-border-none"
                                >
                                  <div
                                    role="complementary"
                                    class="gridjs gridjs-container"
                                    style={{ width: "100%" }}
                                  >
                                    <div
                                      class="gridjs-wrapper"
                                      style={{ height: "auto" }}
                                    >
                                      <table
                                        role="grid"
                                        class="gridjs-table"
                                        style={{ height: "auto" }}
                                      >
                                        <thead class="gridjs-thead">
                                          <tr class="gridjs-tr">
                                            <th
                                              data-column-id="#"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "40px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                #
                                              </div>
                                            </th>
                                            <th
                                              data-column-id="drawing"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "360px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                Drawing
                                              </div>
                                            </th>
                                            <th
                                              data-column-id="stock"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "94px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                Stock
                                              </div>
                                            </th>
                                            <th
                                              data-column-id="price"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "101px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                Price
                                              </div>
                                            </th>
                                            <th
                                              data-column-id="orders"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "84px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                Orders
                                              </div>
                                            </th>
                                            <th
                                              data-column-id="orders"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "84px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                Rating
                                              </div>
                                            </th>
                                            <th
                                              data-column-id="orders"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "84px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                Published
                                              </div>
                                            </th>
                                            <th
                                              data-column-id="orders"
                                              class="gridjs-th gridjs-th-sort text-muted"
                                              tabindex="0"
                                              style={{ width: "84px" }}
                                            >
                                              <div class="gridjs-th-content">
                                                Action
                                              </div>
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {showItems?.length > 0 ? (
                                            showItems?.map((drawing, i) => {
                                              return (
                                                <tr class="gridjs-tr">
                                                  <td
                                                    data-column-id="#"
                                                    class="gridjs-td"
                                                  >
                                                    <span>
                                                      <div class="form-check checkbox-drawing-list">
                                                        <input
                                                          class="form-check-input"
                                                          type="checkbox"
                                                          value="1"
                                                          id="checkbox-1"
                                                        />
                                                        <label
                                                          class="form-check-label"
                                                          for="checkbox-1"
                                                        ></label>
                                                      </div>
                                                    </span>
                                                  </td>

                                                  <td
                                                    data-column-id="drawing"
                                                    class="gridjs-td"
                                                  >
                                                    <span>
                                                      <div class="d-flex align-items-center">
                                                        <div class="flex-shrink-0 me-3">
                                                          <div class="avatar-sm bg-light rounded p-1">
                                                            {drawing.p_image !==
                                                            null ? (
                                                              <img
                                                                src={
                                                                  drawing.p_image
                                                                }
                                                                className="img-fluid d-block"
                                                                alt="Drawing Image"
                                                              />
                                                            ) : (
                                                              <img
                                                                src="assets/dist/img/default-drawing.png"
                                                                className="img-fluid d-block"
                                                                alt="Default Image"
                                                              />
                                                            )}
                                                          </div>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                          <h5 class="fs-14 mb-1">
                                                            <a
                                                              onClick={() =>
                                                                navigate(
                                                                  `/view-drawing/${drawing.p_id}`
                                                                )
                                                              }
                                                              class="text-body"
                                                            >
                                                              {drawing.p_name}
                                                            </a>
                                                          </h5>
                                                          <p class="text-muted mb-0">
                                                            Category :{" "}
                                                            <span class="fw-medium">
                                                              Fashion
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </span>
                                                  </td>

                                                  <td
                                                    data-column-id="stock"
                                                    class="gridjs-td"
                                                  >
                                                    12
                                                  </td>
                                                  <td
                                                    data-column-id="price"
                                                    class="gridjs-td"
                                                  >
                                                    <span>$215.00</span>
                                                  </td>
                                                  <td
                                                    data-column-id="orders"
                                                    class="gridjs-td"
                                                  >
                                                    48
                                                  </td>

                                                  <td
                                                    data-column-id="rating"
                                                    class="gridjs-td"
                                                  >
                                                    <span>
                                                      <span class="badge bg-light text-body fs-12 fw-medium">
                                                        <i class="mdi mdi-star text-warning me-1"></i>
                                                        4.2
                                                      </span>
                                                    </span>
                                                  </td>

                                                  <td
                                                    data-column-id="published"
                                                    class="gridjs-td"
                                                  >
                                                    <span>
                                                      12 Oct, 2021
                                                      <small class="text-muted ms-1">
                                                        10:05 AM
                                                      </small>
                                                    </span>
                                                  </td>

                                                  <td
                                                    data-column-id="action"
                                                    class="gridjs-td"
                                                  >
                                                    <span>
                                                      <div class="dropdown">
                                                        <button
                                                          class="btn btn-soft-secondary btn-sm dropdown"
                                                          type="button"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                        >
                                                          <i class="ri-more-fill"></i>
                                                        </button>
                                                        <ul class="dropdown-menu dropdown-menu-end">
                                                          <li>
                                                            <a
                                                              class="dropdown-item"
                                                              href="apps-ecommerce-drawing-details.html"
                                                            >
                                                              <i class="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                                                              View
                                                            </a>
                                                          </li>
                                                          <li>
                                                            <a
                                                              class="dropdown-item edit-list"
                                                              data-edit-id="1"
                                                              href="apps-ecommerce-add-drawing.html"
                                                            >
                                                              <i class="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                                                              Edit
                                                            </a>
                                                          </li>
                                                          <li class="dropdown-divider"></li>
                                                          <li>
                                                            <a
                                                              class="dropdown-item remove-list"
                                                              href="#"
                                                              data-id="1"
                                                              data-bs-toggle="modal"
                                                              data-bs-target="#removeItemModal"
                                                            >
                                                              <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                                                              Delete
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </span>
                                                  </td>
                                                </tr>
                                              );
                                            })
                                          ) : (
                                            <div></div>
                                          )}
                                          {/* Pagination Row */}
                                          <tr>
                                            <td colSpan={7}>
                                              {/* <Pagination
                                                data={fetchDrawingList}
                                                setShowItems={setShowItems}
                                                itemPerPage={20}
                                                showItems={showItems}
                                                setCurrentPage={
                                                  setCurrentPageNo
                                                }
                                                currentPage={currentPageNo}
                                                totalRow={totalRow}
                                              /> */}
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

                  <div class="row">
                    <div class="col-xl-12">
                      <div class="card">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            Best Selling Drawings
                          </h4>
                          <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                              <a
                                class="text-reset dropdown-btn"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="fw-semibold text-uppercase fs-12">
                                  Sort by:
                                </span>
                                <span class="text-muted">
                                  Today<i class="mdi mdi-chevron-down ms-1"></i>
                                </span>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  Today
                                </a>
                                <a class="dropdown-item" href="#">
                                  Yesterday
                                </a>
                                <a class="dropdown-item" href="#">
                                  Last 7 Days
                                </a>
                                <a class="dropdown-item" href="#">
                                  Last 30 Days
                                </a>
                                <a class="dropdown-item" href="#">
                                  This Month
                                </a>
                                <a class="dropdown-item" href="#">
                                  Last Month
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card-body">
                          <div class="table-responsive table-card">
                            <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="assets/images/drawings/img-1.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-drawing-details.html"
                                            class="text-reset"
                                          >
                                            Branded T-Shirts
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          24 Apr 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$29.00</h5>
                                    <span class="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">62</h5>
                                    <span class="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">510</h5>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$1,798</h5>
                                    <span class="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="assets/images/drawings/img-2.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-drawing-details.html"
                                            class="text-reset"
                                          >
                                            Bentwood Chair
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          19 Mar 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$85.20</h5>
                                    <span class="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">35</h5>
                                    <span class="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      <span class="badge bg-danger-subtle text-danger">
                                        Out of stock
                                      </span>{" "}
                                    </h5>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$2982</h5>
                                    <span class="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="assets/images/drawings/img-3.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-drawing-details.html"
                                            class="text-reset"
                                          >
                                            Borosil Paper Cup
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          01 Mar 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$14.00</h5>
                                    <span class="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">80</h5>
                                    <span class="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">749</h5>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$1120</h5>
                                    <span class="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="assets/images/drawings/img-4.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-drawing-details.html"
                                            class="text-reset"
                                          >
                                            One Seater Sofa
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          11 Feb 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      $127.50
                                    </h5>
                                    <span class="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">56</h5>
                                    <span class="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">
                                      <span class="badge bg-danger-subtle text-danger">
                                        Out of stock
                                      </span>
                                    </h5>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$7140</h5>
                                    <span class="text-muted">Amount</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="avatar-sm bg-light rounded p-1 me-2">
                                        <img
                                          src="assets/images/drawings/img-5.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-drawing-details.html"
                                            class="text-reset"
                                          >
                                            Stillbird Helmet
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          17 Jan 2021
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$54</h5>
                                    <span class="text-muted">Price</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">74</h5>
                                    <span class="text-muted">Orders</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">805</h5>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 my-1 fw-normal">$3996</h5>
                                    <span class="text-muted">Amount</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div class="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                            <div class="col-sm">
                              <div class="text-muted">
                                Showing <span class="fw-semibold">5</span> of{" "}
                                <span class="fw-semibold">25</span> Results
                              </div>
                            </div>
                            <div class="col-sm-auto  mt-3 mt-sm-0">
                              <ul class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                <li class="page-item disabled">
                                  <a href="#" class="page-link">
                                    ←
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a href="#" class="page-link">
                                    1
                                  </a>
                                </li>
                                <li class="page-item active">
                                  <a href="#" class="page-link">
                                    2
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a href="#" class="page-link">
                                    3
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a href="#" class="page-link">
                                    →
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xl-12">
                      <div class="card card-height-100">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            Top Sellers
                          </h4>
                          <div class="flex-shrink-0">
                            <div class="dropdown card-header-dropdown">
                              <a
                                class="text-reset dropdown-btn"
                                href="#"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span class="text-muted">
                                  Report
                                  <i class="mdi mdi-chevron-down ms-1"></i>
                                </span>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#">
                                  Download Report
                                </a>
                                <a class="dropdown-item" href="#">
                                  Export
                                </a>
                                <a class="dropdown-item" href="#">
                                  Import
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card-body">
                          <div class="table-responsive table-card">
                            <table class="table table-centered table-hover align-middle table-nowrap mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="assets/images/companies/img-1.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                          >
                                            iTest Factory
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          Oliver Tyler
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">
                                      Bags and Wallets
                                    </span>
                                  </td>
                                  <td>
                                    <p class="mb-0">8547</p>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">$541200</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      32%
                                      <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="assets/images/companies/img-2.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-grow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                          >
                                            Digitech Galaxy
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          John Roberts
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">Watches</span>
                                  </td>
                                  <td>
                                    <p class="mb-0">895</p>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">$75030</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      79%
                                      <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="assets/images/companies/img-3.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-gow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                          >
                                            Nesta Technologies
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          Harley Fuller
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">
                                      Bike Accessories
                                    </span>
                                  </td>
                                  <td>
                                    <p class="mb-0">3470</p>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">$45600</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      90%
                                      <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="assets/images/companies/img-8.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-grow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                          >
                                            Zoetic Fashion
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          James Bowen
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">Clothes</span>
                                  </td>
                                  <td>
                                    <p class="mb-0">5488</p>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">$29456</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      40%
                                      <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div class="d-flex align-items-center">
                                      <div class="flex-shrink-0 me-2">
                                        <img
                                          src="assets/images/companies/img-5.png"
                                          alt=""
                                          class="avatar-sm p-2"
                                        />
                                      </div>
                                      <div class="flex-grow-1">
                                        <h5 class="fs-14 my-1 fw-medium">
                                          <a
                                            href="apps-ecommerce-seller-details.html"
                                            class="text-reset"
                                          >
                                            Meta4Systems
                                          </a>
                                        </h5>
                                        <span class="text-muted">
                                          Zoe Dennis
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span class="text-muted">Furniture</span>
                                  </td>
                                  <td>
                                    <p class="mb-0">4100</p>
                                    <span class="text-muted">Stock</span>
                                  </td>
                                  <td>
                                    <span class="text-muted">$11260</span>
                                  </td>
                                  <td>
                                    <h5 class="fs-14 mb-0">
                                      57%
                                      <i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                                    </h5>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div class="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                            <div class="col-sm">
                              <div class="text-muted">
                                Showing <span class="fw-semibold">5</span> of{" "}
                                <span class="fw-semibold">25</span> Results
                              </div>
                            </div>
                            <div class="col-sm-auto  mt-3 mt-sm-0">
                              <ul class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                <li class="page-item disabled">
                                  <a href="#" class="page-link">
                                    ←
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a href="#" class="page-link">
                                    1
                                  </a>
                                </li>
                                <li class="page-item active">
                                  <a href="#" class="page-link">
                                    2
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a href="#" class="page-link">
                                    3
                                  </a>
                                </li>
                                <li class="page-item">
                                  <a href="#" class="page-link">
                                    →
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------- */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListDrawing;
