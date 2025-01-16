import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'
import Chart from 'react-apexcharts'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();
  const customerSales = {
    options: {
      labels: ['Active', 'Non Active'],
      colors: ['#1f9956', '#e0383e'] 
    },
    series: [100, 0],
    labels: ['Active', 'Non Active']
  }

  const productSales = {
    options: {
      labels: ['Active', 'Non Active'],
      colors: ['#1f9956', '#e0383e'] 
    },
    series: [100, 0],
    labels: ['Active', 'Non Active']
  }

  const invoiceSales = {
    options: {
      labels: ['Active', 'Non Active'],
      colors: ['#1f9956', '#e0383e'] 
    },
    series: [70, 30],
    labels: ['Active', 'Non Active']
  }
return (
  <div>
    <Header />
    <Sidebar />
    <div class="content-wrapper" style={{ minHeight: "1950px" }}>
      <section class="content-header">
        <div class="header-icon">
          <i class="fa fa-dashboard"></i>
        </div>
        <div class="header-title">
          <h1>CRM Admin Dashboard</h1>
          <small>Very detailed &amp; featured admin.</small>
        </div>
      </section>
      <section class="content">
        <div class="row">
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#bd4141" }} onClick={() => navigate('/add-customer')}>
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Customer</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#88855f" }} onClick={() => navigate('/add-category')}>
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Category</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#658d38" }}  onClick={() => navigate('/add-product')}>
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Products</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#49388d" }} onClick={() => navigate('/create-quotation')}>
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Quotation</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#8d386e" }} onClick={() => navigate('/create-invoice')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Invoice</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#ff3399" }} onClick={() => navigate('/list-lead')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Lead</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#ff6699" }} onClick={() => navigate('/list-order')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Order Track</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#00cc99" }} onClick={() => navigate('/list-support')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Support</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#009900" }} onClick={() => navigate('/list-inventory')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Inventory</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#0099ff" }} onClick={() => navigate('/list-task')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Task</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#9933ff" }} onClick={() => navigate('/list-inquiry')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Inquiry</h3>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#0099ff" }} onClick={() => navigate('/list-account')} >
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Account</h3>
              </div>
            </div>
          </div>
          {/* <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
            <div id="cardbox4" style={{ backgroundColor: "#4e766b" }}>
              <div class="statistic-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {/* <i class="fa fa-user-secret fa-3x"></i> */}
                {/* <span style={{ fontWeight: 700 }} >4</span> */}
                {/* <div class="counter-number pull-right"> */}
                {/* <span class="slight"><i class="fa fa-play fa-rotate-270"> </i> */}
                {/* </span> 
                {/* </div> 
                <h3>User</h3>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <div class="row"> */}
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="SoDc33MlnA">
        <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="SoDc33MlnA" data-index="0">
          <div class="panel-heading ui-sortable-handle">
            <div class="panel-title" style={{ maxWidth: "calc(100% - 90px)" }}>
              <h4>Recent Customer (24 hours)</h4>
            </div>
            </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                <thead>
                  <tr class="info">
                    <th>Photo</th>
                    <th>Company</th>
                    <th>Customer Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className='text-center'>
                      No records found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="E4Dj1ARn5I">
        <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="E4Dj1ARn5I" data-index="0">
          <div class="panel-heading ui-sortable-handle">
            <div class="panel-title" style={{ maxWidth: "calc(100% - 90px)" }}>
              <h4>Recent Product (24 hours)</h4>
            </div>
            </div>
          <div class="panel-body">
            <div className="table-responsive">
              <table id="dataTableExample1" className="table table-bordered table-striped table-hover">
                <thead>
                  <tr className="info" style={{ textAlign: "center" }}>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className='text-center'>
                      No records found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="sJ0S0qyqhl">
        <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="sJ0S0qyqhl" data-index="0">
          <div class="panel-heading ui-sortable-handle">
            <div class="panel-title" style={{ maxWidth: "calc(100% - 90px)" }}>
              <h4>Customer Status</h4>
            </div>
            </div>
          <div class="panel-body">
          <Chart
              options={customerSales.options}
              series={customerSales.series}
              type="donut"
              width="500"
            />
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="sJ0S0qyqhl">
        <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="sJ0S0qyqhl" data-index="0">
          <div class="panel-heading ui-sortable-handle">
            <div class="panel-title" style={{ maxWidth: "calc(100% - 90px)" }}>
              <h4>Product Status</h4>
            </div>
            </div>
          <div class="panel-body">
          <Chart
              options={productSales.options}
              series={productSales.series}
              type="donut"
              width="500"
            />
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="sJ0S0qyqhl">
        <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="sJ0S0qyqhl" data-index="0">
          <div class="panel-heading ui-sortable-handle">
            <div class="panel-title" style={{ maxWidth: "calc(100% - 90px)" }}>
              <h4>Invoice Status</h4>
            </div>
            </div>
          <div class="panel-body">
          <Chart
              options={invoiceSales.options}
              series={invoiceSales.series}
              type="donut"
              width="500"
            />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
    <Footer />
  </div>
)
}

export default Dashboard