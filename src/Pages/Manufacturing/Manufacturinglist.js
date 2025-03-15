import React, { useState, useEffect } from "react";
import {
  fetchManufacturing,
  removeManufacturing,
} from "../../Redux/crmSlices/Manufacturing/ManufacturingSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useNavigate } from "react-router-dom";
const Manufacturinglist = () => {
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, count, loading, response, error } = useSelector((state) => {
    return {
      loading: state.rootReducer.ManufacturingSlice?.loading,
      response: state.rootReducer.ManufacturingSlice?.response,
      error: state.rootReducer.ManufacturingSlice?.error,
      data: state.rootReducer.ManufacturingSlice?.data,
    };
  });

  useEffect(() => {
    dispatch(fetchManufacturing());
  }, []);

  useEffect(() => {
    setAllData(response?.data || []);
    console.log(allData);
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
                              onClick={() => navigate("/add-manufacturing")}
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
                              <th className="sort" data-sort="category">
                                Category
                              </th>
                              <th className="sort" data-sort="product">
                                Product
                              </th>
                              <th className="sort" data-sort="code">
                                Code
                              </th>
                              <th className="sort" data-sort="customer">
                                Customer
                              </th>
                              <th className="sort" data-sort="launch">
                                Launch
                              </th>
                              <th className="sort" data-sort="target">
                                Target
                              </th>
                              <th className="sort" data-sort="stage">
                                Stage
                              </th>
                              <th className="sort" data-sort="qty">
                                Qty
                              </th>
                              <th className="sort" data-sort="unit">
                                Unit
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {loading ? (
                              <tr>
                                <td colSpan={10} className="text-center">
                                  Loading...
                                </td>
                              </tr>
                            ) : Array.isArray(allData) && allData.length > 0 ? (
                              allData.map((item, index) => (
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
                                    <div className="d-flex gap-2">
                                      <div className="edit">
                                        {/* <button
                      className="btn btn-sm btn-success edit-item-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#showModal"
                      
                    >
                      Edit
                    </button> */}
                                      </div>
                                      <div className="remove">
                                        <button
                                          className="btn btn-sm btn-danger remove-item-btn"
                                          onClick={() => handleDelete(item)}
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
                                <td colSpan={10} className="text-center">
                                  No records found
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

export default Manufacturinglist;
