import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  AddLead,
  fetchLead,
  deleteLead,
  updateLead,
} from "../../Redux/crmSlices/Lead/LeadSlice";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const LeadList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
  useEffect(() => {
    dispatch(fetchLead());
  }, [dispatch]);
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
        // Dispatch the delete action and handle async response
        dispatch(deleteLead(lead.l_id))
          .then(() => {
            // If deletion is successful, fetch the updated leads list
            dispatch(fetchLead());

            // Show success message after successful deletion
            Swal.fire(
              "Deleted!",
              `${lead.l_name} has been deleted.`,
              "success"
            );
          })
          .catch((error) => {
            // Handle any errors that occur during the deletion
            Swal.fire(
              "Error!",
              "There was an issue deleting the lead.",
              "error"
            );
          });
      }
    });
  };

  const handleEdit = (data) => {
    if (data) {
      localStorage.setItem("editData", JSON.stringify(data));
      navigate("/update-lead");
    }
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <button
                            type="submit"
                            className="btn btn-success add-btn"
                            id="create-btn"
                            onClick={() => navigate("/add-lead")}
                          >
                            <i className="ri-add-line align-bottom me-1" /> Add
                          </button>
                          {/* Search  */}
                          <div
                            className="col-10 d-flex "
                            style={{ marginTop: "20px" }}
                          >
                            <div class="search-box mx-2">
                              <input
                                type="text"
                                class="form-control w-auto"
                                id="searchMemberList"
                                placeholder="Mobile, Name"
                              />
                              <i class="ri-search-line search-icon"></i>
                            </div>
                            <div class="search-box mx-2"></div>
                          </div>
                          {/* Search  */}
                        </div>
                      </div>

                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="dataTableExample1"
                        >
                          <thead className="table-light">
                            <tr>
                              <th className="sort" data-sort="lead_name">
                                Lead Name
                              </th>
                              <th className="sort" data-sort="lead_source">
                                Source
                              </th>
                              <th className="sort" data-sort="lead_mobile">
                                Mobile
                              </th>
                              <th className="sort" data-sort="lead_email">
                                Email
                              </th>
                              <th className="sort" data-sort="lead_address">
                                Address
                              </th>
                              <th className="sort" data-sort="lead_type">
                                Type
                              </th>
                              <th className="sort" data-sort="lead_join">
                                Join
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {loading ? (
                              <tr>
                                <td colSpan={8} className="text-center">
                                  <span>Loading...</span>
                                </td>
                              </tr>
                            ) : leads?.length > 0 ? (
                              leads.map((lead, key) => (
                                <tr key={key}>
                                  <td>{lead.l_name}</td>
                                  <td>{lead.l_source}</td>
                                  <td>{lead.l_mobile}</td>
                                  <td>{lead.l_email}</td>
                                  <td>{lead.l_address}</td>
                                  <td>{lead.l_type}</td>
                                  <td>{lead.l_join}</td>
                                  <td>
                                    <div className="d-flex gap-2">
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-info"
                                        onClick={() => handleEdit(lead)}
                                      >
                                        <i className="fa fa-pencil-o"></i>{" "}
                                        Update
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(lead)}
                                      >
                                        <i className="fa fa-trash-o"></i> Remove
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={8} className="text-center">
                                  No leads available
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>

                        {/* No Result Found Section */}
                        {leads?.length === 0 && !loading && (
                          <div
                            className="noresult"
                            style={{ display: "block" }}
                          >
                            <div className="text-center">
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#08a88a"
                                style={{ width: 75, height: 75 }}
                              />
                              <h5 className="mt-2">Sorry! No Leads Found</h5>
                              <p className="text-muted mb-0">
                                We searched for leads but didn't find any.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadList;
