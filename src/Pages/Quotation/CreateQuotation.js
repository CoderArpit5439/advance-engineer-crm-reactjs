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
import { GetSingleProduct } from "../../Redux/crmSlices/productSlice/ProductSlice";

const Quotation = () => {
  const [items, setItems] = useState([]);
  const [shippingAddress, setShippingAddress] = useState("");
  const [saveProduct, setSaveProduct] = useState(false);
  const [newproduct, setNewProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();
  const { data, count, loading, response, productList } = useSelector(
    (state) => {
      return {
        response: state.rootReducer.CustomerSlice?.data?.data,
        count: state.rootReducer.CustomerSlice?.data?.count,
        loading: state.rootReducer.CustomerSlice?.loading,
        productList: state.rootReducer.ProductSlice?.productList?.data,
      };
    }
  );

  useEffect(() => {
    setValue("p_unique_id", productList?.p_unique_id);
    setValue("p_name", productList?.p_name);
    setValue("p_price", productList?.p_price);
    setValue("p_material", productList?.p_material);
    setValue("p_moc", productList?.p_moc);
    setValue("p_dimension", productList?.p_dimension);
    setValue("p_brand", productList?.p_brand);
    setValue("p_color", productList?.p_color);
    setValue("p_weight", productList?.p_weight);
    setValue("p_manufacturer", productList?.p_manufacturer);
    setValue("p_country", productList?.p_country);
    setValue("p_code", productList?.p_code);
    setValue("p_drawing_no", productList?.p_drawing_no);
    setValue("p_finish_type", productList?.p_finish_type);
    setValue("p_status", productList?.p_status);
    setValue("p_description", productList?.p_description);
  }, [productList]);

  const addProduct = (data) => {
    setNewProduct(data);
  };

  useEffect(() => {
    dispatch(GetCustomerList());
  }, [dispatch]);

  const handleSelectChange = (event) => {
    const selectedCustomer = response.find(
      (customer) => customer.c_fullname === event.target.value
    );
    if (selectedCustomer) {
      setShippingAddress(selectedCustomer.c_address);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("productId");
    if (id) {
      dispatch(GetSingleProduct({ p_id: id }));
    }
  }, [dispatch]);

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
    subject: "",
    date: "",
    quotationNumber: "",
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
    formData.append("quo_name", details.name);
    formData.append("quo_date", details.date);
    formData.append("quo_subject", details.subject);
    formData.append("quo_number", details.quotationNumber);
    formData.append("quo_description", JSON.stringify(list));
    formData.append("quo_quantity", totalQuantity);
    formData.append("quo_kg", totalKG);
    formData.append("quo_discount", discountPercentage);
    formData.append("quo_total", total);

    const productData = new FormData();
    productData.append("p_unique_id", newproduct?.p_unique_id);
    productData.append("p_name", newproduct?.p_name);
    productData.append("p_price", newproduct?.p_price);
    productData.append("p_material", newproduct?.p_material);
    productData.append("p_moc", newproduct?.p_moc);
    productData.append("p_dimension", newproduct?.p_dimension);
    productData.append("p_brand", newproduct?.p_brand);
    productData.append("p_color", newproduct?.p_color);
    productData.append("p_weight", newproduct?.p_weight);
    productData.append("p_manufacturer", newproduct?.p_manufacturer);
    productData.append("p_country", newproduct?.p_country);
    productData.append("p_code", newproduct?.p_code);
    productData.append("p_drawing_no", newproduct?.p_drawing_no);
    productData.append("p_finish_type", newproduct?.p_finish_type);
    productData.append("p_status", newproduct?.p_status);
    productData.append("p_description", newproduct?.p_description);

    fetch("https://api.advanceengineerings.com/crm/quotation/add-quotation", {
      method: "POST",
      body: formData,
    });
    fetch(
      "https://api.advanceengineerings.com/crm/quotationproduct/add-quotationproduct",
      {
        method: "POST",
        body: productData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("PDF uploaded successfully:", data);
        addProduct();
        // navigate("/list-quotation");
      })
      .catch((error) => {
        console.error("Error uploading PDF:", error);
        alert("Failed to upload the quotation PDF.");
      });
  };
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
  const addDiscount = (discount) => {
    const discountAmount = (discount / 100) * total;
    const finalTotal = total - discountAmount;
    setTotal(finalTotal);
    setDiscountPercentage(0);
  };

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
                                  Subject
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter your subject"
                                  id="lastNameinput"
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      subject: e.target.value,
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
                                  Quotation Number
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Quotation Number"
                                  id="emailidInput"
                                  onChange={(e) =>
                                    setDetails({
                                      ...details,
                                      quotationNumber: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>

                            {/*end col*/}
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

                    {/* Add product  */}

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
                              Add Product
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="card-body">
                        <div class="tab-content">
                          <form
                            className="col-sm-12"
                            onSubmit={handleSubmit(addProduct)}
                          >
                            <div className="row">
                              {/* Category */}
                              {/* <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="categoryInput"
                                  className="form-label"
                                >
                                  Category
                                </label>
                                <select
                                  id="categoryInput"
                                  className="form-control"
                                  {...register("p_category", {
                                    required: "Category is required",
                                  })}
                                >
                                  <option value="">
                                    {" "}
                                    -- Select Any Category --{" "}
                                  </option>
                                  {catList?.length > 0 &&
                                    catList.map((cat) => (
                                      <option
                                        key={cat.cat_id}
                                        value={cat.cat_id}
                                      >
                                        {cat.cat_name}
                                      </option>
                                    ))}
                                </select>
                                {errors.p_category && (
                                  <p className="text-danger">
                                    {errors.p_category.message}
                                  </p>
                                )}
                              </div>
                            </div> */}

                              {/* Unique ID */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="uniqueIdInput"
                                    className="form-label"
                                  >
                                    Unique ID
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="uniqueIdInput"
                                    placeholder="1001"
                                    {...register("p_unique_id", {
                                      required: "Unique ID is required",
                                    })}
                                  />
                                  {errors.p_unique_id && (
                                    <p className="text-danger">
                                      {errors.p_unique_id.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Name */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="nameInput"
                                    className="form-label"
                                  >
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    placeholder="Enter Product Name"
                                    {...register("p_name", {
                                      required: "Name is required",
                                    })}
                                  />
                                  {errors.p_name && (
                                    <p className="text-danger">
                                      {errors.p_name.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Price */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="priceInput"
                                    className="form-label"
                                  >
                                    Price
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="priceInput"
                                    placeholder="Enter Price"
                                    {...register("p_price", {
                                      required: "Price is required",
                                    })}
                                  />
                                  {errors.p_price && (
                                    <p className="text-danger">
                                      {errors.p_price.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Material */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="materialInput"
                                    className="form-label"
                                  >
                                    Material
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="materialInput"
                                    placeholder="Enter Material"
                                    {...register("p_material", {
                                      required: "Material is required",
                                    })}
                                  />
                                  {errors.p_material && (
                                    <p className="text-danger">
                                      {errors.p_material.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* MOC */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="mocInput"
                                    className="form-label"
                                  >
                                    MOC
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="mocInput"
                                    placeholder="Enter MOC"
                                    {...register("p_moc", {
                                      required: "MOC is required",
                                    })}
                                  />
                                  {errors.p_moc && (
                                    <p className="text-danger">
                                      {errors.p_moc.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Dimension */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="dimensionInput"
                                    className="form-label"
                                  >
                                    Dimension
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="dimensionInput"
                                    placeholder="Enter Dimension"
                                    {...register("p_dimension", {
                                      required: "Dimension is required",
                                    })}
                                  />
                                  {errors.p_dimension && (
                                    <p className="text-danger">
                                      {errors.p_dimension.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Brand */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="brandInput"
                                    className="form-label"
                                  >
                                    Brand
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="brandInput"
                                    placeholder="Enter Brand"
                                    {...register("p_brand", {
                                      required: "Brand is required",
                                    })}
                                  />
                                  {errors.p_brand && (
                                    <p className="text-danger">
                                      {errors.p_brand.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Colour */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="colorInput"
                                    className="form-label"
                                  >
                                    Colour
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="colorInput"
                                    placeholder="Enter Colour"
                                    {...register("p_color", {
                                      required: "Colour is required",
                                    })}
                                  />
                                  {errors.p_color && (
                                    <p className="text-danger">
                                      {errors.p_color.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Weight */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="weightInput"
                                    className="form-label"
                                  >
                                    Weight
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="weightInput"
                                    placeholder="Enter Weight"
                                    {...register("p_weight", {
                                      required: "Weight is required",
                                    })}
                                  />
                                  {errors.p_weight && (
                                    <p className="text-danger">
                                      {errors.p_weight.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Manufacturer */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="manufacturerInput"
                                    className="form-label"
                                  >
                                    Manufacturer
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="manufacturerInput"
                                    placeholder="Enter Manufacturer"
                                    {...register("p_manufacturer", {
                                      required: "Manufacturer is required",
                                    })}
                                  />
                                  {errors.p_manufacturer && (
                                    <p className="text-danger">
                                      {errors.p_manufacturer.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Country */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="countryInput"
                                    className="form-label"
                                  >
                                    Country
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="countryInput"
                                    placeholder="Enter Country"
                                    {...register("p_country", {
                                      required: "Country is required",
                                    })}
                                  />
                                  {errors.p_country && (
                                    <p className="text-danger">
                                      {errors.p_country.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Code */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="codeInput"
                                    className="form-label"
                                  >
                                    Code
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="codeInput"
                                    placeholder="Enter Code"
                                    {...register("p_code", {
                                      required: "Code is required",
                                    })}
                                  />
                                  {errors.p_code && (
                                    <p className="text-danger">
                                      {errors.p_code.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Drawing No */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="drawingNoInput"
                                    className="form-label"
                                  >
                                    Drawing No
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="drawingNoInput"
                                    placeholder="Enter Drawing No"
                                    {...register("p_drawing_no", {
                                      required: "Drawing No is required",
                                    })}
                                  />
                                  {errors.p_drawing_no && (
                                    <p className="text-danger">
                                      {errors.p_drawing_no.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Finish Type */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="finishTypeInput"
                                    className="form-label"
                                  >
                                    Finish Type
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="finishTypeInput"
                                    placeholder="Enter Finish Type"
                                    {...register("p_finish_type", {
                                      required: "Finish Type is required",
                                    })}
                                  />
                                  {errors.p_finish_type && (
                                    <p className="text-danger">
                                      {errors.p_finish_type.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Status */}
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label
                                    htmlFor="statusInput"
                                    className="form-label"
                                  >
                                    Status
                                  </label>
                                  <select
                                    id="statusInput"
                                    className="form-control"
                                    {...register("p_status", {
                                      required: "Status is required",
                                    })}
                                  >
                                    <option value="">
                                      {" "}
                                      -- Select Status --
                                    </option>
                                    <option value="active">Active</option>
                                    <option value="inactive">inactive</option>
                                  </select>
                                  {errors.p_status && (
                                    <p className="text-danger">
                                      {errors.p_status.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Description */}
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label
                                    htmlFor="descriptionInput"
                                    className="form-label"
                                  >
                                    Description
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="descriptionInput"
                                    rows="3"
                                    {...register("p_description")}
                                  />
                                </div>
                              </div>

                              <button
                                className="btn btn-success "
                                style={{
                                  width: "80px",
                                  justifyItems: "end",
                                  marginLeft: "10px",
                                }}
                              >
                               {saveProduct ? "Saved" :"Save"}
                              </button>

                              {/* File Upload */}
                              {/* <div className="col-lg-12">
                              <DragAndDrop onFilesChange={handleProductFile} />
                            </div> */}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* Add Product  */}

                    {/* Table end */}
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
                            <td>Total KG:</td>
                            <td className="text-end"> {totalKG} </td>
                          </tr>
                          {/* Subtotal Row */}
                          <tr className="d-flex justify-content-between">
                            <td>Price :</td>
                            <td className="text-end">{pricePerUnit}</td>
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
                                  value={discountPercentage}
                                  onChange={(e) =>
                                    setDiscountPercentage(e.target.value)
                                  }
                                />
                                {/* Button inside the input group */}
                                <button
                                  onClick={() =>
                                    addDiscount(discountPercentage)
                                  }
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
                            <th className="text-end">RS {total}</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Total Amount  */}
                    <div class="col-lg-12 " style={{ marginTop: "40px" }}></div>

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

                    {/* Bank detail */}

                    {/* terms condition  */}
                    <div className="card" style={{ marginTop: "20px" }}>
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
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
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
    float: "right",
  },
};

export default Quotation;
