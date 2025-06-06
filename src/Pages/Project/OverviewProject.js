import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
const OverviewProject = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mt-n4 mx-n4">
                  <div className="bg-warning-subtle">
                    <div className="card-body pb-0 px-4">
                      <div className="row mb-3">
                        <div className="col-md">
                          <div className="row align-items-center g-3">
                            <div className="col-md-auto">
                              <div className="avatar-md">
                                <div className="avatar-title bg-white rounded-circle">
                                  <img
                                    src="assets/images/brands/slack.png"
                                    alt=""
                                    className="avatar-xs"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md">
                              <div>
                                <h4 className="fw-bold">
                                  Velzon - Admin &amp; Dashboard
                                </h4>
                                <div className="hstack gap-3 flex-wrap">
                                  <div>
                                    <i className="ri-building-line align-bottom me-1" />{" "}
                                    Themesbrand
                                  </div>
                                  <div className="vr" />
                                  <div>
                                    Create Date :{" "}
                                    <span className="fw-medium">
                                      15 Sep, 2021
                                    </span>
                                  </div>
                                  <div className="vr" />
                                  <div>
                                    Due Date :{" "}
                                    <span className="fw-medium">
                                      29 Dec, 2021
                                    </span>
                                  </div>
                                  <div className="vr" />
                                  <div className="badge rounded-pill bg-info fs-12">
                                    New
                                  </div>
                                  <div className="badge rounded-pill bg-danger fs-12">
                                    High
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-auto">
                          <div className="hstack gap-1 flex-wrap">
                            <button
                              type="button"
                              className="btn py-0 fs-16 favourite-btn material-shadow-none active"
                            >
                              <i className="ri-star-fill" />
                            </button>
                            <button
                              type="button"
                              className="btn py-0 fs-16 text-body material-shadow-none"
                            >
                              <i className="ri-share-line" />
                            </button>
                            <button
                              type="button"
                              className="btn py-0 fs-16 text-body material-shadow-none"
                            >
                              <i className="ri-flag-line" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <ul
                        className="nav nav-tabs-custom border-bottom-0"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link active fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-overview"
                            role="tab"
                            aria-selected="true"
                          >
                            Overview
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-documents"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Documents
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-activities"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Activities
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-team"
                            role="tab"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            Team
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end card body */}
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="tab-content text-muted">
                  <div
                    className="tab-pane fade show active"
                    id="project-overview"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-9 col-lg-8">
                        <div className="card">
                          <div className="card-body">
                            <div className="text-muted">
                              <h6 className="mb-3 fw-semibold text-uppercase">
                                Summary
                              </h6>
                              <p>
                                It will be as simple as occidental in fact, it
                                will be Occidental. To an English person, it
                                will seem like simplified English, as a
                                skeptical Cambridge friend of mine told me what
                                Occidental is. The European languages are
                                members of the same family. Their separate
                                existence is a myth. For science, music, sport,
                                etc, Europe uses the same vocabulary. The
                                languages only differ in their grammar, their
                                pronunciation and their most common words.
                              </p>
                              <ul className="ps-4 vstack gap-2">
                                <li>
                                  Product Design, Figma (Software), Prototype
                                </li>
                                <li>
                                  Four Dashboards : Ecommerce, Analytics,
                                  Project,etc.
                                </li>
                                <li>
                                  Create calendar, chat and email app pages.
                                </li>
                                <li>Add authentication pages.</li>
                                <li>Content listing.</li>
                              </ul>
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-link link-success p-0 material-shadow-none"
                                >
                                  Read more
                                </button>
                              </div>
                              <div className="pt-3 border-top border-top-dashed mt-4">
                                <div className="row gy-3">
                                  <div className="col-lg-3 col-sm-6">
                                    <div>
                                      <p className="mb-2 text-uppercase fw-medium">
                                        Create Date :
                                      </p>
                                      <h5 className="fs-15 mb-0">
                                        15 Sep, 2021
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-6">
                                    <div>
                                      <p className="mb-2 text-uppercase fw-medium">
                                        Due Date :
                                      </p>
                                      <h5 className="fs-15 mb-0">
                                        29 Dec, 2021
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-6">
                                    <div>
                                      <p className="mb-2 text-uppercase fw-medium">
                                        Priority :
                                      </p>
                                      <div className="badge bg-danger fs-12">
                                        High
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-sm-6">
                                    <div>
                                      <p className="mb-2 text-uppercase fw-medium">
                                        Status :
                                      </p>
                                      <div className="badge bg-warning fs-12">
                                        Inprogress
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-3 border-top border-top-dashed mt-4">
                                <h6 className="mb-3 fw-semibold text-uppercase">
                                  Resources
                                </h6>
                                <div className="row g-3">
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="border rounded border-dashed p-2">
                                      <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-3">
                                          <div className="avatar-sm">
                                            <div className="avatar-title bg-light text-secondary rounded fs-24">
                                              <i className="ri-folder-zip-line" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                          <h5 className="fs-13 mb-1">
                                            <a
                                              href="#"
                                              className="text-body text-truncate d-block"
                                            >
                                              App pages.zip
                                            </a>
                                          </h5>
                                          <div>2.2MB</div>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                          <div className="d-flex gap-1">
                                            <button
                                              type="button"
                                              className="btn btn-icon text-muted btn-sm fs-18"
                                            >
                                              <i className="ri-download-2-line" />
                                            </button>
                                            <div className="dropdown">
                                              <button
                                                className="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                              >
                                                <i className="ri-more-fill" />
                                              </button>
                                              <ul className="dropdown-menu">
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                                    Rename
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                                    Delete
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* end col */}
                                  <div className="col-xxl-4 col-lg-6">
                                    <div className="border rounded border-dashed p-2">
                                      <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-3">
                                          <div className="avatar-sm">
                                            <div className="avatar-title bg-light text-secondary rounded fs-24 material-shadow">
                                              <i className="ri-file-ppt-2-line" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex-grow-1 overflow-hidden">
                                          <h5 className="fs-13 mb-1">
                                            <a
                                              href="#"
                                              className="text-body text-truncate d-block"
                                            >
                                              Velzon admin.ppt
                                            </a>
                                          </h5>
                                          <div>2.4MB</div>
                                        </div>
                                        <div className="flex-shrink-0 ms-2">
                                          <div className="d-flex gap-1">
                                            <button
                                              type="button"
                                              className="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"
                                            >
                                              <i className="ri-download-2-line" />
                                            </button>
                                            <div className="dropdown">
                                              <button
                                                className="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                              >
                                                <i className="ri-more-fill" />
                                              </button>
                                              <ul className="dropdown-menu">
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-pencil-fill align-bottom me-2 text-muted" />
                                                    Rename
                                                  </a>
                                                </li>
                                                <li>
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />
                                                    Delete
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
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">
                              Comments
                            </h4>
                            <div className="flex-shrink-0">
                              <div className="dropdown card-header-dropdown">
                                <a
                                  className="text-reset dropdown-btn"
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <span className="text-muted">
                                    Recent
                                    <i className="mdi mdi-chevron-down ms-1" />
                                  </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item" href="#">
                                    Recent
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Top Rated
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Previous
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="card-body">
                            <div
                              data-simplebar="init"
                              style={{ height: 300 }}
                              className="px-3 mx-n3 mb-2 simplebar-scrollable-y"
                            >
                              <div
                                className="simplebar-wrapper"
                                style={{ margin: "0px -16px" }}
                              >
                                <div className="simplebar-height-auto-observer-wrapper">
                                  <div className="simplebar-height-auto-observer" />
                                </div>
                                <div className="simplebar-mask">
                                  <div
                                    className="simplebar-offset"
                                    style={{ right: 0, bottom: 0 }}
                                  >
                                    <div
                                      className="simplebar-content-wrapper"
                                      tabIndex={0}
                                      role="region"
                                      aria-label="scrollable content"
                                      style={{
                                        height: "100%",
                                        overflow: "hidden scroll",
                                      }}
                                    >
                                      <div
                                        className="simplebar-content"
                                        style={{ padding: "0px 16px" }}
                                      >
                                        <div className="d-flex mb-4">
                                          <div className="flex-shrink-0">
                                            <img
                                              src="assets/images/users/avatar-8.jpg"
                                              alt=""
                                              className="avatar-xs rounded-circle material-shadow"
                                            />
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                            <h5 className="fs-13">
                                              Joseph Parker{" "}
                                              <small className="text-muted ms-2">
                                                20 Dec 2021 - 05:47AM
                                              </small>
                                            </h5>
                                            <p className="text-muted">
                                              I am getting message from
                                              customers that when they place
                                              order always get error message .
                                            </p>
                                            <a
                                              href="javascript: void(0);"
                                              className="badge text-muted bg-light"
                                            >
                                              <i className="mdi mdi-reply" />{" "}
                                              Reply
                                            </a>
                                            <div className="d-flex mt-4">
                                              <div className="flex-shrink-0">
                                                <img
                                                  src="assets/images/users/avatar-10.jpg"
                                                  alt=""
                                                  className="avatar-xs rounded-circle"
                                                />
                                              </div>
                                              <div className="flex-grow-1 ms-3">
                                                <h5 className="fs-13">
                                                  Alexis Clarke{" "}
                                                  <small className="text-muted ms-2">
                                                    22 Dec 2021 - 02:32PM
                                                  </small>
                                                </h5>
                                                <p className="text-muted">
                                                  Please be sure to check your
                                                  Spam mailbox to see if your
                                                  email filters have identified
                                                  the email from Dell as spam.
                                                </p>
                                                <a
                                                  href="javascript: void(0);"
                                                  className="badge text-muted bg-light"
                                                >
                                                  <i className="mdi mdi-reply" />{" "}
                                                  Reply
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="d-flex mb-4">
                                          <div className="flex-shrink-0">
                                            <img
                                              src="assets/images/users/avatar-6.jpg"
                                              alt=""
                                              className="avatar-xs rounded-circle"
                                            />
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                            <h5 className="fs-13">
                                              Donald Palmer{" "}
                                              <small className="text-muted ms-2">
                                                24 Dec 2021 - 05:20PM
                                              </small>
                                            </h5>
                                            <p className="text-muted">
                                              If you have further questions,
                                              please contact Customer Support
                                              from the “Action Menu” on your{" "}
                                              <a
                                                href="javascript:void(0);"
                                                className="text-decoration-underline"
                                              >
                                                Online Order Support
                                              </a>
                                              .
                                            </p>
                                            <a
                                              href="javascript: void(0);"
                                              className="badge text-muted bg-light"
                                            >
                                              <i className="mdi mdi-reply" />{" "}
                                              Reply
                                            </a>
                                          </div>
                                        </div>
                                        <div className="d-flex">
                                          <div className="flex-shrink-0">
                                            <img
                                              src="assets/images/users/avatar-10.jpg"
                                              alt=""
                                              className="avatar-xs rounded-circle"
                                            />
                                          </div>
                                          <div className="flex-grow-1 ms-3">
                                            <h5 className="fs-13">
                                              Alexis Clarke{" "}
                                              <small className="text-muted ms-2">
                                                26 min ago
                                              </small>
                                            </h5>
                                            <p className="text-muted">
                                              Your{" "}
                                              <a
                                                href="javascript:void(0)"
                                                className="text-decoration-underline"
                                              >
                                                Online Order Support
                                              </a>
                                              provides you with the most current
                                              status of your order. To help
                                              manage your order refer to the
                                              “Action Menu” to initiate return,
                                              contact Customer Support and more.
                                            </p>
                                            <div className="row g-2 mb-3">
                                              <div className="col-lg-1 col-sm-2 col-6">
                                                <img
                                                  src="assets/images/small/img-4.jpg"
                                                  alt=""
                                                  className="img-fluid rounded"
                                                />
                                              </div>
                                              <div className="col-lg-1 col-sm-2 col-6">
                                                <img
                                                  src="assets/images/small/img-5.jpg"
                                                  alt=""
                                                  className="img-fluid rounded"
                                                />
                                              </div>
                                            </div>
                                            <a
                                              href="javascript: void(0);"
                                              className="badge text-muted bg-light"
                                            >
                                              <i className="mdi mdi-reply" />{" "}
                                              Reply
                                            </a>
                                            <div className="d-flex mt-4">
                                              <div className="flex-shrink-0">
                                                <img
                                                  src="assets/images/users/avatar-6.jpg"
                                                  alt=""
                                                  className="avatar-xs rounded-circle"
                                                />
                                              </div>
                                              <div className="flex-grow-1 ms-3">
                                                <h5 className="fs-13">
                                                  Donald Palmer
                                                  <small className="text-muted ms-2">
                                                    8 sec ago
                                                  </small>
                                                </h5>
                                                <p className="text-muted">
                                                  Other shipping methods are
                                                  available at checkout if you
                                                  want your purchase delivered
                                                  faster.
                                                </p>
                                                <a
                                                  href="javascript: void(0);"
                                                  className="badge text-muted bg-light"
                                                >
                                                  <i className="mdi mdi-reply" />
                                                  Reply
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="simplebar-placeholder"
                                  style={{ width: 1199, height: 582 }}
                                />
                              </div>
                              <div
                                className="simplebar-track simplebar-horizontal"
                                style={{ visibility: "hidden" }}
                              >
                                <div
                                  className="simplebar-scrollbar"
                                  style={{ width: 0, display: "none" }}
                                />
                              </div>
                              <div
                                className="simplebar-track simplebar-vertical"
                                style={{ visibility: "visible" }}
                              >
                                <div
                                  className="simplebar-scrollbar"
                                  style={{
                                    height: 154,
                                    transform: "translate3d(0px, 0px, 0px)",
                                    display: "block",
                                  }}
                                />
                              </div>
                            </div>
                            <form className="mt-4">
                              <div className="row g-3">
                                <div className="col-12">
                                  <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label text-body"
                                  >
                                    Leave a Comments
                                  </label>
                                  <textarea
                                    className="form-control bg-light border-light"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    placeholder="Enter your comment..."
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-12 text-end">
                                  <button
                                    type="button"
                                    className="btn btn-ghost-secondary btn-icon waves-effect me-1 material-shadow-none"
                                  >
                                    <i className="ri-attachment-line fs-16" />
                                  </button>
                                  <a
                                    href="javascript:void(0);"
                                    className="btn btn-success"
                                  >
                                    Post Comments
                                  </a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-3 col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title mb-4">Skills</h5>
                            <div className="d-flex flex-wrap gap-2 fs-16">
                              <div className="badge fw-medium bg-secondary-subtle text-secondary">
                                UI/UX
                              </div>
                              <div className="badge fw-medium bg-secondary-subtle text-secondary">
                                Figma
                              </div>
                              <div className="badge fw-medium bg-secondary-subtle text-secondary">
                                HTML
                              </div>
                              <div className="badge fw-medium bg-secondary-subtle text-secondary">
                                CSS
                              </div>
                              <div className="badge fw-medium bg-secondary-subtle text-secondary">
                                Javascript
                              </div>
                              <div className="badge fw-medium bg-secondary-subtle text-secondary">
                                C#
                              </div>
                              <div className="badge fw-medium bg-secondary-subtle text-secondary">
                                Nodejs
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header align-items-center d-flex border-bottom-dashed">
                            <h4 className="card-title mb-0 flex-grow-1">
                              Members
                            </h4>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-soft-danger btn-sm material-shadow-none"
                                data-bs-toggle="modal"
                                data-bs-target="#inviteMembersModal"
                              >
                                <i className="ri-share-line me-1 align-bottom" />{" "}
                                Invite Member
                              </button>
                            </div>
                          </div>
                          <div className="card-body">
                            <div
                              data-simplebar="init"
                              style={{ height: 235 }}
                              className="mx-n3 px-3 simplebar-scrollable-y"
                            >
                              <div
                                className="simplebar-wrapper"
                                style={{ margin: "0px -16px" }}
                              >
                                <div className="simplebar-height-auto-observer-wrapper">
                                  <div className="simplebar-height-auto-observer" />
                                </div>
                                <div className="simplebar-mask">
                                  <div
                                    className="simplebar-offset"
                                    style={{ right: 0, bottom: 0 }}
                                  >
                                    <div
                                      className="simplebar-content-wrapper"
                                      tabIndex={0}
                                      role="region"
                                      aria-label="scrollable content"
                                      style={{
                                        height: "100%",
                                        overflow: "hidden scroll",
                                      }}
                                    >
                                      <div
                                        className="simplebar-content"
                                        style={{ padding: "0px 16px" }}
                                      >
                                        <div className="vstack gap-3">
                                          <div className="d-flex align-items-center">
                                            <div className="avatar-xs flex-shrink-0 me-3">
                                              <img
                                                src="assets/images/users/avatar-2.jpg"
                                                alt=""
                                                className="img-fluid rounded-circle"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <h5 className="fs-13 mb-0">
                                                <a
                                                  href="#"
                                                  className="text-body d-block"
                                                >
                                                  Nancy Martino
                                                </a>
                                              </h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                              <div className="d-flex align-items-center gap-1">
                                                <button
                                                  type="button"
                                                  className="btn btn-light btn-sm material-shadow-none"
                                                >
                                                  Message
                                                </button>
                                                <div className="dropdown">
                                                  <button
                                                    className="btn btn-icon btn-sm fs-16 text-muted dropdown material-shadow-none"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i className="ri-more-fill" />
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                                        View
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                                        Favourite
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                                        Delete
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="d-flex align-items-center">
                                            <div className="avatar-xs flex-shrink-0 me-3">
                                              <div className="avatar-title bg-danger-subtle text-danger rounded-circle">
                                                HB
                                              </div>
                                            </div>
                                            <div className="flex-grow-1">
                                              <h5 className="fs-13 mb-0">
                                                <a
                                                  href="#"
                                                  className="text-body d-block"
                                                >
                                                  Henry Baird
                                                </a>
                                              </h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                              <div className="d-flex align-items-center gap-1">
                                                <button
                                                  type="button"
                                                  className="btn btn-light btn-sm material-shadow-none"
                                                >
                                                  Message
                                                </button>
                                                <div className="dropdown">
                                                  <button
                                                    className="btn btn-icon btn-sm fs-16 text-muted dropdown material-shadow-none"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i className="ri-more-fill" />
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                                        View
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                                        Favourite
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                                        Delete
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* end member item */}
                                          <div className="d-flex align-items-center">
                                            <div className="avatar-xs flex-shrink-0 me-3">
                                              <img
                                                src="assets/images/users/avatar-3.jpg"
                                                alt=""
                                                className="img-fluid rounded-circle"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <h5 className="fs-13 mb-0">
                                                <a
                                                  href="#"
                                                  className="text-body d-block"
                                                >
                                                  Frank Hook
                                                </a>
                                              </h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                              <div className="d-flex align-items-center gap-1">
                                                <button
                                                  type="button"
                                                  className="btn btn-light btn-sm material-shadow-none"
                                                >
                                                  Message
                                                </button>
                                                <div className="dropdown">
                                                  <button
                                                    className="btn btn-icon btn-sm fs-16 text-muted dropdown material-shadow-none"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i className="ri-more-fill" />
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                                        View
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                                        Favourite
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                                        Delete
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* end member item */}
                                          <div className="d-flex align-items-center">
                                            <div className="avatar-xs flex-shrink-0 me-3">
                                              <img
                                                src="assets/images/users/avatar-4.jpg"
                                                alt=""
                                                className="img-fluid rounded-circle"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <h5 className="fs-13 mb-0">
                                                <a
                                                  href="#"
                                                  className="text-body d-block"
                                                >
                                                  Jennifer Carter
                                                </a>
                                              </h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                              <div className="d-flex align-items-center gap-1">
                                                <button
                                                  type="button"
                                                  className="btn btn-light btn-sm material-shadow-none"
                                                >
                                                  Message
                                                </button>
                                                <div className="dropdown">
                                                  <button
                                                    className="btn btn-icon btn-sm fs-16 text-muted dropdown material-shadow-none"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i className="ri-more-fill" />
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                                        View
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                                        Favourite
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                                        Delete
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* end member item */}
                                          <div className="d-flex align-items-center">
                                            <div className="avatar-xs flex-shrink-0 me-3">
                                              <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                                AC
                                              </div>
                                            </div>
                                            <div className="flex-grow-1">
                                              <h5 className="fs-13 mb-0">
                                                <a
                                                  href="#"
                                                  className="text-body d-block"
                                                >
                                                  Alexis Clarke
                                                </a>
                                              </h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                              <div className="d-flex align-items-center gap-1">
                                                <button
                                                  type="button"
                                                  className="btn btn-light btn-sm material-shadow-none"
                                                >
                                                  Message
                                                </button>
                                                <div className="dropdown">
                                                  <button
                                                    className="btn btn-icon btn-sm fs-16 text-muted dropdown material-shadow-none"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i className="ri-more-fill" />
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                                        View
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                                        Favourite
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                                        Delete
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* end member item */}
                                          <div className="d-flex align-items-center">
                                            <div className="avatar-xs flex-shrink-0 me-3">
                                              <img
                                                src="assets/images/users/avatar-7.jpg"
                                                alt=""
                                                className="img-fluid rounded-circle"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <h5 className="fs-13 mb-0">
                                                <a
                                                  href="#"
                                                  className="text-body d-block"
                                                >
                                                  Joseph Parker
                                                </a>
                                              </h5>
                                            </div>
                                            <div className="flex-shrink-0">
                                              <div className="d-flex align-items-center gap-1">
                                                <button
                                                  type="button"
                                                  className="btn btn-light btn-sm material-shadow-none"
                                                >
                                                  Message
                                                </button>
                                                <div className="dropdown">
                                                  <button
                                                    className="btn btn-icon btn-sm fs-16 text-muted dropdown material-shadow-none"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i className="ri-more-fill" />
                                                  </button>
                                                  <ul className="dropdown-menu">
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                                        View
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                                        Favourite
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        className="dropdown-item"
                                                        href="javascript:void(0);"
                                                      >
                                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                                        Delete
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* end member item */}
                                        </div>
                                        {/* end list */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="simplebar-placeholder"
                                  style={{ width: 384, height: 284 }}
                                />
                              </div>
                              <div
                                className="simplebar-track simplebar-horizontal"
                                style={{ visibility: "hidden" }}
                              >
                                <div
                                  className="simplebar-scrollbar"
                                  style={{ width: 0, display: "none" }}
                                />
                              </div>
                              <div
                                className="simplebar-track simplebar-vertical"
                                style={{ visibility: "visible" }}
                              >
                                <div
                                  className="simplebar-scrollbar"
                                  style={{
                                    height: 194,
                                    transform: "translate3d(0px, 0px, 0px)",
                                    display: "block",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                        <div className="card">
                          <div className="card-header align-items-center d-flex border-bottom-dashed">
                            <h4 className="card-title mb-0 flex-grow-1">
                              Attachments
                            </h4>
                            <div className="flex-shrink-0">
                              <button
                                type="button"
                                className="btn btn-soft-info btn-sm"
                              >
                                <i className="ri-upload-2-fill me-1 align-bottom" />{" "}
                                Upload
                              </button>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="vstack gap-2">
                              <div className="border rounded border-dashed p-2">
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                      <div className="avatar-title bg-light text-secondary rounded fs-24">
                                        <i className="ri-folder-zip-line" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-13 mb-1">
                                      <a
                                        href="#"
                                        className="text-body text-truncate d-block"
                                      >
                                        App-pages.zip
                                      </a>
                                    </h5>
                                    <div>2.2MB</div>
                                  </div>
                                  <div className="flex-shrink-0 ms-2">
                                    <div className="d-flex gap-1">
                                      <button
                                        type="button"
                                        className="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"
                                      >
                                        <i className="ri-download-2-line" />
                                      </button>
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ri-more-fill" />
                                        </button>
                                        <ul className="dropdown-menu">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                              Rename
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border rounded border-dashed p-2">
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                      <div className="avatar-title bg-light text-secondary rounded fs-24">
                                        <i className="ri-file-ppt-2-line" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-13 mb-1">
                                      <a
                                        href="#"
                                        className="text-body text-truncate d-block"
                                      >
                                        Velzon-admin.ppt
                                      </a>
                                    </h5>
                                    <div>2.4MB</div>
                                  </div>
                                  <div className="flex-shrink-0 ms-2">
                                    <div className="d-flex gap-1">
                                      <button
                                        type="button"
                                        className="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"
                                      >
                                        <i className="ri-download-2-line" />
                                      </button>
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ri-more-fill" />
                                        </button>
                                        <ul className="dropdown-menu">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                              Rename
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border rounded border-dashed p-2">
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                      <div className="avatar-title bg-light text-secondary rounded fs-24">
                                        <i className="ri-folder-zip-line" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-13 mb-1">
                                      <a
                                        href="#"
                                        className="text-body text-truncate d-block"
                                      >
                                        Images.zip
                                      </a>
                                    </h5>
                                    <div>1.2MB</div>
                                  </div>
                                  <div className="flex-shrink-0 ms-2">
                                    <div className="d-flex gap-1">
                                      <button
                                        type="button"
                                        className="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"
                                      >
                                        <i className="ri-download-2-line" />
                                      </button>
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ri-more-fill" />
                                        </button>
                                        <ul className="dropdown-menu">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                              Rename
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border rounded border-dashed p-2">
                                <div className="d-flex align-items-center">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm">
                                      <div className="avatar-title bg-light text-secondary rounded fs-24">
                                        <i className="ri-image-2-line" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1 overflow-hidden">
                                    <h5 className="fs-13 mb-1">
                                      <a
                                        href="#"
                                        className="text-body text-truncate d-block"
                                      >
                                        bg-pattern.png
                                      </a>
                                    </h5>
                                    <div>1.1MB</div>
                                  </div>
                                  <div className="flex-shrink-0 ms-2">
                                    <div className="d-flex gap-1">
                                      <button
                                        type="button"
                                        className="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"
                                      >
                                        <i className="ri-download-2-line" />
                                      </button>
                                      <div className="dropdown">
                                        <button
                                          className="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none"
                                          type="button"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i className="ri-more-fill" />
                                        </button>
                                        <ul className="dropdown-menu">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                              Rename
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="#"
                                            >
                                              <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 text-center">
                                <button
                                  type="button"
                                  className="btn btn-success"
                                >
                                  View more
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* end card body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end tab pane */}
                  <div
                    className="tab-pane fade"
                    id="project-documents"
                    role="tabpanel"
                  >
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4">
                          <h5 className="card-title flex-grow-1">Documents</h5>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="table-responsive table-card">
                              <table className="table table-borderless align-middle mb-0">
                                <thead className="table-light">
                                  <tr>
                                    <th scope="col">File Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Upload Date</th>
                                    <th scope="col" style={{ width: 120 }}>
                                      Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-sm">
                                          <div className="avatar-title bg-light text-secondary rounded fs-24">
                                            <i className="ri-folder-zip-line" />
                                          </div>
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                          <h5 className="fs-14 mb-0">
                                            <a
                                              href="javascript:void(0)"
                                              className="text-body"
                                            >
                                              Artboard-documents.zip
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Zip File</td>
                                    <td>4.57 MB</td>
                                    <td>12 Dec 2021</td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-soft-secondary btn-sm btn-icon"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i className="ri-more-fill" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-eye-fill me-2 align-bottom text-muted" />
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-download-2-fill me-2 align-bottom text-muted" />
                                              Download
                                            </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-5-fill me-2 align-bottom text-muted" />
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-sm">
                                          <div className="avatar-title bg-light text-danger rounded fs-24">
                                            <i className="ri-file-pdf-fill" />
                                          </div>
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                          <h5 className="fs-14 mb-0">
                                            <a
                                              href="javascript:void(0);"
                                              className="text-body"
                                            >
                                              Bank Management System
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </td>
                                    <td>PDF File</td>
                                    <td>8.89 MB</td>
                                    <td>24 Nov 2021</td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-soft-secondary btn-sm btn-icon"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i className="ri-more-fill" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-eye-fill me-2 align-bottom text-muted" />
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-download-2-fill me-2 align-bottom text-muted" />
                                              Download
                                            </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-5-fill me-2 align-bottom text-muted" />
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-sm">
                                          <div className="avatar-title bg-light text-secondary rounded fs-24">
                                            <i className="ri-video-line" />
                                          </div>
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                          <h5 className="fs-14 mb-0">
                                            <a
                                              href="javascript:void(0);"
                                              className="text-body"
                                            >
                                              Tour-video.mp4
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </td>
                                    <td>MP4 File</td>
                                    <td>14.62 MB</td>
                                    <td>19 Nov 2021</td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-soft-secondary btn-sm btn-icon"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i className="ri-more-fill" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-eye-fill me-2 align-bottom text-muted" />
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-download-2-fill me-2 align-bottom text-muted" />
                                              Download
                                            </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-5-fill me-2 align-bottom text-muted" />
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-sm">
                                          <div className="avatar-title bg-light text-success rounded fs-24">
                                            <i className="ri-file-excel-fill" />
                                          </div>
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                          <h5 className="fs-14 mb-0">
                                            <a
                                              href="javascript:void(0);"
                                              className="text-body"
                                            >
                                              Account-statement.xsl
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </td>
                                    <td>XSL File</td>
                                    <td>2.38 KB</td>
                                    <td>14 Nov 2021</td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-soft-secondary btn-sm btn-icon"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i className="ri-more-fill" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-eye-fill me-2 align-bottom text-muted" />
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-download-2-fill me-2 align-bottom text-muted" />
                                              Download
                                            </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-5-fill me-2 align-bottom text-muted" />
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-sm">
                                          <div className="avatar-title bg-light text-warning rounded fs-24">
                                            <i className="ri-folder-fill" />
                                          </div>
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                          <h5 className="fs-14 mb-0">
                                            <a
                                              href="javascript:void(0);"
                                              className="text-body"
                                            >
                                              Project Screenshots Collection
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </td>
                                    <td>Folder File</td>
                                    <td>87.24 MB</td>
                                    <td>08 Nov 2021</td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-soft-secondary btn-sm btn-icon"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i className="ri-more-fill" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-eye-fill me-2 align-bottom text-muted" />
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-download-2-fill me-2 align-bottom text-muted" />
                                              Download
                                            </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-5-fill me-2 align-bottom text-muted" />
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-sm">
                                          <div className="avatar-title bg-light text-danger rounded fs-24">
                                            <i className="ri-image-2-fill" />
                                          </div>
                                        </div>
                                        <div className="ms-3 flex-grow-1">
                                          <h5 className="fs-14 mb-0">
                                            <a
                                              href="javascript:void(0);"
                                              className="text-body"
                                            >
                                              Velzon-logo.png
                                            </a>
                                          </h5>
                                        </div>
                                      </div>
                                    </td>
                                    <td>PNG File</td>
                                    <td>879 KB</td>
                                    <td>02 Nov 2021</td>
                                    <td>
                                      <div className="dropdown">
                                        <a
                                          href="javascript:void(0);"
                                          className="btn btn-soft-secondary btn-sm btn-icon"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="true"
                                        >
                                          <i className="ri-more-fill" />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-eye-fill me-2 align-bottom text-muted" />
                                              View
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-download-2-fill me-2 align-bottom text-muted" />
                                              Download
                                            </a>
                                          </li>
                                          <li className="dropdown-divider" />
                                          <li>
                                            <a
                                              className="dropdown-item"
                                              href="javascript:void(0);"
                                            >
                                              <i className="ri-delete-bin-5-fill me-2 align-bottom text-muted" />
                                              Delete
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div className="text-center mt-3">
                              <a
                                href="javascript:void(0);"
                                className="text-success "
                              >
                                <i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" />{" "}
                                Load more{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end tab pane */}
                  <div
                    className="tab-pane fade"
                    id="project-activities"
                    role="tabpanel"
                  >
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Activities</h5>
                        <div className="acitivity-timeline py-3">
                          <div className="acitivity-item d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt=""
                                className="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">
                                Oliver Phillips{" "}
                                <span className="badge bg-primary-subtle text-primary align-middle">
                                  New
                                </span>
                              </h6>
                              <p className="text-muted mb-2">
                                We talked about a project on linkedin.
                              </p>
                              <small className="mb-0 text-muted">Today</small>
                            </div>
                          </div>
                          <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                              <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                N
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">
                                Nancy Martino{" "}
                                <span className="badge bg-secondary-subtle text-secondary align-middle">
                                  In Progress
                                </span>
                              </h6>
                              <p className="text-muted mb-2">
                                <i className="ri-file-text-line align-middle ms-2" />{" "}
                                Create new project Building product
                              </p>
                              <div className="avatar-group mb-2">
                                <a
                                  href="javascript: void(0);"
                                  className="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Christi"
                                >
                                  <img
                                    src="assets/images/users/avatar-4.jpg"
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  className="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Frank Hook"
                                >
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    alt=""
                                    className="rounded-circle avatar-xs"
                                  />
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  className="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title=" Ruby"
                                >
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle bg-light text-primary">
                                      R
                                    </div>
                                  </div>
                                </a>
                                <a
                                  href="javascript: void(0);"
                                  className="avatar-group-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="more"
                                >
                                  <div className="avatar-xs">
                                    <div className="avatar-title rounded-circle">
                                      2+
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <small className="mb-0 text-muted">
                                Yesterday
                              </small>
                            </div>
                          </div>
                          <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt=""
                                className="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">
                                Natasha Carey{" "}
                                <span className="badge bg-success-subtle text-success align-middle">
                                  Completed
                                </span>
                              </h6>
                              <p className="text-muted mb-2">
                                Adding a new event with attachments
                              </p>
                              <div className="row">
                                <div className="col-xxl-4">
                                  <div className="row border border-dashed gx-2 p-2 mb-2">
                                    <div className="col-4">
                                      <img
                                        src="assets/images/small/img-2.jpg"
                                        alt=""
                                        className="img-fluid rounded"
                                      />
                                    </div>
                                    {/*end col*/}
                                    <div className="col-4">
                                      <img
                                        src="assets/images/small/img-3.jpg"
                                        alt=""
                                        className="img-fluid rounded"
                                      />
                                    </div>
                                    {/*end col*/}
                                    <div className="col-4">
                                      <img
                                        src="assets/images/small/img-4.jpg"
                                        alt=""
                                        className="img-fluid rounded"
                                      />
                                    </div>
                                    {/*end col*/}
                                  </div>
                                  {/*end row*/}
                                </div>
                              </div>
                              <small className="mb-0 text-muted">25 Nov</small>
                            </div>
                          </div>
                          <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                alt=""
                                className="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">Bethany Johnson</h6>
                              <p className="text-muted mb-2">
                                added a new member to velzon dashboard
                              </p>
                              <small className="mb-0 text-muted">19 Nov</small>
                            </div>
                          </div>
                          <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                              <div className="avatar-xs acitivity-avatar">
                                <div className="avatar-title rounded-circle bg-danger-subtle text-danger">
                                  <i className="ri-shopping-bag-line" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">
                                Your order is placed{" "}
                                <span className="badge bg-danger-subtle text-danger align-middle ms-1">
                                  Out of Delivery
                                </span>
                              </h6>
                              <p className="text-muted mb-2">
                                These customers can rest assured their order has
                                been placed.
                              </p>
                              <small className="mb-0 text-muted">16 Nov</small>
                            </div>
                          </div>
                          <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                alt=""
                                className="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">Lewis Pratt</h6>
                              <p className="text-muted mb-2">
                                They all have something to say beyond the words
                                on the page. They can come across as casual or
                                neutral, exotic or graphic.{" "}
                              </p>
                              <small className="mb-0 text-muted">22 Oct</small>
                            </div>
                          </div>
                          <div className="acitivity-item py-3 d-flex">
                            <div className="flex-shrink-0">
                              <div className="avatar-xs acitivity-avatar">
                                <div className="avatar-title rounded-circle bg-info-subtle text-info">
                                  <i className="ri-line-chart-line" />
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">Monthly sales report</h6>
                              <p className="text-muted mb-2">
                                <span className="text-danger">2 days left</span>{" "}
                                notification to submit the monthly sales report.{" "}
                                <a
                                  href="javascript:void(0);"
                                  className="link-warning text-decoration-underline"
                                >
                                  Reports Builder
                                </a>
                              </p>
                              <small className="mb-0 text-muted">15 Oct</small>
                            </div>
                          </div>
                          <div className="acitivity-item d-flex">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                alt=""
                                className="avatar-xs rounded-circle acitivity-avatar"
                              />
                            </div>
                            <div className="flex-grow-1 ms-3">
                              <h6 className="mb-1">
                                New ticket received{" "}
                                <span className="badge bg-success-subtle text-success align-middle">
                                  Completed
                                </span>
                              </h6>
                              <p className="text-muted mb-2">
                                User{" "}
                                <span className="text-secondary">Erica245</span>{" "}
                                submitted a ticket.
                              </p>
                              <small className="mb-0 text-muted">26 Aug</small>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/* end tab pane */}
                  <div
                    className="tab-pane fade"
                    id="project-team"
                    role="tabpanel"
                  >
                    <div className="row g-4 mb-3">
                      <div className="col-sm">
                        <div className="d-flex">
                          <div className="search-box me-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search member..."
                            />
                            <i className="ri-search-line search-icon" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div>
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#inviteMembersModal"
                          >
                            <i className="ri-share-line me-1 align-bottom" />{" "}
                            Invite Member
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                    <div className="team-list list-view-filter">
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <img
                                    src="assets/images/users/avatar-2.jpg"
                                    alt=""
                                    className="img-fluid d-block rounded-circle"
                                  />
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">
                                      Nancy Martino
                                    </h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Team Leader &amp; HR
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">225</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">197</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn active"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <div className="avatar-title bg-danger-subtle text-danger rounded-circle">
                                    HB
                                  </div>
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">Henry Baird</h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Full Stack Developer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">352</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">376</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn active"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    alt=""
                                    className="img-fluid d-block rounded-circle"
                                  />
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">Frank Hook</h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Project Manager
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">164</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">182</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <img
                                    src="assets/images/users/avatar-8.jpg"
                                    alt=""
                                    className="img-fluid d-block rounded-circle"
                                  />
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">
                                      Jennifer Carter
                                    </h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    UI/UX Designer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">225</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">197</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <div className="avatar-title bg-success-subtle text-success rounded-circle">
                                    ME
                                  </div>
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">Megan Elmore</h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Team Leader &amp; Web Developer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">201</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">263</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <img
                                    src="assets/images/users/avatar-4.jpg"
                                    alt=""
                                    className="img-fluid d-block rounded-circle"
                                  />
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">
                                      Alexis Clarke
                                    </h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Backend Developer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">132</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">147</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <div className="avatar-title bg-info-subtle text-info rounded-circle">
                                    NC
                                  </div>
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">Nathan Cole</h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Front-End Developer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">352</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">376</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <img
                                    src="assets/images/users/avatar-7.jpg"
                                    alt=""
                                    className="img-fluid d-block rounded-circle"
                                  />
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">
                                      Joseph Parker
                                    </h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Team Leader &amp; HR
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">64</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">93</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end card*/}
                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <img
                                    src="assets/images/users/avatar-5.jpg"
                                    alt=""
                                    className="img-fluid d-block rounded-circle"
                                  />
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">Erica Kernan</h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Web Designer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">345</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">298</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card team-box">
                        <div className="card-body px-4">
                          <div className="row align-items-center team-row">
                            <div className="col team-settings">
                              <div className="row align-items-center">
                                <div className="col">
                                  <div className="flex-shrink-0 me-2">
                                    <button
                                      type="button"
                                      className="btn fs-16 p-0 favourite-btn"
                                    >
                                      <i className="ri-star-fill" />
                                    </button>
                                  </div>
                                </div>
                                <div className="col text-end dropdown">
                                  <a
                                    href="javascript:void(0);"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ri-more-fill fs-17" />
                                  </a>
                                  <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-eye-fill text-muted me-2 align-bottom" />
                                        View
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-star-fill text-muted me-2 align-bottom" />
                                        Favourite
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href="javascript:void(0);"
                                      >
                                        <i className="ri-delete-bin-5-fill text-muted me-2 align-bottom" />
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="team-profile-img">
                                <div className="avatar-lg img-thumbnail rounded-circle">
                                  <div className="avatar-title border bg-light text-primary rounded-circle">
                                    DP
                                  </div>
                                </div>
                                <div className="team-content">
                                  <a href="#" className="d-block">
                                    <h5 className="fs-16 mb-1">
                                      Donald Palmer
                                    </h5>
                                  </a>
                                  <p className="text-muted mb-0">
                                    Wed Developer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col">
                              <div className="row text-muted text-center">
                                <div className="col-6 border-end border-end-dashed">
                                  <h5 className="mb-1">97</h5>
                                  <p className="text-muted mb-0">Projects</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="mb-1">135</h5>
                                  <p className="text-muted mb-0">Tasks</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-2 col">
                              <div className="text-end">
                                <a
                                  href="pages-profile.html"
                                  className="btn btn-light view-btn"
                                >
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row g-0 text-center text-sm-start align-items-center mb-3">
                      <div className="col-sm-6">
                        <div>
                          <p className="mb-sm-0">
                            Showing 1 to 10 of 12 entries
                          </p>
                        </div>
                      </div>{" "}
                      <div className="col-sm-6">
                        <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                          <li className="page-item disabled">
                            {" "}
                            <a href="#" className="page-link">
                              <i className="mdi mdi-chevron-left" />
                            </a>{" "}
                          </li>
                          <li className="page-item">
                            {" "}
                            <a href="#" className="page-link">
                              1
                            </a>{" "}
                          </li>
                          <li className="page-item active">
                            {" "}
                            <a href="#" className="page-link">
                              2
                            </a>{" "}
                          </li>
                          <li className="page-item">
                            {" "}
                            <a href="#" className="page-link">
                              3
                            </a>{" "}
                          </li>
                          <li className="page-item">
                            {" "}
                            <a href="#" className="page-link">
                              4
                            </a>{" "}
                          </li>
                          <li className="page-item">
                            {" "}
                            <a href="#" className="page-link">
                              5
                            </a>{" "}
                          </li>
                          <li className="page-item">
                            {" "}
                            <a href="#" className="page-link">
                              <i className="mdi mdi-chevron-right" />
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
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">2025 © Velzon.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by Themesbrand
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default OverviewProject;
