import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
   const navigate = useNavigate();
   return (
      <aside class="main-sidebar">
         <div class="sidebar">
            <ul class="sidebar-menu">
               <li class="active">
                  <a onClick={() => navigate("/dashboard")} style={{cursor:"pointer"}}><i class="fa fa-tachometer"></i><span>Dashboard</span>
                     <span class="pull-right-container">
                     </span>
                  </a>
               </li>
               <li class="treeview">
                  <a >
                     <i class="fa fa-users"></i><span>Customers</span>
                     <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                     </span>
                  </a>
                  <ul class="treeview-menu">
                     <li><a onClick={() => navigate("/add-customer")} style={{cursor:"pointer"}}>Add Customer</a></li>
                     <li><a onClick={() => navigate("/list-customer")} style={{cursor:"pointer"}}>List</a></li>
                     <li><a >Groups</a></li>
                  </ul>
               </li>
               <li class="treeview">
                  <a >
                     <i class="fa fa-users"></i><span>Category</span>
                     <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                     </span>
                  </a>
                  <ul class="treeview-menu">
                     <li><a onClick={() => navigate("/add-category")} style={{cursor:"pointer"}}>Add Category</a></li>
                     <li><a onClick={() => navigate("/list-category")} style={{cursor:"pointer"}}>List</a></li>
                  </ul>
               </li>
               <li class="treeview">
                  <a >
                     <i class="fa fa-users"></i><span>Products</span>
                     <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                     </span>
                  </a>
                  <ul class="treeview-menu">
                     <li><a onClick={() => navigate("/add-product")} style={{cursor:"pointer"}}>Add Product</a></li>
                     <li><a onClick={() => navigate("/list-product")} style={{cursor:"pointer"}}>List</a></li>
                  </ul>
               </li>
               <li class="treeview">
                  <a >
                     <i class="fa fa-users"></i><span>Quotation</span>
                     <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                     </span>
                  </a>
                  <ul class="treeview-menu">
                     <li><a onClick={() => navigate("/list-quotation")} style={{cursor:"pointer"}}>List</a></li>
                     <li><a onClick={() => navigate("/create-quotation")} style={{cursor:"pointer"}}>Create Quotation</a></li>
                  </ul>
               </li>
               <li class="treeview">
                  <a >
                     <i class="fa fa-users"></i><span>Invoice</span>
                     <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                     </span>
                  </a>
                  <ul class="treeview-menu">
                     <li><a onClick={() => navigate("/list-invoice")} style={{cursor:"pointer"}}>List</a></li>
                     <li><a onClick={() => navigate("/create-invoice")} style={{cursor:"pointer"}}>Create Invoice</a></li>
                  </ul>
               </li>
               {/* <li class="treeview">
             <a >
             <i class="fa fa-shopping-basket"></i><span>Transaction</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a >New Deposit</a></li>
                <li><a >New Expense</a></li>
                <li><a >Transfer</a></li>
                <li><a >View transaction</a></li>
                <li><a >Balance Sheet</a></li>
                <li><a >Transfer Report</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a >
             <i class="fa fa-shopping-cart"></i><span>Sales</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a >Invoices</a></li>
                <li><a >New Invoices</a></li>
                <li><a >Recurring invoices</a></li>
                <li><a >New Recurring invoices</a></li>
                <li><a >quotes</a></li>
                <li><a >New quote</a></li>
                <li><a >Payments</a></li>
                <li><a >Tax Rates</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a >
             <i class="fa fa-book"></i><span>Task</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a >Running Task</a></li>
                <li><a >Archive Task</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a >
             <i class="fa fa-shopping-bag"></i><span>Accounting</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a >Client payment</a></li>
                <li><a >Expense management</a></li>
                <li><a >Expense Category</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a >
             <i class="fa fa-file-text"></i><span>Report</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="preport.html">Project Report</a></li>
                <li><a href="creport.html">Client Report</a></li>
                <li><a href="ereport.html">Expense Report</a></li>
                <li><a href="incomexp.html">Income expense comparesion</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-bell"></i><span>Attendance</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="thistory.html">Time History</a></li>
                <li><a href="timechange.html">Time Change Request</a></li>
                <li><a href="atreport.html">Attendance Report</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-edit"></i><span>Recruitment</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="jpost.html">Jobs Posted</a></li>
                <li><a href="japp.html">Jobs Application</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-shopping-basket"></i><span>payroll</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="salary.html">Salary Template</a></li>
                <li><a href="hourly.html">Hourly</a></li>
                <li><a href="managesal.html">Manage salary</a></li>
                <li><a href="empsallist.html">Employee salary list</a></li>
                <li><a href="mpayment.html">Make payment</a></li>
                <li><a href="generatepay.html">Generate payslip</a></li>
                <li><a href="paysum.html">Payroll summary</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-bitbucket-square"></i><span>Stock</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="stockcat.html">Stock category</a></li>
                <li><a href="manstock.html">Manage Stock</a></li>
                <li><a href="astock.html">Assign stock</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-ticket"></i><span>Tickets</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="ticanswer.html">Answered</a></li>
                <li><a href="ticopen.html">Open</a></li>
                <li><a href="iprocess.html">Inprocess</a></li>
                <li><a href="close.html">CLosed</a></li>
                <li><a href="allticket.html">All Tickets</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-list"></i>
             <span>Utilities</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="ativitylog.html">Activity Log</a></li>
                <li><a href="emailmes.html">Email message log</a></li>
                <li><a href="systemsts.html">System status</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-bar-chart"></i><span>Charts</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li class=""><a href="charts_flot.html">Flot Chart</a></li>
                <li><a href="charts_Js.html">Chart js</a></li>
                <li><a href="charts_morris.html">Morris Charts</a></li>
                <li><a href="charts_sparkline.html">Sparkline Charts</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-briefcase"></i>
             <span>Icons</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="icons_bootstrap.html">Bootstrap Icons</a></li>
                <li><a href="icons_fontawesome.html">Fontawesome Icon</a></li>
                <li><a href="icons_flag.html">Flag Icons</a></li>
                <li><a href="icons_material.html">Material Icons</a></li>
                <li><a href="icons_weather.html">Weather Icons </a></li>
                <li><a href="icons_line.html">Line Icons</a></li>
                <li><a href="icons_pe.html">Pe Icons</a></li>
                <li><a href="icon_socicon.html">Socicon Icons</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-list"></i> <span>Other page</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="profile.html">Profile</a></li>
                <li><a href="forget_password.html">Forget password</a></li>
                <li><a href="lockscreen.html">Lockscreen</a></li>
                <li><a href="404.html">404 Error</a></li>
                <li><a href="505.html">505 Error</a></li>
                <li><a href="blank.html">Blank Page</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-bitbucket"></i><span>UI Elements</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="buttons.html">Buttons</a></li>
                <li><a href="tabs.html">Tabs</a></li>
                <li><a href="notification.html">Notification</a></li>
                <li><a href="tree-view.html">Tree View</a></li>
                <li><a href="progressbars.html">Progressber</a></li>
                <li><a href="list.html">List View</a></li>
                <li><a href="typography.html">Typography</a></li>
                <li><a href="panels.html">Panels</a></li>
                <li><a href="modals.html">Modals</a></li>
                <li><a href="icheck_toggle_pagination.html">iCheck, Toggle, Pagination</a></li>
                <li><a href="labels-badges-alerts.html">Labels, Badges, Alerts</a></li>
             </ul>
          </li>
          <li class="treeview">
             <a href="#">
             <i class="fa fa-gear"></i>
             <span>settings</span>
             <span class="pull-right-container">
             <i class="fa fa-angle-left pull-right"></i>
             </span>
             </a>
             <ul class="treeview-menu">
                <li><a href="gsetting.html">Genaral settings</a></li>
                <li><a href="stfsetting.html">Staff settings</a></li>
                <li><a href="emailsetting.html">Email settings</a></li>
                <li><a href="paysetting.html">Payment</a></li>
             </ul>
          </li>
          <li>
             <a href="company.html">
             <i class="fa fa-home"></i> <span>Companies</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="holiday.html">
             <i class="fa fa-stop-circle"></i> <span>Public Holiday</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="user.html">
             <i class="fa fa-user-circle"></i><span>User</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="items.html">
             <i class="fa fa-file-o"></i><span>Items</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="department.html">
             <i class="fa fa-tree"></i><span>Departments</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="document.html">
             <i class="fa fa-file-text"></i> <span>Documents</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="train.html">
             <i class="fa fa-clock-o"></i><span>Training</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="calender.html">
             <i class="fa fa-calendar"></i> <span>Calender</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="notice.html">
             <i class="fa fa-file-text"></i> <span>Notice Board</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="message.html">
             <i class="fa fa-envelope-o"></i> <span>Message</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li>
          <li>
             <a href="note.html">
             <i class="fa fa-comment"></i> <span>Notes</span>
             <span class="pull-right-container">
             </span>
             </a>
          </li> */}
            </ul>
         </div>
      </aside>
   )
}

export default Sidebar