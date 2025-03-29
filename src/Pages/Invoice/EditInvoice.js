import React, { useEffect, useRef, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomerList } from "../../Redux/crmSlices/customerSlice/CustomerSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const EditInvoice = () => {
  const [items, setItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalKG, setTotalKG] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [pricePerUnit, setpricePerUnit] = useState(0);
  const [pdfBlobState, setPdfBlobState] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bankDetail, setBankDetail] = useState({
    bankName: "",
    accName: "",
    accNo: "",
    ifsc: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
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
  const [list, setList] = useState([]);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [transportation, setTransportation] = useState(0);
  const [gst, setGst] = useState(0);
  const [discount, setDiscount] = useState(0);
  const addDetail = (data) => {
    console.log(data);
    setTotalQuantity(data.quantity);
    setTotalKG(data.kgPerUnit);
    setpricePerUnit(data.pricePerUnit);
    setList((prevList) => [...prevList, data]);
    const totalWithoutDiscount = data.pricePerUnit * data.quantity;
    setTotal(totalWithoutDiscount);
    reset();
  };

  const removeProduct = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  // Function to apply Transportation cost to the total
  const addTransportation = (transportation) => {
    const newTotal = total + transportation;
    setTotal(newTotal);
    setTransportation(0);
  };

  // Function to apply Discount Percentage
  const addDiscount = (discount) => {
    const discountAmount = (discount / 100) * total;
    const finalTotal = total - discountAmount;
    setTotal(finalTotal);
    setDiscountPercentage(0);
  };
  // Function to apply GST
  const addGST = (gst) => {
    const gstAmount = (gst / 100) * total;
    const finalTotalWithGST = total + gstAmount;
    setTotal(finalTotalWithGST);
  };
  return (
   
    <div>
        <Header/>
        <Sidebar/>
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
                          <div className="tab-pane active">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Item Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter item"
                                    {...register("itemName", {
                                      required: "Item Name is required",
                                    })}
                                  />
                                  {errors.itemName && (
                                    <p className="text-danger">
                                      {errors.itemName.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="manufacturer-brand-input"
                                  >
                                    HSN Code
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="manufacturer-brand-input"
                                    placeholder="Enter HSN Code"
                                    {...register("hsnCode", {
                                      required: "HSN Code is required",
                                    })}
                                  />
                                  {errors.hsnCode && (
                                    <p className="text-danger">
                                      {errors.hsnCode.message}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-3 col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="stocks-input"
                                  >
                                    Quantity
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="stocks-input"
                                    placeholder="Quantity"
                                    required
                                    {...register("quantity", {
                                      required: "Quantity is required",
                                    })}
                                  />
                                  {errors.quantity && (
                                    <p className="text-danger">
                                      {errors.quantity.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-lg-3 col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    Price Per Unit
                                  </label>
                                  <div className="input-group has-validation mb-3">
                                    <span
                                      className="input-group-text"
                                      id="product-price-addon"
                                    >
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
                                      {...register("pricePerUnit", {
                                        required: "Price Per Unit is required",
                                      })}
                                    />
                                    {errors.pricePerUnit && (
                                      <p className="text-danger">
                                        {errors.pricePerUnit.message}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-discount-input"
                                  >
                                    KG/PC
                                  </label>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text"
                                      id="product-discount-addon"
                                    >
                                      %
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="product-discount-input"
                                      placeholder="Enter KG/PC"
                                      aria-label="discount"
                                      aria-describedby="product-discount-addon"
                                      {...register("kgPerUnit")}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="orders-input"
                                  >
                                    Unit
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="orders-input"
                                    placeholder="Unit"
                                    required
                                    {...register("unitType", {
                                      required: "Unit is required",
                                    })}
                                  />
                                  {errors.unitType && (
                                    <p className="text-danger">
                                      {errors.unitType.message}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="text-end mb-3">
                            <button
                              type="submit"
                              className="btn btn-success w-sm"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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
                                  <p
                                    className="link-danger fw-bold cursor-pointer"
                                    onClick={() => removeProduct(index)}
                                  >
                                    Remove
                                  </p>
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
                </div>
                <div class="col-lg-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInvoice;
