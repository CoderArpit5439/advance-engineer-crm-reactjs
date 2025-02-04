import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import Footer from "../Layout/Footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  addManufacturing,
  fetchManufacturing,
  removeManufacturing,
  updateManufacturing,
} from "../Redux/crmSlices/Manufacturing/ManufacturingSlice";
const Manufacturing = () => {
  const [allData, setAllData] = useState([]);
  const [selectedManufacturing, setSelectedManufacturing] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const {data, count, loading, response, error } = useSelector((state) => {
    return {
      loading: state.rootReducer.ManufacturingSlice?.loading,
      response: state.rootReducer.ManufacturingSlice?.response,
      error: state.rootReducer.ManufacturingSlice?.error,
      data:state.rootReducer.ManufacturingSlice?.data
    };
  });

  const onSubmit = (data) => {
    dispatch(addManufacturing(data));
    dispatch(fetchManufacturing())
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
        const updatedData = allData.filter(item => item.m_id !== data.m_id);
        setAllData(updatedData); // assuming setAllData updates your state or local data
        
        // Dispatch the delete action and re-fetch manufacturing data
        dispatch(removeManufacturing(data.m_id));
        dispatch(fetchManufacturing()).then(() => {
          // Once fetching is complete, show success
          Swal.fire(
            "Deleted!",
            `${data.m_category} has been deleted.`,
            "success"
          );
        }).catch(() => {
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
    <>
      <>
        <Header />
        <Sidebar />
        <div class="content-wrapper" style={{ minHeight: "1276px" }}>
          <section class="content-header">
            <div class="header-icon">
              <i class="fa fa-users"></i>
            </div>
            <div class="header-title">
              <h1>Production</h1>
              <small>Production List</small>
            </div>
          </section>
          <section class="content">
            <div class="row">
              <div
                class="col-sm-12 lobipanel-parent-sortable ui-sortable"
                data-lobipanel-child-inner-id="2IPS3ijJzo"
              >
                <div
                  class="panel panel-bd lobidrag lobipanel lobipanel-sortable"
                  data-inner-id="2IPS3ijJzo"
                  data-index="0"
                >
                  <div class="panel-heading ui-sortable-handle">
                    <div class="btn-group" id="buttonexport">
                      <a href="#">
                        <h4> Production</h4>
                      </a>
                    </div>
                  </div>
                  <div class="panel-body">
                    <div class="btn-group">
                      <div class="buttonexport" id="buttonlist">
                        <a
                          class="btn btn-add"
                          data-toggle="modal"
                          data-target="#Production3"
                        >
                          {" "}
                          <i class="fa fa-plus"></i> Add Production
                        </a>
                      </div>
                      <button
                        class="btn btn-exp btn-sm dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="fa fa-bars"></i> Export Table Data
                      </button>
                      <ul class="dropdown-menu exp-drop" role="menu">
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/json.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            JSON
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]'});"
                          >
                            <img
                              src="assets/dist/img/json.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            JSON (ignoreColumn)
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'json',escape:'true'});"
                          >
                            <img
                              src="assets/dist/img/json.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            JSON (with Escape)
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'xml',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/xml.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            XML
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'sql'});"
                          >
                            <img
                              src="assets/dist/img/sql.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            SQL
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'csv',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/csv.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            CSV
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'txt',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/txt.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            TXT
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'excel',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/xls.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            XLS
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'doc',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/word.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            Word
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'powerpoint',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/ppt.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            PowerPoint
                          </a>
                        </li>
                        <li class="divider"></li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'png',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/png.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            PNG
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onclick="$('#dataTableExample1').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});"
                          >
                            <img
                              src="assets/dist/img/pdf.png"
                              width="24"
                              alt="logo"
                            />{" "}
                            PDF
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="table-responsive">
                      <table
                        id="dataTableExample1"
                        class="table table-bProductioned table-striped table-hover"
                      >
                        <thead>
                          <tr class="info">
                            <th>Category</th>
                            <th>Product</th>
                            <th>Code</th>
                            <th>Customer</th>
                            <th>Launch</th>
                            <th>Target</th>
                            <th>Stage</th>
                            <th>Qty</th>
                            <th>Unit</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
  {loading ? (
    <>
      <tr>
        <td>Loading...</td>
      </tr>
    </>
  ) : (
    <>
      {(Array.isArray(allData) ? allData : []).map((item, index) => (
        <tr key={index}>
          <td>{item.m_category}</td>
          <td>{item.m_product}</td>
          <td>{item.m_code}</td>
          <td>{item.m_customer}</td>
          <td>{item.m_launch}</td>
          <td>{item.m_target}</td>
          <td>{item.m_stage}</td>
          <td>{item.m_quantity}</td>
          <td>{item.m_unit}</td>
          <td>
            <button
              type="button"
              className="btn btn-add btn-sm"
              data-toggle="modal"
              data-target="#Production1"
              onClick={() => setSelectedManufacturing(item)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(item)}
            >
              <i className="fa fa-trash-o"></i>{" "}
            </button>
          </td>
        </tr>
      ))}
    </>
  )}
</tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal fade"
              id="Production1"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header modal-header-primary">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                    <h3>
                      <i class="fa fa-user m-r-5"></i> Update Production
                    </h3>
                  </div>
                  <form
                    class="form-horizontal"
                    onSubmit={handleSubmit(handleEdit)}
                  >
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-12">
                          <fieldset>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Category:</label>
                              <input
                                type="text"
                                placeholder="Category"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_category: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_category || ""}
                              />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Product:</label>
                              <input
                                type="text"
                                placeholder="Product"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_product: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_product || ""}
                              />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Code:</label>
                              <input
                                type="number"
                                placeholder="Code"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_code: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_code || ""}
                              />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Customer:</label>
                              <input
                                type="text"
                                placeholder="Customer"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_customer: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_customer || ""}
                              />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Launch:</label>
                              <input
                                type="date"
                                placeholder="Launch"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_launch: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_launch || ""}
                              />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Target:</label>
                              <input
                                type="date"
                                placeholder="Target"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_target: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_target || ""}
                              />
                            </div>

                            <div class="col-md-4 form-group">
                              <label class="control-label">Stage</label>
                              <input
                                type="text"
                                placeholder="Stage"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_stage: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_stage || ""}
                              />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Quantity</label>
                              <input
                                type="number"
                                placeholder="Quantity"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_quantity: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_quantity || ""}
                              />
                            </div>
                            <div class="col-md-6 form-group">
                              <label class="control-label">Unit</label>
                              <input
                                type="text"
                                placeholder="Unit"
                                class="form-control"
                                onChange={(e) =>
                                  setSelectedManufacturing({
                                    ...selectedManufacturing,
                                    m_unit: e.target.value,
                                  })
                                }
                                value={selectedManufacturing?.m_unit || ""}
                              />
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer flex justify-center mt-3 space-x-4">
                      <button
                        type="button"
                        className="px-8 py-3 text-xl font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="px-8 py-3 text-xl font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="Production2"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header modal-header-primary">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                    <h3>
                      <i class="fa fa-user m-r-5"></i> Delete Customer
                    </h3>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-12">
                        <form class="form-horizontal">
                          <fieldset>
                            <div class="col-md-12 form-group user-form-group">
                              <label class="control-label">
                                Delete Production
                              </label>
                              <div class="pull-right">
                                <button
                                  type="button"
                                  class="btn btn-danger btn-sm"
                                >
                                  NO
                                </button>
                                <button
                                  type="submit"
                                  class="btn btn-add btn-sm"
                                >
                                  YES
                                </button>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger pull-left"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="Production3"
              tabindex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header modal-header-primary">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    >
                      ×
                    </button>
                    <h3>
                      <i class="fa fa-user m-r-5"></i> Add Production
                    </h3>
                  </div>
                  <form
                    className="form-horizontal"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-12">
                          <fieldset>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Category:</label>
                              <input
                                type="text"
                                placeholder="Category"
                                className="form-control"
                                {...register("m_category", {
                                  required: "Category is required",
                                })}
                              />
                              {errors.m_category && (
                                <p className="text-danger">
                                  {errors.m_category.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Product:</label>
                              <input
                                type="text"
                                placeholder="Product"
                                className="form-control"
                                {...register("m_product", {
                                  required: "Product is required",
                                })}
                              />
                              {errors.m_product && (
                                <p className="text-danger">
                                  {errors.m_product.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Code:</label>
                              <input
                                type="number"
                                placeholder="Code"
                                className="form-control"
                                {...register("m_code", {
                                  required: "Code is required",
                                })}
                              />
                              {errors.m_code && (
                                <p className="text-danger">
                                  {errors.m_code.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Customer:</label>
                              <input
                                type="text"
                                placeholder="Customer"
                                className="form-control"
                                {...register("m_customer", {
                                  required: "Customer is required",
                                })}
                              />
                              {errors.m_customer && (
                                <p className="text-danger">
                                  {errors.m_customer.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Launch:</label>
                              <input
                                type="date"
                                placeholder="Launch"
                                className="form-control"
                                {...register("m_launch", {
                                  required: "Launch date is required",
                                })}
                              />
                              {errors.m_launch && (
                                <p className="text-danger">
                                  {errors.m_launch.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Target:</label>
                              <input
                                type="date"
                                placeholder="Target"
                                className="form-control"
                                {...register("m_target", {
                                  required: "Target date is required",
                                })}
                              />
                              {errors.m_target && (
                                <p className="text-danger">
                                  {errors.m_target.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Stage</label>
                              <input
                                type="text"
                                placeholder="Stage"
                                className="form-control"
                                {...register("m_stage", {
                                  required: "Stage is required",
                                })}
                              />
                              {errors.m_stage && (
                                <p className="text-danger">
                                  {errors.m_stage.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-4 form-group">
                              <label className="control-label">Quantity</label>
                              <input
                                type="number"
                                placeholder="Quantity"
                                className="form-control"
                                {...register("m_quantity", {
                                  required: "Quantity is required",
                                })}
                              />
                              {errors.m_quantity && (
                                <p className="text-danger">
                                  {errors.m_quantity.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                            <div className="col-md-6 form-group">
                              <label className="control-label">Unit</label>
                              <input
                                type="text"
                                placeholder="Unit"
                                className="form-control"
                                {...register("m_unit", {
                                  required: "Unit is required",
                                })}
                              />
                              {errors.m_unit && (
                                <p className="text-danger">
                                  {errors.m_unit.message}
                                </p>
                              )}{" "}
                              {/* Display error */}
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-add pull-right">
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger pull-left"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    </>
  );
};

export default Manufacturing;
