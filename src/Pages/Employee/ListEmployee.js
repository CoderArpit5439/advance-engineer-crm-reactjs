import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { fetchUser, deleteUser } from "../../Redux/crmSlices/employeeSlice/EmployeeSlice";


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
        dispatch(deleteUser(user.emp_id))
        dispatch(fetchUser())
        Swal.fire("Deleted!", `${user.emp_name} has been deleted.`, "success");
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
      <div className="content-wrapper" style={{ minHeight: "799px" }}>
        <section className="content-header">
          <div className="header-icon">
            <i className="fa fa-users"></i>
          </div>
          <div className="header-title">
            <h1>Employee List</h1>
            <small>Manage your employees</small>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-bd">
                <div className="panel-heading">
                  <h4>Employee List</h4>
                </div>
                <div className="panel-body ">
                  <div className="btn-group mb-4 ">
                    <button
                      className="btn btn-add"
                      onClick={() => navigate("/add-employee")}
                    >
                      <i className="fa fa-plus"></i> Add Employee
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr className="info">
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userList && userList.length > 0 ? (
                          userList.map((user) => (
                            <tr key={user.id}>
                              <td>
                                <img
                                  src={
                                    user.emp_image ||
                                    "assets/dist/img/default-cat.png"
                                  }
                                  alt="User"
                                  width="50"
                                  height="50"
                                />
                              </td>
                              <td>{user.emp_name}</td>
                              <td>{user.emp_role}</td>
                              <td>
                                <button
                                  className="btn btn-info btn-sm"
                                  onClick={() => handleEdit(user)}
                                >
                                  <i className="fa fa-pencil"></i> Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm ml-2"
                                  onClick={() => handleDelete(user)}
                                >
                                  <i className="fa fa-trash"></i> Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="text-center">
                              No employees found
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
        </section>
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
