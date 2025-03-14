import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import {
  fetchUser,
  deleteUser,
} from "../../Redux/crmSlices/employeeSlice/EmployeeSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedData, setEditedData] = useState({ emp_name: "", emp_role: "" });

  const { userList, loading } = useSelector((state) => {
    const response = state.rootReducer?.EmployeeSlice?.response;
    return {
      userList: response?.data || [],
      loading: state.rootReducer?.EmployeeSlice?.loading || false,
    };
  });

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditedData({ emp_name: user.emp_name, emp_role: user.emp_role });
    setShowEditModal(true);
  };

  const handleDelete = (user) => {
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
        dispatch(deleteUser(user.emp_id));
        dispatch(fetchUser());
        Swal.fire("Deleted!", `${user.emp_name} has been deleted.`, "success");
        dispatch(fetchUser());
      }
    });
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = () => {
    // dispatch(updateUser({ id: selectedUser.id, ...editedData }));
    setShowEditModal(false);
    Swal.fire("Updated!", "Employee details have been updated.", "success");
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
                      {/* Add Lead Button */}
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <button
                            type="submit"
                            className="btn btn-success add-btn"
                            id="create-btn"
                            onClick={() => navigate("/add-employee")} // Redirect to "Add Lead" page
                          >
                            <i className="ri-add-line align-bottom me-1" /> Add
                          </button>
                        </div>
                      </div>
                      <div className="table-responsive table-card mt-3 mb-1">
  <table className="table align-middle table-nowrap" id="dataTableExample1">
    <thead className="table-light">
      <tr>
        <th className="sort" data-sort="emp_name">
          Name
        </th>
        <th className="sort" data-sort="emp_role">
          Role
        </th>
        <th className="sort" data-sort="emp_image">
          Photo
        </th>
        <th className="sort" data-sort="action">
          Action
        </th>
      </tr>
    </thead>
    <tbody className="list form-check-all">
      {userList && userList.length > 0 ? (
        userList.map((user) => (
          <tr key={user.id}>
            <td>{user.emp_name}</td>
            <td>{user.emp_role}</td>
            <td>
              <img
                src={user.emp_image || "assets/dist/img/default-cat.png"}
                alt="User"
                width="50"
                height="50"
              />
            </td>
            <td>
              <div className="d-flex gap-2">
                {/* <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleEdit(user)}
                >
                  <i className="fa fa-pencil"></i> Edit
                </button> */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user)}
                >
                  <i className="fa fa-trash"></i> Delete
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4} className="text-center">
            No employees found
          </td>
        </tr>
      )}
    </tbody>
  </table>

  {/* No Result Found Section */}
  {userList?.length === 0 && !loading && (
    <div className="noresult" style={{ display: "block" }}>
      <div className="text-center">
        <lord-icon
          src="https://cdn.lordicon.com/msoeawqm.json"
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          style={{ width: 75, height: 75 }}
        />
        <h5 className="mt-2">Sorry! No Employees Found</h5>
        <p className="text-muted mb-0">
          We searched for employees but didn't find any.
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
      <Footer />

      {/* Edit Modal */}
      {/* {showEditModal && (
        <div className="modal-overlay active">
          <div className="modal-box">
            <h4 className="modal-title">Edit Employee</h4>
            <p>Update details for {selectedUser?.emp_name}</p>
            <input
              type="text"
              name="emp_name"
              value={editedData.emp_name}
              onChange={handleInputChange}
              className="modal-input"
              placeholder="Employee Name"
            />
            <input
              type="text"
              name="emp_role"
              value={editedData.emp_role}
              onChange={handleInputChange}
              className="modal-input"
              placeholder="Employee Role"
            />
            <div className="modal-actions">
              <button className="modal-btn save" onClick={handleSaveEdit}>Save</button>
              <button className="modal-btn cancel" onClick={() => setShowEditModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default EmployeeList;
