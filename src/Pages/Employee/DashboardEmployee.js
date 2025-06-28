import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import ReactApexChart from "react-apexcharts";
import { deleteUser, fetchUser } from "../../Redux/crmSlices/employeeSlice/EmployeeSlice";

const DashboardEmployee = () => {
  const optionsPie = {
    chart: {
      width: 100,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
  };

  const seriesArea = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const seriesPie = [44, 55, 13, 33];

  const optionsArea = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedData, setEditedData] = useState({ emp_name: "", emp_role: "" });
  
    const { userList, loading } = useSelector((state) => {
      // const response = state.rootReducer?.EmployeeSlice?.response;
      return {
        userList: state.rootReducer?.EmployeeSlice?.response?.data || [],
        loading: state.rootReducer?.EmployeeSlice?.loading || false,
      };
    });
  
    console.log(741,userList)
    useEffect(() => {
      dispatch(fetchUser());
    }, [dispatch]);
  
    const handleEdit = (user) => {
      setSelectedUser(user);
      setEditedData({ emp_name: user?.emp_name, emp_role: user?.emp_role });
      setShowEditModal(true);
    };
  
    const handleDelete = (user) => {
      Swal.fire({
        title: "Are you sure?",
        text: `You won't be able to revert this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteUser(user?.emp_id));
          dispatch(fetchUser());
          Swal.fire("Deleted!", `${user?.emp_name} has been deleted.`, "success");
          dispatch(fetchUser());
        }
      });
    };
  
    const handleInputChange = (e) => {
      setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };
  
    const handleSaveEdit = () => {
      // dispatch(updateUser({ id: selectedUser?.id, ...editedData }));
      setShowEditModal(false);
      Swal.fire("Updated!", "Employee details have been updated.", "success");
    };
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
                  <h4 class="mb-sm-0">Job Dashboard</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboards</a>
                      </li>
                      <li class="breadcrumb-item active">Job Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6">
                <div class="d-flex flex-column h-100">
                  <div class="row">
                    <div class="col-xl-6 col-md-6">
                      <div class="card card-animate overflow-hidden">
                        <div
                          className="position-absolute start-0"
                          style={{ zIndex: 0 }}
                        >
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 120"
                            width="200"
                            height="120"
                          >
                            <defs>
                              <style>
                                {`.s0 {
                opacity: 0.05;
                fill: var(--vz-success);
              }`}
                              </style>
                            </defs>
                            <path
                              id="Shape 8"
                              className="s0"
                              d="M189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                            />
                          </svg>
                        </div>
                        <div class="card-body" style={{ zIndex: "1" }}>
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="text-uppercase fw-medium text-muted text-truncate mb-4">
                                {" "}
                                Total Jobs
                              </p>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                <span class="counter-value" data-target="36894">
                                  36,894
                                </span>
                              </h4>
                            </div>
                            <div class="flex-shrink-0">
                              {/* <ReactApexChart
                                options={optionsPie}
                                series={seriesPie}
                                type="donut"
                                width={100}
                              /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                      <div class="card card-animate overflow-hidden">
                        <div
                          className="position-absolute start-0"
                          style={{ zIndex: 0 }}
                        >
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 120"
                            width="200"
                            height="120"
                          >
                            <defs>
                              <style>
                                {`.s0 {
                opacity: 0.05;
                fill: var(--vz-success);
              }`}
                              </style>
                            </defs>
                            <path
                              id="Shape 8"
                              className="s0"
                              d="M189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                            />
                          </svg>
                        </div>
                        <div class="card-body" style={{ zIndex: "1" }}>
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="text-uppercase fw-medium text-muted text-truncate mb-4">
                                {" "}
                                Total Jobs
                              </p>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                <span class="counter-value" data-target="36894">
                                  36,894
                                </span>
                              </h4>
                            </div>
                            <div class="flex-shrink-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                      <div class="card card-animate overflow-hidden">
                        <div
                          className="position-absolute start-0"
                          style={{ zIndex: 0 }}
                        >
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 120"
                            width="200"
                            height="120"
                          >
                            <defs>
                              <style>
                                {`.s0 {
                opacity: 0.05;
                fill: var(--vz-success);
              }`}
                              </style>
                            </defs>
                            <path
                              id="Shape 8"
                              className="s0"
                              d="M189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                            />
                          </svg>
                        </div>
                        <div class="card-body" style={{ zIndex: "1" }}>
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="text-uppercase fw-medium text-muted text-truncate mb-4">
                                {" "}
                                Total Jobs
                              </p>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                <span class="counter-value" data-target="36894">
                                  36,894
                                </span>
                              </h4>
                            </div>
                            <div class="flex-shrink-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                      <div class="card card-animate overflow-hidden">
                        <div
                          className="position-absolute start-0"
                          style={{ zIndex: 0 }}
                        >
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 120"
                            width="200"
                            height="120"
                          >
                            <defs>
                              <style>
                                {`.s0 {
                opacity: 0.05;
                fill: var(--vz-success);
              }`}
                              </style>
                            </defs>
                            <path
                              id="Shape 8"
                              className="s0"
                              d="M189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                            />
                          </svg>
                        </div>
                        <div class="card-body" style={{ zIndex: "1" }}>
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="text-uppercase fw-medium text-muted text-truncate mb-4">
                                {" "}
                                Total Jobs
                              </p>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                <span class="counter-value" data-target="36894">
                                  36,894
                                </span>
                              </h4>
                            </div>
                            <div class="flex-shrink-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                      <div class="card card-animate overflow-hidden">
                        <div
                          className="position-absolute start-0"
                          style={{ zIndex: 0 }}
                        >
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 120"
                            width="200"
                            height="120"
                          >
                            <defs>
                              <style>
                                {`.s0 {
                opacity: 0.05;
                fill: var(--vz-success);
              }`}
                              </style>
                            </defs>
                            <path
                              id="Shape 8"
                              className="s0"
                              d="M189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                            />
                          </svg>
                        </div>
                        <div class="card-body" style={{ zIndex: "1" }}>
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="text-uppercase fw-medium text-muted text-truncate mb-4">
                                {" "}
                                Total Jobs
                              </p>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                <span class="counter-value" data-target="36894">
                                  36,894
                                </span>
                              </h4>
                            </div>
                            <div class="flex-shrink-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                      <div class="card card-animate overflow-hidden">
                        <div
                          className="position-absolute start-0"
                          style={{ zIndex: 0 }}
                        >
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 200 120"
                            width="200"
                            height="120"
                          >
                            <defs>
                              <style>
                                {`.s0 {
                opacity: 0.05;
                fill: var(--vz-success);
              }`}
                              </style>
                            </defs>
                            <path
                              id="Shape 8"
                              className="s0"
                              d="M189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"
                            />
                          </svg>
                        </div>
                        <div class="card-body" style={{ zIndex: "1" }}>
                          <div class="d-flex align-items-center">
                            <div class="flex-grow-1 overflow-hidden">
                              <p class="text-uppercase fw-medium text-muted text-truncate mb-4">
                                {" "}
                                Total Jobs
                              </p>
                              <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                <span class="counter-value" data-target="36894">
                                  36,894
                                </span>
                              </h4>
                            </div>
                            <div class="flex-shrink-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="card card-height-100">
                  <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">
                      Featured Companies
                    </h4>
                    <div class="flex-shrink-0">
                      <a
                        href="#!"
                        class="btn btn-soft-primary btn-sm material-shadow-none"
                      >
                        View All Companies{" "}
                        <i class="ri-arrow-right-line align-bottom"></i>
                      </a>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="table-responsive table-card">
                      <table class="table table-centered table-hover align-middle table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="avatar-xs me-2 flex-shrink-0">
                                  <div class="avatar-title bg-secondary-subtle rounded">
                                    <img
                                      src="assets/images/companies/img-1.png"
                                      alt=""
                                      height="16"
                                    />
                                  </div>
                                </div>
                                <h6 class="mb-0">Force Medicines</h6>
                              </div>
                            </td>
                            <td>
                              <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                              Cullera, Spain
                            </td>
                            <td>
                              <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                  <a href="#!" class="link-secondary">
                                    <i class="ri-facebook-fill"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-danger">
                                    <i class="ri-mail-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-primary">
                                    <i class="ri-global-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-info">
                                    <i class="ri-twitter-line"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <a
                                href="#!"
                                class="btn btn-link btn-sm material-shadow-none"
                              >
                                View More{" "}
                                <i class="ri-arrow-right-line align-bottom"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="avatar-xs me-2 flex-shrink-0">
                                  <div class="avatar-title bg-warning-subtle rounded">
                                    <img
                                      src="assets/images/companies/img-3.png"
                                      alt=""
                                      height="16"
                                    />
                                  </div>
                                </div>
                                <h6 class="mb-0">Syntyce Solutions</h6>
                              </div>
                            </td>
                            <td>
                              <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                              Mughairah, UAE
                            </td>
                            <td>
                              <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                  <a href="#!" class="link-secondary">
                                    <i class="ri-facebook-fill"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-danger">
                                    <i class="ri-mail-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-primary">
                                    <i class="ri-global-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-info">
                                    <i class="ri-twitter-line"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <a
                                href="#!"
                                class="btn btn-link btn-sm material-shadow-none"
                              >
                                View More{" "}
                                <i class="ri-arrow-right-line align-bottom"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="avatar-xs me-2 flex-shrink-0">
                                  <div class="avatar-title bg-primary-subtle rounded">
                                    <img
                                      src="assets/images/companies/img-2.png"
                                      alt=""
                                      height="16"
                                    />
                                  </div>
                                </div>
                                <h6 class="mb-0">Moetic Fashion</h6>
                              </div>
                            </td>
                            <td>
                              <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                              Mughairah, UAE
                            </td>
                            <td>
                              <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                  <a href="#!" class="link-secondary">
                                    <i class="ri-facebook-fill"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-danger">
                                    <i class="ri-mail-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-primary">
                                    <i class="ri-global-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-info">
                                    <i class="ri-twitter-line"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <a
                                href="#!"
                                class="btn btn-link btn-sm material-shadow-none"
                              >
                                View More{" "}
                                <i class="ri-arrow-right-line align-bottom"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="avatar-xs me-2 flex-shrink-0">
                                  <div class="avatar-title bg-danger-subtle rounded">
                                    <img
                                      src="assets/images/companies/img-4.png"
                                      alt=""
                                      height="16"
                                    />
                                  </div>
                                </div>
                                <h6 class="mb-0">Meta4Systems</h6>
                              </div>
                            </td>
                            <td>
                              <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                              Germany
                            </td>
                            <td>
                              <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                  <a href="#!" class="link-secondary">
                                    <i class="ri-facebook-fill"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-danger">
                                    <i class="ri-mail-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-primary">
                                    <i class="ri-global-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-info">
                                    <i class="ri-twitter-line"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <a
                                href="#!"
                                class="btn btn-link btn-sm material-shadow-none"
                              >
                                View More{" "}
                                <i class="ri-arrow-right-line align-bottom"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="d-flex align-items-center">
                                <div class="avatar-xs me-2 flex-shrink-0">
                                  <div class="avatar-title bg-danger-subtle rounded">
                                    <img
                                      src="assets/images/companies/img-5.png"
                                      alt=""
                                      height="16"
                                    />
                                  </div>
                                </div>
                                <h6 class="mb-0">Themesbrand</h6>
                              </div>
                            </td>
                            <td>
                              <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                              Limestone, US
                            </td>
                            <td>
                              <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                  <a href="#!" class="link-secondary">
                                    <i class="ri-facebook-fill"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-danger">
                                    <i class="ri-mail-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-primary">
                                    <i class="ri-global-line"></i>
                                  </a>
                                </li>
                                <li class="list-inline-item">
                                  <a href="#!" class="link-info">
                                    <i class="ri-twitter-line"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                            <td>
                              <a
                                href="#!"
                                class="btn btn-link btn-sm material-shadow-none"
                              >
                                View More{" "}
                                <i class="ri-arrow-right-line align-bottom"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="align-items-center mt-4 pt-2 justify-content-between d-md-flex">
                      <div class="flex-shrink-0 mb-2 mb-md-0">
                        <div class="text-muted">
                          Showing <span class="fw-semibold">5</span> of{" "}
                          <span class="fw-semibold">25</span> Results
                        </div>
                      </div>
                      <ul class="pagination pagination-separated pagination-sm mb-0">
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

            <div class="row">
              <div class="col-xxl-8">
                <div class="card card-height-100">
                  <div class="card-header border-0 align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">
                      Applications Statistic
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
                            <span class="counter-value" data-target="3364">
                              3,364
                            </span>
                          </h5>
                          <p class="text-muted mb-0">New Applications</p>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            <span class="counter-value" data-target="2804">
                              2,804
                            </span>
                          </h5>
                          <p class="text-muted mb-0">Interview</p>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            <span class="counter-value" data-target="2402">
                              2,402
                            </span>
                          </h5>
                          <p class="text-muted mb-0">Hired</p>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0 border-end-0">
                          <h5 class="mb-1 text-success">
                            <span class="counter-value" data-target="8">
                              8
                            </span>
                            k
                          </h5>
                          <p class="text-muted mb-0">Total Applications</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body p-0 pb-2">
                    <div class="w-100">
                      {/* <ReactApexChart
                        options={optionsArea}
                        series={seriesArea}
                        type="area"
                        height={350}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              <div class="col-xxl-4">
                <div class="card">
                  <div class="card-header">
                    <div class="d-flex align-items-center">
                      <h6 class="card-title mb-0 flex-grow-1">
                        Popular Candidates
                      </h6>
                      <div class="flex-shrink-0">
                        <a
                          href="apps-job-candidate-lists.html"
                          class="link-primary"
                        >
                          View All <i class="ri-arrow-right-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="row g-0">
                    <div class="col-lg-6">
                      <div class="card-body border-end">
                        <div class="search-box">
                          <input
                            type="text"
                            class="form-control bg-light border-light"
                            autocomplete="off"
                            id="searchList"
                            placeholder="Search candidate..."
                          />
                          <i class="ri-search-line search-icon"></i>
                        </div>
                        <div
                          data-simplebar="init"
                          style={{ maxHeight: "190px" }}
                          class="px-3 mx-n3 simplebar-scrollable-y"
                        >
                          <div
                            class="simplebar-wrapper"
                            style={{ margin: "0px -16px" }}
                          >
                            <div class="simplebar-height-auto-observer-wrapper">
                              <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <div class="simplebar-mask">
                              <div
                                class="simplebar-offset"
                                style={{ right: "0px", bottom: "0px" }}
                              >
                                <div
                                  class="simplebar-content-wrapper"
                                  tabindex="0"
                                  role="region"
                                  aria-label="scrollable content"
                                  style={{
                                    height: "auto",
                                    overflow: "hidden scroll",
                                  }}
                                >
                                  <div
                                    class="simplebar-content"
                                    style={{ padding: "0px 16px" }}
                                  >
                                    <ul
                                      class="list-unstyled mb-0 pt-2"
                                      id="candidate-list"
                                    >
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          class="d-flex align-items-center py-2"
                                        >
                                          <div class="flex-shrink-0 me-2">
                                            <div class="avatar-xs">
                                              <img
                                                src="assets/images/users/avatar-10.jpg"
                                                alt=""
                                                class="img-fluid rounded-circle candidate-img"
                                              />
                                            </div>
                                          </div>
                                          <div class="flex-grow-1">
                                            <h5 class="fs-13 mb-1 text-truncate">
                                              <span class="candidate-name">
                                                Tonya Noble
                                              </span>{" "}
                                              <span class="text-muted fw-normal">
                                                @tonya
                                              </span>
                                            </h5>
                                            <div class="d-none candidate-position">
                                              Web Developer
                                            </div>
                                          </div>
                                        </a>
                                      </li>

                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          class="d-flex align-items-center py-2"
                                        >
                                          <div class="flex-shrink-0 me-2">
                                            <div class="avatar-xs">
                                              <img
                                                src="assets/images/users/avatar-1.jpg"
                                                alt=""
                                                class="img-fluid rounded-circle candidate-img"
                                              />
                                            </div>
                                          </div>
                                          <div class="flex-grow-1">
                                            <h5 class="fs-13 mb-1 text-truncate">
                                              <span class="candidate-name">
                                                Nicholas Ball
                                              </span>{" "}
                                              <span class="text-muted fw-normal">
                                                @nicholas
                                              </span>
                                            </h5>
                                            <div class="d-none candidate-position">
                                              Assistant / Store Keeper
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          class="d-flex align-items-center py-2"
                                        >
                                          <div class="flex-shrink-0 me-2">
                                            <div class="avatar-xs">
                                              <img
                                                src="assets/images/users/avatar-9.jpg"
                                                alt=""
                                                class="img-fluid rounded-circle candidate-img"
                                              />
                                            </div>
                                          </div>
                                          <div class="flex-grow-1">
                                            <h5 class="fs-13 mb-1 text-truncate">
                                              <span class="candidate-name">
                                                Zynthia Marrow
                                              </span>{" "}
                                              <span class="text-muted fw-normal">
                                                @zynthia
                                              </span>
                                            </h5>
                                            <div class="d-none candidate-position">
                                              Full Stack Engineer
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          class="d-flex align-items-center py-2"
                                        >
                                          <div class="flex-shrink-0 me-2">
                                            <div class="avatar-xs">
                                              <img
                                                src="assets/images/users/avatar-2.jpg"
                                                alt=""
                                                class="img-fluid rounded-circle candidate-img"
                                              />
                                            </div>
                                          </div>
                                          <div class="flex-grow-1">
                                            <h5 class="fs-13 mb-1 text-truncate">
                                              <span class="candidate-name">
                                                Cheryl Moore
                                              </span>{" "}
                                              <span class="text-muted fw-normal">
                                                @Cheryl
                                              </span>
                                            </h5>
                                            <div class="d-none candidate-position">
                                              Product Designer
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          class="d-flex align-items-center py-2"
                                        >
                                          <div class="flex-shrink-0 me-2">
                                            <div class="avatar-xs">
                                              <img
                                                src="assets/images/users/avatar-5.jpg"
                                                alt=""
                                                class="img-fluid rounded-circle candidate-img"
                                              />
                                            </div>
                                          </div>
                                          <div class="flex-grow-1">
                                            <h5 class="fs-13 mb-1 text-truncate">
                                              <span class="candidate-name">
                                                Jennifer Bailey
                                              </span>{" "}
                                              <span class="text-muted fw-normal">
                                                @Jennifer
                                              </span>
                                            </h5>
                                            <div class="d-none candidate-position">
                                              Marketing Director
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="javascript:void(0);"
                                          class="d-flex align-items-center py-2"
                                        >
                                          <div class="flex-shrink-0 me-2">
                                            <div class="avatar-xs">
                                              <img
                                                src="assets/images/users/avatar-8.jpg"
                                                alt=""
                                                class="img-fluid rounded-circle candidate-img"
                                              />
                                            </div>
                                          </div>
                                          <div class="flex-grow-1">
                                            <h5 class="fs-13 mb-1 text-truncate">
                                              <span class="candidate-name">
                                                Hadley Leonard
                                              </span>{" "}
                                              <span class="text-muted fw-normal">
                                                @hadley
                                              </span>
                                            </h5>
                                            <div class="d-none candidate-position">
                                              Executive, HR Operations
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="simplebar-placeholder"
                              style={{ width: "259px", height: "296px" }}
                            ></div>
                          </div>
                          <div
                            class="simplebar-track simplebar-horizontal"
                            style={{ visibility: "hidden" }}
                          >
                            <div
                              class="simplebar-scrollbar"
                              style={{ width: "0px", display: "none" }}
                            ></div>
                          </div>
                          <div
                            class="simplebar-track simplebar-vertical"
                            style={{ visibility: "visible" }}
                          >
                            <div
                              class="simplebar-scrollbar"
                              style={{
                                height: "121px",
                                transform: "translate3d(0px, 0px, 0px)",
                                display: "block",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="card-body text-center">
                        <div class="avatar-md mb-3 mx-auto">
                          <img
                            src="assets/images/users/avatar-10.jpg"
                            alt=""
                            id="candidate-img"
                            class="img-thumbnail rounded-circle shadow-none"
                          />
                        </div>

                        <h5 id="candidate-name" class="mb-0">
                          Tonya Noble
                        </h5>
                        <p id="candidate-position" class="text-muted">
                          Web Developer
                        </p>

                        <div class="d-flex gap-2 justify-content-center mb-3">
                          <button
                            type="button"
                            class="btn avatar-xs p-0 material-shadow-none"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Google"
                            data-bs-original-title="Google"
                          >
                            <span class="avatar-title rounded-circle bg-light text-body">
                              <i class="ri-google-line"></i>
                            </span>
                          </button>

                          <button
                            type="button"
                            class="btn avatar-xs p-0 material-shadow-none"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Linkedin"
                            data-bs-original-title="Linkedin"
                          >
                            <span class="avatar-title rounded-circle bg-light text-body">
                              <i class="ri-linkedin-line"></i>
                            </span>
                          </button>
                          <button
                            type="button"
                            class="btn avatar-xs p-0 material-shadow-none"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Dribbble"
                            data-bs-original-title="Dribbble"
                          >
                            <span class="avatar-title rounded-circle bg-light text-body">
                              <i class="ri-dribbble-fill"></i>
                            </span>
                          </button>
                        </div>

                        <div>
                          <button
                            type="button"
                            class="btn btn-success custom-toggle w-100"
                            data-bs-toggle="button"
                            aria-pressed="false"
                          >
                            <span class="icon-on">
                              <i class="ri-add-line align-bottom me-1"></i>{" "}
                              Follow
                            </span>
                            <span class="icon-off">
                              <i class="ri-user-unfollow-line align-bottom me-1"></i>{" "}
                              Unfollow
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card overflow-hidden shadow-none">
                  <div class="card-body bg-danger-subtle">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avatar-sm">
                          <div class="avatar-title bg-danger bg-opacity-10 text-danger rounded-circle fs-17">
                            <i class="ri-gift-line"></i>
                          </div>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="fs-16">Invite your friends to Velzon</h6>
                        <p class="text-muted mb-0">
                          Nor again is there anyone who loves or pursues or
                          desires to obtain pain of itself, because it is pain,
                          but because occasionally.
                        </p>
                      </div>
                    </div>
                    <div class="mt-3 text-end">
                      <a href="#!" class="btn btn-danger">
                        Invite Friends
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

   <div class="row">
                    <div class="col-xl-6">
                      <div class="card">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            Best Selling Products
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
                                          src="assets/images/products/img-1.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-2.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-3.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-4.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-5.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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

                    <div class="col-xl-6">
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
                    <div class="col-xl-6">
                      <div class="card">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            Best Selling Products
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
                                          src="assets/images/products/img-1.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-2.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-3.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-4.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-5.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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

                    <div class="col-xl-6">
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
                    <div class="col-xl-6">
                      <div class="card">
                        <div class="card-header align-items-center d-flex">
                          <h4 class="card-title mb-0 flex-grow-1">
                            Best Selling Products
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
                                          src="assets/images/products/img-1.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-2.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-3.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-4.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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
                                          src="assets/images/products/img-5.png"
                                          alt=""
                                          class="img-fluid d-block"
                                        />
                                      </div>
                                      <div>
                                        <h5 class="fs-14 my-1">
                                          <a
                                            href="apps-ecommerce-product-details.html"
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

                    <div class="col-xl-6">
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
                  
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      {/* Add Lead Button */}
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <button
                            type="submit"
                            className="btn btn-success add-btn"
                            id="create-btn"
                            onClick={() => navigate("/add-employee")} // Redirect to "Add Lead" page
                          >
                            <i className="ri-add-line align-bottom me-1" /> Add
                          </button>
                        </div>
                      </div>
                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="dataTableExample1"
                        >
                          <thead className="table-light">
                            <tr>
                              <th className="sort" data-sort="emp_image">
                                Photo
                              </th>
                              <th className="sort" data-sort="emp_name">
                                First Name
                              </th>
                              <th className="sort" data-sort="emp_name">
                                Last Name
                              </th>
                              <th>Designation</th>
                              <th>Joining Date</th>
                              <th className="sort" data-sort="emp_role">
                                Role
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {userList && userList?.length > 0 ? (
                              userList?.map((user) => (
                                <tr key={user?.id}>
                                  <td>
                                    <img
                                      src={
                                        user?.emp_image ||
                                        "assets/dist/img/default-cat.png"
                                      }
                                      alt="User"
                                      width="50"
                                      height="50"
                                    />
                                  </td>
                                  <td>{user?.emp_first_name}</td>
                                  <td>{user?.emp_last_name}</td>
                                  <td>{user?.emp_designation}</td>
                                  <td>{user?.emp_joining_date}</td>
                                  <td>{user?.emp_role}</td>

                                  <td>
                                    <div className="d-flex gap-2">
                                      <button
                                        className="btn btn-info btn-sm"
                                        onClick={() => handleEdit(user)}
                                      >
                                        <i className="fa fa-pencil"></i> View
                                      </button>
                                      {/* <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user)}
                >
                  <i className="fa fa-trash"></i> Delete
                </button> */}
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={4} className="text-center">
                                  No employees found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>

                        {/* No Result Found Section */}
                        {userList?.length === 0 && !loading && (
                          <div
                            className="noresult"
                            style={{ display: "block" }}
                          >
                            <div className="text-center">
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#08a88a"
                                style={{ width: 75, height: 75 }}
                              />
                              <h5 className="mt-2">
                                Sorry! No Employees Found
                              </h5>
                              <p className="text-muted mb-0">
                                We searched for employees but didn't find any.
                              </p>
                            </div>
                          </div>
                        )}
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

export default DashboardEmployee;
