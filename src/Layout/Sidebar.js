import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <aside class="main-sidebar">
      //    <div class="sidebar">
      //       <ul class="sidebar-menu">
      //          <li class="active">
      //             <a onClick={() => navigate("/dashboard")} style={{cursor:"pointer"}}>
      //                <i class="fa fa-tachometer"></i>
      //                <span>Dashboard</span>
      //                <span class="pull-right-container">
      //                </span>
      //             </a>
      //          </li>
      //          <li class="cursor-pointer treeview">
      //             <a >
      //                <i class="fa fa-user"></i><span>Employee</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/add-employee")} style={{cursor:"pointer"}}>Add Employee</a></li>
      //                <li><a onClick={() => navigate("/employe-list")} style={{cursor:"pointer"}}> Employee List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-users"></i><span>Customers</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/add-customer")} style={{cursor:"pointer"}}>Add Customer</a></li>
      //                <li><a onClick={() => navigate("/list-customer")} style={{cursor:"pointer"}}>List</a></li>
      //                <li><a >Groups</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-list"></i><span>Category</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/add-category")} style={{cursor:"pointer"}}>Add Category</a></li>
      //                <li><a onClick={() => navigate("/list-category")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-shopping-basket"></i><span>Products</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/add-product")} style={{cursor:"pointer"}}>Add Product</a></li>
      //                <li><a onClick={() => navigate("/list-product")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-file-text"></i><span>Quotation</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-quotation")} style={{cursor:"pointer"}}>List</a></li>
      //                <li><a onClick={() => navigate("/create-quotation")} style={{cursor:"pointer"}}>Create Quotation</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-book"></i><span>Invoice</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-invoice")} style={{cursor:"pointer"}}>List</a></li>
      //                <li><a onClick={() => navigate("/create-invoice")} style={{cursor:"pointer"}}>Create Invoice</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-user-circle"></i><span>Lead</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-lead")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-shopping-cart"></i><span>Order</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-order")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-handshake-o"></i><span>Support</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-support")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-cubes"></i><span>Inventory</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-inventory")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-edit"></i><span>Task</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-task")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-commenting-o"></i><span>Inquiry</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-inquiry")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-user-circle-o"></i><span>Account</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-account")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-building-o"></i><span>Manufacturing</span>
      //                <span class="pull-right-container">
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/list-manufacturing")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>

      //          <li class="treeview">
      //             <a >
      //                <i class="fa fa-list"></i><span>Graphics  </span>
      //                <span class="pull-right-container">
                       
      //                   <i class="fa fa-angle-left pull-right"></i>
      //                </span>
      //             </a>
      //             <ul class="treeview-menu">
      //                <li><a onClick={() => navigate("/graphics-list")} style={{cursor:"pointer"}}>List</a></li>
      //             </ul>
      //          </li>
      //          {/* <li class="treeview">
      //        <a >
      //        <i class="fa fa-shopping-basket"></i><span>Transaction</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a >New Deposit</a></li>
      //           <li><a >New Expense</a></li>
      //           <li><a >Transfer</a></li>
      //           <li><a >View transaction</a></li>
      //           <li><a >Balance Sheet</a></li>
      //           <li><a >Transfer Report</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a >
      //        <i class="fa fa-shopping-cart"></i><span>Sales</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a >Invoices</a></li>
      //           <li><a >New Invoices</a></li>
      //           <li><a >Recurring invoices</a></li>
      //           <li><a >New Recurring invoices</a></li>
      //           <li><a >quotes</a></li>
      //           <li><a >New quote</a></li>
      //           <li><a >Payments</a></li>
      //           <li><a >Tax Rates</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a >
      //        <i class="fa fa-book"></i><span>Task</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a >Running Task</a></li>
      //           <li><a >Archive Task</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a >
      //        <i class="fa fa-shopping-bag"></i><span>Accounting</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a >Client payment</a></li>
      //           <li><a >Expense management</a></li>
      //           <li><a >Expense Category</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a >
      //        <i class="fa fa-file-text"></i><span>Report</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="preport.html">Project Report</a></li>
      //           <li><a href="creport.html">Client Report</a></li>
      //           <li><a href="ereport.html">Expense Report</a></li>
      //           <li><a href="incomexp.html">Income expense comparesion</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-bell"></i><span>Attendance</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="thistory.html">Time History</a></li>
      //           <li><a href="timechange.html">Time Change Request</a></li>
      //           <li><a href="atreport.html">Attendance Report</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-edit"></i><span>Recruitment</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="jpost.html">Jobs Posted</a></li>
      //           <li><a href="japp.html">Jobs Application</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-shopping-basket"></i><span>payroll</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="salary.html">Salary Template</a></li>
      //           <li><a href="hourly.html">Hourly</a></li>
      //           <li><a href="managesal.html">Manage salary</a></li>
      //           <li><a href="empsallist.html">Employee salary list</a></li>
      //           <li><a href="mpayment.html">Make payment</a></li>
      //           <li><a href="generatepay.html">Generate payslip</a></li>
      //           <li><a href="paysum.html">Payroll summary</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-bitbucket-square"></i><span>Stock</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="stockcat.html">Stock category</a></li>
      //           <li><a href="manstock.html">Manage Stock</a></li>
      //           <li><a href="astock.html">Assign stock</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-ticket"></i><span>Tickets</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="ticanswer.html">Answered</a></li>
      //           <li><a href="ticopen.html">Open</a></li>
      //           <li><a href="iprocess.html">Inprocess</a></li>
      //           <li><a href="close.html">CLosed</a></li>
      //           <li><a href="allticket.html">All Tickets</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-list"></i>
      //        <span>Utilities</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="ativitylog.html">Activity Log</a></li>
      //           <li><a href="emailmes.html">Email message log</a></li>
      //           <li><a href="systemsts.html">System status</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-bar-chart"></i><span>Charts</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li class=""><a href="charts_flot.html">Flot Chart</a></li>
      //           <li><a href="charts_Js.html">Chart js</a></li>
      //           <li><a href="charts_morris.html">Morris Charts</a></li>
      //           <li><a href="charts_sparkline.html">Sparkline Charts</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-briefcase"></i>
      //        <span>Icons</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="icons_bootstrap.html">Bootstrap Icons</a></li>
      //           <li><a href="icons_fontawesome.html">Fontawesome Icon</a></li>
      //           <li><a href="icons_flag.html">Flag Icons</a></li>
      //           <li><a href="icons_material.html">Material Icons</a></li>
      //           <li><a href="icons_weather.html">Weather Icons </a></li>
      //           <li><a href="icons_line.html">Line Icons</a></li>
      //           <li><a href="icons_pe.html">Pe Icons</a></li>
      //           <li><a href="icon_socicon.html">Socicon Icons</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-list"></i> <span>Other page</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="login.html">Login</a></li>
      //           <li><a href="register.html">Register</a></li>
      //           <li><a href="profile.html">Profile</a></li>
      //           <li><a href="forget_password.html">Forget password</a></li>
      //           <li><a href="lockscreen.html">Lockscreen</a></li>
      //           <li><a href="404.html">404 Error</a></li>
      //           <li><a href="505.html">505 Error</a></li>
      //           <li><a href="blank.html">Blank Page</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-bitbucket"></i><span>UI Elements</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="buttons.html">Buttons</a></li>
      //           <li><a href="tabs.html">Tabs</a></li>
      //           <li><a href="notification.html">Notification</a></li>
      //           <li><a href="tree-view.html">Tree View</a></li>
      //           <li><a href="progressbars.html">Progressber</a></li>
      //           <li><a href="list.html">List View</a></li>
      //           <li><a href="typography.html">Typography</a></li>
      //           <li><a href="panels.html">Panels</a></li>
      //           <li><a href="modals.html">Modals</a></li>
      //           <li><a href="icheck_toggle_pagination.html">iCheck, Toggle, Pagination</a></li>
      //           <li><a href="labels-badges-alerts.html">Labels, Badges, Alerts</a></li>
      //        </ul>
      //     </li>
      //     <li class="treeview">
      //        <a href="#">
      //        <i class="fa fa-gear"></i>
      //        <span>settings</span>
      //        <span class="pull-right-container">
      //        <i class="fa fa-angle-left pull-right"></i>
      //        </span>
      //        </a>
      //        <ul class="treeview-menu">
      //           <li><a href="gsetting.html">Genaral settings</a></li>
      //           <li><a href="stfsetting.html">Staff settings</a></li>
      //           <li><a href="emailsetting.html">Email settings</a></li>
      //           <li><a href="paysetting.html">Payment</a></li>
      //        </ul>
      //     </li>
      //     <li>
      //        <a href="company.html">
      //        <i class="fa fa-home"></i> <span>Companies</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="holiday.html">
      //        <i class="fa fa-stop-circle"></i> <span>Public Holiday</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="user.html">
      //        <i class="fa fa-user-circle"></i><span>User</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="items.html">
      //        <i class="fa fa-file-o"></i><span>Items</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="department.html">
      //        <i class="fa fa-tree"></i><span>Departments</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="document.html">
      //        <i class="fa fa-file-text"></i> <span>Documents</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="train.html">
      //        <i class="fa fa-clock-o"></i><span>Training</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="calender.html">
      //        <i class="fa fa-calendar"></i> <span>Calender</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="notice.html">
      //        <i class="fa fa-file-text"></i> <span>Notice Board</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="message.html">
      //        <i class="fa fa-envelope-o"></i> <span>Message</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li>
      //     <li>
      //        <a href="note.html">
      //        <i class="fa fa-comment"></i> <span>Notes</span>
      //        <span class="pull-right-container">
      //        </span>
      //        </a>
      //     </li> 
      //       </ul>
      //    </div>
       </aside> */}
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
                {/* <img src="assets/images/logo-sm.png" alt="" height={22} /> */}
              </span>
              <span className="logo-lg">
                {/* <img src="assets/images/logo-light.png" alt="" height={17} /> */}
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
                                    <li className="nav-item">
                                      <a
                                        className="nav-link menu-link collapsed active"
                                        href="#sidebarDashboards"
                                        data-bs-toggle="collapse"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="sidebarDashboards"
                                      >
                                        <i className="ri-user-star-line" />{" "}
                                        <span data-key="t-dashboards">
                                          Employe
                                        </span>
                                      </a>
                                      <div
                                        className="collapse menu-dropdown show"
                                        id="sidebarDashboards"
                                      >
                                        <ul className="nav nav-sm flex-column">
                                          <li className="nav-item">
                                            <a
                                            onClick={()=>navigate("/add-employee")}
                                              className="nav-link cursor-pointer"
                                              
                                            >
                                              Add Employe
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={()=>navigate("/employe-list")}
                                              className="nav-link cursor-pointer"
                                          
                                            >
                                              List Employe
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                    {/* end Dashboard Menu */}
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
                                              className="nav-link collapsed"
                                              data-bs-toggle="collapse"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="sidebarCalendar"
                                              data-key="t-calender"
                                            >
                                              Add Customer
                                            </a>
                                            <div
                                              className="collapse menu-dropdown"
                                              id="sidebarCalendar"
                                            >
                                              <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                  <a
                                                    onClick={() =>
                                                      navigate("/list-customer")
                                                    }
                                                    className="nav-link"
                                                    data-key="t-main-calender"
                                                  >
                                                    List Customer
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/list-customer")
                                              }
                                              className="nav-link"
                                              data-key="t-chat"
                                            >
                                              List Customer
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
                                             onClick={()=>navigate("/add-category")}
                                              className="nav-link"
                                          
                                            >
                                              Add Category
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                             onClick={()=>navigate("/list-category")}
                                              className="nav-link"
                                              
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
                                             
                                              className="nav-link collapsed"
                                              onClick={()=>navigate("/add-product")}
                                              
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
                                                    onClick={()=>navigate("/list-product")}
                                                    className="nav-link"
                                                    
                                                  >
                                                    List Products
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={()=>navigate("/list-product")}
                                              className="nav-link"
                                              
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
                                              href="layouts-horizontal.html"
                                              target="_blank"
                                              className="nav-link"
                                              data-key="t-horizontal"
                                            >
                                              Add Quotation
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              href="layouts-detached.html"
                                              target="_blank"
                                              className="nav-link"
                                              data-key="t-detached"
                                            >
                                              Quotation List
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
                                              href="#sidebarCalendar"
                                              className="nav-link collapsed"
                                              data-bs-toggle="collapse"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="sidebarCalendar"
                                              data-key="t-calender"
                                            >
                                              Add Invoice
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
                                                    List Invoice
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              href="apps-chat.html"
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
                                             onClick={()=>navigate("/add-lead")}
                                              
                                              className="nav-link cursor-pointer"
                                              data-key="t-horizontal"
                                            >
                                              Add Lead
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                               onClick={()=>navigate("/lead-list")}
                                             
                                              className="nav-link cursor-pointer"
                                              data-key="t-detached"
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
                                              href="apps-chat.html"
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
                                              href="#sidebarCalendar"
                                              className="nav-link collapsed"
                                              data-bs-toggle="collapse"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="sidebarCalendar"
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
                                                    href="apps-calendar.html"
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
                                              href="apps-chat.html"
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
                                              Add Task
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
                                              Task List
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
                                                navigate("/add-Inquiry")
                                              }
                                              className="nav-link collapsed"
                                              data-bs-toggle="collapse"
                                              role="button"
                                              aria-expanded="false"
                                              aria-controls="sidebarCalendar"
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
                                              Add Manufacturing
                                            </a>
                                            <div
                                              className="collapse menu-dropdown"
                                              id="sidebarCalendar"
                                            >
                                              <ul className="nav nav-sm flex-column">
                                                <li className="nav-item">
                                                  <a
                                                    onClick={() =>
                                                      navigate(
                                                        "/manufacturing-list"
                                                      )
                                                    }
                                                    className="nav-link"
                                                    data-key="t-main-calender"
                                                  >
                                                    Manufacturing List
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              onClick={() =>
                                                navigate("/manufacturing-list")
                                              }
                                              className="nav-link cursor-pointer"
                                              data-key="t-chat"
                                            >
                                              Manufacturing List
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
                                              href="layouts-horizontal.html"
                                              target="_blank"
                                              className="nav-link"
                                              data-key="t-horizontal"
                                            >
                                              Add Graphics
                                            </a>
                                          </li>
                                          <li className="nav-item">
                                            <a
                                              href="layouts-detached.html"
                                              target="_blank"
                                              className="nav-link"
                                              data-key="t-detached"
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
