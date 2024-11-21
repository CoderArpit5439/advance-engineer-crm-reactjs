import React, { useEffect, useRef, useState } from 'react';
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Footer from '../../Layout/Footer';
import { GetCustomerList, GetCustomerNameList } from '../../Redux/crmSlices/customerSlice/CustomerSlice';
import ListCustomer from '../Customer/ListCustomer';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


const CreateQuotation = () => {
  const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quotationRef = useRef();

  const [itemArr, setItemArr] = useState([])
  const [customer, setCustomer] = useState("")
  const [hsncode, setHsncode] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [unit, setUnit] = useState("")
  const [kgpc, setKgpc] = useState("")
  const [price, setPrice] = useState("")
  const [discount, setDiscount] = useState("")

  useEffect(() => {
    dispatch(GetCustomerNameList());
  }, []);

  const { nameList, loading, response } = useSelector((state) => {
    return {
      nameList: state.rootReducer.CustomerSlice?.nameList?.data,
      loading: state.rootReducer.CustomerSlice?.loading,
      response: state.rootReducer.CustomerSlice?.response,
    }
  })

  const generatePDF = async () => {
    const quotation = quotationRef.current;

    // Convert HTML to canvas for generating PDF
    const canvas = await html2canvas(quotation);
    const imgData = canvas.toDataURL('image/png');

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Add the canvas as an image to the PDF
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);

    // Send the PDF to the backend using FormData
    const blobPDF = pdf.output('blob'); // Get the PDF as a Blob
    // console.log(741, blobPDF)

    // Create a Blob URL and log it in the console
    const blobUrl = URL.createObjectURL(blobPDF);
    console.log('Blob URL:', blobUrl);

    // Optional: You can use the Blob URL to open the PDF in a new tab
    window.open(blobUrl);

    // const formData = new FormData();
    // formData.append('file', blobPDF, 'quotation.pdf'); // Append file to FormData

    // POST request to send PDF in form data
    // try {
    //   const response = await fetch('https://your-api-url.com/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     console.log('PDF successfully sent to API');
    //   } else {
    //     console.error('Error sending PDF to API');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };


  // ----> start Items ---->
  const addItem = () => {
    const newObj = {
      customer,
      hsncode,
      description,
      quantity,
      unit,
      kgpc,
      discount,
    };
    if (newObj.customer && newObj.hsncode && newObj.description && newObj.quantity && newObj.unit && newObj.kgpc && newObj.discount) {
      setItemArr([...itemArr, newObj])
    }
  }

  const removeItem = (i) => {
    const newArray = [...itemArr];
    newArray.splice(i, 1);
    setItemArr(newArray)
  }

  // ----> end Items ---->

  const onSubmit = (data) => {
    console.log(data);
    generatePDF();
    // dispatch(CreateCustomer(data))
  }
  return (
    <>
      <Header />

      <Sidebar />
      {/* Hidden content that will be turned into a PDF */}
      {/* <div ref={quotationRef} style={{ display:"none" }}>
        <div style={{ width: '210mm', height: '297mm', padding: '20mm' }}>
          <header>
            <div>Contact: +1234567890, +0987654321</div>
            <div style={{ textAlign: 'right' }}>www.advanceengineering.com</div>
          </header>

          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0' }}>
            <div><img src="logo.png" alt="Company Logo" width="100" /></div>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>ADVANCE ENGINEERING</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>Date: .../.../......</div>
            <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>Quotation</div>
          </div>

          <div>
            <p><strong>To:</strong> Name of Customer</p>
            <p><strong>Subject:</strong> Quotation for XYZ</p>
          </div>

          <table border="1" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>S.NO.</th>
                <th>HSN CODE</th>
                <th>Description</th>
                <th>QTY</th>
                <th>UNIT</th>
                <th>KG/PC</th>
                <th>PRICE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1234</td>
                <td>Product Name</td>
                <td>10</td>
                <td>pcs</td>
                <td>20kg</td>
                <td>$100</td>
                <td>$1000</td>
              </tr>
              <tr>
                <td colSpan="5">Total KG:</td>
                <td>200kg</td>
                <td>Total Qty:</td>
                <td>50</td>
              </tr>
              <tr>
                <td colSpan="7">Discount Offer:</td>
                <td>$50</td>
              </tr>
              <tr>
                <td colSpan="7">Total Amount:</td>
                <td>$950</td>
              </tr>
            </tbody>
          </table>

          <p>GST No.: 1234567890 | MSME No.: ABCD1234</p>
          <p>Thanks & Regards,<br></br> Sales Team <br></br>+1234567890, +0987654321</p>
        </div>
      </div> */}

      {/* <div class="content-wrapper" style={{ minHeight: "799px" }}>
        <section class="content-header">
          <div class="header-icon">
            <i class="fa fa-users"></i>
          </div>
          <div class="header-title">
            <h1>Add Quotation</h1>
            <small>Quotation</small>
          </div>
        </section>
        <section class="content">
          <div class="row">
            <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="3N11jRpUy7">
              <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="3N11jRpUy7" data-index="0">
                <div class="panel-heading ui-sortable-handle">
                  <div class="btn-group" id="buttonlist">
                    <a class="btn btn-add" onClick={() => navigate('/list-quotation')}>
                      <i class="fa fa-list"></i>  Quotation List </a>
                  </div>
                   </div>
                <div class="panel-body">
                  <form onSubmit={handleSubmit(onSubmit)} class="col-sm-12">
                    <div className='row'>
                      <div class="form-group col-sm-2">
                        <label>Select Customer</label>
                        <select class="form-control" onChange={(e) => setCustomer(e.target.value)}>
                          <option value=''> -- Select Customer -- </option>
                          {
                            nameList?.map((customer) => <option value={customer.c_id}>{customer.c_fullname}</option>)
                          }
                        </select>
                      </div>

                      <div class="form-group col-sm-2">
                        <label>HSN Code</label>
                        <input type="number" class="form-control" placeholder="84799040" onChange={(e) => setHsncode(e.target.value)} />
                      </div>
                      <div class="form-group col-sm-3">
                        <label>Description</label>
                        <textarea rows={3} type="text" class="form-control" placeholder="Item name" onChange={(e) => setDescription(e.target.value)} />
                      </div>
                      <div class="form-group col-sm-1">
                        <label>Quantity</label>
                        <input type="number" class="form-control" placeholder="1" onChange={(e) => setQuantity(e.target.value)} />
                      </div>
                      <div class="form-group col-sm-1">
                        <label>Unit</label>
                        <input type="text" class="form-control" placeholder="NOS" onChange={(e) => setUnit(e.target.value)} />
                      </div>
                      <div class="form-group col-sm-1">
                        <label>KG/PC</label>
                        <input type="number" class="form-control" placeholder="1 KG" onChange={(e) => setKgpc(e.target.value)} />
                      </div>
                      <div class="form-group col-sm-1">
                        <label>Price</label>
                        <input type="number" class="form-control" placeholder="123" onChange={(e) => setPrice(e.target.value)} />
                      </div>
                      
                      <div class="form-group col-sm-1">
                        <label>Discount Offer</label>
                        <input type="number" class="form-control" placeholder="5" onChange={(e) => setDiscount(e.target.value)} />
                      </div>
                      <div class="form-group col-sm-12">
                        <div class="reset-button text-center">
                          <button class="btn btn-info"
                            type='button'
                            onClick={() => addItem()}
                            disabled={discount && !customer && !price}
                          >ADD</button>
                        </div>
                      </div>

                      <div class="form-group col-sm-12">
                        <div class="table-responsive " style={{ marginTop: "10px" }}>
                          <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                            <thead>
                              <tr class="info">
                                <th>S.no.</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>KG/PC</th>
                                <th>Price</th>
                                <th>Discount</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {itemArr?.length !== 0 && itemArr?.map((item, i) => {
                                return (
                                  <tr>
                                    <td>{i + 1}</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.unit}</td>
                                    <td>{item.kgpc}</td>
                                    <td>{item.price}</td>
                                    <td>{item.discount}</td>
                                    <td>
                                      <button className="btn btn-sm btn-danger" type="button" onClick={() => removeItem(i)}>Delete</button>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-sm-12">
                      <div class="reset-button text-center">
                        <button class="btn btn-success" type='submit'>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div >
        </section >
      </div > */}
      <div class="content-wrapper" style={{ minHeight: "799px" }}>
        <div ref={quotationRef} >
          <div style={{ width: '210mm', height: '297mm', padding: '20mm' }}>
            <form class="needs-validation" novalidate="" id="invoice_form">
              <div class="row justify-content-center">
                <div class="col-xxl-9">
                  <div class="card">
                    <div class="card-body border-bottom border-bottom-dashed p-4">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="col-lg-4 ms-auto">
                            <div class="mb-2">
                              <input type="text" class="form-control bg-light border-0" id="registrationNumber" maxlength="12" placeholder="Legal Registration No" required="" />
                              <div class="invalid-feedback">
                                Please enter a registration no, Ex., 012345678912
                              </div>
                            </div>
                            <div class="mb-2">
                              <input type="email" class="form-control bg-light border-0" id="companyEmail" placeholder="Email Address" required="" />
                              <div class="invalid-feedback">
                                Please enter a valid email, Ex., example@gamil.com
                              </div>
                            </div>
                            <div class="mb-2">
                              <input type="text" class="form-control bg-light border-0" id="companyWebsite" placeholder="Website" required="" />
                              <div class="invalid-feedback">
                                Please enter a website, Ex., www.example.com
                              </div>
                            </div>
                            <div>
                              <input type="text" class="form-control bg-light border-0" data-plugin="cleave-phone" id="compnayContactno" placeholder="Contact No" required="" />
                              <div class="invalid-feedback">
                                Please enter a contact number
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card-body p-4">
                        <div class="row g-3">
                          <div class="col-lg-3 col-sm-6">
                            <label for="invoicenoInput">Invoice No</label>
                            <input type="text" class="form-control bg-light border-0" id="invoicenoInput" placeholder="Invoice No" value="#VL25000355" readonly="readonly" />
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <div>
                              <label for="date-field">Date</label>
                              <input type="text" class="form-control bg-light border-0" id="date-field" data-provider="flatpickr" data-time="true" placeholder="Select Date-time" />
                            </div>
                          </div>
                          <div class="col-lg-3 col-sm-6">
                            <label for="choices-payment-status">Payment Status</label>
                            <div class="input-light">
                              <select class="form-control bg-light border-0" data-choices="" data-choices-search-false="" id="choices-payment-status" required="">
                                <option value="">Select Payment Status</option>
                                <option value="Paid">Paid</option>
                                <option value="Unpaid">Unpaid</option>
                                <option value="Refund">Refund</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                          <div>
                            <label for="totalamountInput">Total Amount</label>
                            <input type="text" class="form-control bg-light border-0" id="totalamountInput" placeholder="$0.00" readonly="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body p-4 border-top border-top-dashed">
                      <div class="row">
                        <div class="col-lg-4 col-sm-6">
                          <div>
                            <label for="billingName" class="text-muted text-uppercase fw-semibold">Billing Address</label>
                          </div>
                          <div class="mb-2">
                            <input type="text" class="form-control bg-light border-0" id="billingName" placeholder="Full Name" required="" />
                            <div class="invalid-feedback">
                              Please enter a full name
                            </div>
                          </div>
                          <div class="mb-2">
                            <textarea class="form-control bg-light border-0" id="billingAddress" rows="3" placeholder="Address" required="" />
                            <div class="invalid-feedback">
                              Please enter a address
                            </div>
                          </div>
                          <div class="mb-2">
                            <input type="text" class="form-control bg-light border-0" data-plugin="cleave-phone" id="billingPhoneno" placeholder="(123)456-7890" required="" />
                            <div class="invalid-feedback">
                              Please enter a phone number
                            </div>
                          </div>
                          <div class="mb-3">
                            <input type="text" class="form-control bg-light border-0" id="billingTaxno" placeholder="Tax Number" required="" />
                            <div class="invalid-feedback">
                              Please enter a tax number
                            </div>
                          </div>
                          <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="same" name="same" onchange="billingFunction()" />
                            <label class="form-check-label" for="same">
                              Will your Billing and Shipping address same?
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-6 ms-auto">
                          <div class="row">
                            <div class="col-lg-8">
                              <div>
                                <label for="shippingName" class="text-muted text-uppercase fw-semibold">Shipping Address</label>
                              </div>
                              <div class="mb-2">
                                <input type="text" class="form-control bg-light border-0" id="shippingName" placeholder="Full Name" required="" />
                                <div class="invalid-feedback">
                                  Please enter a full name
                                </div>
                              </div>
                              <div class="mb-2">
                                <textarea class="form-control bg-light border-0" id="shippingAddress" rows="3" placeholder="Address" required="" />
                                <div class="invalid-feedback">
                                  Please enter a address
                                </div>
                              </div>
                              <div class="mb-2">
                                <input type="text" class="form-control bg-light border-0" data-plugin="cleave-phone" id="shippingPhoneno" placeholder="(123)456-7890" required="" />
                                <div class="invalid-feedback">
                                  Please enter a phone number
                                </div>
                              </div>
                              <div>
                                <input type="text" class="form-control bg-light border-0" id="shippingTaxno" placeholder="Tax Number" required="" />
                                <div class="invalid-feedback">
                                  Please enter a tax number
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-body p-4">
                      <div class="table-responsive">
                        <table class="invoice-table table table-borderless table-nowrap mb-0">
                          <thead class="align-middle">
                            <tr class="table-active">
                              <th scope="col" style={{ width: "50px" }}>#</th>
                              <th scope="col">
                                Product Details
                              </th>
                              <th scope="col" style={{ width: "120px" }}>
                                <div class="d-flex currency-select input-light align-items-center">
                                  Rate
                                  <select class="form-selectborder-0 bg-light" data-choices="" data-choices-search-false="" id="choices-payment-currency" onchange="otherPayment()">
                                    <option value="$">($)</option>
                                    <option value="£">(£)</option>
                                    <option value="₹">(₹)</option>
                                    <option value="€">(€)</option>
                                  </select>
                                </div>
                              </th>
                              <th scope="col" style={{ width: "120px" }}>Quantity</th>
                              <th scope="col" class="text-end" style={{ width: "150px" }}>Amount</th>
                              <th scope="col" class="text-end" style={{ width: "105px" }}></th>
                            </tr>
                          </thead>
                          <tbody id="newlink">
                            <tr id="1" class="product">
                              <th scope="row" class="product-id">1</th>
                              <td class="text-start">
                                <div class="mb-2">
                                  <input type="text" class="form-control bg-light border-0" id="productName-1" placeholder="Product Name" required="" />
                                  <div class="invalid-feedback">
                                    Please enter a product name
                                  </div>
                                </div>
                                <textarea class="form-control bg-light border-0" id="productDetails-1" rows="2" placeholder="Product Details"></textarea>
                              </td>
                              <td>
                                <input type="number" class="form-control product-price bg-light border-0" id="productRate-1" step="0.01" placeholder="0.00" required="" />
                                <div class="invalid-feedback">
                                  Please enter a rate
                                </div>
                              </td>
                              <td>
                                <div class="input-step">
                                  <button type="button" class="minus">–</button>
                                  <input type="number" class="product-quantity" id="product-qty-1" value="0" readonly="" />
                                  <button type="button" class="plus">+</button>
                                </div>
                              </td>
                              <td class="text-end">
                                <div>
                                  <input type="text" class="form-control bg-light border-0 product-line-price" id="productPrice-1" placeholder="$0.00" readonly="" />
                                </div>
                              </td>
                              <td class="product-removal">
                                <a href="javascript:void(0)" class="btn btn-success">Delete</a>
                              </td>
                            </tr>
                          </tbody>
                          <tbody>
                            <tr id="newForm" style={{ display: "none" }}><td class="d-none" colspan="5"><p>Add New Form</p></td></tr>
                            <tr>
                              <td colspan="5">
                                <a href="javascript:new_link()" id="add-item" class="btn btn-soft-secondary fw-medium"><i class="ri-add-fill me-1 align-bottom"></i> Add Item</a>
                              </td>
                            </tr>
                            <tr class="border-top border-top-dashed mt-2">
                              <td colspan="3"></td>
                              <td colspan="2" class="p-0">
                                <table class="table table-borderless table-sm table-nowrap align-middle mb-0">
                                  <tbody>
                                    <tr>
                                      <th scope="row">Sub Total</th>
                                      <td style={{ width: "150px" }}>
                                        <input type="text" class="form-control bg-light border-0" id="cart-subtotal" placeholder="$0.00" readonly="" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Estimated Tax (12.5%)</th>
                                      <td>
                                        <input type="text" class="form-control bg-light border-0" id="cart-tax" placeholder="$0.00" readonly="" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Discount <small class="text-muted">(VELZON15)</small></th>
                                      <td>
                                        <input type="text" class="form-control bg-light border-0" id="cart-discount" placeholder="$0.00" readonly="" />
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Shipping Charge</th>
                                      <td>
                                        <input type="text" class="form-control bg-light border-0" id="cart-shipping" placeholder="$0.00" readonly="" />
                                      </td>
                                    </tr>
                                    <tr class="border-top border-top-dashed">
                                      <th scope="row">Total Amount</th>
                                      <td>
                                        <input type="text" class="form-control bg-light border-0" id="cart-total" placeholder="$0.00" readonly="" />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="row mt-3">
                        <div class="col-lg-4">
                          <div class="mb-2">
                            <label for="choices-payment-type" class="form-label text-muted text-uppercase fw-semibold">Payment Details</label>
                            <div class="input-light">
                              <select class="form-control bg-light border-0" data-choices="" data-choices-search-false="" data-choices-removeitem="" id="choices-payment-type">
                                <option value="" >Payment Method</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Visa">Visa</option>
                                <option value="Paypal">Paypal</option>
                              </select>
                            </div>
                          </div>
                          <div class="mb-2">
                            <input class="form-control bg-light border-0" type="text" id="cardholderName" placeholder="Card Holder Name" />
                          </div>
                          <div class="mb-2">
                            <input class="form-control bg-light border-0" type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
                          </div>
                          <div>
                            <input class="form-control  bg-light border-0" type="text" id="amountTotalPay" placeholder="$0.00" readonly="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="hstack gap-2 justify-content-end d-print-none mt-4">
                      <button type="submit" class="btn btn-success"><i class="ri-printer-line align-bottom me-1"></i> Save</button>
                      <a href="javascript:void(0);" class="btn btn-primary"><i class="ri-download-2-line align-bottom me-1"></i> Download Invoice</a>
                      <a href="javascript:void(0);" class="btn btn-danger"><i class="ri-send-plane-fill align-bottom me-1"></i> Send Invoice</a>
                    </div>
                  </div >
                </div>
              </div >
            </form >
          </div>
        </div>
      </div >
      <Footer />

    </>
  )
}

export default CreateQuotation