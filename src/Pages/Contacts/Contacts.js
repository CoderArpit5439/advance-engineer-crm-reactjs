import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import TopCards from "../../Components/TopCards";
const Contacts = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 className="mb-sm-0">Contacts</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">CRM</a>
                      </li>
                      <li className="breadcrumb-item active">Contacts</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <TopCards />
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <div className="flex-grow-1">
                       
                      </div>
                      <div className="flex-shrink-0">
                        <div className="hstack text-nowrap gap-2">
                          <button
                            className="btn btn-soft-danger material-shadow-none"
                            id="remove-actions"
                            onclick="deleteMultiple()"
                          >
                            <i className="ri-delete-bin-2-line" />
                          </button>
                          <button
                            className="btn btn-danger material-shadow-none"
                            fdprocessedid="tp6e5"
                          >
                            <i className="ri-filter-2-line me-1 align-bottom" />{" "}
                            Filters
                          </button>
                          <button
                            className="btn btn-soft-success material-shadow-none"
                            fdprocessedid="es40lk"
                          >
                            Import
                          </button>
                          <button
                            type="button"
                            id="dropdownMenuLink1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="btn btn-soft-info material-shadow-none"
                            fdprocessedid="8j9d0p"
                          >
                            <i className="ri-more-2-fill" />
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink1"
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                All
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Last Week
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Last Month
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Last Year
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-xxl-9">
                <div className="card" id="contactList">
                  <div className="card-header">
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="search-box">
                          <input
                            type="text"
                            className="form-control search"
                            placeholder="Search for contact..."
                            fdprocessedid="yrhrbvp"
                          />
                          <i className="ri-search-line search-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div>
                      <div className="table-responsive table-card mb-3">
                        <table
                          className="table align-middle table-nowrap mb-0"
                          id="customerTable"
                        >
                          <thead className="table-light">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Company</th>
                              <th scope="col">Email ID</th>
                              <th scope="col">Contact</th>
                              <th scope="col">Post</th>
                              <th scope="col">Last Contact</th>
                              <th scope="col">Block / Unblock</th>
                              <th scope="col">Next Visit</th>
                              <th scope="col">Discuss</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            <tr>
                             
                              <td className="id" style={{ display: "none" }}>
                                <a
                                  href="javascript:void(0);"
                                  className="fw-medium link-primary"
                                >
                                  #VZ10
                                </a>
                              </td>
                              <td className="name">
                                <div className="d-flex align-items-center">
                                  {" "}
                                  <div className="flex-shrink-0">
                                    <img
                                      src="assets/images/users/avatar-10.jpg"
                                      alt=""
                                      className="avatar-xs rounded-circle"
                                    />
                                  </div>{" "}
                                  <div className="flex-grow-1 ms-2 name">
                                    Tonya Noble
                                  </div>{" "}
                                </div>
                              </td>
                              <td className="company_name">
                                Nesta Technologies
                              </td>
                              <td className="email_id">
                                tonyanoble@velzon.com
                              </td>
                              <td className="phone">414-453-5725</td>
                              <td className="lead_score">452020</td>
                              <td className="lead_score">25-05-2025</td>
                              <td className="lead_score">Block</td>
                              <td className="lead_score">30-05-2025</td>
                              <td className="lead_score">Intrested candidate</td>
                              <td>
                                <ul className="list-inline hstack gap-2 mb-0">
                                  <li className="list-inline-item">
                                    <div className="dropdown">
                                      <button
                                        className="btn btn-soft-secondary btn-sm dropdown"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="ri-more-fill align-middle" />
                                      </button>
                                      <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                          <a
                                            className="dropdown-item view-item-btn"
                                            href="javascript:void(0);"
                                          >
                                            <i className="ri-eye-fill align-bottom me-2 text-muted" />
                                            View
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item edit-item-btn"
                                            href="#showModal"
                                            data-bs-toggle="modal"
                                          >
                                            <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                            Edit
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            className="dropdown-item remove-item-btn"
                                            data-bs-toggle="modal"
                                            href="#deleteRecordModal"
                                          >
                                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                            Delete
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          
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
                              We've searched more than 150+ contacts We did not
                              find any contacts for you search.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-3">
                        <div
                          className="pagination-wrap hstack gap-2"
                          style={{ display: "flex" }}
                        >
                          <a
                            className="page-item pagination-prev disabled"
                            href="#"
                          >
                            Previous
                          </a>
                          <ul className="pagination listjs-pagination mb-0">
                            <li className="active">
                              <a
                                className="page"
                                href="#"
                                data-i={1}
                                data-page={8}
                              >
                                1
                              </a>
                            </li>
                            <li>
                              <a
                                className="page"
                                href="#"
                                data-i={2}
                                data-page={8}
                              >
                                2
                              </a>
                            </li>
                          </ul>
                          <a className="page-item pagination-next" href="#">
                            Next
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="showModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                          <div className="modal-header bg-info-subtle p-3">
                            <h5
                              className="modal-title"
                              id="exampleModalLabel"
                            />
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              id="close-modal"
                            />
                          </div>
                          <form className="tablelist-form" autoComplete="off">
                            <div className="modal-body">
                              <input type="hidden" id="id-field" />
                              <div className="row g-3">
                                <div className="col-lg-12">
                                  <div className="text-center">
                                    <div className="position-relative d-inline-block">
                                      <div className="position-absolute  bottom-0 end-0">
                                        <label
                                          htmlFor="customer-image-input"
                                          className="mb-0"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          aria-label="Select Image"
                                          data-bs-original-title="Select Image"
                                        >
                                          <div className="avatar-xs cursor-pointer">
                                            <div className="avatar-title bg-light border rounded-circle text-muted">
                                              <i className="ri-image-fill" />
                                            </div>
                                          </div>
                                        </label>
                                        <input
                                          className="form-control d-none"
                                          defaultValue=""
                                          id="customer-image-input"
                                          type="file"
                                          accept="image/png, image/gif, image/jpeg"
                                        />
                                      </div>
                                      <div className="avatar-lg p-1">
                                        <div className="avatar-title bg-light rounded-circle">
                                          <img
                                            src="assets/images/users/user-dummy-img.jpg"
                                            id="customer-img"
                                            className="avatar-md rounded-circle object-fit-cover"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="name-field"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      id="customername-field"
                                      className="form-control"
                                      placeholder="Enter name"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div>
                                    <label
                                      htmlFor="company_name-field"
                                      className="form-label"
                                    >
                                      Company Name
                                    </label>
                                    <input
                                      type="text"
                                      id="company_name-field"
                                      className="form-control"
                                      placeholder="Enter company name"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div>
                                    <label
                                      htmlFor="designation-field"
                                      className="form-label"
                                    >
                                      Designation
                                    </label>
                                    <input
                                      type="text"
                                      id="designation-field"
                                      className="form-control"
                                      placeholder="Enter Designation"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div>
                                    <label
                                      htmlFor="email_id-field"
                                      className="form-label"
                                    >
                                      Email ID
                                    </label>
                                    <input
                                      type="text"
                                      id="email_id-field"
                                      className="form-control"
                                      placeholder="Enter email"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div>
                                    <label
                                      htmlFor="phone-field"
                                      className="form-label"
                                    >
                                      Phone
                                    </label>
                                    <input
                                      type="text"
                                      id="phone-field"
                                      className="form-control"
                                      placeholder="Enter phone no"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div>
                                    <label
                                      htmlFor="lead_score-field"
                                      className="form-label"
                                    >
                                      Lead Score
                                    </label>
                                    <input
                                      type="text"
                                      id="lead_score-field"
                                      className="form-control"
                                      placeholder="Enter value"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div>
                                    <label
                                      htmlFor="taginput-choices"
                                      className="form-label font-size-13 text-muted"
                                    >
                                      Tags
                                    </label>
                                    <div
                                      className="choices"
                                      data-type="select-multiple"
                                      role="combobox"
                                      aria-autocomplete="list"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <div className="choices__inner">
                                        <select
                                          className="form-control choices__input"
                                          name="taginput-choices"
                                          id="taginput-choices"
                                          multiple=""
                                          hidden=""
                                          tabIndex={-1}
                                          data-choice="active"
                                        >
                                          <option value="Lead">Lead</option>
                                          <option value="Partner">
                                            Partner
                                          </option>
                                          <option value="Exiting">
                                            Exiting
                                          </option>
                                          <option value="Long-term">
                                            Long-term
                                          </option>
                                        </select>
                                        <div
                                          className="choices__list choices__list--multiple"
                                          role="listbox"
                                        />
                                        <input
                                          type="search"
                                          className="choices__input choices__input--cloned"
                                          autoComplete="off"
                                          autoCapitalize="off"
                                          spellCheck="false"
                                          role="textbox"
                                          aria-autocomplete="list"
                                          aria-label="Tags"
                                          style={{
                                            minWidth: "1ch",
                                            width: "1ch",
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="choices__list choices__list--dropdown"
                                        aria-expanded="false"
                                      >
                                        <div
                                          className="choices__list"
                                          aria-multiselectable="true"
                                          role="listbox"
                                        >
                                          <div
                                            id="choices--taginput-choices-item-choice-3"
                                            className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                            role="option"
                                            data-choice=""
                                            data-id={3}
                                            data-value="Exiting"
                                            data-select-text="Press to select"
                                            data-choice-selectable=""
                                            aria-selected="true"
                                          >
                                            Exiting
                                          </div>
                                          <div
                                            id="choices--taginput-choices-item-choice-1"
                                            className="choices__item choices__item--choice choices__item--selectable"
                                            role="option"
                                            data-choice=""
                                            data-id={1}
                                            data-value="Lead"
                                            data-select-text="Press to select"
                                            data-choice-selectable=""
                                          >
                                            Lead
                                          </div>
                                          <div
                                            id="choices--taginput-choices-item-choice-4"
                                            className="choices__item choices__item--choice choices__item--selectable"
                                            role="option"
                                            data-choice=""
                                            data-id={4}
                                            data-value="Long-term"
                                            data-select-text="Press to select"
                                            data-choice-selectable=""
                                          >
                                            Long-term
                                          </div>
                                          <div></div>
                                          <div
                                            id="choices--taginput-choices-item-choice-2"
                                            className="choices__item choices__item--choice choices__item--selectable"
                                            role="option"
                                            data-choice=""
                                            data-id={2}
                                            data-value="Partner"
                                            data-select-text="Press to select"
                                            data-choice-selectable=""
                                          >
                                            Partner
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  id="add-btn"
                                >
                                  Add Contact
                                </button>
                                {/* <button type="button" class="btn btn-success" id="edit-btn">Update</button> */}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/*end add modal*/}
                    <div
                      className="modal fade zoomIn"
                      id="deleteRecordModal"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button
                              type="button"
                              className="btn-close"
                              id="deleteRecord-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body p-5 text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/gsqxdxog.json"
                              trigger="loop"
                              colors="primary:#405189,secondary:#f06548"
                              style={{ width: 90, height: 90 }}
                            />
                            <div className="mt-4 text-center">
                              <h4 className="fs-semibold">
                                You are about to delete a contact ?
                              </h4>
                              <p className="text-muted fs-14 mb-4 pt-1">
                                Deleting your contact will remove all of your
                                information from our database.
                              </p>
                              <div className="hstack gap-2 justify-content-center remove">
                                <button
                                  className="btn btn-link link-success fw-medium text-decoration-none material-shadow-none"
                                  id="deleteRecord-close"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="ri-close-line me-1 align-middle" />{" "}
                                  Close
                                </button>
                                <button
                                  className="btn btn-danger"
                                  id="delete-record"
                                >
                                  Yes, Delete It!!
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end delete modal */}
                  </div>
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-xxl-3">
                <div className="card" id="contact-view-detail">
                  <div className="card-body text-center">
                    <div className="position-relative d-inline-block">
                      <img
                        src="assets/images/users/avatar-10.jpg"
                        alt=""
                        className="avatar-lg rounded-circle img-thumbnail material-shadow"
                      />
                      <span className="contact-active position-absolute rounded-circle bg-success">
                        <span className="visually-hidden" />
                      </span>
                    </div>
                    <h5 className="mt-4 mb-1">Tonya Noble</h5>
                    <p className="text-muted">Nesta Technologies</p>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item avatar-xs">
                        <a
                          href="javascript:void(0);"
                          className="avatar-title bg-success-subtle text-success fs-15 rounded"
                        >
                          <i className="ri-phone-line" />
                        </a>
                      </li>
                      <li className="list-inline-item avatar-xs">
                        <a
                          href="javascript:void(0);"
                          className="avatar-title bg-danger-subtle text-danger fs-15 rounded"
                        >
                          <i className="ri-mail-line" />
                        </a>
                      </li>
                      <li className="list-inline-item avatar-xs">
                        <a
                          href="javascript:void(0);"
                          className="avatar-title bg-warning-subtle text-warning fs-15 rounded"
                        >
                          <i className="ri-question-answer-line" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h6 className="text-muted text-uppercase fw-semibold mb-3">
                      Personal Information
                    </h6>
                    <p className="text-muted mb-4">
                      Hello, I'm Tonya Noble, The most effective objective is
                      one that is tailored to the job you are applying for. It
                      states what kind of career you are seeking, and what
                      skills and experiences.
                    </p>
                    <div className="table-responsive table-card">
                      <table className="table table-borderless mb-0">
                        <tbody>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Designation
                            </td>
                            <td>Lead Designer / Developer</td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Email ID
                            </td>
                            <td>tonyanoble@velzon.com</td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Phone No
                            </td>
                            <td>414-453-5725</td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Lead Score
                            </td>
                            <td>154</td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Tags
                            </td>
                            <td>
                              <span className="badge bg-primary-subtle text-primary">
                                Lead
                              </span>
                              <span className="badge bg-primary-subtle text-primary">
                                Partner
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Last Contacted
                            </td>
                            <td>
                              15 Dec, 2021{" "}
                              <small className="text-muted">08:58AM</small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*end card*/}
              </div>
              "texr 0 - uu onhh "{/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
