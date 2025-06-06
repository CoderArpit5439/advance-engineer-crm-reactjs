import React from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
const AddProject = () => {
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
            <h4 className="mb-sm-0">Create Project</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Projects</a>
                </li>
                <li className="breadcrumb-item active">Create Project</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label" htmlFor="project-title-input">
                  Project Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="project-title-input"
                  placeholder="Enter project title"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="project-thumbnail-img">
                  Thumbnail Image
                </label>
                <input
                  className="form-control"
                  id="project-thumbnail-img"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                />
              </div>
        
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3 mb-lg-0">
                    <label
                      htmlFor="choices-priority-input"
                      className="form-label"
                    >
                      Priority
                    </label>
                    <div
                      className="choices"
                      data-type="select-one"
                      tabIndex={0}
                      role="listbox"
                      aria-label="Priority"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="choices__inner">
                        <select
                          className="form-select choices__input"
                          data-choices=""
                          data-choices-search-false=""
                          id="choices-priority-input"
                          hidden=""
                          tabIndex={-1}
                          data-choice="active"
                        >
                          <option value="High" selected="">
                            High
                          </option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <div className="choices__list choices__list--single">
                          <div
                            className="choices__item choices__item--selectable"
                            data-item=""
                            data-id={1}
                            data-value="High"
                            aria-selected="true"
                            role="option"
                          >
                            High
                          </div>
                        </div>
                      </div>
                      <div
                        className="choices__list choices__list--dropdown"
                        aria-expanded="false"
                      >
                        <div className="choices__list" role="listbox">
                          <div
                            id="choices--choices-priority-input-item-choice-1"
                            className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                            role="option"
                            data-choice=""
                            data-id={1}
                            data-value="High"
                            data-select-text="Press to select"
                            data-choice-selectable=""
                            aria-selected="true"
                          >
                            High
                          </div>
                          <div
                            id="choices--choices-priority-input-item-choice-3"
                            className="choices__item choices__item--choice choices__item--selectable"
                            role="option"
                            data-choice=""
                            data-id={3}
                            data-value="Low"
                            data-select-text="Press to select"
                            data-choice-selectable=""
                          >
                            Low
                          </div>
                          <div
                            id="choices--choices-priority-input-item-choice-2"
                            className="choices__item choices__item--choice choices__item--selectable"
                            role="option"
                            data-choice=""
                            data-id={2}
                            data-value="Medium"
                            data-select-text="Press to select"
                            data-choice-selectable=""
                          >
                            Medium
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3 mb-lg-0">
                    <label
                      htmlFor="choices-status-input"
                      className="form-label"
                    >
                      Status
                    </label>
                    <div
                      className="choices"
                      data-type="select-one"
                      tabIndex={0}
                      role="listbox"
                      aria-label="Status"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="choices__inner">
                        <select
                          className="form-select choices__input"
                          data-choices=""
                          data-choices-search-false=""
                          id="choices-status-input"
                          hidden=""
                          tabIndex={-1}
                          data-choice="active"
                        >
                          <option value="Inprogress" selected="">
                            Inprogress
                          </option>
                          <option value="Completed">Completed</option>
                        </select>
                        <div className="choices__list choices__list--single">
                          <div
                            className="choices__item choices__item--selectable"
                            data-item=""
                            data-id={1}
                            data-value="Inprogress"
                            aria-selected="true"
                            role="option"
                          >
                            Inprogress
                          </div>
                        </div>
                      </div>
                      <div
                        className="choices__list choices__list--dropdown"
                        aria-expanded="false"
                      >
                        <div className="choices__list" role="listbox">
                          <div
                            id="choices--choices-status-input-item-choice-2"
                            className="choices__item choices__item--choice choices__item--selectable is-highlighted"
                            role="option"
                            data-choice=""
                            data-id={2}
                            data-value="Completed"
                            data-select-text="Press to select"
                            data-choice-selectable=""
                            aria-selected="true"
                          >
                            Completed
                          </div>
                          <div
                            id="choices--choices-status-input-item-choice-1"
                            className="choices__item choices__item--choice is-selected choices__item--selectable"
                            role="option"
                            data-choice=""
                            data-id={1}
                            data-value="Inprogress"
                            data-select-text="Press to select"
                            data-choice-selectable=""
                          >
                            Inprogress
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <label
                      htmlFor="datepicker-deadline-input"
                      className="form-label"
                    >
                      Deadline
                    </label>
                    <input
                      type="text"
                      className="form-control flatpickr-input"
                      id="datepicker-deadline-input"
                      placeholder="Enter due date"
                      data-provider="flatpickr"
                      readOnly="readonly"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Attached files</h5>
            </div>
            <div className="card-body">
              <div>
                <p className="text-muted">Add Attached files here.</p>
                <div className="dropzone dz-clickable">
                  <div className="dz-message needsclick">
                    <div className="mb-3">
                      <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                    </div>
                    <h5>Drop files here or click to upload.</h5>
                  </div>
                </div>
                <ul className="list-unstyled mb-0" id="dropzone-preview"></ul>
                
              </div>
            </div>
          </div>
          {/* end card */}
          <div className="text-end mb-4">
            <button type="submit" className="btn btn-danger w-sm">
              Delete
            </button>
            <button type="submit" className="btn btn-secondary w-sm">
              Draft
            </button>
            <button type="submit" className="btn btn-success w-sm">
              Create
            </button>
          </div>
        </div>
        {/* end col */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Privacy</h5>
            </div>
            <div className="card-body">
              <div>
                <label
                  htmlFor="choices-privacy-status-input"
                  className="form-label"
                >
                  Status
                </label>
                <div
                  className="choices"
                  data-type="select-one"
                  tabIndex={0}
                  role="listbox"
                  aria-label="Status"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="choices__inner">
                    <select
                      className="form-select choices__input"
                      data-choices=""
                      data-choices-search-false=""
                      id="choices-privacy-status-input"
                      hidden=""
                      tabIndex={-1}
                      data-choice="active"
                    >
                      <option value="Private" selected="">
                        Private
                      </option>
                      <option value="Team">Team</option>
                      <option value="Public">Public</option>
                    </select>
                    <div className="choices__list choices__list--single">
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={1}
                        data-value="Private"
                        aria-selected="true"
                        role="option"
                      >
                        Private
                      </div>
                    </div>
                  </div>
                  <div
                    className="choices__list choices__list--dropdown"
                    aria-expanded="false"
                  >
                    <div className="choices__list" role="listbox">
                      <div
                        id="choices--choices-privacy-status-input-item-choice-1"
                        className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                        role="option"
                        data-choice=""
                        data-id={1}
                        data-value="Private"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                        aria-selected="true"
                      >
                        Private
                      </div>
                      <div
                        id="choices--choices-privacy-status-input-item-choice-3"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={3}
                        data-value="Public"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Public
                      </div>
                      <div
                        id="choices--choices-privacy-status-input-item-choice-2"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={2}
                        data-value="Team"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Team
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Tags</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label
                  htmlFor="choices-categories-input"
                  className="form-label"
                >
                  Categories
                </label>
                <div
                  className="choices"
                  data-type="select-one"
                  tabIndex={0}
                  role="listbox"
                  aria-label="Categories"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="choices__inner">
                    <select
                      className="form-select choices__input"
                      data-choices=""
                      data-choices-search-false=""
                      id="choices-categories-input"
                      hidden=""
                      tabIndex={-1}
                      data-choice="active"
                    >
                      <option value="Designing" selected="">
                        Designing
                      </option>
                      <option value="Development">Development</option>
                    </select>
                    <div className="choices__list choices__list--single">
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={1}
                        data-value="Designing"
                        aria-selected="true"
                        role="option"
                      >
                        Designing
                      </div>
                    </div>
                  </div>
                  <div
                    className="choices__list choices__list--dropdown"
                    aria-expanded="false"
                  >
                    <div className="choices__list" role="listbox">
                      <div
                        id="choices--choices-categories-input-item-choice-1"
                        className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                        role="option"
                        data-choice=""
                        data-id={1}
                        data-value="Designing"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                        aria-selected="true"
                      >
                        Designing
                      </div>
                      <div
                        id="choices--choices-categories-input-item-choice-2"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={2}
                        data-value="Development"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Development
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="choices-text-input" className="form-label">
                  Skills
                </label>
                <div className="choices" data-type="text">
                  <div className="choices__inner">
                    <input
                      className="form-control choices__input"
                      id="choices-text-input"
                      data-choices=""
                      data-choices-limit="Required Limit"
                      placeholder="Enter Skills"
                      type="text"
                      defaultValue="UI/UX, Figma, HTML, CSS, Javascript, C#, Nodejs"
                      hidden=""
                      tabIndex={-1}
                      data-choice="active"
                    />
                    <div className="choices__list choices__list--multiple">
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={1}
                        data-value="UI/UX"
                      >
                        UI/UX
                      </div>
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={2}
                        data-value=" Figma"
                      >
                        {" "}
                        Figma
                      </div>
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={3}
                        data-value=" HTML"
                      >
                        {" "}
                        HTML
                      </div>
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={4}
                        data-value=" CSS"
                      >
                        {" "}
                        CSS
                      </div>
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={5}
                        data-value=" Javascript"
                      >
                        {" "}
                        Javascript
                      </div>
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={6}
                        data-value=" C#"
                      >
                        {" "}
                        C#
                      </div>
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={7}
                        data-value=" Nodejs"
                      >
                        {" "}
                        Nodejs
                      </div>
                    </div>
                    <input
                      type="search"
                      className="choices__input choices__input--cloned"
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      role="textbox"
                      aria-autocomplete="list"
                      aria-label="Skills"
                      style={{ minWidth: "1ch", width: "1ch" }}
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
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end card body */}
          </div>
          {/* end card */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Members</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="choices-lead-input" className="form-label">
                  Team Lead
                </label>
                <div
                  className="choices"
                  data-type="select-one"
                  tabIndex={0}
                  role="listbox"
                  aria-label="Team Lead"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="choices__inner">
                    <select
                      className="form-select choices__input"
                      data-choices=""
                      data-choices-search-false=""
                      id="choices-lead-input"
                      hidden=""
                      tabIndex={-1}
                      data-choice="active"
                    >
                      <option value="Brent Gonzalez" selected="">
                        Brent Gonzalez
                      </option>
                      <option value="Darline Williams">Darline Williams</option>
                      <option value="Sylvia Wright">Sylvia Wright</option>
                      <option value="Ellen Smith">Ellen Smith</option>
                      <option value="Jeffrey Salazar">Jeffrey Salazar</option>
                      <option value="Mark Williams">Mark Williams</option>
                    </select>
                    <div className="choices__list choices__list--single">
                      <div
                        className="choices__item choices__item--selectable"
                        data-item=""
                        data-id={1}
                        data-value="Brent Gonzalez"
                        aria-selected="true"
                        role="option"
                      >
                        Brent Gonzalez
                      </div>
                    </div>
                  </div>
                  <div
                    className="choices__list choices__list--dropdown"
                    aria-expanded="false"
                  >
                    <div className="choices__list" role="listbox">
                      <div
                        id="choices--choices-lead-input-item-choice-1"
                        className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                        role="option"
                        data-choice=""
                        data-id={1}
                        data-value="Brent Gonzalez"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                        aria-selected="true"
                      >
                        Brent Gonzalez
                      </div>
                      <div
                        id="choices--choices-lead-input-item-choice-2"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={2}
                        data-value="Darline Williams"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Darline Williams
                      </div>
                      <div
                        id="choices--choices-lead-input-item-choice-4"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={4}
                        data-value="Ellen Smith"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Ellen Smith
                      </div>
                      <div
                        id="choices--choices-lead-input-item-choice-5"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={5}
                        data-value="Jeffrey Salazar"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Jeffrey Salazar
                      </div>
                      <div
                        id="choices--choices-lead-input-item-choice-6"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={6}
                        data-value="Mark Williams"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Mark Williams
                      </div>
                      <div
                        id="choices--choices-lead-input-item-choice-3"
                        className="choices__item choices__item--choice choices__item--selectable"
                        role="option"
                        data-choice=""
                        data-id={3}
                        data-value="Sylvia Wright"
                        data-select-text="Press to select"
                        data-choice-selectable=""
                      >
                        Sylvia Wright
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="form-label">Team Members</label>
                <div className="avatar-group">
                  <a
                    href="javascript: void(0);"
                    className="avatar-group-item material-shadow"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    aria-label="Brent Gonzalez"
                    data-bs-original-title="Brent Gonzalez"
                  >
                    <div className="avatar-xs">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="avatar-group-item material-shadow"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    data-bs-original-title="Sylvia Wright"
                  >
                    <div className="avatar-xs">
                      <div className="avatar-title rounded-circle bg-secondary">
                        S
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="avatar-group-item material-shadow"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    aria-label="Ellen Smith"
                    data-bs-original-title="Ellen Smith"
                  >
                    <div className="avatar-xs">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        alt=""
                        className="rounded-circle img-fluid"
                      />
                    </div>
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="avatar-group-item material-shadow"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    data-bs-original-title="Add Members"
                  >
                    <div
                      className="avatar-xs"
                      data-bs-toggle="modal"
                      data-bs-target="#inviteMembersModal"
                    >
                      <div className="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                        +
                      </div>
                    </div>
                  </a>
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
    {/* container-fluid */}
  </div>
  {/* End Page-content */}
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
  )
}

export default AddProject