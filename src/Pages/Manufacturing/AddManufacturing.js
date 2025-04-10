import React,{useState,useEffect} from "react";
import Sidebar from "../../Layout/Sidebar";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  addManufacturing,
  fetchManufacturing,
  removeManufacturing,
  updateManufacturing,
} from "../../Redux/crmSlices/Manufacturing/ManufacturingSlice";
const AddManufacturing = () => {
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();
  const [selectedManufacturing, setSelectedManufacturing] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const { data, count, loading, response, error } = useSelector((state) => {
    return {
      loading: state.rootReducer.ManufacturingSlice?.loading,
      response: state.rootReducer.ManufacturingSlice?.response,
      error: state.rootReducer.ManufacturingSlice?.error,
      data: state.rootReducer.ManufacturingSlice?.data,
    };
  });

  const onSubmit = (data) => {
    dispatch(addManufacturing(data));
    navigate("/manufacturing-list");
    reset();
  };

  useEffect(() => {
    dispatch(fetchManufacturing());
  }, []);

  useEffect(() => {
    setAllData(response?.data);
  }, [response]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setAllData((prevData) => [...prevData, ...data]);
    }
  }, [data]);

  const handleEdit = (data) => {
    if (setSelectedManufacturing) {
      dispatch(updateManufacturing(data));
    }
  };

  const handleDelete = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Optimistically update the UI by removing the item
        const updatedData = allData.filter((item) => item.m_id !== data.m_id);
        setAllData(updatedData); // assuming setAllData updates your state or local data

        // Dispatch the delete action and re-fetch manufacturing data
        dispatch(removeManufacturing(data.m_id));
        dispatch(fetchManufacturing())
          .then(() => {
            // Once fetching is complete, show success
            Swal.fire(
              "Deleted!",
              `${data.m_category} has been deleted.`,
              "success"
            );
          })
          .catch(() => {
            // If fetching fails, you might want to roll back the optimistic UI update
            setAllData(allData); // revert back to original data in case of error
            Swal.fire(
              "Error!",
              "Something went wrong, please try again.",
              "error"
            );
          });
      }
    });
  };

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstnameInput"
                                  className="form-label"
                                >
                                  Category:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstnameInput"
                                  placeholder="Enter Category"
                                  {...register("m_category", {
                                    required: "Category is required",
                                  })}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="lastnameInput"
                                  className="form-label"
                                  {...register("c_fullname")}
                                >
                                  Product:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastnameInput"
                                  placeholder="Enter Product"
                                  {...register("m_product", {
                                    required: "Product is required",
                                  })}
                                />
                                  {errors.m_product && (
                                <p className="text-danger">
                                  {errors.m_product.message}
                                </p>
                              )}
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Code:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phonenumberInput"
                                  placeholder="Enter Code"
                                  {...register("m_code", {
                                    required: "Code is required",
                                  })}
                                />
                                 {errors.m_code && (
                                <p className="text-danger">
                                  {errors.m_code.message}
                                </p>
                              )}
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Customer:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter Customer"
                                  {...register("m_customer", {
                                    required: "Customer is required",
                                  })}
                                />
                                  {errors.m_customer && (
                                <p className="text-danger">
                                  {errors.m_customer.message}
                                </p>
                              )}
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="JoiningdatInput"
                                  className="form-label"
                                >
                                  Launch:
                                </label>
                                <input
                                  type="date"
                                  className="form-control flatpickr-input"
                                  data-provider="flatpickr"
                                  id="JoiningdatInput"
                                  {...register("m_launch", {
                                    required: "Launch date is required",
                                  })}
                                />
                             {errors.m_launch && (
                                <p className="text-danger">
                                  {errors.m_launch.message}
                                </p>
                              )}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="JoiningdatInput"
                                  className="form-label"
                                >
                                 Target:
                                </label>
                                <input
                                  type="Number"
                                  className="form-control flatpickr-input"
                                  data-provider="flatpickr"
                                  id="JoiningdatInput"
                                  {...register("m_target", {
                                    required: "Target date is required",
                                  })}
                                  placeholder="Target"
                                />
                                {errors.m_target && (
                                <p className="text-danger">
                                  {errors.m_target.message}
                                </p>
                              )}
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
                                  Stage
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="designationInput"
                                  placeholder="Stage"
                                  {...register("m_stage", {
                                    required: "Stage is required",
                                  })}
                                />
                                 {errors.m_stage && (
                                <p className="text-danger">
                                  {errors.m_stage.message}
                                </p>
                              )}
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="websiteInput1"
                                  className="form-label"
                                >
                                 Quantity
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="websiteInput1"
                                  placeholder="www.example.com"
                                  {...register("m_quantity", {
                                    required: "Quantity is required",
                                  })}
                                />
                                {errors.m_quantity && (
                                <p className="text-danger">
                                  {errors.m_quantity.message}
                                </p>
                              )}
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="cityInput"
                                  className="form-label"
                                >
                                 Unit
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="cityInput"
                                  placeholder="Unit"
                                  {...register("m_unit", {
                                    required: "Unit is required",
                                  })}
                                />
                                {errors.m_unit && (
                                <p className="text-danger">
                                  {errors.m_unit.message}
                                </p>
                              )}
                              </div>
                            </div>
                      
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                 
                                >
                                  Add Production
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
    </div>
  );
};

export default AddManufacturing;
