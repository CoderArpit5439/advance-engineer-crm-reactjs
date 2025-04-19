import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../../Redux/crmSlices/orderSlice/OrderSlice";

const AddOrder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm({
      defaultValues: {
        customer: '',
        contactNo: '',
        orderNo: '',
        cstrPO: '',
        item: '',
        dueDate: '',
        quantity: '',
        pndg: '',
        done: '',
        unit: '',
        total: '',
        status: ''
      }
    });
  
    const onSubmit = (data) => {
     dispatch(addOrder(data))
      navigate("/all-order")
    };
  
    return (
      <div>
        <Header />
        <Sidebar />
        <div>
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                <div className="position-relative mx-n4 mt-n4">
                  <div className="">
                    <img src="" className="profile-wid-img" alt="" />
                    <div className="overlay-content">
                      <div className="text-end p-3">
                        <div className="p-0 ms-auto rounded-circle profile-photo-edit"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 mb-10">
                    <div className="card ">
                      <div className="card-header">
                        <ul
                          className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              data-bs-toggle="tab"
                              href="#personalDetails"
                              role="tab"
                              aria-selected="true"
                            >
                              <i className="fas fa-home" /> Add Order
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body p-4">
                        <div className="tab-content">
                          <div
                            className="tab-pane active"
                            id="personalDetails"
                            role="tabpanel"
                          >
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Customer</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.customer ? 'is-invalid' : ''}`}
                                      {...register('customer', { required: 'Customer is required' })}

                                      placeholder="Customer"
                                    />
                                    {errors.customer && (
                                      <div className="invalid-feedback">
                                        {errors.customer.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Contact NO</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
                                      {...register('contactNo', { 
                                        required: 'Contact number is required',
                                        pattern: {
                                          value: /^[0-9]{10}$/,
                                          message: 'Please enter a valid 10-digit phone number'
                                        }
                                      })}
                                      placeholder="Contact NO"
                                    />
                                    {errors.contactNo && (
                                      <div className="invalid-feedback">
                                        {errors.contactNo.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Order NO</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.orderNo ? 'is-invalid' : ''}`}
                                      {...register('orderNo', { required: 'Order number is required' })}
                                      placeholder="Order NO"
                                    />
                                    {errors.orderNo && (
                                      <div className="invalid-feedback">
                                        {errors.orderNo.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">CSTR P.O</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.cstrPO ? 'is-invalid' : ''}`}
                                      {...register('cstrPO', { required: 'CSTR P.O is required' })}
                                      placeholder="CSTR P.O"
                                    />
                                    {errors.cstrPO && (
                                      <div className="invalid-feedback">
                                        {errors.cstrPO.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Item</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.item ? 'is-invalid' : ''}`}
                                      {...register('item', { required: 'Item is required' })}
                                    />
                                    {errors.item && (
                                      <div className="invalid-feedback">
                                        {errors.item.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Due Date</label>
                                    <input
                                      type="date"
                                      className={`form-control ${errors.dueDate ? 'is-invalid' : ''}`}
                                      {...register('dueDate', { required: 'Due date is required' })}
                                    />
                                    {errors.dueDate && (
                                      <div className="invalid-feedback">
                                        {errors.dueDate.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Quantity</label>
                                    <input
                                      type="number"
                                      className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                                      {...register('quantity', { 
                                        required: 'Quantity is required',
                                        min: {
                                          value: 1,
                                          message: 'Quantity must be at least 1'
                                        }
                                      })}
                                    />
                                    {errors.quantity && (
                                      <div className="invalid-feedback">
                                        {errors.quantity.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">PNDG</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.pndg ? 'is-invalid' : ''}`}
                                      {...register('pndg', { required: 'PNDG is required' })}
                                    />
                                    {errors.pndg && (
                                      <div className="invalid-feedback">
                                        {errors.pndg.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Done</label>
                                    <input
                                      type="text"
                                      className={`form-control ${errors.done ? 'is-invalid' : ''}`}
                                      {...register('done', { required: 'Done field is required' })}
                                    />
                                    {errors.done && (
                                      <div className="invalid-feedback">
                                        {errors.done.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Unit</label>
                                    <input
                                      type="number"
                                      className={`form-control ${errors.unit ? 'is-invalid' : ''}`}
                                      {...register('unit', { 
                                        required: 'Unit is required',
                                        min: {
                                          value: 1,
                                          message: 'Unit must be at least 1'
                                        }
                                      })}
                                    />
                                    {errors.unit && (
                                      <div className="invalid-feedback">
                                        {errors.unit.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Total</label>
                                    <input
                                      type="number"
                                      className={`form-control ${errors.total ? 'is-invalid' : ''}`}
                                      {...register('total', { 
                                        required: 'Total is required',
                                        min: {
                                          value: 0,
                                          message: 'Total cannot be negative'
                                        }
                                      })}
                                    />
                                    {errors.total && (
                                      <div className="invalid-feedback">
                                        {errors.total.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select
                                      className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                                      {...register('status', { required: 'Status is required' })}
                                    >
                                      <option value="">-- Select Status --</option>
                                      <option value="Done">Done</option>
                                      <option value="pending">Pending</option>
                                      <option value="Rejected">Rejected</option>
                                    </select>
                                    {errors.status && (
                                      <div className="invalid-feedback">
                                        {errors.status.message}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="col-lg-12">
                                  <div className="mt-4">
                                    <button type="submit" className="btn btn-success">
                                      Add Order
                                    </button>
                                  </div>
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

export default AddOrder;
