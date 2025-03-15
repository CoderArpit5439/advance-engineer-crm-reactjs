import React, { useState, useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  deleteSupport,
  fetchSupport,
} from "../../Redux/crmSlices/support/SupportSlice";
const SupportList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const { data, count, loading, response } = useSelector((state) => ({
    loading: state.rootReducer.SupportSlice?.loading,
    response: state.rootReducer.SupportSlice?.response,
  }));

  useEffect(() => {
    dispatch(fetchSupport());
  }, [dispatch]);

  useEffect(() => {
    if (response?.data) {
      setSupport(response.data);
    }
  }, [response]);
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
                              type="button"
                              className="btn btn-success add-btn"
                              id="create-btn"
                              onClick={() => navigate("/add-support")}
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
                              <th className="sort" data-sort="s_order_no">
                                Order No.
                              </th>
                              <th className="sort" data-sort="s_contact">
                                Contact
                              </th>
                              <th className="sort" data-sort="s_poc">
                                POC
                              </th>
                              <th className="sort" data-sort="s_item">
                                Item
                              </th>
                              <th className="sort" data-sort="s_due_date">
                                Due Date
                              </th>
                              <th className="sort" data-sort="s_qty">
                                Qty
                              </th>
                              <th className="sort" data-sort="s_pndg">
                                Pndg
                              </th>
                              <th className="sort" data-sort="s_done">
                                Done
                              </th>
                              <th className="sort" data-sort="s_unit">
                                Unit
                              </th>
                              <th className="sort" data-sort="s_status">
                                Status
                              </th>
                              <th className="sort" data-sort="s_total">
                                Total
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {loading ? (
                              <tr>
                                <td colSpan={12} className="text-center">
                                  Loading...
                                </td>
                              </tr>
                            ) : Array.isArray(support) && support.length > 0 ? (
                              support.map((data, key) => (
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
                                    <div className="d-flex gap-2">
                                    
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-danger remove-item-btn"
                                        onClick={() => handleDelete(data)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan={12} className="text-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportList;
