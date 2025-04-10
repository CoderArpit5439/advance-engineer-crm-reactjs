import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Sidebar from '../../Layout/Sidebar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCustomer } from '../../Redux/crmSlices/customerSlice/CustomerSlice';

const AddCustomer = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch ,reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, response } = useSelector((state) => {
        return {
            loading: state.rootReducer.CustomerSlice?.loading,
            response: state.rootReducer.CustomerSlice?.response,
        }
    })

    const onSubmit = (data) => {
      console.log(data)
        dispatch(CreateCustomer(data))
        navigate("/list-customer")
        reset()
    }

    return (
        <>
            <Header />
            <Sidebar />
            {/* <div class="content-wrapper" style={{ minHeight: "799px" }}>
                <section class="content-header">
                    <div class="header-icon">
                        <i class="fa fa-users"></i>
                    </div>
                    <div class="header-title">
                        <h1>Add Customer</h1>
                        <small>Customer</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="3N11jRpUy7">
                            <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="3N11jRpUy7" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonlist">
                                        <a class="btn btn-add" onClick={() => navigate('/list-customer')}>
                                            <i class="fa fa-list"></i>  Customer List </a>
                                    </div>
                                 
                                </div>
                                <div class="panel-body">
                                    <form onSubmit={handleSubmit(onSubmit)} class="col-sm-12">
                                        <div className='row'>
                                            <div class="form-group col-sm-6">
                                                <label>Company Name</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Company Name"
                                                    {...register('c_company_name')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Full Name</label>
                                                <input type="text" class="form-control" placeholder="Enter Full Name"  {...register('c_fullname')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Email</label>
                                                <input type="email" class="form-control" placeholder="Enter Email"  {...register('c_email')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Mobile</label>
                                                <input type="number" class="form-control" placeholder="Enter Mobile"  {...register('c_mobile')} />
                                            </div>

                                            <div class="form-group col-sm-6">
                                                <label>Post</label>
                                                <input type="text" class="form-control" placeholder="Enter Post"  {...register('c_post')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Department</label>
                                                <input type="text" class="form-control" placeholder="Enter Department"  {...register('c_department')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Password</label>
                                                <input type="text" class="form-control" placeholder="Enter Password"  {...register('c_password')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Date of Birth</label>
                                                <input id="minMaxExample" type="date" class="form-control hasDatepicker" placeholder="Enter Date..." {...register('c_dob')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Picture upload</label>
                                                <input type="file" name="picture" {...register('c_image')} />
                                              
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Address</label>
                                                <textarea class="form-control" rows="3"  {...register('c_address')}></textarea>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Customer Ranking</label>
                                                <select class="form-control" {...register('c_rank')}>
                                                    <option value="Excellent">Excellent</option>
                                                    <option value="Good">Good</option>
                                                    <option value="Average">Average</option>
                                                    <option value="Average">Average</option>
                                                    <option value="Poor">Poor</option>
                                                    <option value="Very Poor">Very Poor</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Gender</label><br></br>
                                                <select class="form-control" {...register('c_gender')}>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div class="form-check col-sm-6">
                                                <label>Status</label><br></br>
                                                <select class="form-control" {...register('c_status')}>
                                                    <option value="Active">Active</option>
                                                    <option value="Not Active">Not Active</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>No. of quotation</label>
                                                <input type="number" class="form-control" placeholder="Enter Number Of Quotation"  {...register('c_no_of_quotation')} />
                                            </div>
                                            <div class="reset-button text-center">
                                                <a class="btn btn-warning">Reset</a>
                                                <button class="btn btn-success" type='submit'>Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
               <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="position-relative mx-n4 mt-n4">
              <div className="">
                <img src="" className="profile-wid-img" alt="" />
                <div className="overlay-content">
                  <div className="text-end p-3">
                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                      {/* <input
                        id="profile-foreground-img-file-input"
                        type="file"
                        className="profile-foreground-img-file-input"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/*end col*/}
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
                          <i className="fas fa-home" /> Add Customer
                        </a>
                      </li>
                      {/* <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#changePassword"
                          role="tab"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <i className="far fa-user" /> Change Password
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#experience"
                          role="tab"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <i className="far fa-envelope" /> Experience
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#privacy"
                          role="tab"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          <i className="far fa-envelope" /> Privacy Policy
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="card-body p-4">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                        <form onSubmit={handleSubmit(onSubmit)} >
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstnameInput"
                                  className="form-label"
                                >
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstnameInput"
                                  placeholder="Enter your comapny"
                                  {...register('c_company_name')} 
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="lastnameInput"
                                  className="form-label"
                                
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastnameInput"
                                  placeholder="Enter your name"
                                  {...register('c_fullname')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phonenumberInput"
                                  placeholder="Enter your phone number"
                                  {...register('c_mobile')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                 
                                  className="form-label"
                                >
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  
                                  placeholder="Enter your email"
                                  {...register('c_email')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="JoiningdatInput"
                                  className="form-label"
                                >
                                  Post
                                </label>
                                <input
                                  type="text"
                                  className="form-control flatpickr-input"
                                  data-provider="flatpickr"
                                  id="JoiningdatInput"
                                  {...register('c_post')} 
                                  placeholder=" Post"
                                 
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="JoiningdatInput"
                                  className="form-label"
                                >
                                No. of quotation
                                </label>
                                <input
                                  type="Number"
                                  className="form-control flatpickr-input"
                                  data-provider="flatpickr"
                                  id="JoiningdatInput"
                                  {...register('c_no_of_quotation')}  
                                  placeholder="quotation"
                                 
                                />
                              </div>
                            </div>
                            {/*end col*/}

                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="designationInput"
                                  className="form-label"
                                >
                                  Department
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="designationInput"
                                  placeholder="Designation"
                                  {...register('c_department')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="websiteInput1"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  id="websiteInput1"
                                  placeholder="enter your password "
                                  {...register('c_password')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="cityInput"
                                  className="form-label"
                                >
                                  Date of Birth
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="cityInput"
                                  placeholder="City"
                                  {...register('c_dob')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="countryInput"
                                  className="form-label"
                                >
                                  Picture upload
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="countryInput"
                                  placeholder="picture"
                                  {...register('c_image')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="zipcodeInput"
                                  className="form-label"
                                >
                                  Address
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  minLength={5}
                                  maxLength={6}
                                  id="zipcodeInput"
                                  placeholder="Enter zipcode"
                                  {...register('c_address')}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3 pb-2">
                                <label
                                  htmlFor="exampleFormControlTextarea"
                                  className="form-label"
                                >
                                  Customer Ranking
                                </label>
                                <select class="form-control" {...register('c_rank')}>
                                  <option value="Excellent">Excellent</option>
                                  <option value="Good">Good</option>
                                  <option value="Average">Average</option>
                                  <option value="Average">Average</option>
                                  <option value="Poor">Poor</option>
                                  <option value="Very Poor">Very Poor</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3 pb-2">
                                <label
                                  htmlFor="exampleFormControlTextarea"
                                  className="form-label"
                                >
                                  Gender
                                </label>
                                <select class="form-control" {...register('c_gender')}>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3 pb-2">
                                <label
                                  htmlFor="exampleFormControlTextarea"
                                  className="form-label"
                                >
                                  Status
                                </label>
                                <select class="form-control" {...register('c_status')}>
                                  <option value="Active">Active</option>
                                  <option value="inactive">inactive</option>
                                </select>
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                 Add Customer
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-soft-success"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </form>
                      </div>
                      {/*end tab-pane*/}
                    
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
            <Footer />
        </>
    )
}

export default AddCustomer