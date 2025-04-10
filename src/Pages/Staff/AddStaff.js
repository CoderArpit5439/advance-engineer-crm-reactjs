import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Sidebar from '../../Layout/Sidebar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCustomer } from '../../Redux/crmSlices/customerSlice/CustomerSlice';

const AddCompany = () => {
  const { register, handleSubmit, formState: { errors }, setValue, control, watch, reset } = useForm();

  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log(data)
    navigate("/list-company")
  }

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="position-relative mx-n4 mt-n4">
              <div className="">
                <img src="" className="profile-wid-img" alt="" />
                <div className="overlay-content">
                  <div className="text-end p-3">
                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
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
                          <i className="fas fa-home" /> Add Company
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
                        <form onSubmit={handleSubmit(onSubmit)} >
                          <div className="row">
                            <div className="col-lg-3">
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
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="lastnameInput"
                                  className="form-label"

                                >
                                  Upload company logo
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Website
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >Head Office Address</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >Head Office Contact No.</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >No. of total contries plant</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >No. of total india plant</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >Type of manufacturing</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                        
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >Bank Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >Bank IFSC</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >Bank Account</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >Bank Branch</label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >International & Domestic and both</label>
                                <div className='d-block'>
                                  <input type="checkbox" id="Internation" name="Internation" />
                                  <label for="Internation">Internation</label>
                                </div>
                                <div className='d-block'>
                                  <input type="checkbox" id="Domestic" name="Domestic" />
                                  <label for="Domestic">Domestic</label>
                                </div>
                                <div className='d-block'>
                                  <input type="checkbox" id="Both" name="Both" />
                                  <label for="Both">Both</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mt-4">
                               <button className='btn btn-success'>Submit</button>
                              </div>
                            </div>
                          </div>
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

export default AddCompany