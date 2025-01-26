import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import Footer from "../Layout/Footer";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  AddLead,
  fetchLead,
  deleteLead,
  updateLead,
} from "../Redux/crmSlices/Lead/LeadSlice";
import Swal from "sweetalert2";

const Lead = () => {
  const dispatch = useDispatch();
  const [selectedLead, setSelectedLead] = useState(null);
  const [leads, setLeads] = useState([]);

  const handleEdit = (data) => {
    if (selectedLead) {
      console.log(selectedLead)
      dispatch(updateLead(selectedLead));
    } else {
      onSubmit(data);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm();

  const { data, count, loading, response } = useSelector((state) => {
    return {
      data: state.rootReducer.LeadSlice?.data?.data,
      loading: state.rootReducer.LeadSlice?.loading,
      response: state.rootReducer.LeadSlice?.response,
    };
  });

  useEffect(() => {
    if (response && response.data) {
      setLeads(response.data);
    }
  }, [response]);

  const onSubmit = (lead) => {
    dispatch(AddLead(lead));
    reset();
  };

  const handleDelete = (lead) => {
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
        dispatch(deleteLead(lead.l_id));
        Swal.fire("Deleted!", `${lead.l_name} has been deleted.`, "success");
        dispatch(fetchLead());
      }
    });
  };

  useEffect(() => {
    dispatch(fetchLead());
  }, [dispatch]);

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
            <h1>Lead</h1>
            <small>Lead List</small>
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
                    <a>
                      <h4>Leads</h4>
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
                  <div class="form-group">
                    <div className="col-sm-2 col-xs-12 ">
                      <div class="btn-group " style={{ display: "flex" }}>
                        <a
                          class="btn btn-exp btn-add"
                          data-toggle="modal"
                          data-target="#lead3"
                        >
                          {" "}
                          <i class="fa fa-plus"></i> Add Lead
                        </a>
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
                    </div>
                    <div
                      class="col-sm-5 col-xs-12 "
                      style={{ display: "flex" }}
                    >
                      <select
                        className="form-control "
                        style={{ marginRight: "5px" }}
                      >
                        <option>-- Select Source --</option>
                      </select>
                      <select
                        className="form-control"
                        style={{ marginRight: "5px" }}
                      >
                        <option>-- Select Executive --</option>
                      </select>
                      <select
                        className="form-control"
                        style={{ marginRight: "5px" }}
                      >
                        <option>-- Select Type --</option>
                      </select>
                    </div>
                    <div
                      class="col-sm-5 col-xs-12 "
                      style={{ display: "flex" }}
                    >
                      <select
                        className="form-control"
                        style={{ marginRight: "5px" }}
                      >
                        <option>Active</option>
                      </select>
                      <select
                        className="form-control"
                        style={{ marginRight: "5px" }}
                      >
                        <option>2023 - 2024</option>
                      </select>
                      <input
                        className="form-control"
                        style={{ marginRight: "5px" }}
                        placeholder="Search..."
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div class="table-responsive">
                      <table
                        id="dataTableExample1"
                        class="table table-bordered table-striped table-hover"
                      >
                        <thead>
                          <tr class="info">
                            <th>Lead Name</th>
                            <th>Source</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>type</th>
                            <th>Join</th>
                            {/* <th>Status</th> */}
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {leads?.map((lead, index) => (
                            <tr key={index}>
                              <td>{lead.l_name}</td>
                              <td>{lead.l_source}</td>
                              <td>{lead.l_mobile}</td>
                              <td>{lead.l_email}</td>
                              <td>{lead.l_address}</td>
                              <td>{lead.l_type}</td>
                              <td>{lead.l_join}</td>

                              <td className="grid grid-cols-2">
                                <button
                                  type="button"
                                  className="btn btn-add btn-sm"
                                  data-toggle="modal"
                                  data-target="#lead1"
                                  onClick={() => setSelectedLead(lead)}
                                >
                                  <i className="fa fa-pencil"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDelete(lead)}
                                >
                                  <i className="fa fa-trash-o"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="lead1"
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
                    <i class="fa fa-user m-r-5"></i> Update Lead
                  </h3>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form
                        className="form-horizontal space-y-6"
                        onSubmit={handleSubmit(handleEdit)}
                      >
                        <div className="modal-body">
                          <div className="space-y-6">
                            {/* Lead Name Field */}
                            <div className="flex flex-col md:flex-row md:space-x-4">
                              <div className="flex-1">
                                <label className="block text-lg font-semibold text-gray-700">
                                  Lead Name:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter Lead Name"
                                  className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                                  value={selectedLead?.l_name || ""}
                                  // Bind to the corresponding field from selectedLead
                                  onChange={(e) =>
                                    setSelectedLead({
                                      ...selectedLead,
                                      l_name: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              {/* Email Field */}
                              <div className="flex-1">
                                <label className="block text-lg font-semibold text-gray-700">
                                  Email:
                                </label>
                                <input
                                  type="email"
                                  placeholder="Enter Email"
                                  className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                                  value={selectedLead?.l_email || ""}
                                  onChange={(e) =>
                                    setSelectedLead({
                                      ...selectedLead,
                                      l_email: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>

                            {/* Mobile and Type Fields */}
                            <div className="flex flex-col md:flex-row md:space-x-4">
                              <div className="flex-1">
                                <label className="block text-lg font-semibold text-gray-700">
                                  Mobile:
                                </label>
                                <input
                                  type="number"
                                  placeholder="Enter Mobile"
                                  className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                                  value={selectedLead?.l_mobile || ""}
                                  onChange={(e) =>
                                    setSelectedLead({
                                      ...selectedLead,
                                      l_mobile: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div className="flex-1">
                                <label className="block text-lg font-semibold text-gray-700">
                                  Type:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter Type"
                                  className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                                  value={selectedLead?.l_type || ""}
                                  onChange={(e) =>
                                    setSelectedLead({
                                      ...selectedLead,
                                      l_type: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>

                            {/* Lead Source and Join Fields */}
                            <div className="flex flex-col md:flex-row md:space-x-4">
                              <div className="flex-1">
                                <label className="block text-lg font-semibold text-gray-700">
                                  Lead Source:
                                </label>
                                <input
                                  type="text"
                                  placeholder="Enter Lead Source"
                                  className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                                  value={selectedLead?.l_source || ""}
                                  onChange={(e) =>
                                    setSelectedLead({
                                      ...selectedLead,
                                      l_source: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div className="flex-1">
                                <label className="block text-lg font-semibold text-gray-700">
                                  Lead Join:
                                </label>
                                <input
                                  type="date"
                                  placeholder="Enter Lead Join"
                                  className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                                  value={selectedLead?.l_join || ""}
                                  onChange={(e) =>
                                    setSelectedLead({
                                      ...selectedLead,
                                      l_join: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            </div>

                            {/* Address Field */}
                            <div>
                              <label className="block text-lg font-semibold text-gray-700">
                                Address:
                              </label>
                              <textarea
                                rows="3"
                                placeholder="Enter Address"
                                className="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                                value={selectedLead?.l_address || ""}
                                onChange={(e) =>
                                  setSelectedLead({
                                    ...selectedLead,
                                    l_address: e.target.value,
                                  })
                                }
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        {/* Modal Footer */}
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
            id="lead2"
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
                            <label class="control-label">Delete Leads</label>
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
            id="lead3"
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
                    <i class="fa fa-user m-r-5"></i> Add Lead
                  </h3>
                </div>
                <form
                  class="form-horizontal space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="modal-body">
                    <div class="space-y-6">
                      <div class="flex flex-col md:flex-row md:space-x-4">
                        <div class="flex-1">
                          <label class="block text:lg font-semibold text-gray-700">
                            Lead Name:
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Lead Name"
                            class="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("lead_name")}
                          />
                        </div>

                        <div class="flex-1">
                          <label class="block text:lg font-semibold text-gray-700">
                            Email:
                          </label>
                          <input
                            type="email"
                            placeholder="Enter Email"
                            class="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("lead_email")}
                          />
                        </div>
                      </div>

                      <div class="flex flex-col md:flex-row md:space-x-4">
                        <div class="flex-1">
                          <label class="block text:lg font-semibold text-gray-700">
                            Mobile:
                          </label>
                          <input
                            type="number"
                            placeholder="Enter Mobile"
                            class="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("lead_number")}
                          />
                        </div>

                        <div class="flex-1">
                          <label class="block text:lg font-semibold text-gray-700">
                            Type:
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Type"
                            class="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("lead_type")}
                          />
                        </div>
                      </div>

                      <div class="flex flex-col md:flex-row md:space-x-4">
                        <div class="flex-1">
                          <label class="block text:lg font-semibold text-gray-700">
                            Lead Source:
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Lead Source"
                            class="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("lead_source")}
                          />
                        </div>

                        <div class="flex-1">
                          <label class="block text:lg font-semibold text-gray-700">
                            Lead Join:
                          </label>
                          <input
                            type="date"
                            placeholder="Enter Lead Join"
                            class="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                            {...register("lead_join")}
                          />
                        </div>
                      </div>

                      <div>
                        <label class="block text:lg font-semibold text-gray-700">
                          Address:
                        </label>
                        <textarea
                          name="address"
                          rows="3"
                          placeholder="Enter Address"
                          class="mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                          {...register("lead_address")}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer flex justify-center mt-3 space-x-4">
                    <button
                      type="button"
                      class="px-8 py-3 text-xl font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      class="px-8 py-3 text-xl font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Save
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

export default Lead;
