import React, { useEffect, useRef, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomerList } from "../../Redux/crmSlices/customerSlice/CustomerSlice";
import { useForm } from 'react-hook-form';

const TestingInvoice = () => {
     const [list, setList] = useState([]);
    
    const [shippingAddress, setShippingAddress] = useState("");
      const dispatch = useDispatch();
      const { register, handleSubmit, formState: { errors }, reset } = useForm();
      const { dta, count, loading, response } = useSelector((state) => {
        return {
          response: state.rootReducer.CustomerSlice?.data?.data,
          count: state.rootReducer.CustomerSlice?.data?.count,
          loading: state.rootReducer.CustomerSlice?.loading,
        };
      });
    
      useEffect(() => {
        dispatch(GetCustomerList()); // Fetch customer data when component mounts
      }, [dispatch]);
      
      const addDetail = (data) => {
        setList((prevList) => [...prevList, data]);
        reset();
      };
    
      const removeProduct = (index) => {
        setList(list.filter((_, i) => i !== index));
      };
      const handleSelectChange = (event) => {
        const selectedCustomer = response.find(
          (customer) => customer.c_fullname === event.target.value
        );
        if (selectedCustomer) {
          setShippingAddress(selectedCustomer.c_address);
        }
      };
  return (
    <div>
       <Header />
      <Sidebar />
      <div>
        <div class="main-content">
          <div class="page-content">
            <div class="container-fluid">
              <div
                id="createproduct-form"
                autocomplete="off"
                class="needs-validation"
                novalidate=""
              >
                <div class="row">
                  <div class="col-lg-8">
                    {/* <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label" for="product-title-input">Product Title</label>
                                <input type="hidden" class="form-control" id="formAction" name="formAction" value="add"/>
                                <input type="text" class="form-control d-none" id="product-id-input"/>
                                <input type="text" class="form-control" id="product-title-input" value="" 
                                placeholder="Enter product title" required=""/>
                                <div class="invalid-feedback">Please Enter a product title.</div>
                            </div>
                            <div>
                                <label>Product Description</label>

                                <div id="ckeditor-classic"style={{display:"none"}}>
                                    <p>Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material composition is 100% organic cotton. This is one of the world’s leading designer lifestyle brands and is internationally recognized for celebrating the essence of classic American cool style, featuring preppy with a twist designs.</p>
                                    <ul>
                                        <li>Full Sleeve</li>
                                        <li>Cotton</li>
                                        <li>All Sizes available</li>
                                        <li>4 Different Color</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
  // */}
                    {/*  */}
                    <div class="card">
                      <div class="card-header">
                        {/* <h5 class="card-title mb-0">Publish</h5> */}
                      </div>
                      <div class="card-body ">
                        <div class="mb-3">
                          <label
                            for="choices-publish-status-input"
                            class="form-label"
                          >
                            Billing Address
                          </label>

                          <div
                            class="choices"
                            data-type="select-one"
                            tabindex="0"
                            role="listbox"
                            aria-label="Status"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <div className="choices__inner">
                              {loading ? (
                                // Show a loading spinner or any indicator while data is loading
                                <div>Loading...</div>
                              ) : (
                                <select
                                  className="form-select choices__input"
                                  id="choices-publish-status-input"
                                  data-choices=""
                                  data-choices-search-false=""
                                  tabIndex="-1"
                                  data-choice="active"
                                  onChange={handleSelectChange}
                                >
                                  {response && response.length > 0 ? (
                                    response.map((customer, key) => (
                                      <option
                                        key={key}
                                        value={customer.c_fullname}
                                      >
                                        {customer.c_fullname}
                                      </option>
                                    ))
                                  ) : (
                                    <option disabled>No Data Found</option>
                                  )}
                                </select>
                              )}
                            </div>

                            <div
                              class="choices__list choices__list--dropdown"
                              aria-expanded="false"
                            >
                              <div class="choices__list" role="listbox">
                                <div
                                  id="choices--choices-publish-status-input-item-choice-3"
                                  class="choices__item choices__item--choice choices__item--selectable is-highlighted"
                                  role="option"
                                  data-choice=""
                                  data-id="3"
                                  data-value="Draft"
                                  data-select-text="Press to select"
                                  data-choice-selectable=""
                                  aria-selected="true"
                                >
                                  Draft
                                </div>
                                <div
                                  id="choices--choices-publish-status-input-item-choice-1"
                                  class="choices__item choices__item--choice is-selected choices__item--selectable"
                                  role="option"
                                  data-choice=""
                                  data-id="1"
                                  data-value="Published"
                                  data-select-text="Press to select"
                                  data-choice-selectable=""
                                >
                                  Published
                                </div>
                                <div
                                  id="choices--choices-publish-status-input-item-choice-2"
                                  class="choices__item choices__item--choice choices__item--selectable"
                                  role="option"
                                  data-choice=""
                                  data-id="2"
                                  data-value="Scheduled"
                                  data-select-text="Press to select"
                                  data-choice-selectable=""
                                >
                                  Scheduled
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card-body">
                          <h5 class="card-title mb-4">Shipping Address</h5>
                          <div class="d-flex flex-wrap gap-2 fs-16 display-5">
                            <div class="badge fw-medium bg-secondary-subtle text-secondary display-1">
                              <i class="ri-map-pin-user-line me-1 text-dark text-opacity-75 fs-16 align-middle"></i>
                              {shippingAddress ||
                                "Select a customer to view address"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-header">
                        <ul
                          class="nav nav-tabs-custom card-header-tabs border-bottom-0"
                          role="tablist"
                        >
                          <li class="nav-item" role="presentation">
                            <a
                              class="nav-link active"
                              data-bs-toggle="tab"
                            
                              role="tab"
                              aria-selected="true"
                            >
                              Add
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="card-body">
                        <div class="tab-content">
                        <form onSubmit={handleSubmit(addDetail)}>
        <div className="tab-pane active" >
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label" >
                  Item Name
                </label>
                <input
                  type="text"
                  className="form-control"
                 
                  placeholder="Enter item"
                  {...register('itemName', { required: 'Item Name is required' })}
                />
                {errors.itemName && <p className="text-danger">{errors.itemName.message}</p>}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="manufacturer-brand-input">
                  HSN Code
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="manufacturer-brand-input"
                  placeholder="Enter HSN Code"
                  {...register('hsnCode', { required: 'HSN Code is required' })}
                />
                {errors.hsnCode && <p className="text-danger">{errors.hsnCode.message}</p>}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="stocks-input">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="stocks-input"
                  placeholder="Quantity"
                  required
                  {...register('quantity', { required: 'Quantity is required' })}
                />
                {errors.quantity && <p className="text-danger">{errors.quantity.message}</p>}
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="product-price-input">
                  Price Per Unit
                </label>
                <div className="input-group has-validation mb-3">
                  <span className="input-group-text" id="product-price-addon">
                    Rs
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="product-price-input"
                    placeholder="Enter Price Per Unit"
                    aria-label="Price"
                    aria-describedby="product-price-addon"
                    required
                    {...register('pricePerUnit', { required: 'Price Per Unit is required' })}
                  />
                  {errors.pricePerUnit && <p className="text-danger">{errors.pricePerUnit.message}</p>}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="product-discount-input">
                  KG/PC
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="product-discount-addon">
                    %
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="product-discount-input"
                    placeholder="Enter KG/PC"
                    aria-label="discount"
                    aria-describedby="product-discount-addon"
                    {...register('kgPerUnit')}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="orders-input">
                  Unit
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="orders-input"
                  placeholder="Unit"
                  required
                  {...register('unitType', { required: 'Unit is required' })}
                />
                {errors.unitType && <p className="text-danger">{errors.unitType.message}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mb-3">
          <button type="submit" className="btn btn-success w-sm">
            Submit
          </button>
        </div>
      </form>


                        </div>
                      </div>
                    </div>

                    {/* <div class="text-end mb-3">
                      <button onClick={addItem} type="submit" class="btn btn-success w-sm">
                        Submit
                      </button>
                    </div> */}
                    {/* Table */}
                    <div className="card">
                      <div className="card-header">
                        <table className="table table-nowrap">
                          <thead>
                            <tr>
                              <th scope="col">Item Name</th>
                              <th scope="col">HSN Code</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Price Per Unit</th>
                              <th scope="col">KG/PC</th>
                              <th scope="col">Unit</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {list.length > 0 ? (
                              list.map((product, index) => (
                                <tr key={index}>
                                  <th scope="row">
                                    <a href="#" className="fw-semibold">
                                      {product.itemName}
                                    </a>
                                  </th>
                                  <td>{product.hsnCode}</td>
                                  <td>{product.quantity}</td>
                                  <td>{product.pricePerUnit}</td>
                                  <td>{product.kgPerUnit}</td>
                                  <td>{product.unitType}</td>
                                  <td>
                                    <a
                                      href="#"
                                      className="link-danger fw-bold"
                                      onClick={() => removeProduct(index)}
                                    >
                                      Remove
                                    </a>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="7" className="text-center">
                                  No Data Found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Table end */}
                    <div className="card">
                      <div class="card-header">
                        <div className="d-flex justify-content-between">
                          <h6>GST No: 1234567890</h6>
                          <h6>MSME No: 9876543210</h6>
                        </div>
                        <h5
                          class="card-title mb-0 "
                          style={{ marginTop: "20px" }}
                        >
                          Terms and Conditions
                        </h5>
                      </div>
                      <div class="card-body ">
                        <div class="mb-3">
                          <ul class="text-muted vstack gap-2">
                            <li>This Quotation will be valid for 14 days.</li>
                            <li>
                              Delivery time 3 to 4 week after PO confirm
                              receiving.
                            </li>
                            <li>50% payment advance.</li>
                            <li>GST 18% Extra.</li>
                            <li>Transportation charges Free of cost.</li>
                            <li>Quote as per same Qty.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4">
                    {/* Bank Detail */}
                    <div class="col-lg-12  ">
                      <div class="form-check card-radio">
                        <input
                          id="shippingAddress01"
                          name="shippingAddress"
                          type="radio"
                          class="form-check-input"
                          checked=""
                        />
                        <label class="form-check-label" for="shippingAddress01">
                          <span class="mb-4 fs-2 fw-semibold d-block text-muted text-uppercase">
                            Bank Details
                          </span>

                          <span class="fs-4 mb-2 d-block ">HDFC Bank </span>
                          <div className="d-flex justify-content-between">
                            <div>
                              {" "}
                              <span class="text-muted fw-normal text-wrap mb-1 d-block fs-5 ">
                                Account No - 854652587598
                              </span>
                              <span class="text-muted fw-normal d-block fs-5">
                                IFC - 905098437098096
                              </span>
                            </div>
                            <div>
                              {" "}
                              <span class="text-muted fw-normal text-wrap mb-1 d-block fs-5">
                                Branch Name - xxxxxxx
                              </span>
                              <span class="text-muted fw-normal d-block fs-5">
                                Mob No - 123456789
                              </span>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div
                      class="col-lg-12 col-sm-6 "
                      style={{ marginTop: "40px" }}
                    ></div>
                    {/* Bank detail */}
                    {/* Total Amount  */}
                    <div className="card">
                      <div class="card-header">
                        <h5 class="card-title mb-0">Total</h5>
                      </div>
                      <tr class="border-top border-top-dashed">
                        <td colspan="3"></td>
                        <td colspan="2" class="fw-medium p-0">
                          <table class="table table-borderless mb-0">
                            <tbody>
                              <tr>
                                <td>Total Quantity :</td>
                                <td class="text-end">5</td>
                              </tr>
                              <tr>
                                <td>Total KG:</td>
                                <td class="text-end">-5</td>
                              </tr>
                              <tr>
                                <td>Subtotal :</td>
                                <td class="text-end">55</td>
                              </tr>
                              <tr>
                                <td>Discount :</td>
                                <td class="text-end">10%</td>
                              </tr>
                              <tr class="border-top border-top-dashed">
                                <th scope="row">Total :</th>
                                <th class="text-end">RS 525512</th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </div>
                    {/* Total Amount  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <button onClick={addItem}>Add Item</button>
        <PDFViewer style={{ width: "800px", height: "500px" }}>
          <PDFContent />
        </PDFViewer> */}
      </div>
    </div>
  )
}

export default TestingInvoice
