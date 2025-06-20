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

                                    <li class="nav-item">
                                      <a
                                        class="nav-link menu-link collapsed active"
                                        href="#sidebarEcommerce"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="sidebarEcommerce"
                                      >
                                        <i class="ri-dashboard-2-line"></i>{" "}
                                        <span data-key="t-dashboards">
                                          Ecommerce
                                        </span>
                                      </a>
                                      <div
                                        class="collapse menu-dropdown show"
                                        id="sidebarEcommerce"
                                      >
                                        <ul class="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link "
                                              onClick={() =>
                                                navigate("/list-customer")
                                              }
                                            >
                                              <span data-key="t-apps">
                                                Customer
                                              </span>
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link"
                                              onClick={() =>
                                                navigate("/list-category")
                                              }
                                            >
                                              <span data-key="t-layouts">
                                                Category
                                              </span>{" "}
                                            </a>
                                          </li>

                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link "
                                              onClick={() =>
                                                navigate("/list-product")
                                              }
                                            >
                                              <span data-key="t-apps">
                                                Products
                                              </span>
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link "
                                              onClick={() =>
                                                navigate("/list-quotation")
                                              }
                                            >
                                              <span data-key="t-layouts">
                                                Quotation
                                              </span>{" "}
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link"
                                              onClick={() =>
                                                navigate("/inventory-list")
                                              }
                                            >
                                              <span data-key="t-apps">
                                                Inventory
                                              </span>
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link "
                                              onClick={() =>
                                                navigate("/list-invoice")
                                              }
                                            >
                                              <span data-key="t-apps">
                                                Invoice
                                              </span>
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link"
                                              onClick={() =>
                                                navigate("/lead-list")
                                              }
                                            >
                                              <span data-key="t-layouts">
                                                Lead
                                              </span>{" "}
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link collapsed"
                                              onClick={() =>
                                                navigate("/inquiry-list")
                                              }
                                            >
                                              <span data-key="t-apps">
                                                Inquiry
                                              </span>
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link "
                                              onClick={() =>
                                                navigate("/transportation")
                                              }
                                            >
                                              <span data-key="t-apps">
                                                Transportation
                                              </span>
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              className="nav-link menu-link "
                                              onClick={() =>
                                                navigate("/all-order")
                                              }
                                            >
                                              <span data-key="t-layouts">
                                                Orders
                                              </span>{" "}
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() =>
                                          navigate("/list-company")
                                        }
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Company</span>
                                      </a>
                                    </li>

                                    {/* Contact */}

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() =>
                                          navigate("/contact-list")
                                        }
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Contacts</span>
                                      </a>
                                    </li>
                                    {/* Contact */}

                                    {/* Accounts */}
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() =>
                                          navigate("/accounts-details")
                                        }
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Account</span>
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() => navigate("/chat")}
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">Chat</span>
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() =>
                                          navigate("/dashboard-employee")
                                        }
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Employee</span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() =>
                                          navigate("/list-machine")
                                        }
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Machine</span>
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link"
                                        onClick={() => navigate("/calendar")}
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Calendar</span>
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link"
                                        onClick={() =>
                                          navigate("/login-activity-list")
                                        }
                                      >
                                        <i className="ri-apps-2-line" />{" "}
                                        <span data-key="t-apps">
                                          Login Activity
                                        </span>
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() =>
                                          navigate("/project-list")
                                        }
                                      >
                                        <i className="ri-apps-2-line" />
                                        <span data-key="t-apps">Projects</span>
                                      </a>
                                    </li>

                                  
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() => navigate("/list-vendor")}
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">Vendor</span>{" "}
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() => navigate("/task-list")}
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">Task</span>{" "}
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link"
                                        onClick={() =>
                                          navigate("/file-manager")
                                        }
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          File Manager
                                        </span>{" "}
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link "
                                        onClick={() =>
                                          navigate("/support-list")
                                        }
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Support
                                        </span>{" "}
                                      </a>
                                    </li>

                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link"
                                        onClick={() =>
                                          navigate("/Graphic-list")
                                        }
                                      >
                                        <i className="ri-layout-3-line" />{" "}
                                        <span data-key="t-layouts">
                                          Graphics
                                        </span>{" "}
                                      </a>
                                    </li>
                                    {/* end Dashboard Menu */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="simplebar-placeholder"
                              style={{ width: 249, height: 1160 }}
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
