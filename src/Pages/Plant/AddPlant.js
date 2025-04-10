import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Sidebar from '../../Layout/Sidebar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCustomer } from '../../Redux/crmSlices/customerSlice/CustomerSlice';

const AddPlant = () => {
  const { register, handleSubmit, formState: { errors }, setValue, control, watch, reset } = useForm();

  const navigate = useNavigate();


  const onSubmit = (data) => {
    console.log(data)
    navigate("/list-plant")
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
                          <i className="fas fa-home" /> Add Plant
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
                                  className="form-label"
                                >
                                  Select Company 
                                </label>
                                <select
                                  className="form-control"
                              >
                                <option value="" > -- Select company --</option>
                              </select>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >
                                  Select State 
                                </label>
                                <select
                                  className="form-control"
                              >
                                <option value="" > -- Select State --</option>
                              </select>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >
                                  Select city 
                                </label>
                                <select
                                  className="form-control"
                              >
                                <option value="" > -- Select city --</option>
                              </select>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >
                                  Select Area working
                                </label>
                                <select
                                  className="form-control"
                              >
                                <option value="" > -- Select Area working --</option>
                              </select>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                >
                                  Select Tax type
                                </label>
                                <select
                                  className="form-control"
                              >
                                <option value="" > -- Select Tax type --</option>
                                <option value="" > -- GST (18%) --</option>
                                <option value="" > -- SEZ (0%) --</option>
                              </select>
                              </div>
                            </div>
                            
                            {/*end col*/}
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Pin code
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Address
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  GST
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Security Contact Number
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Account Contact Number
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Store Contact Number
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Other Contact Number
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Security Email Id
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Account Email Id
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
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Store Email Id
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Other Email Id
                                </label>
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

export default AddPlant