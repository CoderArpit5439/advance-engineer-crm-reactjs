import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateProduct,
  GetCategoryNameList,
} from "../../Redux/crmSlices/productSlice/ProductSlice";
import DragAndDrop from "../../Components/DragNDrop";
import { GetCategoryList } from "../../Redux/crmSlices/categorySlice/CategorySlice";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productMedia, setProductMedia] = useState([]);

  const { loading, response, catList } = useSelector((state) => {
    return {
      loading: state.rootReducer.ProductSlice?.loading,
      response: state.rootReducer.ProductSlice?.response,
      catList: state.rootReducer.ProductSlice?.categoryList?.data,
    };
  });

  useEffect(() => {
    dispatch(GetCategoryList());
  }, []);

  

  const handleProductFile = (files) => {
    setProductMedia(files);
  };

  useEffect(() => {
    if (response) {
      if (response.status) {
        navigate("/list-product");
      }
    }
  }, []);

  const onSubmit = (data) => {
    if (productMedia?.length) {
      data.p_media = productMedia;
      dispatch(CreateProduct(data));
      navigate("/list-product")
    }
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content mt-10">
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
                <div className="card mt-xxl-n5">
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
                          <i className="fas fa-home" /> Add Production
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
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="col-sm-12"
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
                                  <option value=""> -- Select Status --</option>
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

                            {/* File Upload */}
                            <div className="col-lg-12">
                              <DragAndDrop onFilesChange={handleProductFile} />
                            </div>

                            {/* Submit/ */}
                            <div className="col-lg-12 text-center">
                              <button
                                className="btn btn-success    mt-6  text-bold text-lg"
                                type="submit"
                              >
                                Save
                              </button>
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
  );
};

export default AddProduct;
