import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
const Chat = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
              <div className="chat-leftsidebar minimal-border">
                <div className="px-4 pt-4 mb-3">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h5 className="mb-4">Chats</h5>
                    </div>
                    <div className="flex-shrink-0">
                      <div
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-placement="bottom"
                        aria-label="Add Contact"
                        data-bs-original-title="Add Contact"
                      >
                        {/* Button trigger modal */}
                        <button
                          type="button"
                          className="btn btn-soft-success btn-sm material-shadow-none"
                        >
                          <i className="ri-add-line align-bottom" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control bg-light border-light"
                      placeholder="Search here..."
                    />
                    <i className="ri-search-2-line search-icon" />
                  </div>
                </div>{" "}
                {/* .p-4 */}
                <ul
                  className="nav nav-tabs nav-tabs-custom nav-success nav-justified"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#chats"
                      role="tab"
                      aria-selected="true"
                    >
                      Chats
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#contacts"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
                <div className="tab-content text-muted">
                  <div className="tab-pane active" id="chats" role="tabpanel">
                    <div
                      className="chat-room-list pt-3 simplebar-scrollable-y"
                      data-simplebar="init"
                    >
                      <div
                        className="simplebar-wrapper"
                        style={{ margin: "-16px 0px 0px" }}
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
                                height: "auto",
                                overflow: "hidden scroll",
                              }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: "16px 0px 0px" }}
                              >
                                <div className="d-flex align-items-center px-4 mb-2">
                                  <div className="flex-grow-1">
                                    <h4 className="mb-0 fs-11 text-muted text-uppercase">
                                      Direct Messages
                                    </h4>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div
                                      data-bs-toggle="tooltip"
                                      data-bs-trigger="hover"
                                      data-bs-placement="bottom"
                                      aria-label="New Message"
                                      data-bs-original-title="New Message"
                                    >
                                      {/* Button trigger modal */}
                                      <button
                                        type="button"
                                        className="btn btn-soft-success btn-sm shadow-none material-shadow"
                                      >
                                        <i className="ri-add-line align-bottom" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-message-list">
                                  <ul
                                    className="list-unstyled chat-list chat-user-list"
                                    id="userList"
                                  >
                                    <li
                                      id="contact-id-1"
                                      data-name="direct-message"
                                      className="active"
                                    >
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-2.jpg"
                                                className="rounded-circle img-fluid userprofile"
                                                alt=""
                                              />
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Lisa Parker
                                            </p>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-2"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a
                                        href="javascript: void(0);"
                                        className="unread-msg-user"
                                      >
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-3.jpg"
                                                className="rounded-circle img-fluid userprofile"
                                                alt=""
                                              />
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Frank Thomas
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="ms-auto">
                                            <span className="badge bg-dark-subtle text-body rounded p-1">
                                              8
                                            </span>
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-3"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title rounded-circle bg-primary text-white fs-10">
                                                CT
                                              </div>
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Clifford Taylor
                                            </p>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-4"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-4.jpg"
                                                className="rounded-circle img-fluid userprofile"
                                                alt=""
                                              />
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Janette Caster
                                            </p>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-5"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a
                                        href="javascript: void(0);"
                                        className="unread-msg-user"
                                      >
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-5.jpg"
                                                className="rounded-circle img-fluid userprofile"
                                                alt=""
                                              />
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Sarah Beattie
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="ms-auto">
                                            <span className="badge bg-dark-subtle text-body rounded p-1">
                                              5
                                            </span>
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-6"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a
                                        href="javascript: void(0);"
                                        className="unread-msg-user"
                                      >
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-6.jpg"
                                                className="rounded-circle img-fluid userprofile"
                                                alt=""
                                              />
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Nellie Cornett
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="ms-auto">
                                            <span className="badge bg-dark-subtle text-body rounded p-1">
                                              2
                                            </span>
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-7"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title rounded-circle bg-primary text-white fs-10">
                                                CK
                                              </div>
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Chris Kiernan
                                            </p>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-8"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title rounded-circle bg-primary text-white fs-10">
                                                EE
                                              </div>
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Edith Evans
                                            </p>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li
                                      id="contact-id-9"
                                      data-name="direct-message"
                                      className=""
                                    >
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img away align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-7.jpg"
                                                className="rounded-circle img-fluid userprofile"
                                                alt=""
                                              />
                                              <span className="user-status" />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Joseph Siegel
                                            </p>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                  </ul>
                                </div>
                                <div className="d-flex align-items-center px-4 mt-4 pt-2 mb-2">
                                  <div className="flex-grow-1">
                                    <h4 className="mb-0 fs-11 text-muted text-uppercase">
                                      Channels
                                    </h4>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div
                                      data-bs-toggle="tooltip"
                                      data-bs-trigger="hover"
                                      data-bs-placement="bottom"
                                      aria-label="Create group"
                                      data-bs-original-title="Create group"
                                    >
                                      {/* Button trigger modal */}
                                      <button
                                        type="button"
                                        className="btn btn-soft-success btn-sm"
                                      >
                                        <i className="ri-add-line align-bottom" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="chat-message-list">
                                  <ul
                                    className="list-unstyled chat-list chat-user-list mb-0"
                                    id="channelList"
                                  >
                                    <li id="contact-id-10" data-name="channel">
                                      {" "}
                                      <a
                                        href="javascript: void(0);"
                                        className="unread-msg-user"
                                      >
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title bg-light rounded-circle text-body">
                                                #
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Landing Design
                                            </p>{" "}
                                          </div>{" "}
                                          <div>
                                            <div className="flex-shrink-0 ms-2">
                                              <span className="badge bg-dark-subtle text-body rounded p-1">
                                                7
                                              </span>
                                            </div>
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li id="contact-id-11" data-name="channel">
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title bg-light rounded-circle text-body">
                                                #
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              General
                                            </p>{" "}
                                          </div>{" "}
                                          <div />{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li id="contact-id-12" data-name="channel">
                                      {" "}
                                      <a
                                        href="javascript: void(0);"
                                        className="unread-msg-user"
                                      >
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title bg-light rounded-circle text-body">
                                                #
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Project Tasks
                                            </p>{" "}
                                          </div>{" "}
                                          <div>
                                            <div className="flex-shrink-0 ms-2">
                                              <span className="badge bg-dark-subtle text-body rounded p-1">
                                                2
                                              </span>
                                            </div>
                                          </div>{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li id="contact-id-13" data-name="channel">
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title bg-light rounded-circle text-body">
                                                #
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Meeting
                                            </p>{" "}
                                          </div>{" "}
                                          <div />{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                    <li id="contact-id-14" data-name="channel">
                                      {" "}
                                      <a href="javascript: void(0);">
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 chat-user-img align-self-center me-2 ms-0">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <div className="avatar-title bg-light rounded-circle text-body">
                                                #
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1 overflow-hidden">
                                            {" "}
                                            <p className="text-truncate mb-0">
                                              Reporting
                                            </p>{" "}
                                          </div>{" "}
                                          <div />{" "}
                                        </div>{" "}
                                      </a>{" "}
                                    </li>
                                  </ul>
                                </div>
                                {/* End chat-message-list */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: 300, height: 649 }}
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
                            height: 25,
                            display: "block",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="contacts" role="tabpanel">
                    <div className="chat-room-list pt-3" data-simplebar="init">
                      <div
                        className="simplebar-wrapper"
                        style={{ margin: "-16px 0px 0px" }}
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
                              style={{ height: "auto", overflow: "hidden" }}
                            >
                              <div
                                className="simplebar-content"
                                style={{ padding: "16px 0px 0px" }}
                              >
                                <div className="sort-contact">
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      A{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-A"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <span className="avatar-title rounded-circle bg-primary fs-10">
                                                AC
                                              </span>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Alice Cruickshank
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      B{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-B"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-4.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Barrett Brown
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      C{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-C"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <span className="avatar-title rounded-circle bg-primary fs-10">
                                                CK
                                              </span>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Chris Kiernan
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <span className="avatar-title rounded-circle bg-primary fs-10">
                                                CT
                                              </span>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Clifford Taylor
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      E{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-E"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <span className="avatar-title rounded-circle bg-primary fs-10">
                                                EE
                                              </span>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Edith Evans
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      F{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-F"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-3.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Frank Thomas
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      G{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-G"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <span className="avatar-title rounded-circle bg-primary fs-10">
                                                GB
                                              </span>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Gilbert Beer
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      J{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-J"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-4.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Janette Caster
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-7.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Joseph Siegel
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-1.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Justyn Wisoky
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      K{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-K"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-5.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Keaton King
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      L{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-L"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-2.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Lisa Parker
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      M{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-M"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <span className="avatar-title rounded-circle bg-primary fs-10">
                                                MM
                                              </span>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Marian Moen
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      N{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-N"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-6.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Nellie Cornett
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      R{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-R"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <span className="avatar-title rounded-circle bg-primary fs-10">
                                                RD
                                              </span>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Ronald Downey
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      S{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-S"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-5.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Sarah Beattie
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      V{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-V"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-10.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Victor Beahan
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-3">
                                    {" "}
                                    <div className="contact-list-title">
                                      W{" "}
                                    </div>{" "}
                                    <ul
                                      id="contact-sort-W"
                                      className="list-unstyled contact-list"
                                    >
                                      <li>
                                        {" "}
                                        <div className="d-flex align-items-center">
                                          {" "}
                                          <div className="flex-shrink-0 me-2">
                                            {" "}
                                            <div className="avatar-xxs">
                                              {" "}
                                              <img
                                                src="assets/images/users/avatar-2.jpg"
                                                className="img-fluid rounded-circle"
                                                alt=""
                                              />{" "}
                                            </div>{" "}
                                          </div>{" "}
                                          <div className="flex-grow-1">
                                            {" "}
                                            <p className="text-truncate contactlist-name mb-0">
                                              Wayne Runte
                                            </p>{" "}
                                          </div>{" "}
                                          <div className="flex-shrink-0">
                                            {" "}
                                            <div className="dropdown">
                                              {" "}
                                              <a
                                                href="#"
                                                className="text-muted"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                {" "}
                                                <i className="ri-more-2-fill" />{" "}
                                              </a>{" "}
                                              <div className="dropdown-menu dropdown-menu-end">
                                                {" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-pencil-line text-muted me-2 align-bottom" />
                                                  Edit
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-forbid-2-line text-muted me-2 align-bottom" />
                                                  Block
                                                </a>{" "}
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                >
                                                  <i className="ri-delete-bin-6-line text-muted me-2 align-bottom" />
                                                  Remove
                                                </a>{" "}
                                              </div>{" "}
                                            </div>{" "}
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: 0, height: 0 }}
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
                        style={{ visibility: "hidden" }}
                      >
                        <div
                          className="simplebar-scrollbar"
                          style={{ height: 0, display: "none" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end tab contact */}
              </div>
              {/* end chat leftsidebar */}
              {/* Start User chat */}
              <div className="user-chat w-100 overflow-hidden minimal-border">
                <div className="chat-content d-lg-flex">
                  {/* start chat conversation section */}
                  <div className="w-100 overflow-hidden position-relative">
                    {/* conversation user */}
                    <div className="position-relative">
                      <div
                        className="position-relative"
                        id="users-chat"
                        style={{ display: "block" }}
                      >
                        <div className="p-3 user-chat-topbar">
                          <div className="row align-items-center">
                            <div className="col-sm-4 col-8">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 d-block d-lg-none me-3">
                                  <a
                                    href="javascript: void(0);"
                                    className="user-chat-remove fs-18 p-1"
                                  >
                                    <i className="ri-arrow-left-s-line align-bottom" />
                                  </a>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        className="rounded-circle avatar-xs"
                                        alt=""
                                      />
                                      <span className="user-status" />
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                      <h5 className="text-truncate mb-0 fs-16">
                                        <a
                                          className="text-reset username"
                                          data-bs-toggle="offcanvas"
                                          href="#userProfileCanvasExample"
                                          aria-controls="userProfileCanvasExample"
                                        >
                                          Lisa Parker
                                        </a>
                                      </h5>
                                      <p className="text-truncate text-muted fs-14 mb-0 userStatus">
                                        <small>Online</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-8 col-4">
                              <ul className="list-inline user-chat-nav text-end mb-0">
                                <li className="list-inline-item m-0">
                                  <div className="dropdown">
                                    <button
                                      className="btn btn-ghost-secondary btn-icon material-shadow-none"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-search icon-sm"
                                      >
                                        <circle cx={11} cy={11} r={8} />
                                        <line
                                          x1={21}
                                          y1={21}
                                          x2="16.65"
                                          y2="16.65"
                                        />
                                      </svg>
                                    </button>
                                    <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                      <div className="p-2">
                                        <div className="search-box">
                                          <input
                                            type="text"
                                            className="form-control bg-light border-light"
                                            placeholder="Search here..."
                                            onkeyup="searchMessages()"
                                            id="searchMessage"
                                          />
                                          <i className="ri-search-2-line search-icon" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-inline-item d-none d-lg-inline-block m-0">
                                  <button
                                    type="button"
                                    className="btn btn-ghost-secondary btn-icon material-shadow-none"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#userProfileCanvasExample"
                                    aria-controls="userProfileCanvasExample"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-info icon-sm"
                                    >
                                      <circle cx={12} cy={12} r={10} />
                                      <line x1={12} y1={16} x2={12} y2={12} />
                                      <line x1={12} y1={8} x2="12.01" y2={8} />
                                    </svg>
                                  </button>
                                </li>
                                <li className="list-inline-item m-0">
                                  <div className="dropdown">
                                    <button
                                      className="btn btn-ghost-secondary btn-icon material-shadow-none"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-more-vertical icon-sm"
                                      >
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                      </svg>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item d-block d-lg-none user-profile-show"
                                        href="#"
                                      >
                                        <i className="ri-user-2-fill align-bottom text-muted me-2" />{" "}
                                        View Profile
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="ri-inbox-archive-line align-bottom text-muted me-2" />{" "}
                                        Archive
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="ri-mic-off-line align-bottom text-muted me-2" />{" "}
                                        Muted
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="ri-delete-bin-5-line align-bottom text-muted me-2" />{" "}
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* end chat user head */}
                        <div
                          className="chat-conversation p-3 p-lg-4 simplebar-scrollable-y"
                          id="chat-conversation"
                          data-simplebar="init"
                        >
                          <div
                            className="simplebar-wrapper"
                            style={{ margin: "-24px" }}
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
                                    height: "auto",
                                    overflow: "hidden scroll",
                                  }}
                                >
                                  <div
                                    className="simplebar-content"
                                    style={{ padding: 24 }}
                                  >
                                    <div id="elmLoader" />
                                    <ul
                                      className="list-unstyled chat-conversation-list"
                                      id="users-conversation"
                                    >
                                      <li className="chat-list left" id={1}>
                                        {" "}
                                        <div className="conversation-list">
                                          <div className="chat-avatar">
                                            <img
                                              src="assets/images/users/avatar-2.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="user-chat-content">
                                            <div className="ctext-wrap">
                                              <div
                                                className="ctext-wrap-content"
                                                id={1}
                                              >
                                                <p className="mb-0 ctext-content">
                                                  Good morning 😊
                                                </p>
                                              </div>
                                              <div className="dropdown align-self-start message-box-drop">
                                                {" "}
                                                <a
                                                  className="dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  {" "}
                                                  <i className="ri-more-2-fill" />{" "}
                                                </a>{" "}
                                                <div className="dropdown-menu">
                                                  {" "}
                                                  <a
                                                    className="dropdown-item reply-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-reply-line me-2 text-muted align-bottom" />
                                                    Reply
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-share-line me-2 text-muted align-bottom" />
                                                    Forward
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item copy-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-file-copy-line me-2 text-muted align-bottom" />
                                                    Copy
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-bookmark-line me-2 text-muted align-bottom" />
                                                    Bookmark
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item delete-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                                                    Delete
                                                  </a>{" "}
                                                </div>{" "}
                                              </div>
                                            </div>
                                            <div className="conversation-name">
                                              <span className="d-none name">
                                                Lisa Parker
                                              </span>
                                              <small className="text-muted time">
                                                09:07 am
                                              </small>{" "}
                                              <span className="text-success check-message-icon">
                                                <i className="bx bx-check-double" />
                                              </span>
                                            </div>
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                      <li className="chat-list right" id={2}>
                                        {" "}
                                        <div className="conversation-list">
                                          <div className="user-chat-content">
                                            <div className="ctext-wrap">
                                              <div
                                                className="ctext-wrap-content"
                                                id={2}
                                              >
                                                <p className="mb-0 ctext-content">
                                                  Good morning, How are you?
                                                  What about our next meeting?
                                                </p>
                                              </div>
                                              <div className="dropdown align-self-start message-box-drop">
                                                {" "}
                                                <a
                                                  className="dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  {" "}
                                                  <i className="ri-more-2-fill" />{" "}
                                                </a>{" "}
                                                <div className="dropdown-menu">
                                                  {" "}
                                                  <a
                                                    className="dropdown-item reply-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-reply-line me-2 text-muted align-bottom" />
                                                    Reply
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-share-line me-2 text-muted align-bottom" />
                                                    Forward
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item copy-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-file-copy-line me-2 text-muted align-bottom" />
                                                    Copy
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-bookmark-line me-2 text-muted align-bottom" />
                                                    Bookmark
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item delete-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                                                    Delete
                                                  </a>{" "}
                                                </div>{" "}
                                              </div>
                                            </div>
                                            <div className="conversation-name">
                                              <span className="d-none name">
                                                Frank Thomas
                                              </span>
                                              <small className="text-muted time">
                                                09:08 am
                                              </small>{" "}
                                              <span className="text-success check-message-icon">
                                                <i className="bx bx-check-double" />
                                              </span>
                                            </div>
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                      <li className="chat-list left" id={3}>
                                        {" "}
                                        <div className="conversation-list">
                                          <div className="chat-avatar">
                                            <img
                                              src="assets/images/users/avatar-2.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="user-chat-content">
                                            <div className="ctext-wrap">
                                              <div
                                                className="ctext-wrap-content"
                                                id={3}
                                              >
                                                <p className="mb-0 ctext-content">
                                                  Yeah everything is fine. Our
                                                  next meeting tomorrow at 10.00
                                                  AM
                                                </p>
                                              </div>
                                              <div className="dropdown align-self-start message-box-drop">
                                                {" "}
                                                <a
                                                  className="dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  {" "}
                                                  <i className="ri-more-2-fill" />{" "}
                                                </a>{" "}
                                                <div className="dropdown-menu">
                                                  {" "}
                                                  <a
                                                    className="dropdown-item reply-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-reply-line me-2 text-muted align-bottom" />
                                                    Reply
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-share-line me-2 text-muted align-bottom" />
                                                    Forward
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item copy-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-file-copy-line me-2 text-muted align-bottom" />
                                                    Copy
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-bookmark-line me-2 text-muted align-bottom" />
                                                    Bookmark
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item delete-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                                                    Delete
                                                  </a>{" "}
                                                </div>{" "}
                                              </div>
                                            </div>
                                            <div className="ctext-wrap">
                                              <div
                                                className="ctext-wrap-content"
                                                id={4}
                                              >
                                                <p className="mb-0 ctext-content">
                                                  Hey, I'm going to meet a
                                                  friend of mine at the
                                                  department store. I have to
                                                  buy some presents for my
                                                  parents 🎁.
                                                </p>
                                              </div>
                                              <div className="dropdown align-self-start message-box-drop">
                                                {" "}
                                                <a
                                                  className="dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  {" "}
                                                  <i className="ri-more-2-fill" />{" "}
                                                </a>{" "}
                                                <div className="dropdown-menu">
                                                  {" "}
                                                  <a
                                                    className="dropdown-item reply-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-reply-line me-2 text-muted align-bottom" />
                                                    Reply
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-share-line me-2 text-muted align-bottom" />
                                                    Forward
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item copy-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-file-copy-line me-2 text-muted align-bottom" />
                                                    Copy
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-bookmark-line me-2 text-muted align-bottom" />
                                                    Bookmark
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item delete-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                                                    Delete
                                                  </a>{" "}
                                                </div>{" "}
                                              </div>
                                            </div>
                                            <div className="conversation-name">
                                              <span className="d-none name">
                                                Lisa Parker
                                              </span>
                                              <small className="text-muted time">
                                                09:10 am
                                              </small>{" "}
                                              <span className="text-success check-message-icon">
                                                <i className="bx bx-check-double" />
                                              </span>
                                            </div>
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                      <li className="chat-list right" id={5}>
                                        {" "}
                                        <div className="conversation-list">
                                          <div className="user-chat-content">
                                            <div className="ctext-wrap">
                                              <div
                                                className="ctext-wrap-content"
                                                id={5}
                                              >
                                                <p className="mb-0 ctext-content">
                                                  Wow that's great
                                                </p>
                                              </div>
                                              <div className="dropdown align-self-start message-box-drop">
                                                {" "}
                                                <a
                                                  className="dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-haspopup="true"
                                                  aria-expanded="false"
                                                >
                                                  {" "}
                                                  <i className="ri-more-2-fill" />{" "}
                                                </a>{" "}
                                                <div className="dropdown-menu">
                                                  {" "}
                                                  <a
                                                    className="dropdown-item reply-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-reply-line me-2 text-muted align-bottom" />
                                                    Reply
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-share-line me-2 text-muted align-bottom" />
                                                    Forward
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item copy-message"
                                                    href="#"
                                                  >
                                                    <i className="ri-file-copy-line me-2 text-muted align-bottom" />
                                                    Copy
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-bookmark-line me-2 text-muted align-bottom" />
                                                    Bookmark
                                                  </a>{" "}
                                                  <a
                                                    className="dropdown-item delete-item"
                                                    href="#"
                                                  >
                                                    <i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                                                    Delete
                                                  </a>{" "}
                                                </div>{" "}
                                              </div>
                                            </div>
                                            <div className="conversation-name">
                                              <span className="d-none name">
                                                Frank Thomas
                                              </span>
                                              <small className="text-muted time">
                                                09:30 am
                                              </small>{" "}
                                              <span className="text-success check-message-icon">
                                                <i className="bx bx-check-double" />
                                              </span>
                                            </div>
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                      <li className="chat-list left" id={6}>
                                        {" "}
                                        <div className="conversation-list">
                                          <div className="chat-avatar">
                                            <img
                                              src="assets/images/users/avatar-2.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="user-chat-content">
                                            <div className="ctext-wrap">
                                              <div className="message-img mb-0">
                                                <div className="message-img-list">
                                                  {" "}
                                                  <div>
                                                    {" "}
                                                    <a
                                                      className="popup-img d-inline-block"
                                                      href="assets/images/small/img-1.jpg"
                                                    >
                                                      {" "}
                                                      <img
                                                        src="assets/images/small/img-1.jpg"
                                                        alt=""
                                                        className="rounded border"
                                                      />{" "}
                                                    </a>{" "}
                                                  </div>{" "}
                                                  <div className="message-img-link">
                                                    {" "}
                                                    <ul className="list-inline mb-0">
                                                      {" "}
                                                      <li className="list-inline-item dropdown">
                                                        {" "}
                                                        <a
                                                          className="dropdown-toggle"
                                                          href="#"
                                                          role="button"
                                                          data-bs-toggle="dropdown"
                                                          aria-haspopup="true"
                                                          aria-expanded="false"
                                                        >
                                                          {" "}
                                                          <i className="ri-more-fill" />{" "}
                                                        </a>{" "}
                                                        <div className="dropdown-menu">
                                                          {" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="assets/images/small/img-1.jpg"
                                                            download=""
                                                          >
                                                            <i className="ri-download-2-line me-2 text-muted align-bottom" />
                                                            Download
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="#"
                                                          >
                                                            <i className="ri-reply-line me-2 text-muted align-bottom" />
                                                            Reply
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="#"
                                                          >
                                                            <i className="ri-share-line me-2 text-muted align-bottom" />
                                                            Forward
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="#"
                                                          >
                                                            <i className="ri-bookmark-line me-2 text-muted align-bottom" />
                                                            Bookmark
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item delete-image"
                                                            href="#"
                                                          >
                                                            <i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                                                            Delete
                                                          </a>{" "}
                                                        </div>{" "}
                                                      </li>{" "}
                                                    </ul>{" "}
                                                  </div>{" "}
                                                </div>
                                                <div className="message-img-list">
                                                  {" "}
                                                  <div>
                                                    {" "}
                                                    <a
                                                      className="popup-img d-inline-block"
                                                      href="assets/images/small/img-2.jpg"
                                                    >
                                                      {" "}
                                                      <img
                                                        src="assets/images/small/img-2.jpg"
                                                        alt=""
                                                        className="rounded border"
                                                      />{" "}
                                                    </a>{" "}
                                                  </div>{" "}
                                                  <div className="message-img-link">
                                                    {" "}
                                                    <ul className="list-inline mb-0">
                                                      {" "}
                                                      <li className="list-inline-item dropdown">
                                                        {" "}
                                                        <a
                                                          className="dropdown-toggle"
                                                          href="#"
                                                          role="button"
                                                          data-bs-toggle="dropdown"
                                                          aria-haspopup="true"
                                                          aria-expanded="false"
                                                        >
                                                          {" "}
                                                          <i className="ri-more-fill" />{" "}
                                                        </a>{" "}
                                                        <div className="dropdown-menu">
                                                          {" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="assets/images/small/img-2.jpg"
                                                            download=""
                                                          >
                                                            <i className="ri-download-2-line me-2 text-muted align-bottom" />
                                                            Download
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="#"
                                                          >
                                                            <i className="ri-reply-line me-2 text-muted align-bottom" />
                                                            Reply
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="#"
                                                          >
                                                            <i className="ri-share-line me-2 text-muted align-bottom" />
                                                            Forward
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item"
                                                            href="#"
                                                          >
                                                            <i className="ri-bookmark-line me-2 text-muted align-bottom" />
                                                            Bookmark
                                                          </a>{" "}
                                                          <a
                                                            className="dropdown-item delete-image"
                                                            href="#"
                                                          >
                                                            <i className="ri-delete-bin-5-line me-2 text-muted align-bottom" />
                                                            Delete
                                                          </a>{" "}
                                                        </div>{" "}
                                                      </li>{" "}
                                                    </ul>{" "}
                                                  </div>{" "}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="conversation-name">
                                              <span className="d-none name">
                                                Lisa Parker
                                              </span>
                                              <small className="text-muted time">
                                                10:15 am
                                              </small>{" "}
                                              <span className="text-success check-message-icon">
                                                <i className="bx bx-check-double" />
                                              </span>
                                            </div>
                                          </div>{" "}
                                        </div>{" "}
                                      </li>
                                    </ul>
                                    {/* end chat-conversation-list */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="simplebar-placeholder"
                              style={{ width: 701, height: 642 }}
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
                                height: 25,
                                display: "block",
                                transform: "translate3d(0px, 17px, 0px)",
                              }}
                            />
                          </div>
                        </div>
                        <div
                          className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show "
                          id="copyClipBoard"
                          role="alert"
                        >
                          Message copied
                        </div>
                      </div>
                      <div
                        className="position-relative"
                        id="channel-chat"
                        style={{ display: "none" }}
                      >
                        <div className="p-3 user-chat-topbar">
                          <div className="row align-items-center">
                            <div className="col-sm-4 col-8">
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 d-block d-lg-none me-3">
                                  <a
                                    href="javascript: void(0);"
                                    className="user-chat-remove fs-18 p-1"
                                  >
                                    <i className="ri-arrow-left-s-line align-bottom" />
                                  </a>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        className="rounded-circle avatar-xs"
                                        alt=""
                                      />
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                      <h5 className="text-truncate mb-0 fs-16">
                                        <a
                                          className="text-reset username"
                                          data-bs-toggle="offcanvas"
                                          href="#userProfileCanvasExample"
                                          aria-controls="userProfileCanvasExample"
                                        >
                                          Lisa Parker
                                        </a>
                                      </h5>
                                      <p className="text-truncate text-muted fs-14 mb-0 userStatus">
                                        <small>24 Members</small>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-8 col-4">
                              <ul className="list-inline user-chat-nav text-end mb-0">
                                <li className="list-inline-item m-0">
                                  <div className="dropdown">
                                    <button
                                      className="btn btn-ghost-secondary btn-icon"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-search icon-sm"
                                      >
                                        <circle cx={11} cy={11} r={8} />
                                        <line
                                          x1={21}
                                          y1={21}
                                          x2="16.65"
                                          y2="16.65"
                                        />
                                      </svg>
                                    </button>
                                    <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                      <div className="p-2">
                                        <div className="search-box">
                                          <input
                                            type="text"
                                            className="form-control bg-light border-light"
                                            placeholder="Search here..."
                                            onkeyup="searchMessages()"
                                            id="searchMessage"
                                          />
                                          <i className="ri-search-2-line search-icon" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="list-inline-item d-none d-lg-inline-block m-0">
                                  <button
                                    type="button"
                                    className="btn btn-ghost-secondary btn-icon"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#userProfileCanvasExample"
                                    aria-controls="userProfileCanvasExample"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="feather feather-info icon-sm"
                                    >
                                      <circle cx={12} cy={12} r={10} />
                                      <line x1={12} y1={16} x2={12} y2={12} />
                                      <line x1={12} y1={8} x2="12.01" y2={8} />
                                    </svg>
                                  </button>
                                </li>
                                <li className="list-inline-item m-0">
                                  <div className="dropdown">
                                    <button
                                      className="btn btn-ghost-secondary btn-icon"
                                      type="button"
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-more-vertical icon-sm"
                                      >
                                        <circle cx={12} cy={12} r={1} />
                                        <circle cx={12} cy={5} r={1} />
                                        <circle cx={12} cy={19} r={1} />
                                      </svg>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a
                                        className="dropdown-item d-block d-lg-none user-profile-show"
                                        href="#"
                                      >
                                        <i className="ri-user-2-fill align-bottom text-muted me-2" />{" "}
                                        View Profile
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="ri-inbox-archive-line align-bottom text-muted me-2" />{" "}
                                        Archive
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="ri-mic-off-line align-bottom text-muted me-2" />{" "}
                                        Muted
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        <i className="ri-delete-bin-5-line align-bottom text-muted me-2" />{" "}
                                        Delete
                                      </a>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        {/* end chat user head */}
                        <div
                          className="chat-conversation p-3 p-lg-4"
                          id="chat-conversation"
                          data-simplebar="init"
                        >
                          <div
                            className="simplebar-wrapper"
                            style={{ margin: "-24px" }}
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
                                  style={{ height: "auto", overflow: "hidden" }}
                                >
                                  <div
                                    className="simplebar-content"
                                    style={{ padding: 24 }}
                                  >
                                    <ul
                                      className="list-unstyled chat-conversation-list"
                                      id="channel-conversation"
                                    ></ul>
                                    {/* end chat-conversation-list */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="simplebar-placeholder"
                              style={{ width: 0, height: 0 }}
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
                            style={{ visibility: "hidden" }}
                          >
                            <div
                              className="simplebar-scrollbar"
                              style={{ height: 0, display: "none" }}
                            />
                          </div>
                        </div>
                        <div
                          className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show "
                          id="copyClipBoardChannel"
                          role="alert"
                        >
                          Message copied
                        </div>
                      </div>
                      {/* end chat-conversation */}
                      <div className="chat-input-section p-3 p-lg-4">
                        <form id="chatinput-form" encType="multipart/form-data">
                          <div className="row g-0 align-items-center">
                            <div className="col-auto">
                              <div className="chat-input-links me-2">
                                <div className="links-list-item">
                                  <button
                                    type="button"
                                    className="btn btn-link text-decoration-none emoji-btn"
                                    id="emoji-btn"
                                  >
                                    <i className="bx bx-smile align-middle" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="chat-input-feedback">
                                Please Enter a Message
                              </div>
                              <input
                                type="text"
                                className="form-control chat-input bg-light border-light"
                                id="chat-input"
                                placeholder="Type your message..."
                                autoComplete="off"
                              />
                            </div>
                            <div className="col-auto">
                              <div className="chat-input-links ms-2">
                                <div className="links-list-item">
                                  <button
                                    type="submit"
                                    className="btn btn-success chat-send waves-effect waves-light"
                                  >
                                    <i className="ri-send-plane-2-fill align-bottom" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="replyCard">
                        <div className="card mb-0">
                          <div className="card-body py-3">
                            <div className="replymessage-block mb-0 d-flex align-items-start">
                              <div className="flex-grow-1">
                                <h5 className="conversation-name" />
                                <p className="mb-0" />
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  id="close_toggle"
                                  className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                                >
                                  <i className="bx bx-x align-middle" />
                                </button>
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
            {/* end chat-wrapper */}
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
    </div>
  );
};

export default Chat;
