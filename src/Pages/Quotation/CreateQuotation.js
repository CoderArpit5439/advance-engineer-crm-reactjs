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
      <div ref={quotationRef} style={{ display:"none" }}>
        <div style={{ width: '210mm', height: '297mm', padding: '20mm' }}>
          {/* Replace this with your HTML content */}
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
      </div>

      <div class="content-wrapper" style={{ minHeight: "799px" }}>
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
                      {/* <div class="form-group col-sm-4">
                        <label>Total</label>
                        <input type="number" class="form-control" placeholder="123"  {...register('q_total')} />
                      </div> */}
                      <div class="form-group col-sm-1">
                        <label>Discount Offer</label>
                        <input type="number" class="form-control" placeholder="5" onChange={(e) => setDiscount(e.target.value)} />
                      </div>
                      {/* <div class="form-group col-sm-4">
                        <label>Total KG</label>
                        <input type="number" class="form-control" placeholder="123"  {...register('q_total_kg')} />
                      </div> */}
                      {/* <div class="form-group col-sm-4">
                        <label>Total Quantity</label>
                        <input type="number" class="form-control" placeholder="123"  {...register('q_total_quantity')} />
                      </div> */}
                      <div class="form-group col-sm-12">
                        <div class="reset-button text-center">
                          {/* <a class="btn btn-warning">Reset</a> */}
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
                      {/* </ul> */}
                    </div>
                    <div class="form-group col-sm-12">
                      <div class="reset-button text-center">
                        {/* <a class="btn btn-warning">Reset</a> */}
                        <button class="btn btn-success" type='submit'>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div >
        </section >
      </div >
      <Footer />

    </>
  )
}

export default CreateQuotation