import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allPermittedPages } from "../Redux/crmSlices/sidebarSlice/SidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    dispatch(allPermittedPages());
  }, []);

  return (
    <>
      <div>
        <div className="app-menu navbar-menu">
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt="" height={17} />
              </span>
            </a>
            {/* Light Logo*/}
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="" height={22} />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-light.png" alt="" height={17} />
              </span>
            </a>
            <button
              type="button"
              className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
              id="vertical-hover"
            >
              <i className="ri-record-circle-line" />
            </button>
          </div>
          <div
            id="scrollbar"
            data-simplebar="init"
            className="h-100 simplebar-scrollable-y"
          >
            <div className="simplebar-wrapper" style={{ margin: 0 }}>
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
                    style={{ height: "100%", overflow: "hidden scroll" }}
                  >
                    <div className="simplebar-content" style={{ padding: 0 }}>
                      <div className="container-fluid">
                        <div id="two-column-menu"></div>
                        <ul
                          className="navbar-nav"
                          id="navbar-nav"
                          data-simplebar="init"
                        >
                          <div
                            className="simplebar-wrapper"
                            style={{ margin: 0 }}
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
                                    style={{ padding: 0 }}
                                  >
                                    <li className="menu-title">
                                      <span data-key="t-menu">Menu</span>
                                    </li>
                                    <li class="nav-item">
                                      <a
                                        className="nav-link menu-link"
                                        onClick={() => navigate("/dashboard")}
                                        style={{ cursor: "pointer" }}
                                      >
                                        <i class="fa fa-tachometer"></i>
                                        <span>Dashboard</span>
                                        <span class="pull-right-container"></span>
                                      </a>
                                    </li>
                                    {/* end Dashboard Menu */}

                                 


                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Company"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Company</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Company"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-company")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-company")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    {/* Contact */}

                                      <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#contacts"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Contacts</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="contacts"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/contact-list")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                            Contacts
                                            </a>
                                          </li>
                                       
                                        </ul>
                                      </div>
                                    </li>
                                    {/* Contact */}

                                    {/* Accounts */}
 <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#account"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Account</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="account"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/accounts-details")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                          Accounts Details
                                            </a>
                                          </li>
                                      
                                        </ul>
                                      </div>
                                    </li>
                                 

                                    {/* Accounts */}
                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#plant"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Plant</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="plant"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-plant")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-plant")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li> */}

                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Unit"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Unit</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Unit"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-unit")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-unit")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li> */}

                                    {/* Chat */}
                                       {/* Chat */}

                                      <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#chat"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Chat</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="chat"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/chat-list")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                             Chat List
                                            </a>
                                          </li>
                                        
                                        </ul>
                                      </div>
                                    </li>

                                    {/* Chat  */}

                                    {/* Chat */}
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Customer"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Customer</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Customer"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-customer")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-customer")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        data-bs-toggle="collapse"
                                        href="#employee"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Employee</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="employee"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-employee")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-employee")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        data-bs-toggle="collapse"
                                        href="#calendar"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Calendar</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="calendar"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/calendar")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#LoginActivity"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">
                                          Login Activity
                                        </span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="LoginActivity"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/login-activity-list")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Category"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Category
                                        </span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Category"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-category")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Add Category
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-category")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Category List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Products"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Products</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Products"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              className="nav-link collapsed cursor-pointer"
                                              onClick={() =>
                                                navigate("/add-product")
                                              }
                                            >
                                              Add Product
                                            </a>
                                            <div
                                              className="collapse menu-dropdown"
                                              id="sidebarCalendar"
                                            >
                                              <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                  <a
                                                    onClick={() =>
                                                      navigate("/list-product")
                                                    }
                                                    className="nav-link cursor-pointer"
                                                  >
                                                    List Products
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-product")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Product List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Order"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">Orders</span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Order"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-order")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Add Order
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/all-order")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              All Orders
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Vendor"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">Vendor</span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Vendor"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-vendor")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                            List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Quotation"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Quotation
                                        </span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Quotation"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/create-quotation")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-horizontal"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-quotation")
                                              }
                                              className="nav-link"
                                              data-key="t-detached"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Invoice"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Invoice</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Invoice"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/create-invoice")
                                              }
                                              className="nav-link"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-invoice")
                                              }
                                              className="nav-link"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Lead"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">Lead</span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Lead"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                             onClick={() =>
                                              navigate("/list-lead")
                                            }
                                              className="nav-link"
                                              data-key="t-detached"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li> */}

                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Order"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Order</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Order"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              href="#sidebarCalendar"
                                              className="nav-link collapsed"
                                              data-bs-toggle="collapse"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="sidebarCalendar"
                                              data-key="t-calender"
                                            >
                                              Add Order
                                            </a>
                                            <div
                                              className="collapse menu-dropdown"
                                              id="sidebarCalendar"
                                            >
                                              <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                  <a
                                                    href="apps-calendar.html"
                                                    className="nav-link"
                                                    data-key="t-main-calender"
                                                  >
                                                    Order List
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              
                                              className="nav-link"
                                              data-key="t-chat"
                                            >
                                              Customer List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li> */}
                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Support"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Support
                                        </span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Support"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              href="layouts-horizontal.html"
                                              target="_blank"
                                              className="nav-link"
                                              data-key="t-horizontal"
                                            >
                                              Add Support
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              href="layouts-detached.html"
                                              target="_blank"
                                              className="nav-link"
                                              data-key="t-detached"
                                            >
                                              Support List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li> */}

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Lead"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">Lead</span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Lead"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-lead")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Add Lead
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/lead-list")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Leads List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Inventory"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Inventory</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Inventory"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-inventory")
                                              }
                                              className="nav-link collapsed"
                                              role="button"
                                              data-key="t-calender"
                                            >
                                              Add Inventory
                                            </a>
                                            <div
                                              className="collapse menu-dropdown"
                                              id="sidebarCalendar"
                                            >
                                              <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                  <a
                                                    className="nav-link"
                                                    data-key="t-main-calender"
                                                  >
                                                    Inventory List
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/inventory-list")
                                              }
                                              className="nav-link"
                                              data-key="t-chat"
                                            > 
                                              Customer List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Task"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">Task</span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Task"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-task")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-horizontal"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/task-list")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-detached"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Inquiry"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Inquiry</span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Inquiry"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-inquiry")
                                              }
                                              className="nav-link "
                                              data-key="t-calender"
                                            >
                                              Add Inquiry
                                            </a>
                                            <div
                                              className="collapse menu-dropdown"
                                              id="sidebarCalendar"
                                            >
                                              <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                  <a
                                                    onClick={() =>
                                                      navigate("/inquiry-list")
                                                    }
                                                    className="nav-link cursor-pointer"
                                                    data-key="t-main-calender"
                                                  >
                                                    Inquiry List
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/inquiry-list")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              Inquiry List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    
                                    {/* <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Account"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Account
                                        </span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Account"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-account")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-horizontal"
                                            >
                                              Add Account
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/account-list")
                                              }
                                              
                                              className="nav-link cursor-pointer"
                                              data-key="t-detached"
                                            >
                                              Account List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li> */}

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Support"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Support
                                        </span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Support"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-support")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Add Support
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/support-list")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Support List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Manufacturing"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarApps"
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">
                                          Manufacturing
                                        </span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Manufacturing"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-manufacturing")
                                              }
                                              className="nav-link collapsed"
                                              data-bs-toggle="collapse"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="sidebarCalendar"
                                              data-key="t-calender"
                                            >
                                              Add
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/manufacturing-list")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed"
                                        href="#Graphics"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="sidebarLayouts"
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Graphics
                                        </span>{" "}
                                      </a>
                                      <div
                                        className="collapse menu-dropdown"
                                        id="Graphics"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/add-graphics")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Add Graphics
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/Graphic-list")
                                              }
                                              className="nav-link cursor-pointer"
                                            >
                                              Graphics List
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    {/* end Dashboard Menu */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="simplebar-placeholder"
                              style={{ width: 249, height: 1123 }}
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
                          <div className="simplebar-track simplebar-horizontal">
                            <div className="simplebar-scrollbar" />
                          </div>
                          <div className="simplebar-track simplebar-vertical">
                            <div className="simplebar-scrollbar" />
                          </div>
                          <div className="simplebar-track simplebar-horizontal">
                            <div className="simplebar-scrollbar" />
                          </div>
                          <div className="simplebar-track simplebar-vertical">
                            <div className="simplebar-scrollbar" />
                          </div>
                          <div className="simplebar-track simplebar-horizontal">
                            <div className="simplebar-scrollbar" />
                          </div>
                          <div className="simplebar-track simplebar-vertical">
                            <div className="simplebar-scrollbar" />
                          </div>
                          <div className="simplebar-track simplebar-horizontal">
                            <div className="simplebar-scrollbar" />
                          </div>
                          <div className="simplebar-track simplebar-vertical">
                            <div className="simplebar-scrollbar" />
                          </div>
                        </ul>
                      </div>
                      {/* Sidebar */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: 249, height: 1123 }}
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
          <div className="sidebar-background" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
