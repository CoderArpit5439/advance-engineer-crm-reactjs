import React, { useState,useEffect } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import Footer from "../Layout/Footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  addsupport,
  deleteSupport,
  fetchSupport,
} from "../Redux/crmSlices/support/SupportSlice";
const Support = () => {
  const dispatch = useDispatch();
  const [support, setSupport] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm();
  const { data, count, loading, response } = useSelector((state) => ({
    loading: state.rootReducer.SupportSlice?.loading,
    response: state.rootReducer.SupportSlice?.response,
  }));

  useEffect(() => {
    dispatch(fetchSupport());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(addsupport(data));
    dispatch(fetchSupport());
    reset();
  };

  useEffect(() => {
    if (response?.data) {
      setSupport(response.data);
    }
  }, [response]);

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
        // Dispatch the delete action
        dispatch(deleteSupport(data.s_id))
          .then(() => {
            // If deletion is successful, fetch the updated inventory list
            dispatch(fetchSupport());

            // Show success message after successful deletion
            Swal.fire(
              "Deleted!",
              `${data.s_order_no} order no has been deleted.`,
              "success"
            );
          })
          .catch((error) => {
            // Handle any errors that occur during the deletion
            Swal.fire(
              "Error!",
              "There was an issue deleting the inventory item.",
              "error"
            );
          });
      }
    });
  };
  return (
    <>
      <Header />
      <Sidebar />
      <div class="content-wrapper" style={{ minHeight: "1276px" }}>
        <section class="content-header">
          <div class="header-icon">
            <i class="fa fa-users"></i>
          </div>
          <div class="header-title">
            <h1>Support</h1>
            <small>Support List</small>
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
                      <h4>Support</h4>
                    </a>
                  </div>
                  <div class="dropdown">
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <a
                          data-func="editTitle"
                          data-tooltip="Edit title"
                          data-toggle="tooltip"
                          data-title="Edit title"
                          data-placement="bottom"
                          data-original-title=""
                          title=""
                        >
                          <i class="panel-control-icon ti-pencil"></i>
                          <span class="control-title">Edit title</span>
                        </a>
                      </li>
                      <li>
                        <a
                          data-func="unpin"
                          data-tooltip="Unpin"
                          data-toggle="tooltip"
                          data-title="Unpin"
                          data-placement="bottom"
                          data-original-title=""
                          title=""
                        >
                          <i class="panel-control-icon ti-move"></i>
                          <span class="control-title">Unpin</span>
                        </a>
                      </li>
                      <li>
                        <a
                          data-func="reload"
                          data-tooltip="Reload"
                          data-toggle="tooltip"
                          data-title="Reload"
                          data-placement="bottom"
                          data-original-title=""
                          title=""
                        >
                          <i class="panel-control-icon ti-reload"></i>
                          <span class="control-title">Reload</span>
                        </a>
                      </li>
                      <li>
                        <a
                          data-func="minimize"
                          data-tooltip="Minimize"
                          data-toggle="tooltip"
                          data-title="Minimize"
                          data-placement="bottom"
                          data-original-title=""
                          title=""
                        >
                          <i class="panel-control-icon ti-minus"></i>
                          <span class="control-title">Minimize</span>
                        </a>
                      </li>
                      <li>
                        <a
                          data-func="expand"
                          data-tooltip="Fullscreen"
                          data-toggle="tooltip"
                          data-title="Fullscreen"
                          data-placement="bottom"
                          data-original-title=""
                          title=""
                        >
                          <i class="panel-control-icon ti-fullscreen"></i>
                          <span class="control-title">Fullscreen</span>
                        </a>
                      </li>
                      <li>
                        <a
                          data-func="close"
                          data-tooltip="Close"
                          data-toggle="tooltip"
                          data-title="Close"
                          data-placement="bottom"
                          data-original-title=""
                          title=""
                        >
                          <i class="panel-control-icon ti-close"></i>
                          <span class="control-title">Close</span>
                        </a>
                      </li>
                    </ul>
                    <div class="dropdown-toggle" data-toggle="dropdown">
                      <span class="panel-control-icon glyphicon glyphicon-cog"></span>
                    </div>
                  </div>
                </div>
                <div class="panel-body">
                  <div class="btn-group">
                    <div class="buttonexport" id="buttonlist">
                      <a
                        class="btn btn-add"
                        data-toggle="modal"
                        data-target="#support3"
                      >
                        {" "}
                        <i class="fa fa-plus"></i> Add Support
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
                      class="table table-bordered table-striped table-hover"
                    >
                      <thead>
                        <tr class="info">
                          <th>Order No.</th>
                          <th>Contact</th>
                          <th>POC</th>
                          <th>Item</th>
                          <th>Due date</th>
                          <th>Qty</th>
                          <th>Pndg</th>
                          <th>Done</th>
                          <th>Unit</th>
                          <th>Status</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="7" className="text-center">
                              <span>Loading...</span>
                            </td>
                          </tr>
                        ) : Array.isArray(support) && support.length > 0 ? (
                          support?.map((data, key) => (
                            <tr key={key}>
                              <td>{data.s_order_no}</td>
                              <td>{data.s_contact}</td>
                              <td>{data.s_poc}</td>
                              <td>{data.s_item}</td>
                              <td>{data.s_due_date}</td>
                              <td>{data.s_qty}</td>
                              <td>{data.s_pndg}</td>
                              <td>{data.s_done}</td>
                              <td>{data.s_unit}</td>
                              <td>{data.s_status}</td>
                              <td>{data.s_total}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-add btn-sm"
                                  data-toggle="modal"
                                  data-target="#Inquiry1"
                                >
                                  <i className="fa fa-pencil"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDelete(data)}
                                >
                                  <i className="fa fa-trash-o"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No data available
                            </td>
                          </tr>
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
            id="support1"
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
                    <i class="fa fa-user m-r-5"></i> Update Support
                  </h3>
                </div>
                <form class="form-horizontal">
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-12">
                        <fieldset>
                          <div class="col-md-4 form-group">
                            <label class="control-label">Order no.</label>
                            <input
                              type="number"
                              placeholder="Order no."
                              class="form-control"
                            />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Contact:</label>
                            <input
                              type="text"
                              placeholder="Contact"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-4 form-group">
                            <label class="control-label">POC:</label>
                            <input
                              type="text"
                              placeholder="POC"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-4 form-group">
                            <label class="control-label">Item:</label>
                            <input
                              type="text"
                              placeholder="Item"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-4 form-group">
                            <label class="control-label">Due date:</label>
                            <input
                              type="date"
                              placeholder="Item"
                              class="form-control"
                            />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Qty</label>
                            <input
                              type="number"
                              placeholder="Qty"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-4 form-group">
                            <label class="control-label">Pndg</label>
                            <input
                              type="number"
                              placeholder="Pndg"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-4 form-group">
                            <label class="control-label">Done</label>
                            <input
                              type="number"
                              placeholder="Done"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Unit</label>
                            <input
                              type="text"
                              placeholder="Unit"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Status</label>
                            <input
                              type="text"
                              placeholder="Status"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Total</label>
                            <input
                              type="text"
                              placeholder="Total"
                              class="form-control"
                            />
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-add pull-right">
                      Save
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger pull-left"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="support2"
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
                            <label class="control-label">Delete Support</label>
                            <div class="pull-right">
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                              >
                                NO
                              </button>
                              <button type="submit" class="btn btn-add btn-sm">
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
            id="support3"
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
                    <i class="fa fa-user m-r-5"></i> Add Support
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
                            <label className="control-label">Order no.</label>
                            <input
                              type="number"
                              placeholder="Order no."
                              className="form-control"
                              {...register("s_order_no", {
                                required: "Order number is required",
                              })}
                            />
                            {errors.s_order_no && (
                              <span>{errors.s_order_no.message}</span>
                            )}
                          </div>

                          <div className="col-md-4 form-group">
                            <label className="control-label">Contact:</label>
                            <input
                              type="text"
                              placeholder="Contact"
                              className="form-control"
                              {...register("s_contact", {
                                required: "Contact is required",
                              })}
                            />
                            {errors.s_contact && (
                              <span>{errors.s_contact.message}</span>
                            )}
                          </div>

                          <div className="col-md-4 form-group">
                            <label className="control-label">POC:</label>
                            <input
                              type="text"
                              placeholder="POC"
                              className="form-control"
                              {...register("s_poc", {
                                required: "POC is required",
                              })}
                            />
                            {errors.s_poc && (
                              <span>{errors.s_poc.message}</span>
                            )}
                          </div>

                          <div className="col-md-4 form-group">
                            <label className="control-label">Item:</label>
                            <input
                              type="text"
                              placeholder="Item"
                              className="form-control"
                              {...register("s_item", {
                                required: "Item is required",
                              })}
                            />
                            {errors.s_item && (
                              <span>{errors.s_item.message}</span>
                            )}
                          </div>

                          <div className="col-md-4 form-group">
                            <label className="control-label">Due date:</label>
                            <input
                              type="date"
                              placeholder="Due date"
                              className="form-control"
                              {...register("s_due_date", {
                                required: "Due date is required",
                              })}
                            />
                            {errors.s_due_date && (
                              <span>{errors.s_due_date.message}</span>
                            )}
                          </div>

                          <div className="col-md-4 form-group">
                            <label className="control-label">Qty</label>
                            <input
                              type="number"
                              placeholder="Qty"
                              className="form-control"
                              {...register("s_qty", {
                                required: "Quantity is required",
                              })}
                            />
                            {errors.s_qty && (
                              <span>{errors.s_qty.message}</span>
                            )}
                          </div>

                          <div className="col-md-4 form-group">
                            <label className="control-label">Pndg</label>
                            <input
                              type="number"
                              placeholder="Pndg"
                              className="form-control"
                              {...register("s_pndg", {
                                required: "Pending is required",
                              })}
                            />
                            {errors.s_pndg && (
                              <span>{errors.s_pndg.message}</span>
                            )}
                          </div>

                          <div className="col-md-4 form-group">
                            <label className="control-label">Done</label>
                            <input
                              type="number"
                              placeholder="Done"
                              className="form-control"
                              {...register("s_done", {
                                required: "Done is required",
                              })}
                            />
                            {errors.s_done && (
                              <span>{errors.s_done.message}</span>
                            )}
                          </div>

                          <div className="col-md-6 form-group">
                            <label className="control-label">Unit</label>
                            <input
                              type="text"
                              placeholder="Unit"
                              className="form-control"
                              {...register("s_unit", {
                                required: "Unit is required",
                              })}
                            />
                            {errors.s_unit && (
                              <span>{errors.s_unit.message}</span>
                            )}
                          </div>

                          <div className="col-md-6 form-group">
                            <label className="control-label">Status</label>
                            <input
                              type="text"
                              placeholder="Status"
                              className="form-control"
                              {...register("s_status", {
                                required: "Status is required",
                              })}
                            />
                            {errors.s_status && (
                              <span>{errors.s_status.message}</span>
                            )}
                          </div>

                          <div className="col-md-6 form-group">
                            <label className="control-label">Total</label>
                            <input
                              type="text"
                              placeholder="Total"
                              className="form-control"
                              {...register("s_total", {
                                required: "Total is required",
                              })}
                            />
                            {errors.s_total && (
                              <span>{errors.s_total.message}</span>
                            )}
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
  );
};

export default Support;
