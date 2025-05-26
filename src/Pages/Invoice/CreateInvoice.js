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

const CreateInvoice = () => {
  const [items, setItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState("");
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

  useEffect(()=>{
    createImageBitmap.href.local = "machine not working "
    const data = [{"name":"product1 " ,"name1":"get prodcu"}]
    Object.keys("name =>","get data ")
  })

  useEffect(() => {
    dispatch(GetCustomerList()); // Fetch customer data when component mounts
  }, [dispatch]);

  const handleSelectChange = (event) => {
    const selectedCustomer = response.find(
      (customer) => customer.c_fullname === event.target.value
    );
    if (selectedCustomer) {
      setShippingAddress(selectedCustomer.c_address);
    }
  };

  const [branding, setBranding] = useState({
    companyName: "Advance engineering",
    subLine: "Our work is a new identity of engineering and technology",
    logo: "https://via.placeholder.com/150", // Replace with your logo URL
    address:
      "Head office : N. H. -47 Choudhary Market Tejaji Nagar Khandwa Road Indore 452001 (MP)",
    subAddress:
      "sales@advanceengineerings.com | support@advanceengineerings.com",
    phone: "+91 94253 11684 | +91 94253 11328",
    website: "www.advanceengineerings.com",
    products: [
      "All types of conveyors",
      "Bottle line machine change parts & blister packing machine change parts",
      "Mixer granulator",
      "pharmaceutical instruments",
      "Machine spare parts & new research and development.",
    ],
  });
  const [details, setDetails] = useState({
    name: "",
    date: "",
    poNo: "",
    invoiceNumber: "",
    challanNo: "",
  });
  // const [taxRate, setTaxRate] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalKG, setTotalKG] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [pricePerUnit, setpricePerUnit] = useState(0);
  const [pdfBlobState, setPdfBlobState] = useState("");

  const printRef = useRef(null);

  const addItem = () => {
    setItems([
      ...items,
      { name: "", hsn: "", quantity: 0, unit: "", kg: 0, price: 0, total: 0 },
    ]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    updateTotals(updatedItems);
    setItems(updatedItems);
  };

  const handleChange = (index, field, value) => {
    const updatedItems = [...items];
    if (["quantity", "price", "kg"].includes(field)) {
      updatedItems[index][field] = parseFloat(value) || 0;
    } else {
      updatedItems[index][field] = value;
    }
    updatedItems[index].total =
      updatedItems[index].quantity * updatedItems[index].price;
    updateTotals(updatedItems);
    setItems(updatedItems);
  };

  const updateTotals = (updatedItems) => {
    const newSubtotal = updatedItems.reduce((acc, item) => acc + item.total, 0);
    const newTotalQuantity = updatedItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const newTotalKG = updatedItems.reduce((acc, item) => acc + item.kg, 0);
    setSubtotal(newSubtotal);
    setTotalQuantity(newTotalQuantity);
    setTotalKG(newTotalKG);
    const discountedSubtotal = newSubtotal - 50;
    setTotal(discountedSubtotal);
  };

  const handlePrint = () => {
    const printContent = printRef.current;
    const printWindow = window.open("", "_blank");

    // Step 1: Generate the PDF
    html2canvas(printContent).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");

      // Adjust width and height for A4 page
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Convert the PDF to a Blob
      const pdfBlob = pdf.output("blob");

      // Optional: Convert the Blob to a downloadable URL for testing
      const blobURL = URL.createObjectURL(pdfBlob);
      console.log("Blob URL: ", pdfBlob);
      // setPdfBlobState(pdfBlob);

      const formData = new FormData();
      formData.append("quo_name", details.name);
      formData.append("quo_date", details.date);
      formData.append("quo_subject", details.subject);
      formData.append("quo_number", details.quotationNumber);
      formData.append("quo_description", JSON.stringify(items));
      formData.append("quo_quantity", totalQuantity);
      formData.append("quo_kg", totalKG);
      formData.append("quo_subtotal", subtotal);
      // formData.append("quo_discount", discount);
      formData.append("quo_total", total);
      formData.append("quo_pdf", pdfBlob);

      // Send to API
      fetch("https://api.advanceengineerings.com/crm/quotation/add-quotation", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("PDF uploaded successfully:", data);
          // alert("Quotation data uploaded successfully!");
        })
        .catch((error) => {
          console.error("Error uploading PDF:", error);
          alert("Failed to upload the quotation PDF.");
        });
      // Step 2: Upload the PDF
      // const formData = new FormData();
      // formData.append("quo_pdf", pdfBlob, "quotation.pdf");
      // formData.append("quo_name", "testing");

      // Send to API
      // fetch("https://api.advanceengineerings.com/crm/quotation/add-quotation", {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("PDF uploaded successfully:", data);
      //     alert("Quotation PDF uploaded successfully!");
      //   })
      //   .catch((error) => {
      //     console.error("Error uploading PDF:", error);
      //     alert("Failed to upload the quotation PDF.");
      //   });
    });

    printWindow.document.write(`
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
              padding: 0;
            }
            .branding, .tableHeader, .tableRow, .summaryRow, .terms {
              margin-bottom: 15px;
            }
            .details {
             display: "flex", justifyContent: "space-between",margin-bottom: 15px;
            }
            .tableHeader, .tableRow {
              display: flex;
              justify-content: space-between;
            }
            .tableHeader {
              font-weight: bold;
              background-color: #f0f0f0;
              padding: 10px;
            }
            .summaryRow, .terms p {
              margin: 5px 0;
            }
            .branding img {
              height: 100px;
              width: auto;
            }
                input {
              border: none;
              background: none;
              pointer-events: none;
              width: 150px;
              text-align: left;
            }
          </style>
        </head>
        <body>
          ${printContent.outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const handleSave = () => {


    const formData = new FormData();
    formData.append("inv_name", details.name);
    formData.append("inv_date", details.date);
    formData.append("inv_po_no", details.poNo);
    formData.append("inv_number", details.invoiceNumber);
    formData.append("inv_challan", details.challanNo);
    formData.append("inv_description", JSON.stringify(items));
    formData.append("inv_package", totalKG);
    formData.append("inv_quantity", totalQuantity);
    formData.append("inv_subtotal", subtotal);
    formData.append("inv_transport",transportation );
    formData.append("inv_gst", gst);
    formData.append("inv_bank", JSON.stringify(bankDetail));
    formData.append("inv_discount", discount);
    formData.append("inv_total", total);

    // Send to API
    fetch("https://api.advanceengineerings.com/crm/invoice/add-invoice", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
       navigate("/list-invoice")
      })
      .catch((error) => {
        console.error("Error uploading PDF:", error);
        alert("Failed to upload the Invoice PDF.");
      });
  }
  const [productData, setProductData] = useState({
    itemName: "",
    hsnCode: "",
    quantity: "",
    pricePerUnit: "",
    kgPerUnit: "",
    unitType: "",
  });

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
  }
  // Function to apply GST
  const addGST = (gst) => {
    const gstAmount = (gst / 100) * total;
    const finalTotalWithGST = total + gstAmount;
    setTotal(finalTotalWithGST);
  };
  return (
    <>
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
                    {/* New Form   */}
                    <div className="card">
                      <div class="card-header">Add</div>
                      <div class="card-body ">
                        <form>
                          <div className="row">
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstNameinput"
                                  className="form-label"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your name"
                                  id="firstNameinput"
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="lastNameinput"
                                  className="form-label"
                                >
                                  Invoice NO
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Invoice NO"
                                  id="lastNameinput"
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      invoiceNumber: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>

                            {/*end col*/}
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Date
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="+(245) 451 45123"
                                  id="phonenumberInput"
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      date: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="emailidInput"
                                  className="form-label"
                                >
                                Challan No
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Challan No"
                                  id="emailidInput"
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      challanNo: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>

                            {/*end col*/}
                            <div className="col-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="emailidInput"
                                  className="form-label"
                                >
                                PO No
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="PO No"
                                  id="emailidInput"
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      poNo: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          {/*end row*/}
                        </form>
                      </div>
                    </div>

                    {/* New form  */}

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
                                          required:
                                            "Price Per Unit is required",
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

                          {loading ? (
                            <div>Loading...</div>
                          ) : (
                            <select
                              className="form-select rounded-pill mb-3 "
                              style={{ marginTop: "10px" }}
                              id="choices-publish-status-input"
                              data-choices=""
                              data-choices-search-false=""
                              tabIndex="-1"
                              data-choice="active"
                              onChange={handleSelectChange}
                            >
                              <option selected="">Search for customers</option>
                              {response && response.length > 0 ? (
                                response.map((customer, key) => (
                                  <option key={key} value={customer.c_fullname}>
                                    {customer.c_fullname}
                                  </option>
                                ))
                              ) : (
                                <option disabled>No Data Found</option>
                              )}
                            </select>
                          )}
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
                    {/* Total Amount  */}
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title mb-0">Total</h5>
                      </div>
                      <table className="table table-borderless mb-0">
                        <tbody>
                          {/* Total Quantity Row */}
                          <tr className="d-flex justify-content-between">
                            <td>Total Quantity :</td>
                            <td className="text-end">{totalQuantity} </td>
                          </tr>
                          {/* Total KG Row */}
                          <tr className="d-flex justify-content-between">
                            <td>Total PKG:</td>
                            <td className="text-end"> {totalKG} </td>
                          </tr>
                          {/* Trasportation Row */}
                          <tr className="d-flex justify-content-between">
                            <td>Transportation :</td>
                            <td className="text-end">
                              <div className="input-group">
                                {/* Discount input */}
                                <input
                                  type="number"
                                  className="form-control form-control-sm"
                                  style={{ width: "80px" }}
                                  value={transportation}
                  onChange={(e) => setTransportation(parseFloat(e.target.value) || 0)}
                                />
                                {/* Button inside the input group */}
                                <button
                                    onClick={() => addTransportation(transportation)}
                                  className="input-group-text btn btn-outline-secondary" // Bootstrap styling for button
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="ri-add-fill"></i>{" "}
                                  {/* You can keep the icon */}
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* GST  */}
                          <tr className="d-flex justify-content-between">
                            <td>GST:</td>
                            <td className="text-end">
                              <div className="input-group">
                                {/* Discount input */}
                                <input
                                  type="number"
                                  className="form-control form-control-sm"
                                  style={{ width: "80px" }}
                                  value={gst}
                  onChange={(e) => setGst(parseFloat(e.target.value) || 0)}
                                />
                                {/* Button inside the input group */}
                                <button
                                  onClick={() => addGST(gst)}
                                  className="input-group-text btn btn-outline-secondary" // Bootstrap styling for button
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="ri-add-fill"></i>{" "}
                                  {/* You can keep the icon */}
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* Discount Row */}
                          <tr className="d-flex justify-content-between">
                            <td>Discount :</td>
                            <td className="text-end">
                              <div className="input-group">
                                {/* Discount input */}
                                <input
                                  type="number"
                                  className="form-control form-control-sm"
                                  style={{ width: "80px" }}
                                  value={discount}
                  onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
                                />
                                {/* Button inside the input group */}
                                <button
                                  onClick={() => addDiscount(discount)}
                                  className="input-group-text btn btn-outline-secondary" // Bootstrap styling for button
                                  style={{ cursor: "pointer" }}
                                >
                                  <i className="ri-add-fill"></i>{" "}
                                  {/* You can keep the icon */}
                                </button>
                              </div>
                            </td>
                          </tr>

                          <tr className="d-flex justify-content-between border-top border-top-dashed">
                            <th scope="row">Total :</th>
                            <th className="text-end">₹ {total}</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Total Amount  */}
                    <div class="col-lg-12 " style={{ marginTop: "40px" }}></div>

                    {/* Bank Detail */}
                    <div class="col-lg-12  ">
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
                              Add Bank Details
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div class="card-body">
                        <div class="">
                          <form >
                            <div className="">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label className="">
                                      Bank Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter bank name  "
                                      value={bankDetail.bankName}
                onChange={(e) => setBankDetail({ ...bankDetail, bankName: e.target.value })}
                                    
                                    />
                                    
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="manufacturer-brand-input"
                                    >
                                     Account holder name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    
                                      placeholder="Enter Account Holder"
                                      value={bankDetail.accName}
                                      onChange={(e) => setBankDetail({ ...bankDetail, accName: e.target.value })}
                                      
                                    />
                                    
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="stocks-input"
                                    >
                                     Account Number
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                            
                                      placeholder=" Account Number"
                                      onChange={(e) => setBankDetail({ ...bankDetail, accNo: e.target.value })}
                                    
                                    />
                                    
                                  </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                  <div className="mb-3">
                                    <label
                                      className="form-label"
                                      htmlFor="product-price-input"
                                    >
                                      IFSC Code
                                    </label>
                                    <div className="input-group has-validation mb-3">
                                      
                                      <input
                                        type="number"
                                        className="form-control"
                                      
                                        placeholder="Enter IFSC Code"
                                        aria-label="Price"
                                        aria-describedby="product-price-addon"
                                        onChange={(e) => setBankDetail({ ...bankDetail, ifsc: e.target.value })}
                                        required
                                       
                                      />
                                     
                                    </div>
                                  </div>
                                </div>

                              
                              </div>
                            </div>

                            
                          </form>
                        </div>
                      </div>

  

                    </div>
                    </div>

                    {/* Bank detail */}
                  </div>

                  <div className="col-lg-12 text-end">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={handleSave}
                    >
                      Save Quotation
                    </button>
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
      <Footer />
    </>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  branding: { textAlign: "left" },
  details: { display: "flex", justifyContent: "space-between", marginBottom: "20px" },
  table: {
    width: "100%",
    marginBottom: "20px",
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
    padding: "10px",
    backgroundColor: "#f0f0f0",
  },
  tableRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },

  // tableRow: { display: "flex", justifyContent: "space-between", margin: "10px 0" },
  summary: { marginBottom: "20px" },
  terms: { marginTop: "20px" },
  button: { marginLeft: "10px" },
  addButton: {
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "10px",
  },
  printButton: {
    padding: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    marginTop: "20px",
    // float: "right",
  },
};

export default CreateInvoice;
