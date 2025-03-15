import React, { useState, useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  deleteInventory,
  fetchInventory,
} from "../../Redux/crmSlices/Inventory/InventorySlice";
const InventoryList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  const { data, count, loading, response } = useSelector((state) => ({
    data: state.rootReducer.InventorySlice?.data?.data,
    loading: state.rootReducer.InventorySlice?.loading,
    response: state.rootReducer.InventorySlice?.response,
  }));
  useEffect(() => {
    if (response?.data) {
      setInventory(response.data);
    }
  }, [response]);
  const handleDelete = (item) => {
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
        dispatch(deleteInventory(item.in_id))
          .then(() => {
            // If deletion is successful, fetch the updated inventory list
            dispatch(fetchInventory());

            // Show success message after successful deletion
            Swal.fire(
              "Deleted!",
              `${item.in_name} has been deleted.`,
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
                              onClick={() => navigate("/add-inventory")}
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
                              <th className="sort" data-sort="in_name">
                                Inventory Name
                              </th>
                              <th className="sort" data-sort="in_code">
                                Code
                              </th>
                              <th className="sort" data-sort="in_cat">
                                Category
                              </th>
                              <th className="sort" data-sort="in_qty">
                                Qty
                              </th>
                              <th className="sort" data-sort="in_rate">
                                Rate
                              </th>
                              <th className="sort" data-sort="in_value">
                                Value
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {loading ? (
                              <tr>
                                <td colSpan={7} className="text-center">
                                  Loading...
                                </td>
                              </tr>
                            ) : Array.isArray(inventory) &&
                              inventory.length > 0 ? (
                              inventory.map((data, key) => (
                                <tr key={key}>
                                  <td>{data.in_name}</td>
                                  <td>{data.in_code}</td>
                                  <td>{data.in_cat}</td>
                                  <td>{data.in_qty}</td>
                                  <td>{data.in_rate}</td>
                                  <td>{data.in_value}</td>
                                  <td>
                                    <div className="d-flex gap-2">
                                 
                                      <div className="remove">
                                        <button
                                          type="button"
                                          className="btn btn-sm btn-danger remove-item-btn"
                                          onClick={() => handleDelete(data)}
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
                                <td colSpan={7} className="text-center">
                                  No data available
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

export default InventoryList;
