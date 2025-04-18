import React, { useEffect, useState } from "react";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addInquiry,
  deleteInquiry,
  fetchInquiry,
} from "../../Redux/crmSlices/Inquiry/InquirySlice";
import Header from "../../Layout/Header";
import { GetProductList } from "../../Redux/crmSlices/productSlice/ProductSlice";
const AddInquiry = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, count, loading, response } = useSelector((state) => {
    return {
      data: state.rootReducer.ProductSlice?.data?.data,
      count: state.rootReducer.ProductSlice?.data?.count,
      loading: state.rootReducer.ProductSlice?.loading,
      response: state.rootReducer.ProductSlice?.response,
    };
  });

  console.log(data)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm();
  const onSubmit = (inquiry) => {
    dispatch(addInquiry(inquiry));
    navigate("/inquiry-list");
    reset();
  };
  useEffect(() => {
    dispatch(GetProductList());
  }, [dispatch]);

  return (
    <div>
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
                    <div className="p-0 ms-auto rounded-circle profile-photo-edit"></div>
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
                          <i className="fas fa-home" /> Add Inquiry
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
                            {/* Inquiry Name */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Inquiry Name:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("inq_name", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.inq_name.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Mobile No. */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Mobile No:
                                </label>
                                <input
                                
                                  type="number"
                                  placeholder="Mobile No."
                                  className="form-control"
                                  {...register("inq_contact", {
                                    required: "Mobile No. is required",
                                  })}
                                />
                                {errors.inq_contact && (
                                  <p className="text-danger">
                                    {errors.inq_contact.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Email */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input
                                  type="text"
                                  placeholder="Email"
                                  className="form-control"
                                  {...register("inq_email", {
                                    required: "Email is required",
                                    pattern: {
                                      value:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                      message: "Please enter a valid email",
                                    },
                                  })}
                                />
                                {errors.inq_email && (
                                  <p className="text-danger">
                                    {errors.inq_email.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Message */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Message:</label>
                                <input
                                  type="text"
                                  placeholder="Message"
                                  className="form-control"
                                  {...register("inq_message", {
                                    required: "Message is required",
                                  })}
                                />
                                {errors.inq_message && (
                                  <p className="text-danger">
                                    {errors.inq_message.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Status */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Status:</label>
                                <select
                                  className="form-control"
                                  {...register("inq_status", {
                                    required: "Status is required",
                                  })}
                                >
                                  <option value="Complete">Complete</option>
                                  <option value="In-complete">
                                    In-complete
                                  </option>
                                </select>
                                {errors.inq_status && (
                                  <p className="text-danger">
                                    {errors.inq_status.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Product Name:
                                </label>
                                <div className="mb-3">
                                
                                <select
                                  className={`form-control ${
                                    errors.company ? "is-invalid" : ""
                                  }`}
                                  {...register("p_id", {
                                    required: "Product Name is required",
                                  })}
                                >
                                  <option value="">-- Select Product --</option>
                                  {data?.map((product) => (
                                    <option
                                      key={product.p_id}
                                      value={product.p_id}
                                    >
                                      {product.p_name}
                                    </option>
                                  ))}
                                
                                </select>
                                {errors.p_id && (
                                  <div className="invalid-feedback">
                                    {errors.p_id.message}
                                  </div>
                                )}
                              </div>
                                {errors.p_id && (
                                  <p className="text-danger">
                                    {errors.p_id.message}
                                  </p>
                                )}
                              </div>
                            </div> */}

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Size:</label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("p_size", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.p_size.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">MOC:</label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("p_moc", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.p_moc.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Thickness:</label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("p_thickness", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.p_thickness.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">DRG:</label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("p_drg", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.p_drg.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Product Code:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("p_code", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.p_code.message}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Information:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Inquiry Name"
                                  className="form-control"
                                  {...register("p_info", {
                                    required: "Inquiry Name is required",
                                  })}
                                />
                                {errors.inq_name && (
                                  <p className="text-danger">
                                    {errors.p_info.message}
                                  </p>
                                )}
                              </div>
                            </div>

                         
                        
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
                                    {...register("p_description",{
                                      required: "Status is required",
                                    })}
                                  />
                                    {errors.p_description && (
                                    <p className="text-danger">
                                      {errors.p_description.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                           
                            
                       

                            {/* Submit & Close Buttons */}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary text-5rem"
                                >
                                  Add Inquiry
                                </button>
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
    </div>
  );
};

export default AddInquiry;
