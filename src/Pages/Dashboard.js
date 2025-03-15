import React from 'react'
import Header from '../LayoutNew/Header'
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

  const cardList = [
    {
      name: "Customer",
      icon: "card",
      url: "/"
    },
    {
      name: "Category",
      icon: "card",
      url: "/"
    },
    {
      name: "Products",
      icon: "card",
      url: "/"
    },
    {
      name: "Quotation",
      icon: "card",
      url: "/"
    },
    {
      name: "Invoice",
      icon: "card",
      url: "/"
    },
    {
      name: "Lead",
      icon: "card",
      url: "/"
    },
    {
      name: "Order",
      icon: "card",
      url: "/"
    },
    {
      name: "Support",
      icon: "card",
      url: "/"
    },
    {
      name: "Inventory",
      icon: "card",
      url: "/"
    },
    {
      name: "Task",
      icon: "card",
      url: "/"
    },
    {
      name: "Inquiry",
      icon: "card",
      url: "/"
    },
    {
      name: "Account",
      icon: "card",
      url: "/"
    },
  ]
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='main-content'>
        <div className='page-content'>

          <div class="content-wrapper" style={{ minHeight: "1950px" }}>
            <section class="content-header">
              <div class="header-icon">
                <i class="fa fa-dashboard"></i>
              </div>
            </section>
            <section class="content">
              <div class="row">
                {
                  cardList?.map((card) => {
                    return (
                      <div class="col-xl-2">
                        <div class="card card-animate" style={{ cursor: "pointer" }} >
                        {/* <div class="card card-animate" style={{ cursor: "pointer" }} onClick={() => navigate(card.url)}> */}
                          <div class="card-body">
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm flex-shrink-0">
                                <span class="avatar-title bg-info-subtle text-info rounded-2 fs-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock text-info"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                </span>
                              </div>
                              <div class="flex-grow-1 overflow-hidden ms-3">
                                {/* <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Total Hours</p> */}
                                <div class="d-flex align-items-center mb-3">
                                  <h4 class="fs-4 flex-grow-1 mb-0">{card.name}</h4>
                                  {/* <span class="badge bg-danger-subtle text-danger fs-12"><i class="ri-arrow-down-s-line fs-13 align-middle me-1"></i>10.35 %</span> */}
                                </div>
                                {/* <p class="text-muted text-truncate mb-0">Work this month</p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

              </div>


            </section>
            {/* <div class="row"> */}
            <div className='row'>


              <div class="col-md-6">
                <div class="card card-height-100">
                  <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Recent Product (24 hours)</h4>
                    <div class="flex-shrink-0">
                      {/* <div class="dropdown card-header-dropdown">
                      <a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="text-muted fs-16"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Today</a>
                        <a class="dropdown-item" href="#">Last Week</a>
                        <a class="dropdown-item" href="#">Last Month</a>
                        <a class="dropdown-item" href="#">Current Year</a>
                      </div>
                    </div> */}
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive table-card">
                      <table class="table align-middle table-borderless table-centered table-nowrap mb-0">
                        <thead class="text-muted table-light">
                          <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
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
              <div class="col-md-6">
                <div class="card card-height-100">
                  <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Recent Customer (24 Hours)</h4>
                    <div class="flex-shrink-0">
                      {/* <div class="dropdown card-header-dropdown">
                      <a class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="text-muted fs-16"><i class="mdi mdi-dots-vertical align-middle"></i></span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#">Today</a>
                        <a class="dropdown-item" href="#">Last Week</a>
                        <a class="dropdown-item" href="#">Last Month</a>
                        <a class="dropdown-item" href="#">Current Year</a>
                      </div>
                    </div> */}
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive table-card">
                      <table class="table align-middle table-borderless table-centered table-nowrap mb-0">
                        <thead class="text-muted table-light">
                          <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Company</th>
                            <th scope="col">Customer name</th>
                            <th scope="col">Status</th>
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
            </div>

            <div className='row'>
              <div class="col-xl-4">
                <div class="card card-height-100">
                  <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Customer Status</h4>
                  </div>
                  <div class="card-body">
                    <Chart
                      options={customerSales.options}
                      series={customerSales.series}
                      type="donut"
                      width="500"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="card card-height-100">
                  <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Product Status</h4>
                  </div>
                  <div class="card-body">
                  <Chart
                    options={productSales.options}
                    series={productSales.series}
                    type="donut"
                    width="500"
                  />
                  </div>
                </div>
              </div>
              <div class="col-xl-4">
                <div class="card card-height-100">
                  <div class="card-header align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Invoice Status</h4>
                  </div>
                  <div class="card-body">
                  <Chart
                    options={invoiceSales.options}
                    series={invoiceSales.series}
                    type="donut"
                    width="500"
                  />
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard