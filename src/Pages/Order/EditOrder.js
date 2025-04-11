import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateOrder } from "../../Redux/crmSlices/orderSlice/OrderSlice";
const EditOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoUrl, setLogoUrl] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { loading, error } = useSelector((state) => ({
    loading: state.orders?.status === "loading",
    error: state.orders?.error,
  }));

  useEffect(() => {
    const storedData = localStorage.getItem("editOrder");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(parsedData);

      // Set form values from localStorage data
      setValue("or_customer", parsedData.or_customer || parsedData.customer);
      setValue("or_contact", parsedData.or_contact || parsedData.contactNo);
      setValue("or_order_no", parsedData.or_order_no || parsedData.orderNo);
      setValue("or_cstr_p_o", parsedData.or_cstr_p_o || parsedData.cstrPO);
      setValue("or_item", parsedData.or_item || parsedData.item);
      setValue("or_due_date", parsedData.or_due_date || parsedData.dueDate);
      setValue("or_qty", parsedData.or_qty || parsedData.quantity);
      setValue("or_pndg", parsedData.or_pndg || parsedData.pndg);
      setValue("or_done", parsedData.or_done || parsedData.done);
      setValue("or_unit", parsedData.or_unit || parsedData.unit);
      setValue("or_total", parsedData.or_total || parsedData.total);
      setValue("or_status", parsedData.or_status || parsedData.status);
    }
  }, [setValue]);

  const onSubmit = (formData) => {
    const storedData = JSON.parse(localStorage.getItem("editOrder"));
    const orderId = storedData.id || storedData.or_id;

    // Dispatch the update action
    dispatch(updateOrder({ orderId, formData }))
      .unwrap()
      .then(() => {
        localStorage.removeItem("editOrder");
        navigate("/all-order")
      })
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* Status messages */}
            {loading && (
              <div className="alert alert-info">Updating order...</div>
            )}
            {error && <div className="alert alert-danger">Error: {error}</div>}

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
                          <i className="fas fa-home" /> Edit Order Details
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
                                  className={`form-control ${
                                    errors.or_customer ? "is-invalid" : ""
                                  }`}
                                  {...register("or_customer", {
                                    required: "Customer is required",
                                  })}
                                />
                                {errors.or_customer && (
                                  <div className="invalid-feedback">
                                    {errors.or_customer.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Contact NO</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.or_contact ? "is-invalid" : ""
                                  }`}
                                  {...register("or_contact", {
                                    required: "Contact number is required",
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message:
                                        "Please enter a valid 10-digit phone number",
                                    },
                                  })}
                                />
                                {errors.or_contact && (
                                  <div className="invalid-feedback">
                                    {errors.or_contact.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Order NO</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.or_order_no ? "is-invalid" : ""
                                  }`}
                                  {...register("or_order_no", {
                                    required: "Order number is required",
                                  })}
                                />
                                {errors.or_order_no && (
                                  <div className="invalid-feedback">
                                    {errors.or_order_no.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">CSTR P.O</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.or_cstr_p_o ? "is-invalid" : ""
                                  }`}
                                  {...register("or_cstr_p_o", {
                                    required: "CSTR P.O is required",
                                  })}
                                />
                                {errors.or_cstr_p_o && (
                                  <div className="invalid-feedback">
                                    {errors.or_cstr_p_o.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Item</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.or_item ? "is-invalid" : ""
                                  }`}
                                  {...register("or_item", {
                                    required: "Item is required",
                                  })}
                                />
                                {errors.or_item && (
                                  <div className="invalid-feedback">
                                    {errors.or_item.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Due Date</label>
                                <input
                                  type="date"
                                  className={`form-control ${
                                    errors.or_due_date ? "is-invalid" : ""
                                  }`}
                                  {...register("or_due_date", {
                                    required: "Due date is required",
                                  })}
                                />
                                {errors.or_due_date && (
                                  <div className="invalid-feedback">
                                    {errors.or_due_date.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Quantity</label>
                                <input
                                  type="number"
                                  className={`form-control ${
                                    errors.or_qty ? "is-invalid" : ""
                                  }`}
                                  {...register("or_qty", {
                                    required: "Quantity is required",
                                    min: {
                                      value: 1,
                                      message: "Quantity must be at least 1",
                                    },
                                  })}
                                />
                                {errors.or_qty && (
                                  <div className="invalid-feedback">
                                    {errors.or_qty.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">PNDG</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.or_pndg ? "is-invalid" : ""
                                  }`}
                                  {...register("or_pndg", {
                                    required: "PNDG is required",
                                  })}
                                />
                                {errors.or_pndg && (
                                  <div className="invalid-feedback">
                                    {errors.or_pndg.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Done</label>
                                <input
                                  type="text"
                                  className={`form-control ${
                                    errors.or_done ? "is-invalid" : ""
                                  }`}
                                  {...register("or_done", {
                                    required: "Done field is required",
                                  })}
                                />
                                {errors.or_done && (
                                  <div className="invalid-feedback">
                                    {errors.or_done.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Unit</label>
                                <input
                                  type="number"
                                  className={`form-control ${
                                    errors.or_unit ? "is-invalid" : ""
                                  }`}
                                  {...register("or_unit", {
                                    required: "Unit is required",
                                    min: {
                                      value: 1,
                                      message: "Unit must be at least 1",
                                    },
                                  })}
                                />
                                {errors.or_unit && (
                                  <div className="invalid-feedback">
                                    {errors.or_unit.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Total</label>
                                <input
                                  type="number"
                                  className={`form-control ${
                                    errors.or_total ? "is-invalid" : ""
                                  }`}
                                  {...register("or_total", {
                                    required: "Total is required",
                                    min: {
                                      value: 0,
                                      message: "Total cannot be negative",
                                    },
                                  })}
                                />
                                {errors.or_total && (
                                  <div className="invalid-feedback">
                                    {errors.or_total.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-3">
                              <div className="mb-3">
                                <label className="form-label">Status</label>
                                <select
                                  className={`form-control ${
                                    errors.or_status ? "is-invalid" : ""
                                  }`}
                                  {...register("or_status", {
                                    required: "Status is required",
                                  })}
                                >
                                  <option value="">-- Select Status --</option>
                                  <option value="Done">Done</option>
                                  <option value="pending">Pending</option>
                                  <option value="Rejected">Rejected</option>
                                </select>
                                {errors.or_status && (
                                  <div className="invalid-feedback">
                                    {errors.or_status.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="mt-4">
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  disabled={loading}
                                >
                                  {loading ? "Updating..." : "Update Order"}
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
      <Footer />
    </div>
  );
};

export default EditOrder;
