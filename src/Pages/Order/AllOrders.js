import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../../Redux/crmSlices/orderSlice/OrderSlice";
import TopCards from "../../Components/TopCards";

const AllOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, count, loading, status, error } = useSelector((state) => {
    return {
      data: state.rootReducer.orderSlice?.data?.data,
      loading: state.rootReducer.orderSlice?.loading,
      count: state.rootReducer.orderSlice?.count,
      status: state.rootReducer.orderSlice?.status,
      error: state.rootReducer.orderSlice?.error,
    };
  });

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const handleEdit = (data) => {
    localStorage.setItem("editOrder", JSON.stringify(data));
    navigate("/edit-order-details");
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 class="mb-sm-0">Orders</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Ecommerce</a>
                      </li>
                      <li class="breadcrumb-item active">Orders</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <TopCards />
            <div class="row">
              <div class="col-lg-12">
                <div class="card" id="orderList">
                  <div class="card-header border-0">
                    <div class="row align-items-center gy-3">
                      <div class="col-sm">
                        <h5 class="card-title mb-0">Order History</h5>
                      </div>
                      <div class="col-sm-auto">
                        <div class="d-flex gap-1 flex-wrap">
                          <button
                            type="button"
                            class="btn btn-success add-btn"
                            onClick={() => navigate("/add-order")}
                          >
                            <i class="ri-add-line align-bottom me-1"></i> Create
                            Order
                          </button>
                          <button type="button" class="btn btn-info">
                            <i class="ri-file-download-line align-bottom me-1"></i>
                            Import
                          </button>
                          <button
                            class="btn btn-soft-danger"
                            id="remove-actions"
                            onclick="deleteMultiple()"
                          >
                            <i class="ri-delete-bin-2-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body border border-dashed border-end-0 border-start-0">
                    <form>
                      <div class="row g-3">
                        <div class="col-xxl-5 col-sm-6">
                          <div class="search-box">
                            <input
                              type="text"
                              class="form-control search"
                              placeholder="Search for order ID, customer, order status or something..."
                            />
                            <i class="ri-search-line search-icon"></i>
                          </div>
                        </div>
                        <div class="col-xxl-2 col-sm-6">
                          <div>
                            <input
                              type="text"
                              class="form-control flatpickr-input"
                              data-provider="flatpickr"
                              data-date-format="d M, Y"
                              data-range-date="true"
                              id="demo-datepicker"
                              placeholder="Select date"
                              readonly="readonly"
                            />
                          </div>
                        </div>
                        <div class="col-xxl-2 col-sm-4">
                          <div>
                            <div
                              class="choices"
                              data-type="select-one"
                              tabindex="0"
                              role="listbox"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <select
                                class="form-control choices__input"
                                data-choices=""
                                data-choices-search-false=""
                                name="choices-single-default"
                                id="idStatus"
                                hidden=""
                                tabindex="-1"
                                data-choice="active"
                              >
                                <option value="">Status</option>
                                <option value="all" selected="">
                                  All
                                </option>
                                <option value="Pending">Pending</option>
                                <option value="Inprogress">Inprogress</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Pickups">Pickups</option>
                                <option value="Returns">Returns</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-2 col-sm-4">
                          <div>
                            <div
                              class="choices"
                              data-type="select-one"
                              tabindex="0"
                              role="listbox"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <select
                                class="form-control choices__input"
                                data-choices=""
                                data-choices-search-false=""
                                name="choices-single-default"
                                id="idPayment"
                                hidden=""
                                tabindex="-1"
                                data-choice="active"
                              >
                                <option value="">Select Payment</option>
                                <option value="all" selected="">
                                  All
                                </option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Visa">Visa</option>
                                <option value="COD">COD</option>
                              </select>

                              <div
                                class="choices__list choices__list--dropdown"
                                aria-expanded="false"
                              >
                                <div class="choices__list" role="listbox">
                                  <div
                                    id="choices--idPayment-item-choice-1"
                                    class="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted"
                                    role="option"
                                    data-choice=""
                                    data-id="1"
                                    data-value=""
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                    aria-selected="true"
                                  >
                                    Select Payment
                                  </div>
                                  <div
                                    id="choices--idPayment-item-choice-2"
                                    class="choices__item choices__item--choice is-selected choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id="2"
                                    data-value="all"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    All
                                  </div>
                                  <div
                                    id="choices--idPayment-item-choice-6"
                                    class="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id="6"
                                    data-value="COD"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    COD
                                  </div>
                                  <div
                                    id="choices--idPayment-item-choice-3"
                                    class="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id="3"
                                    data-value="Mastercard"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    Mastercard
                                  </div>
                                  <div
                                    id="choices--idPayment-item-choice-4"
                                    class="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id="4"
                                    data-value="Paypal"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    Paypal
                                  </div>
                                  <div
                                    id="choices--idPayment-item-choice-5"
                                    class="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id="5"
                                    data-value="Visa"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    Visa
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-1 col-sm-4">
                          <div>
                            <button
                              type="button"
                              class="btn btn-primary w-100"
                              onclick="SearchData();"
                            >
                              <i class="ri-equalizer-fill me-1 align-bottom"></i>
                              Filters
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="card-body pt-0">
                    <div>
                      <ul
                        class="nav nav-tabs nav-tabs-custom nav-success mb-3"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link  All py-3"
                            data-bs-toggle="tab"
                            id="All"
                            href="#orderTable"
                            role="tab"
                            aria-selected="false"
                          >
                            <i class="ri-store-2-fill me-1 align-bottom"></i>
                            All Orders
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link py-3 Delivered"
                            data-bs-toggle="tab"
                            id="Delivered"
                            href="#delivered"
                            role="tab"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-checkbox-circle-line me-1 align-bottom"></i>
                            Delivered
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link py-3 Pickups"
                            data-bs-toggle="tab"
                            id="Pickups"
                            href="#pickups"
                            role="tab"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-truck-line me-1 align-bottom"></i>
                            Pickups
                            <span class="badge bg-danger align-middle ms-1">
                              2
                            </span>
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link py-3 Returns"
                            data-bs-toggle="tab"
                            id="Returns"
                            href="#returns"
                            role="tab"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-arrow-left-right-fill me-1 align-bottom"></i>
                            Returns
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link py-3 Cancelled"
                            data-bs-toggle="tab"
                            id="Cancelled"
                            href="#cancelled"
                            role="tab"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-close-circle-line me-1 align-bottom"></i>
                            Cancelled
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link py-3 FOC"
                            data-bs-toggle="tab"
                            id="FOC"
                            href="#freeofcost"
                            role="tab"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-close-circle-line me-1 align-bottom"></i>
                            FOC
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link py-3 RGP"
                            data-bs-toggle="tab"
                            id="RGP"
                            href="#gatepass"
                            role="tab"
                            aria-selected="false"
                            tabindex="-1"
                          >
                            <i class="ri-close-circle-line me-1 align-bottom"></i>
                            RGP
                          </a>
                        </li>
                      </ul>

                      <div class="table-responsive table-card mb-1">
                        <div className="tab-content text-muted">
                          {/* All order table */}
                          <table
                            class="table table-nowrap tab-pane align-middle"
                            id="orderTable"
                          >
                            <thead class="table-light text-uppercase">
                              <tr>
                                <th>SR NO</th>
                                <th>COMPANY</th>
                                <th>CUSTOMER NAME</th>
                                <th>ORDER NUMBER</th>
                                <th>ITEM CODE</th>
                                <th>DRG NUMBER</th>
                                <th>PRODUCT NAME</th>
                                <th>QTY</th>
                                <th>UNIT</th>
                                <th>PRICE</th>
                                <th>GST / SEZ</th>
                                <th>TOTAL PRICE</th>
                                <th>CREATE DATE & TIME</th>
                                <th>DELIVERY DATE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>LUPIN LTD</td>
                                <td>RAHUL SHARMA</td>
                                <td>215425</td>
                                <td>2025</td>
                                <td>AEGD-1236</td>
                                <td>SS CHAIR</td>
                                <td>5</td>
                                <td>1000</td>
                                <td>900</td>
                                <td>GST</td>
                                <td>5900</td>
                                <td>19-06-2025 12:44 AM</td>
                                <td>26-06-2025</td>
                                <td>
                                  <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-info"
                                        href="#"
                                      >
                                        <i class="ri-eye-fill align-middle me-1"></i>
                                        View
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-warning"
                                        href="#editModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-pencil-fill align-middle me-1"></i>
                                        Edit
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-success"
                                        href="#"
                                      >
                                        <i class="ri-download-2-fill align-middle me-1"></i>
                                        Download
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-primary"
                                        href="#"
                                      >
                                        <i class="ri-printer-fill align-middle me-1"></i>
                                        Print
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-danger"
                                        href="#deleteModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-delete-bin-fill align-middle me-1"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Delivery */}
                          <table
                            class="table table-nowrap tab-pane align-middle"
                            id="delivered"
                          >
                            <thead class="table-light">
                              <tr class="text-uppercase">
                                <th>SR NO</th> <th>COMPANY</th>
                                <th>CUSTOMER NAME</th> <th>CITY</th>
                                <th>ITEM CODE</th> <th>STATE</th>
                                <th>PRODUCT NAME</th> <th>QTY</th>
                                <th>AMOUNT</th> <th>DELIVERY DATE TIME</th>
                                <th>TRANSPORT VEHICLE NO</th>
                                <th>DRIVER NAME</th> <th>DRIVER NUMBER</th>
                                <th>DELIVERY STATUS</th> <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td> <td>LUPIN LTD</td>
                                <td>RAHUL SHARMA</td> <td>PITHAMPUR</td>
                                <td>2025</td> <td>MP</td> <td>SS CHAIR</td>
                                <td>5</td> <td>5900</td>
                                <td>19-06-2025 12:44 AM</td> <td>MP09AS2452</td>
                                <td>JITU</td> <td>82259424242</td>
                                <td>DELIVERED</td>
                                <td>
                                  <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item">
                                      <a
                                        href="javascript:void(0);"
                                        class="btn btn-sm btn-soft-primary"
                                      >
                                        View
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        href="#editModal"
                                        class="btn btn-sm btn-soft-warning"
                                        data-bs-toggle="modal"
                                      >
                                        Edit
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        href="mailto:?subject=Delivery%20Inquiry"
                                        class="btn btn-sm btn-soft-success"
                                      >
                                        Mail Inq
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Pick up */}
                          <table
                            class="table table-nowrap tab-pane align-middle"
                            id="pickups"
                          >
                            <thead class="text-muted table-light">
                              <tr class="text-uppercase">
                                <th>SR NO</th> <th>COMPANY</th>
                                <th>CUSTOMER NAME</th> <th>CITY</th>
                                <th>ITEM CODE</th> <th>STATE</th>
                                <th>TOTAL AMOUNT</th> <th>DELIVERY STATUS</th>
                                <th>TRASPORT VEHICLE NO</th>
                                <th>DRIVER NAME</th> <th>DRIVER NUMBER</th>
                                <th>PAYMENT</th> <th>PAYMENT STATUS</th>
                               
                              </tr>
                            </thead>
                            <tbody class="list form-check-all">
                              <tr>
                                <td>1</td> <td class="company">LUPIN LTD</td>
                                <td class="customer_name">RAHUL SHARMA</td>
                                <td class="city">PITHAMPUR</td>
                                <td class="item_code">2025</td>
                                <td class="state">MP</td>
                                <td class="total_amount">5900</td>
                                <td class="delivery_status">PICKUP</td>
                                <td class="vehicle_no">MP09AS2452</td>
                                <td class="driver_name">JITU</td>
                                <td class="driver_number">82259424242</td>
                                <td class="payment">2000</td>
                                <td class="payment_status">DONE</td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Return */}
                          <table
                            class="table table-nowrap tab-pane align-middle"
                            id="returns"
                          >
                            <thead className="text-muted table-light">
                              <tr className="text-uppercase">
                                <th>SR NO</th>
                                <th>COMPANY</th>
                                <th>CUSTOMER NAME</th>
                                <th>RETURN</th>
                                <th>ITEM CODE</th>
                                <th>DRG NUMBER</th>
                                <th>PRODUCT NAME</th>
                                <th>QTY</th>
                                <th>UNIT</th>
                                <th>PRICE</th>
                                <th>GST / SEZ</th>
                                <th>TOTAL PRICE</th>
                                <th>CREATE DATE & TIME</th>
                                <th>DELIVERY DATE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody className="list form-check-all">
                              <tr>
                                <td>1</td>
                                <td>LUPIN LTD</td>
                                <td>RAHUL SHARMA</td>
                                <td>AEGI-9875</td>
                                <td>2025</td>
                                <td>AEGD-1236</td>
                                <td>SS CHAIR</td>
                                <td>5</td>
                                <td>1000</td>
                                <td>900</td>
                                <td>GST</td>
                                <td>5900</td>
                                <td>19-06-2025 12:44 AM</td>
                                <td>26-06-2025</td>
                                <td>
                                  <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-info"
                                        href="#"
                                      >
                                        <i class="ri-eye-fill align-middle me-1"></i>
                                        View
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-warning"
                                        href="#editModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-pencil-fill align-middle me-1"></i>
                                        Edit
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-success"
                                        href="#"
                                      >
                                        <i class="ri-download-2-fill align-middle me-1"></i>
                                        Download
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-primary"
                                        href="#"
                                      >
                                        <i class="ri-printer-fill align-middle me-1"></i>
                                        Print
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-danger"
                                        href="#deleteModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-delete-bin-fill align-middle me-1"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Cancelled */}
                          <table
                            className="table table-nowrap tab-pane align-middle"
                            id="cancelled"
                          >
                            <thead className="text-muted table-light">
                              <tr className="text-uppercase">
                                <th>SR NO</th>
                                <th>COMPANY</th>
                                <th>CUSTOMER NAME</th>
                                <th>ORDER CANCEL</th>
                                <th>ITEM CODE</th>
                                <th>DRG NUMBER</th>
                                <th>PRODUCT NAME</th>
                                <th>QTY</th>
                                <th>UNIT</th>
                                <th>PRICE</th>
                                <th>GST / SEZ</th>
                                <th>TOTAL PRICE</th>
                                <th>CREATE DATE & TIME</th>
                                <th>DELIVERY DATE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody className="list form-check-all">
                              <tr>
                                <td>1</td>
                                <td>LUPIN LTD</td>
                                <td>RAHUL SHARMA</td>
                                <td>215425</td>
                                <td>2025</td>
                                <td>AEGD-1236</td>
                                <td>SS CHAIR</td>
                                <td>5</td>
                                <td>1000</td>
                                <td>900</td>
                                <td>GST</td>
                                <td>5900</td>
                                <td>19-06-2025 12:44 AM</td>
                                <td>26-06-2025</td>
                                <td>
                                  <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-info"
                                        href="#"
                                      >
                                        <i class="ri-eye-fill align-middle me-1"></i>
                                        View
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-warning"
                                        href="#editModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-pencil-fill align-middle me-1"></i>
                                        Edit
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-success"
                                        href="#"
                                      >
                                        <i class="ri-download-2-fill align-middle me-1"></i>
                                        Download
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-primary"
                                        href="#"
                                      >
                                        <i class="ri-printer-fill align-middle me-1"></i>
                                        Print
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-danger"
                                        href="#deleteModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-delete-bin-fill align-middle me-1"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/* Free of cost */}
                          <table
                            className="table table-nowrap tab-pane align-middle"
                            id="freeofcost"
                          >
                            <thead className="text-muted table-light">
                              <tr className="text-uppercase">
                                <th>SR NO</th>
                                <th>COMPANY</th>
                                <th>CUSTOMER NAME</th>
                                <th>FREE AND COST</th>
                                <th>PRODUCT NAME</th>
                                <th>QTY</th>
                                <th>CREATE DATE & TIME</th>
                                <th>DELIVERY DATE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody className="list form-check-all">
                              <tr>
                                <td>1</td>
                                <td>LUPIN LTD</td>
                                <td>RAHUL SHARMA</td>
                                <td>AEGFNC-522</td>
                                <td>SS CHAIR</td>
                                <td>5</td>
                                <td>19-06-2025 12:44 AM</td>
                                <td>26-06-2025</td>
                                 <td>
                                  <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-info"
                                        href="#"
                                      >
                                        <i class="ri-eye-fill align-middle me-1"></i>
                                        View
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-warning"
                                        href="#editModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-pencil-fill align-middle me-1"></i>
                                        Edit
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-success"
                                        href="#"
                                      >
                                        <i class="ri-download-2-fill align-middle me-1"></i>
                                        Download
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-primary"
                                        href="#"
                                      >
                                        <i class="ri-printer-fill align-middle me-1"></i>
                                        Print
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-danger"
                                        href="#deleteModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-delete-bin-fill align-middle me-1"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          {/* RGP */}
                          <table
                            class="table table-nowrap tab-pane align-middle"
                            id="gatepass"
                          >
                            <thead className="text-muted table-light">
                              <tr className="text-uppercase">
                                <th>SR NO</th>
                                <th>COMPANY</th>
                                <th>CUSTOMER NAME</th>
                                <th>RGP NO</th>
                                <th>PRODUCT NAME</th>
                                <th>QTY</th>
                                <th>CREATE DATE & TIME</th>
                                <th>DELIVERY DATE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody className="list form-check-all">
                              <tr>
                                <td>1</td>
                                <td>LUPIN LTD</td>
                                <td>RAHUL SHARMA</td>
                                <td>AEGRGP548</td>
                                <td>SS CHAIR</td>
                                <td>5</td>
                                <td>19-06-2025 12:44 AM</td>
                                <td>26-06-2025</td>
                                  <td>
                                  <ul class="list-inline hstack gap-2 mb-0">
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-info"
                                        href="#"
                                      >
                                        <i class="ri-eye-fill align-middle me-1"></i>
                                        View
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-warning"
                                        href="#editModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-pencil-fill align-middle me-1"></i>
                                        Edit
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-success"
                                        href="#"
                                      >
                                        <i class="ri-download-2-fill align-middle me-1"></i>
                                        Download
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-primary"
                                        href="#"
                                      >
                                        <i class="ri-printer-fill align-middle me-1"></i>
                                        Print
                                      </a>
                                    </li>
                                    <li class="list-inline-item">
                                      <a
                                        class="btn btn-sm btn-soft-danger"
                                        href="#deleteModal"
                                        data-bs-toggle="modal"
                                      >
                                        <i class="ri-delete-bin-fill align-middle me-1"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      class="modal fade"
                      id="showModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header bg-light p-3">
                            <h5 class="modal-title" id="exampleModalLabel">
                              &nbsp;
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                              id="close-modal"
                            ></button>
                          </div>
                          <form class="tablelist-form" autocomplete="off">
                            <div class="modal-body">
                              <input type="hidden" id="id-field" />

                              <div class="mb-3" id="modal-id">
                                <label for="orderId" class="form-label">
                                  ID
                                </label>
                                <input
                                  type="text"
                                  id="orderId"
                                  class="form-control"
                                  placeholder="ID"
                                  readonly=""
                                />
                              </div>

                              <div class="mb-3">
                                <label
                                  for="customername-field"
                                  class="form-label"
                                >
                                  Customer Name
                                </label>
                                <input
                                  type="text"
                                  id="customername-field"
                                  class="form-control"
                                  placeholder="Enter name"
                                  required=""
                                />
                              </div>

                              <div class="mb-3">
                                <label
                                  for="productname-field"
                                  class="form-label"
                                >
                                  Product
                                </label>
                                <div
                                  class="choices"
                                  data-type="select-one"
                                  tabindex="0"
                                  role="combobox"
                                  aria-autocomplete="list"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <div class="choices__inner">
                                    <select
                                      class="form-control choices__input"
                                      data-trigger=""
                                      name="productname-field"
                                      id="productname-field"
                                      required=""
                                      hidden=""
                                      tabindex="-1"
                                      data-choice=""
                                    >
                                      <option value="" selected="">
                                        Product
                                      </option>
                                      <option value="Puma Tshirt">
                                        Puma Tshirt
                                      </option>
                                      <option value="Adidas Sneakers">
                                        Adidas Sneakers
                                      </option>
                                      <option value="350 ml Glass Grocery Container">
                                        350 ml Glass Grocery Container
                                      </option>
                                      <option value="American egale outfitters Shirt">
                                        American egale outfitters Shirt
                                      </option>
                                      <option value="Galaxy Watch4">
                                        Galaxy Watch4
                                      </option>
                                      <option value="Apple iPhone 12">
                                        Apple iPhone 12
                                      </option>
                                      <option value="Funky Prints T-shirt">
                                        Funky Prints T-shirt
                                      </option>
                                      <option value="USB Flash Drive Personalized with 3D Print">
                                        USB Flash Drive Personalized with 3D
                                        Print
                                      </option>
                                      <option value="Oxford Button-Down Shirt">
                                        Oxford Button-Down Shirt
                                      </option>
                                      <option value="Classic Short Sleeve Shirt">
                                        Classic Short Sleeve Shirt
                                      </option>
                                      <option value="Half Sleeve T-Shirts (Blue)">
                                        Half Sleeve T-Shirts (Blue)
                                      </option>
                                      <option value="Noise Evolve Smartwatch">
                                        Noise Evolve Smartwatch
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div class="mb-3">
                                <label for="date-field" class="form-label">
                                  Order Date
                                </label>
                                <input
                                  type="text"
                                  id="date-field"
                                  class="form-control flatpickr-input"
                                  data-provider="flatpickr"
                                  required=""
                                  data-date-format="d M, Y"
                                  data-enable-time=""
                                  placeholder="Select date"
                                  readonly="readonly"
                                />
                              </div>

                              <div class="row gy-4 mb-3">
                                <div class="col-md-6">
                                  <div>
                                    <label
                                      for="amount-field"
                                      class="form-label"
                                    >
                                      Amount
                                    </label>
                                    <input
                                      type="text"
                                      id="amount-field"
                                      class="form-control"
                                      placeholder="Total amount"
                                      required=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <label
                                  for="delivered-status"
                                  class="form-label"
                                >
                                  Delivery Status
                                </label>
                                <div
                                  class="choices"
                                  data-type="select-one"
                                  tabindex="0"
                                  role="combobox"
                                  aria-autocomplete="list"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <div class="choices__inner">
                                    <select
                                      class="form-control choices__input"
                                      data-trigger=""
                                      name="delivered-status"
                                      required=""
                                      id="delivered-status"
                                      hidden=""
                                      tabindex="-1"
                                      data-choice="active"
                                    >
                                      <option value="" selected="">
                                        Delivery Status
                                      </option>
                                      <option value="Pending">Pending</option>
                                      <option value="Inprogress">
                                        Inprogress
                                      </option>
                                      <option value="Cancelled">
                                        Cancelled
                                      </option>
                                      <option value="Pickups">Pickups</option>
                                      <option value="Delivered">
                                        Delivered
                                      </option>
                                      <option value="Returns">Returns</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <div class="hstack gap-2 justify-content-end">
                                <button
                                  type="button"
                                  class="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  class="btn btn-success"
                                  id="add-btn"
                                >
                                  Add Order
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-success"
                                  id="edit-btn"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </form>
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
      <Footer />
    </div>
  );
};

export default AllOrders;
