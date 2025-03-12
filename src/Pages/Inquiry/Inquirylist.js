import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  addInquiry,
  deleteInquiry,
  fetchInquiry,
} from "../../Redux/crmSlices/Inquiry/InquirySlice";
import { Navigate } from "react-router-dom";

const Inquirylist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inquiry, setInquiry] = useState([]);
  const { data, count, loading, response } = useSelector((state) => {
    return {
      data: state.rootReducer.InquirySlice?.data?.data,
      loading: state.rootReducer.InquirySlice?.loading,
      response: state.rootReducer.InquirySlice?.response,
    };
  });
  useEffect(() => {
    dispatch(fetchInquiry());
  }, [dispatch]);
  useEffect(() => {
    if (response && response.data) {
      setInquiry(response.data);
    }
  }, [response]);
  const handleDelete = (inq) => {
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
        // Dispatch the delete inquiry action
        dispatch(deleteInquiry(inq.inq_id))
          .then(() => {
            // If deletion is successful, fetch the updated inquiry list
            dispatch(fetchInquiry());

            // Show success message after successful deletion
            Swal.fire(
              "Deleted!",
              `${inq.inq_name} has been deleted.`,
              "success"
            );
          })
          .catch((error) => {
            // Handle any errors that occur during the deletion
            Swal.fire(
              "Error!",
              "There was an issue deleting the inquiry.",
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
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <div>
                            <button
                              type="submit"
                              className="btn btn-success add-btn"
                              id="create-btn"
                              onClick={() => navigate("/add-inquiry")}
                            >
                              <i className="ri-add-line align-bottom me-1" />{" "}
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="dataTableExample1"
                        >
                          <thead className="table-light">
                            <tr>
                              <th className="sort" data-sort="inq_name">
                                Inquiry Name
                              </th>
                              <th className="sort" data-sort="inq_contact">
                                Mobile No.
                              </th>
                              <th className="sort" data-sort="inq_email">
                                Email
                              </th>
                              <th className="sort" data-sort="inq_message">
                                Message
                              </th>
                              <th className="sort" data-sort="inq_status">
                                Status
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {loading ? (
                              <tr>
                                <td colSpan={6} className="text-center">
                                  Loading...
                                </td>
                              </tr>
                            ) : inquiry?.length > 0 ? (
                              inquiry.map((inq, key) => (
                                <tr key={key}>
                                  <td>{inq.inq_name}</td>
                                  <td>{inq.inq_contact}</td>
                                  <td>{inq.inq_email}</td>
                                  <td>{inq.inq_message}</td>
                                  <td>
                                    <span className="label-custom label label-default">
                                      {inq.inq_status}
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex gap-2">
                                      {/* <div className="edit">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-success edit-item-btn"
                                          data-toggle="modal"
                                          data-target="#Inquiry1"
                                        >
                                          <i className="fa fa-pencil"></i>
                                        </button>
                                      </div> */}
                                      <div className="remove">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-danger remove-item-btn"
                                          onClick={() => handleDelete(inq)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={6} className="text-center">
                                  No data found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>

                        <div className="noresult" style={{ display: "none" }}>
                          <div className="text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/msoeawqm.json"
                              trigger="loop"
                              colors="primary:#121331,secondary:#08a88a"
                              style={{ width: 75, height: 75 }}
                            />
                            <h5 className="mt-2">Sorry! No Result Found</h5>
                            <p className="text-muted mb-0">
                              We've searched more than 150+ Orders. We did not
                              find any orders for your search.
                            </p>
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
      </div>
    </div>
  );
};

export default Inquirylist;
