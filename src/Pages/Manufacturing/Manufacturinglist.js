import React, { useState, useEffect } from "react";
import {
  fetchManufacturing,
  removeManufacturing,
} from "../../Redux/crmSlices/Manufacturing/ManufacturingSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";
const Manufacturinglist = () => {
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, count, loading, response, error } = useSelector((state) => {
    return {
      loading: state.rootReducer.ManufacturingSlice?.loading,
      response: state.rootReducer.ManufacturingSlice?.response,
      error: state.rootReducer.ManufacturingSlice?.error,
      data: state.rootReducer.ManufacturingSlice?.data,
    };
  });

  useEffect(() => {
    dispatch(fetchManufacturing());
  }, []);

  useEffect(() => {
    setAllData(response?.data || []);
    console.log(allData);
  }, [response]);

  const handleDelete = (data) => {
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
        // Optimistically update the UI by removing the item
        const updatedData = allData.filter((item) => item.m_id !== data.m_id);
        setAllData(updatedData); // assuming setAllData updates your state or local data

        // Dispatch the delete action and re-fetch manufacturing data
        dispatch(removeManufacturing(data.m_id));
        dispatch(fetchManufacturing())
          .then(() => {
            // Once fetching is complete, show success
            Swal.fire(
              "Deleted!",
              `${data.m_category} has been deleted.`,
              "success"
            );
          })
          .catch(() => {
            // If fetching fails, you might want to roll back the optimistic UI update
            setAllData(allData); // revert back to original data in case of error
            Swal.fire(
              "Error!",
              "Something went wrong, please try again.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
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

            <div class="row g-4 mb-3">
              <div class="col-sm-auto">
                <div>
                  <a href="apps-projects-create.html" class="btn btn-success">
                    <i class="ri-add-line align-bottom me-1"></i> Add New
                  </a>
                </div>
              </div>
              <div class="col-sm">
                <div class="d-flex justify-content-sm-end gap-2">
                  <div class="search-box ms-2">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                    <i class="ri-search-line search-icon"></i>
                  </div>

                  <div class="search-box ms-2">
                    <select
                      class="form-control w-md "
                      data-choices=""
                      data-choices-search-false=""
                      hidden=""
                      tabindex="-1"
                      data-choice="active"
                    >
                      <option value="All">All</option>
                      <option value="Today">Today</option>
                      <option value="Yesterday" selected="">
                        Yesterday
                      </option>
                      <option value="Last 7 Days">Last 7 Days</option>
                      <option value="Last 30 Days">Last 30 Days</option>
                      <option value="This Month">This Month</option>
                      <option value="Last Year">Last Year</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xxl-3 col-sm-6 project-card">
                <div class="card card-height-100">
                  <div class="card-body">
                    <div class="d-flex flex-column h-100">
                      <div class="d-flex">
                        <div class="flex-grow-1">
                          <p class="text-muted mb-4">Updated 3hrs ago</p>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="d-flex gap-1 align-items-center">
                            <button
                              type="button"
                              class="btn avatar-xs mt-n1 p-0 favourite-btn material-shadow-none"
                            >
                              <span class="avatar-title bg-transparent fs-15">
                                <i class="ri-star-fill"></i>
                              </span>
                            </button>
                            <div class="dropdown">
                              <button
                                class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15 material-shadow-none"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
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
                                  class="feather feather-more-horizontal icon-sm"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </button>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-overview.html"
                                >
                                  <i class="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                                  View
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-create.html"
                                >
                                  <i class="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                                  Edit
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProjectModal"
                                >
                                  <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm">
                            <span class="avatar-title bg-warning-subtle rounded p-2">
                              <img
                                src="assets/images/brands/slack.png"
                                alt=""
                                class="img-fluid p-1"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="mb-1 fs-15">
                            <a
                              href="apps-projects-overview.html"
                              class="text-body"
                            >
                              Slack brand logo design
                            </a>
                          </h5>
                          <p class="text-muted text-truncate-two-lines mb-3">
                            Create a Brand logo design for a velzon admin.
                          </p>
                        </div>
                      </div>
                      <div class="mt-auto">
                        <div class="d-flex mb-2">
                          <div class="flex-grow-1">
                            <div>Tasks</div>
                          </div>
                          <div class="flex-shrink-0">
                            <div>
                              <i class="ri-list-check align-bottom me-1 text-muted"></i>{" "}
                              18/42
                            </div>
                          </div>
                        </div>
                        <div class="progress progress-sm animated-progress">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="34"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "34%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer bg-transparent border-top-dashed py-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1">
                        <div class="avatar-group">
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            aria-label="Darline Williams"
                            data-bs-original-title="Darline Williams"
                          >
                            <div class="avatar-xxs">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt=""
                                class="rounded-circle img-fluid"
                              />
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Add Members"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                +
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="text-muted">
                          <i class="ri-calendar-event-fill me-1 align-bottom"></i>{" "}
                          10 Jul, 2021
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-3 col-sm-6 project-card">
                <div class="card card-height-100">
                  <div class="card-body">
                    <div class="d-flex flex-column h-100">
                      <div class="d-flex">
                        <div class="flex-grow-1">
                          <p class="text-muted mb-4">Last update : 08 May</p>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="d-flex gap-1 align-items-center">
                            <button
                              type="button"
                              class="btn avatar-xs mt-n1 p-0 favourite-btn material-shadow-none active"
                            >
                              <span class="avatar-title bg-transparent fs-15">
                                <i class="ri-star-fill"></i>
                              </span>
                            </button>
                            <div class="dropdown">
                              <button
                                class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15 material-shadow-none"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
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
                                  class="feather feather-more-horizontal icon-sm"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </button>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-overview.html"
                                >
                                  <i class="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                                  View
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-create.html"
                                >
                                  <i class="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                                  Edit
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProjectModal"
                                >
                                  <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm">
                            <span class="avatar-title bg-danger-subtle rounded p-2">
                              <img
                                src="assets/images/brands/dribbble.png"
                                alt=""
                                class="img-fluid p-1"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="mb-1 fs-15">
                            <a
                              href="apps-projects-overview.html"
                              class="text-body"
                            >
                              Redesign - Landing page
                            </a>
                          </h5>
                          <p class="text-muted text-truncate-two-lines mb-3">
                            Resign a landing page design. as per abc minimal
                            design.
                          </p>
                        </div>
                      </div>
                      <div class="mt-auto">
                        <div class="d-flex mb-2">
                          <div class="flex-grow-1">
                            <div>Tasks</div>
                          </div>
                          <div class="flex-shrink-0">
                            <div>
                              <i class="ri-list-check align-bottom me-1 text-muted"></i>{" "}
                              22/56
                            </div>
                          </div>
                        </div>
                        <div class="progress progress-sm animated-progress">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="54"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "54%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer bg-transparent border-top-dashed py-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1">
                        <div class="avatar-group">
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            aria-label="Brent Gonzalez"
                            data-bs-original-title="Brent Gonzalez"
                          >
                            <div class="avatar-xxs">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt=""
                                class="rounded-circle img-fluid"
                              />
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Sylvia Wright"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title rounded-circle bg-secondary">
                                S
                              </div>
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            aria-label="Ellen Smith"
                            data-bs-original-title="Ellen Smith"
                          >
                            <div class="avatar-xxs">
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt=""
                                class="rounded-circle img-fluid"
                              />
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Add Members"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                +
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="text-muted">
                          <i class="ri-calendar-event-fill me-1 align-bottom"></i>{" "}
                          18 May, 2021
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-3 col-sm-6 project-card">
                <div class="card card-height-100">
                  <div class="card-body">
                    <div class="d-flex flex-column h-100">
                      <div class="d-flex">
                        <div class="flex-grow-1">
                          <p class="text-muted mb-4">Updated 2hrs ago</p>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="d-flex gap-1 align-items-center">
                            <button
                              type="button"
                              class="btn avatar-xs mt-n1 p-0 favourite-btn material-shadow-none active"
                            >
                              <span class="avatar-title bg-transparent fs-15">
                                <i class="ri-star-fill"></i>
                              </span>
                            </button>
                            <div class="dropdown">
                              <button
                                class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15 material-shadow-none"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
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
                                  class="feather feather-more-horizontal icon-sm"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </button>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-overview.html"
                                >
                                  <i class="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                                  View
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-create.html"
                                >
                                  <i class="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                                  Edit
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProjectModal"
                                >
                                  <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm">
                            <span class="avatar-title bg-success-subtle rounded p-2">
                              <img
                                src="assets/images/brands/mail_chimp.png"
                                alt=""
                                class="img-fluid p-1"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="mb-1 fs-15">
                            <a
                              href="apps-projects-overview.html"
                              class="text-body"
                            >
                              Chat Application
                            </a>
                          </h5>
                          <p class="text-muted text-truncate-two-lines mb-3">
                            Create a Chat application for business messaging
                            needs. Collaborate efficiently with secure direct
                            messages and group chats.
                          </p>
                        </div>
                      </div>
                      <div class="mt-auto">
                        <div class="d-flex mb-2">
                          <div class="flex-grow-1">
                            <div>Tasks</div>
                          </div>
                          <div class="flex-shrink-0">
                            <div>
                              <i class="ri-list-check align-bottom me-1 text-muted"></i>{" "}
                              14/20
                            </div>
                          </div>
                        </div>
                        <div class="progress progress-sm animated-progress">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "65%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer bg-transparent border-top-dashed py-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1">
                        <div class="avatar-group">
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            aria-label="Jeffrey Salazar"
                            data-bs-original-title="Jeffrey Salazar"
                          >
                            <div class="avatar-xxs">
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt=""
                                class="rounded-circle img-fluid"
                              />
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Mark Williams"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title rounded-circle bg-warning">
                                M
                              </div>
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Add Members"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                +
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="text-muted">
                          <i class="ri-calendar-event-fill me-1 align-bottom"></i>{" "}
                          21 Feb, 2021
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-3 col-sm-6 project-card">
                <div class="card card-height-100">
                  <div class="card-body">
                    <div class="d-flex flex-column h-100">
                      <div class="d-flex">
                        <div class="flex-grow-1">
                          <p class="text-muted mb-4">Last update : 21 Jun</p>
                        </div>
                        <div class="flex-shrink-0">
                          <div class="d-flex gap-1 align-items-center">
                            <button
                              type="button"
                              class="btn avatar-xs mt-n1 p-0 favourite-btn material-shadow-none"
                            >
                              <span class="avatar-title bg-transparent fs-15">
                                <i class="ri-star-fill"></i>
                              </span>
                            </button>
                            <div class="dropdown">
                              <button
                                class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15 material-shadow-none"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
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
                                  class="feather feather-more-horizontal icon-sm"
                                >
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="19" cy="12" r="1"></circle>
                                  <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                              </button>

                              <div class="dropdown-menu dropdown-menu-end">
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-overview.html"
                                >
                                  <i class="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                                  View
                                </a>
                                <a
                                  class="dropdown-item"
                                  href="apps-projects-create.html"
                                >
                                  <i class="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                                  Edit
                                </a>
                                <div class="dropdown-divider"></div>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#removeProjectModal"
                                >
                                  <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                                  Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mb-2">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm">
                            <span class="avatar-title bg-info-subtle rounded p-2">
                              <img
                                src="assets/images/brands/dropbox.png"
                                alt=""
                                class="img-fluid p-1"
                              />
                            </span>
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <h5 class="mb-1 fs-15">
                            <a
                              href="apps-projects-overview.html"
                              class="text-body"
                            >
                              Project App
                            </a>
                          </h5>
                          <p class="text-muted text-truncate-two-lines mb-3">
                            Create a project application for a project
                            management and task management.
                          </p>
                        </div>
                      </div>

                      <div class="mt-auto">
                        <div class="d-flex mb-2">
                          <div class="flex-grow-1">
                            <div>Tasks</div>
                          </div>
                          <div class="flex-shrink-0">
                            <div>
                              <i class="ri-list-check align-bottom me-1 text-muted"></i>{" "}
                              20/34
                            </div>
                          </div>
                        </div>
                        <div class="progress progress-sm animated-progress">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "78%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer bg-transparent border-top-dashed py-2">
                    <div class="d-flex align-items-center">
                      <div class="flex-grow-1">
                        <div class="avatar-group">
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Kristin Turpin"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title rounded-circle bg-info">
                                K
                              </div>
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Mary Leavitt"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title rounded-circle bg-danger">
                                M
                              </div>
                            </div>
                          </a>
                          <a
                            href="javascript: void(0);"
                            class="avatar-group-item material-shadow"
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-placement="top"
                            data-bs-original-title="Add Members"
                          >
                            <div class="avatar-xxs">
                              <div class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                +
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="flex-shrink-0">
                        <div class="text-muted">
                          <i class="ri-calendar-event-fill me-1 align-bottom"></i>{" "}
                          03 Aug, 2021
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-0 text-center text-sm-start align-items-center mb-4">
              <div class="col-sm-6">
                <div>
                  <p class="mb-sm-0 text-muted">
                    Showing <span class="fw-semibold">1</span> to{" "}
                    <span class="fw-semibold">10</span> of{" "}
                    <span class="fw-semibold text-decoration-underline">
                      12
                    </span>{" "}
                    entries
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                  <li class="page-item disabled">
                    <a href="#" class="page-link">
                      Previous
                    </a>
                  </li>
                  <li class="page-item active">
                    <a href="#" class="page-link">
                      1
                    </a>
                  </li>
                  <li class="page-item ">
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
                      4
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      5
                    </a>
                  </li>
                  <li class="page-item">
                    <a href="#" class="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manufacturinglist;
