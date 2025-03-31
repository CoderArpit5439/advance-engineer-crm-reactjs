import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchLead, deleteLead, searchLead } from "../../Redux/crmSlices/Lead/LeadSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LeadList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page state

  const { data, count, loading, response, status, error } = useSelector((state) => {
    return {
      data: state.rootReducer.LeadSlice?.data?.data,
      loading: state.rootReducer.LeadSlice?.loading,
      response: state.rootReducer.LeadSlice?.response,
      count: state.rootReducer.LeadSlice?.count,
      status: state.rootReducer.LeadSlice?.status,
      error: state.rootReducer.LeadSlice?.error,
    };
  });

  console.log("Result => " , response)

  // Fetch leads whenever current page, items per page or searchQuery changes
  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage; // Calculate the offset based on the current page

    if (searchQuery) {
      dispatch(searchLead({ search: searchQuery, offset, limit: itemsPerPage })); // Dispatch search action
    } else {
      dispatch(fetchLead({ offset, limit: itemsPerPage })); // Dispatch fetch action if no search term
    }
  }, [dispatch, currentPage, itemsPerPage, searchQuery]);

  useEffect(() => {
    if (response && response.data) {

      setLeads(response.data);  // Update leads with the API response
    }
  }, [response]);  // Make sure to update leads whenever the response changes

  // Handle deleting a lead
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
        dispatch(deleteLead(lead.l_id))
          .then(() => {
            dispatch(
              fetchLead({
                offset: (currentPage - 1) * itemsPerPage,
                limit: itemsPerPage,
              })
            );
            Swal.fire(
              "Deleted!",
              `${lead.l_name} has been deleted.`,
              "success"
            );
          })
          .catch(() => {
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

  // Pagination logic
  const totalPages = Math.ceil(count / itemsPerPage);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1 when the search query changes
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
                          {/* Search */}
                          <div
                            className="col-10 d-flex "
                            style={{ marginTop: "20px" }}
                          >
                            <div className="search-box mx-2">
                              <input
                                type="text"
                                className="form-control w-auto"
                                id="searchMemberList"
                                placeholder="Mobile, Name"
                                value={searchQuery}
                                onChange={handleSearchChange}
                              />
                              <i className="ri-search-line search-icon"></i>
                            </div>
                          </div>
                          {/* Search */}
                        </div>
                      </div>

                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="dataTableExample1"
                        >
                          <thead className="table-light">
                            <tr>
                              <th>Lead Name</th>
                              <th>Source</th>
                              <th>Mobile</th>
                              <th>Email</th>
                              <th>Address</th>
                              <th>Type</th>
                              <th>Join</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
  {loading ? (
    <tr>
      <td colSpan={8} className="text-center">
        <span>Loading...</span>
      </td>
    </tr>
  ) : response && response.length > 0 ? (
    response.map((lead, key) => (
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
              <i className="fa fa-pencil-o"></i> Update
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
  ) : leads && leads.length > 0 ? (
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
              <i className="fa fa-pencil-o"></i> Update
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

                        {/* Pagination */}
                        <div className="container mt-5">
                          <div className="d-flex justify-content-end align-items-center">
                            <nav aria-label="Page navigation">
                              <ul className="pagination pagination-lg">
                                <li className="page-item">
                                  <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    aria-disabled="true"
                                    disabled={currentPage === 1}
                                  >
                                    <span aria-hidden="true">&laquo;</span> Previous
                                  </button>
                                </li>

                                <li className="page-item disabled">
                                  <span className="page-link">
                                    Page {currentPage} of {totalPages}
                                  </span>
                                </li>

                                <li className="page-item">
                                  <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    aria-disabled="false"
                                    disabled={currentPage === totalPages}
                                  >
                                    Next <span aria-hidden="true">&raquo;</span>
                                  </button>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                        {/* Pagination */}
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
