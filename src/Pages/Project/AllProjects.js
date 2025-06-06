import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
const AllProjects = () => {
  const navigate = useNavigate();
  const series = [
    {
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      '01/01/2003',
      '02/01/2003',
      '03/01/2003',
      '04/01/2003',
      '05/01/2003',
      '06/01/2003',
      '07/01/2003',
      '08/01/2003',
      '09/01/2003',
      '10/01/2003',
      '11/01/2003',
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Points',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => (typeof y !== 'undefined' ? `${y.toFixed(0)} points` : y),
      },
    },
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 className="mb-sm-0">Project List</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Projects</a>
                      </li>
                      <li className="breadcrumb-item active">Project List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div class="row project-wrapper">
              <div class="col-xxl-8">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="card card-animate">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-primary-subtle text-primary rounded-2 fs-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-briefcase text-primary"
                              >
                                <rect
                                  x="2"
                                  y="7"
                                  width="20"
                                  height="14"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                              </svg>
                            </span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden ms-3">
                            <p class="text-uppercase fw-medium text-muted text-truncate mb-3">
                              Active Projects
                            </p>
                            <div class="d-flex align-items-center mb-3">
                              <h4 class="fs-4 flex-grow-1 mb-0">
                                <span class="counter-value" data-target="825">
                                  825
                                </span>
                              </h4>
                              <span class="badge bg-danger-subtle text-danger fs-12">
                                <i class="ri-arrow-down-s-line fs-13 align-middle me-1"></i>
                                5.02 %
                              </span>
                            </div>
                            <p class="text-muted text-truncate mb-0">
                              Projects this month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card card-animate">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-warning-subtle text-warning rounded-2 fs-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-award text-warning"
                              >
                                <circle cx="12" cy="8" r="7"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                              </svg>
                            </span>
                          </div>
                          <div class="flex-grow-1 ms-3">
                            <p class="text-uppercase fw-medium text-muted mb-3">
                              New Leads
                            </p>
                            <div class="d-flex align-items-center mb-3">
                              <h4 class="fs-4 flex-grow-1 mb-0">
                                <span class="counter-value" data-target="7522">
                                  7,522
                                </span>
                              </h4>
                              <span class="badge bg-success-subtle text-success fs-12">
                                <i class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>
                                3.58 %
                              </span>
                            </div>
                            <p class="text-muted mb-0">Leads this month</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-4">
                    <div class="card card-animate">
                      <div class="card-body">
                        <div class="d-flex align-items-center">
                          <div class="avatar-sm flex-shrink-0">
                            <span class="avatar-title bg-info-subtle text-info rounded-2 fs-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-clock text-info"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                            </span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden ms-3">
                            <p class="text-uppercase fw-medium text-muted text-truncate mb-3">
                              Total Hours
                            </p>
                            <div class="d-flex align-items-center mb-3">
                              <h4 class="fs-4 flex-grow-1 mb-0">
                                <span class="counter-value" data-target="168">
                                  168
                                </span>
                                h{" "}
                                <span class="counter-value" data-target="40">
                                  40
                                </span>
                                m
                              </h4>
                              <span class="badge bg-danger-subtle text-danger fs-12">
                                <i class="ri-arrow-down-s-line fs-13 align-middle me-1"></i>
                                10.35 %
                              </span>
                            </div>
                            <p class="text-muted text-truncate mb-0">
                              Work this month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-12">
                    <div class="card">
                      <div class="card-header border-0 align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">
                          Projects Overview
                        </h4>
                        <div>
                          <button
                            type="button"
                            class="btn btn-soft-secondary btn-sm material-shadow-none"
                          >
                            ALL
                          </button>
                          <button
                            type="button"
                            class="btn btn-soft-secondary btn-sm material-shadow-none"
                          >
                            1M
                          </button>
                          <button
                            type="button"
                            class="btn btn-soft-secondary btn-sm material-shadow-none"
                          >
                            6M
                          </button>
                          <button
                            type="button"
                            class="btn btn-soft-primary btn-sm material-shadow-none"
                          >
                            1Y
                          </button>
                        </div>
                      </div>

                      <div class="card-header p-0 border-0 bg-light-subtle">
                        <div class="row g-0 text-center">
                          <div class="col-6 col-sm-3">
                            <div class="p-3 border border-dashed border-start-0">
                              <h5 class="mb-1">
                                <span class="counter-value" data-target="9851">
                                  9,851
                                </span>
                              </h5>
                              <p class="text-muted mb-0">Number of Projects</p>
                            </div>
                          </div>

                          <div class="col-6 col-sm-3">
                            <div class="p-3 border border-dashed border-start-0">
                              <h5 class="mb-1">
                                <span class="counter-value" data-target="1026">
                                  1,026
                                </span>
                              </h5>
                              <p class="text-muted mb-0">Active Projects</p>
                            </div>
                          </div>

                          <div class="col-6 col-sm-3">
                            <div class="p-3 border border-dashed border-start-0">
                              <h5 class="mb-1">
                                $
                                <span
                                  class="counter-value"
                                  data-target="228.89"
                                >
                                  228.89
                                </span>
                                k
                              </h5>
                              <p class="text-muted mb-0">Revenue</p>
                            </div>
                          </div>

                          <div class="col-6 col-sm-3">
                            <div class="p-3 border border-dashed border-start-0 border-end-0">
                              <h5 class="mb-1 text-success">
                                <span class="counter-value" data-target="10589">
                                  10,589
                                </span>
                                h
                              </h5>
                              <p class="text-muted mb-0">Working Hours</p>
                            </div>
                          </div>

                          <div className="col-12">
                              <ReactApexChart options={options} series={series} type="line" height={350} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-4">
                <div class="card">
                  <div class="card-header border-0">
                    <h4 class="card-title mb-0">Upcoming Schedules</h4>
                  </div>
                  <div class="card-body pt-0">
                    <h6 class="text-uppercase fw-semibold mt-4 mb-3 text-muted">
                      Events:
                    </h6>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          09
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Development planning</h6>
                        <p class="text-muted mb-0">iTest Factory </p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          9:20 <span class="text-uppercase">am</span>
                        </p>
                      </div>
                    </div>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          12
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Design new UI and check sales</h6>
                        <p class="text-muted mb-0">Meta4Systems</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          11:30 <span class="text-uppercase">am</span>
                        </p>
                      </div>
                    </div>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          25
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Weekly catch-up </h6>
                        <p class="text-muted mb-0">Nesta Technologies</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          02:00 <span class="text-uppercase">pm</span>
                        </p>
                      </div>
                    </div>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          27
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">James Bangs (Client) Meeting</h6>
                        <p class="text-muted mb-0">Nesta Technologies</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          03:45 <span class="text-uppercase">pm</span>
                        </p>
                      </div>
                    </div>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          09
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Development planning</h6>
                        <p class="text-muted mb-0">iTest Factory </p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          9:20 <span class="text-uppercase">am</span>
                        </p>
                      </div>
                    </div>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          12
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Design new UI and check sales</h6>
                        <p class="text-muted mb-0">Meta4Systems</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          11:30 <span class="text-uppercase">am</span>
                        </p>
                      </div>
                    </div>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          25
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">Weekly catch-up </h6>
                        <p class="text-muted mb-0">Nesta Technologies</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          02:00 <span class="text-uppercase">pm</span>
                        </p>
                      </div>
                    </div>
                    <div class="mini-stats-wid d-flex align-items-center mt-3">
                      <div class="flex-shrink-0 avatar-sm">
                        <span class="mini-stat-icon avatar-title rounded-circle text-success bg-success-subtle fs-4">
                          27
                        </span>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-1">James Bangs (Client) Meeting</h6>
                        <p class="text-muted mb-0">Nesta Technologies</p>
                      </div>
                      <div class="flex-shrink-0">
                        <p class="text-muted mb-0">
                          03:45 <span class="text-uppercase">pm</span>
                        </p>
                      </div>
                    </div>

                    <div class="mt-3 text-center">
                      <a
                        href="javascript:void(0);"
                        class="text-muted text-decoration-underline"
                      >
                        View all Events
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div class="row">
              <div class="col-xxl-3 col-sm-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p class="fw-medium text-muted mb-0">Total Tasks</p>
                        <h2 class="mt-4 ff-secondary fw-semibold">
                          <span class="counter-value" data-target="234">
                            234
                          </span>
                          k
                        </h2>
                        <p class="mb-0 text-muted">
                          <span class="badge bg-light text-success mb-0">
                            {" "}
                            <i class="ri-arrow-up-line align-middle"></i> 17.32
                            %
                          </span>{" "}
                          vs. previous month
                        </p>
                      </div>
                      <div>
                        <div class="avatar-sm flex-shrink-0">
                          <span class="avatar-title bg-info-subtle text-info rounded-circle fs-4">
                            <i class="ri-ticket-2-line"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-sm-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p class="fw-medium text-muted mb-0">Pending Tasks</p>
                        <h2 class="mt-4 ff-secondary fw-semibold">
                          <span class="counter-value" data-target="64.5">
                            64.5
                          </span>
                          k
                        </h2>
                        <p class="mb-0 text-muted">
                          <span class="badge bg-light text-danger mb-0">
                            {" "}
                            <i class="ri-arrow-down-line align-middle"></i> 0.87
                            %
                          </span>{" "}
                          vs. previous month
                        </p>
                      </div>
                      <div>
                        <div class="avatar-sm flex-shrink-0">
                          <span class="avatar-title bg-warning-subtle text-warning rounded-circle fs-4">
                            <i class="mdi mdi-timer-sand"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-sm-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p class="fw-medium text-muted mb-0">Completed Tasks</p>
                        <h2 class="mt-4 ff-secondary fw-semibold">
                          <span class="counter-value" data-target="116.21">
                            116.21
                          </span>
                          K
                        </h2>
                        <p class="mb-0 text-muted">
                          <span class="badge bg-light text-danger mb-0">
                            {" "}
                            <i class="ri-arrow-down-line align-middle"></i> 2.52
                            %{" "}
                          </span>{" "}
                          vs. previous month
                        </p>
                      </div>
                      <div>
                        <div class="avatar-sm flex-shrink-0">
                          <span class="avatar-title bg-success-subtle text-success rounded-circle fs-4">
                            <i class="ri-checkbox-circle-line"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-sm-6">
                <div class="card card-animate">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p class="fw-medium text-muted mb-0">Deleted Tasks</p>
                        <h2 class="mt-4 ff-secondary fw-semibold">
                          <span class="counter-value" data-target="14.84">
                            14.84
                          </span>
                          %
                        </h2>
                        <p class="mb-0 text-muted">
                          <span class="badge bg-light text-success mb-0">
                            {" "}
                            <i class="ri-arrow-up-line align-middle"></i> 0.63 %{" "}
                          </span>{" "}
                          vs. previous month
                        </p>
                      </div>
                      <div>
                        <div class="avatar-sm flex-shrink-0">
                          <span class="avatar-title bg-danger-subtle text-danger rounded-circle fs-4">
                            <i class="ri-delete-bin-line"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="card" id="tasksList">
                  <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                      <h5 class="card-title mb-0 flex-grow-1">All Tasks</h5>
                      <div class="flex-shrink-0">
                        <div class="d-flex flex-wrap gap-2">
                          {/* <button class="btn btn-danger add-btn" data-bs-toggle="modal" data-bs-target="#showModal"><i class="ri-add-line align-bottom me-1"></i> Create Task</button> */}
                          <button
                            class="btn btn-danger add-btn"
                            onClick={() => navigate("/add-project")}
                          >
                            <i class="ri-add-line align-bottom me-1"></i> Create
                            Project
                          </button>
                          <button class="btn btn-primary add-btn">
                            <i
                              class="ri-add-line align-bottom me-1"
                              onClick={() => navigate("/overview-project")}
                            ></i>{" "}
                            Overview
                          </button>
                          <button
                            class="btn btn-soft-danger"
                            id="remove-actions"
                            onclick="deleteMultiple()"
                          >
                            <i class="ri-delete-bin-2-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body border border-dashed border-end-0 border-start-0">
                    <form>
                      <div class="row g-3">
                        <div class="col-xxl-5 col-sm-12">
                          <div class="search-box">
                            <input
                              type="text"
                              class="form-control search bg-light border-light"
                              placeholder="Search for tasks or something..."
                            />
                            <i class="ri-search-line search-icon"></i>
                          </div>
                        </div>

                        <div class="col-xxl-3 col-sm-4">
                          <input
                            type="text"
                            class="form-control bg-light border-light"
                            id="demo-datepicker"
                            data-provider="flatpickr"
                            data-date-format="d M, Y"
                            data-range-date="true"
                            placeholder="Select date range"
                          />
                        </div>

                        <div class="col-xxl-3 col-sm-4">
                          <div class="input-light">
                            <select
                              class="form-control"
                              data-choices=""
                              data-choices-search-false=""
                              name="choices-single-default"
                              id="idStatus"
                            >
                              <option value="">Status</option>
                              <option value="all" selected="">
                                All
                              </option>
                              <option value="New">New</option>
                              <option value="Pending">Pending</option>
                              <option value="Inprogress">Inprogress</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-xxl-1 col-sm-4">
                          <button
                            type="button"
                            class="btn btn-primary w-100"
                            onclick="SearchData();"
                          >
                            {" "}
                            <i class="ri-equalizer-fill me-1 align-bottom"></i>
                            Filters
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive table-card mb-4">
                      <table
                        class="table align-middle table-nowrap mb-0"
                        id="tasksTable"
                      >
                        <thead class="table-light text-muted">
                          <tr>
                            <th scope="col" style={{ width: "40px" }}>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  id="checkAll"
                                  value="option"
                                />
                              </div>
                            </th>
                            <th class="sort" data-sort="id">
                              ID
                            </th>
                            <th class="sort" data-sort="project_name">
                              Project
                            </th>
                            <th class="sort" data-sort="tasks_name">
                              Task
                            </th>
                            <th class="sort" data-sort="client_name">
                              Client Name
                            </th>
                            <th class="sort" data-sort="assignedto">
                              Assigned To
                            </th>
                            <th class="sort" data-sort="due_date">
                              Due Date
                            </th>
                            <th class="sort" data-sort="status">
                              Status
                            </th>
                            <th class="sort" data-sort="priority">
                              Priority
                            </th>
                          </tr>
                        </thead>
                        <tbody class="list form-check-all">
                          <tr>
                            <th scope="row">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="chk_child"
                                  value="option1"
                                />
                              </div>
                            </th>
                            <td class="id">
                              <a
                                href="apps-tasks-details.html"
                                class="fw-medium link-primary"
                              >
                                #VLZ501
                              </a>
                            </td>
                            <td class="project_name">
                              <a
                                href="apps-projects-overview.html"
                                class="fw-medium link-primary"
                              >
                                Velzon - v1.0.0
                              </a>
                            </td>
                            <td>
                              <div class="d-flex">
                                <div class="flex-grow-1 tasks_name">
                                  Profile Page Satructure
                                </div>
                                <div class="flex-shrink-0 ms-4">
                                  <ul class="list-inline tasks-list-menu mb-0">
                                    <li class="list-inline-item">
                                      <a href="apps-tasks-details.html">
                                        <i class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="edit-item-btn"
                                        href="#showModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="remove-item-btn"
                                        data-bs-toggle="modal"
                                        href="#deleteOrder"
                                      >
                                        <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td class="client_name">Robert McMahon</td>
                            <td class="assignedto">
                              <div class="avatar-group">
                                <a
                                  href="javascript: void(0);"
                                  class="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  aria-label="Frank"
                                  data-bs-original-title="Frank"
                                >
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    alt=""
                                    class="rounded-circle avatar-xxs"
                                  />
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  class="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  aria-label="Anna"
                                  data-bs-original-title="Anna"
                                >
                                  <img
                                    src="assets/images/users/avatar-1.jpg"
                                    alt=""
                                    class="rounded-circle avatar-xxs"
                                  />
                                </a>
                              </div>
                            </td>
                            <td class="due_date">25 Jan, 2022</td>
                            <td class="status">
                              <span class="badge bg-secondary-subtle text-secondary text-uppercase">
                                Inprogress
                              </span>
                            </td>
                            <td class="priority">
                              <span class="badge bg-danger text-uppercase">
                                High
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="noresult" style={{ display: "none" }}>
                        <div class="text-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/msoeawqm.json"
                            trigger="loop"
                            colors="primary:#121331,secondary:#08a88a"
                            style={{ width: "75px", height: "75px" }}
                          ></lord-icon>
                          <h5 class="mt-2">Sorry! No Result Found</h5>
                          <p class="text-muted mb-0">
                            We've searched more than 200k+ tasks We did not find
                            any tasks for you search.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-end mt-2">
                      <div class="pagination-wrap hstack gap-2">
                        <a class="page-item pagination-prev disabled" href="#">
                          Previous
                        </a>
                        <ul class="pagination listjs-pagination mb-0">
                          <li class="active">
                            <a class="page" href="#" data-i="1" data-page="8">
                              1
                            </a>
                          </li>
                        </ul>
                        <a class="page-item pagination-next" href="#">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0 text-center text-sm-start align-items-center mb-4">
              <div className="col-sm-6">
                <div>
                  <p className="mb-sm-0 text-muted">
                    Showing <span className="fw-semibold">1</span> to
                    <span className="fw-semibold">10</span> of
                    <span className="fw-semibold text-decoration-underline">
                      12
                    </span>
                    entries
                  </p>
                </div>
              </div>
              {/* end col */}
              {/* <div className="col-sm-6">
                <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                  <li className="page-item disabled">
                    <a href="#" className="page-link">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item ">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
      </div>

      <Footer />
    </>
  );
};

export default AllProjects;
