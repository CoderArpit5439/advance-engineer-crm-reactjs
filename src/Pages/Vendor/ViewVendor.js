import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import ReactApexChart from "react-apexcharts";

const ViewVendor = () => {
  // --------------------- BASIC COLOUM CHART -------------- START ---------->
  const optionsColoum = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const seriesColoum = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];
  // --------------------- BASIC COLOUM CHART -------------- END ---------->
  return (
    <div>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xxl-3">
                <div class="card">
                  <div class="card-body p-4">
                    <div>
                      <div class="flex-shrink-0 avatar-md mx-auto">
                        <div class="avatar-title bg-light rounded">
                          <img
                            src="assets/images/companies/img-2.png"
                            alt=""
                            height="50"
                          />
                        </div>
                      </div>
                      <div class="mt-4 text-center">
                        <h5 class="mb-1">Force Medicines</h5>
                        <p class="text-muted">Since 1987</p>
                      </div>
                      <div class="table-responsive">
                        <table class="table mb-0 table-borderless">
                          <tbody>
                            <tr>
                              <th>
                                <span class="fw-medium">Owner Name</span>
                              </th>
                              <td>David Marshall</td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Company Type</span>
                              </th>
                              <td>Partnership</td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Email</span>
                              </th>
                              <td>forcemedicines@gamil.com</td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Website</span>
                              </th>
                              <td>
                                <a
                                  href="javascript:void(0);"
                                  class="link-primary"
                                >
                                  www.forcemedicines.com
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Contact No.</span>
                              </th>
                              <td>+(123) 9876 654 321</td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Fax</span>
                              </th>
                              <td>+1 999 876 5432</td>
                            </tr>
                            <tr>
                              <th>
                                <span class="fw-medium">Location</span>
                              </th>
                              <td>United Kingdom</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div class="card-body p-4 border-top border-top-dashed">
                    <h6 class="text-muted text-uppercase fw-semibold mb-4">
                      Products Reviews
                    </h6>
                    <div
                      class="swiper vertical-swiper swiper-initialized swiper-vertical swiper-backface-hidden"
                      style={{ height: "242px" }}
                    >
                      <div
                        class="swiper-wrapper"
                        id="swiper-wrapper-2eb819aad97213a3"
                        aria-live="off"
                        style={{
                          transitionDuration: "0ms",
                          transform: "translate3d(0px, -252px, 0px)",
                          transitionDelay: "0ms",
                        }}
                      >
                        <div
                          class="swiper-slide"
                          role="group"
                          aria-label="2 / 4"
                          data-swiper-slide-index="1"
                          style={{ height: "116px", marginBottom: "10px" }}
                        >
                          <div class="card border border-dashed shadow-none">
                            <div class="card-body">
                              <div class="d-flex">
                                <div class="flex-shrink-0">
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    alt=""
                                    class="avatar-sm rounded"
                                  />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <div>
                                    <p class="text-muted mb-1 fst-italic">
                                      " Amazing template, very easy to
                                      understand and manipulate. "
                                    </p>
                                    <div class="fs-11 align-middle text-warning">
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-half-fill"></i>
                                    </div>
                                  </div>
                                  <div class="text-end mb-0 text-muted">
                                    - by{" "}
                                    <cite title="Source Title">
                                      Henry Baird
                                    </cite>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="3 / 4"
                          data-swiper-slide-index="2"
                          style={{ height: "116px", marginBottom: "10px" }}
                        >
                          <div class="card border border-dashed shadow-none">
                            <div class="card-body">
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar-sm">
                                  <div class="avatar-title bg-light rounded">
                                    <img
                                      src="assets/images/companies/img-8.png"
                                      alt=""
                                      height="30"
                                    />
                                  </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <div>
                                    <p class="text-muted mb-1 fst-italic">
                                      "Very beautiful product and Very helpful
                                      customer service."
                                    </p>
                                    <div class="fs-11 align-middle text-warning">
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-line"></i>
                                      <i class="ri-star-line"></i>
                                    </div>
                                  </div>
                                  <div class="text-end mb-0 text-muted">
                                    - by{" "}
                                    <cite title="Source Title">
                                      Zoetic Fashion
                                    </cite>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="swiper-slide swiper-slide-active"
                          role="group"
                          aria-label="4 / 4"
                          data-swiper-slide-index="3"
                          style={{ height: "116px", marginBottom: "10px" }}
                        >
                          <div class="card border border-dashed shadow-none">
                            <div class="card-body">
                              <div class="d-flex">
                                <div class="flex-shrink-0">
                                  <img
                                    src="assets/images/users/avatar-2.jpg"
                                    alt=""
                                    class="avatar-sm rounded"
                                  />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <div>
                                    <p class="text-muted mb-1 fst-italic">
                                      " The product is very beautiful. I like
                                      it. "
                                    </p>
                                    <div class="fs-11 align-middle text-warning">
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-half-fill"></i>
                                      <i class="ri-star-line"></i>
                                    </div>
                                  </div>
                                  <div class="text-end mb-0 text-muted">
                                    - by{" "}
                                    <cite title="Source Title">
                                      Nancy Martino
                                    </cite>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="1 / 4"
                          data-swiper-slide-index="0"
                          style={{ height: "116px", marginBottom: "10px" }}
                        >
                          <div class="card border border-dashed shadow-none">
                            <div class="card-body">
                              <div class="d-flex">
                                <div class="flex-shrink-0 avatar-sm">
                                  <div class="avatar-title bg-light rounded">
                                    <img
                                      src="assets/images/companies/img-1.png"
                                      alt=""
                                      height="30"
                                    />
                                  </div>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                  <div>
                                    <p class="text-muted mb-1 fst-italic">
                                      " Great product and looks great, lots of
                                      features. "
                                    </p>
                                    <div class="fs-11 align-middle text-warning">
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                      <i class="ri-star-fill"></i>
                                    </div>
                                  </div>
                                  <div class="text-end mb-0 text-muted">
                                    - by{" "}
                                    <cite title="Source Title">
                                      Force Medicines
                                    </cite>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span
                        class="swiper-notification"
                        aria-live="assertive"
                        aria-atomic="true"
                      ></span>
                    </div>
                    <div class="text-center mt-3">
                      <a href="javascript:void(0)" class="link-primary">
                        View All Reviews{" "}
                        <i class="ri-arrow-right-line align-bottom ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xxl-9">
                <div class="card">
                  <div class="card-header border-0 align-items-center d-flex">
                    <h4 class="card-title mb-0 flex-grow-1">Revenue</h4>
                    <div>
                      <button
                        type="button"
                        class="btn btn-soft-secondary btn-sm"
                      >
                        ALL
                      </button>
                      <button
                        type="button"
                        class="btn btn-soft-secondary btn-sm"
                      >
                        1M
                      </button>
                      <button
                        type="button"
                        class="btn btn-soft-secondary btn-sm"
                      >
                        6M
                      </button>
                      <button type="button" class="btn btn-soft-primary btn-sm">
                        1Y
                      </button>
                    </div>
                  </div>

                  <div class="card-header p-0 border-0 bg-light-subtle">
                    <div class="row g-0 text-center">
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            <span class="counter-value" data-target="7585">
                              7585
                            </span>
                          </h5>
                          <p class="text-muted mb-0">Orders</p>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            $
                            <span class="counter-value" data-target="22.89">
                              22.89
                            </span>
                            k
                          </h5>
                          <p class="text-muted mb-0">Earnings</p>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0">
                          <h5 class="mb-1">
                            <span class="counter-value" data-target="367">
                              367
                            </span>
                          </h5>
                          <p class="text-muted mb-0">Refunds</p>
                        </div>
                      </div>
                      <div class="col-6 col-sm-3">
                        <div class="p-3 border border-dashed border-start-0 border-end-0">
                          <h5 class="mb-1 text-success">
                            <span class="counter-value" data-target="18.92">
                              18.92
                            </span>
                            %
                          </h5>
                          <p class="text-muted mb-0">Conversation Ratio</p>
                        </div>
                      </div>
                      <ReactApexChart
                        options={optionsColoum}
                        series={seriesColoum}
                        type="bar"
                        height={350}
                      />
                    </div>
                  </div>

                  <div class="card-body p-0 pb-2">
                    <div></div>
                  </div>
                </div>
                  <h4 className="mb-3 mt-2"> Order List</h4>
                <div class="row g-4 mb-3">
                  <div class="col-sm-auto">
                    <div>
                      <a
                        href="apps-ecommerce-add-product.html"
                        class="btn btn-success"
                      >
                        <i class="ri-add-line align-bottom me-1"></i> Add New
                      </a>
                    </div>
                  </div>
                  <div class="col-sm">
                    <div class="d-flex justify-content-sm-end">
                      <div class="search-box ms-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Products..."
                        />
                        <i class="ri-search-line search-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <table className="table table-nowrap mb-0">
                      <thead class="table-light">
                        <tr>
                          <th
                            data-column-id="#"
                            scope="col"
                            tabindex="0"
                            style={{ width: "40px" }}
                          >
                            <div class="gridjs-th-content">#</div>
                          </th>
                          <th
                            data-column-id="product"
                            scope="col"
                            tabindex="0"
                            style={{ width: "360px" }}
                          >
                            <div class="gridjs-th-content">Product</div>
                          </th>
                          <th
                            data-column-id="stock"
                            scope="col"
                            tabindex="0"
                            style={{ width: "94px" }}
                          >
                            <div class="gridjs-th-content">Stock</div>
                          </th>
                          <th
                            data-column-id="price"
                            scope="col"
                            tabindex="0"
                            style={{ width: "101px" }}
                          >
                            <div class="gridjs-th-content">Price</div>
                          </th>
                          <th
                            data-column-id="orders"
                            scope="col"
                            tabindex="0"
                            style={{ width: "84px" }}
                          >
                            <div class="gridjs-th-content">Orders</div>
                          </th>
                          <th
                            data-column-id="rating"
                            scope="col"
                            tabindex="0"
                            style={{ width: "105px" }}
                          >
                            <div class="gridjs-th-content">Rating</div>
                          </th>
                          <th
                            data-column-id=""
                            scope="col"
                            tabindex="0"
                            style={{ width: "220px" }}
                          >
                            <div class="gridjs-th-content"></div>
                          </th>
                          <th
                            data-column-id="action"
                            scope="col"
                            tabindex="0"
                            style={{ width: "80px" }}
                          >
                            <div class="gridjs-th-content">Action</div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
                {/* purchase product  */}
                <h4 className="mb-3 mt-2">Purchase Order List</h4>
                <div class="row g-4 mb-3">
                  <div class="col-sm-auto">
                    <div>
                      <a
                        href="apps-ecommerce-add-product.html"
                        class="btn btn-success"
                      >
                        <i class="ri-add-line align-bottom me-1"></i> Add New
                      </a>
                    </div>
                  </div>
                  <div class="col-sm">
                    <div class="d-flex justify-content-sm-end">
                      <div class="search-box ms-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Products..."
                        />
                        <i class="ri-search-line search-icon"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <table className="table table-nowrap mb-0">
                      <thead class="table-light">
                        <tr>
                          <th
                            data-column-id="#"
                            scope="col"
                            tabindex="0"
                            style={{ width: "40px" }}
                          >
                            <div class="gridjs-th-content">#</div>
                          </th>
                          <th
                            data-column-id="product"
                            scope="col"
                            tabindex="0"
                            style={{ width: "360px" }}
                          >
                            <div class="gridjs-th-content">Product</div>
                          </th>
                          <th
                            data-column-id="stock"
                            scope="col"
                            tabindex="0"
                            style={{ width: "94px" }}
                          >
                            <div class="gridjs-th-content">Stock</div>
                          </th>
                          <th
                            data-column-id="price"
                            scope="col"
                            tabindex="0"
                            style={{ width: "101px" }}
                          >
                            <div class="gridjs-th-content">Price</div>
                          </th>
                          <th
                            data-column-id="orders"
                            scope="col"
                            tabindex="0"
                            style={{ width: "84px" }}
                          >
                            <div class="gridjs-th-content">Orders</div>
                          </th>
                          <th
                            data-column-id="rating"
                            scope="col"
                            tabindex="0"
                            style={{ width: "105px" }}
                          >
                            <div class="gridjs-th-content">Rating</div>
                          </th>
                          <th
                            data-column-id=""
                            scope="col"
                            tabindex="0"
                            style={{ width: "220px" }}
                          >
                            <div class="gridjs-th-content"></div>
                          </th>
                          <th
                            data-column-id="action"
                            scope="col"
                            tabindex="0"
                            style={{ width: "80px" }}
                          >
                            <div class="gridjs-th-content">Action</div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewVendor;
