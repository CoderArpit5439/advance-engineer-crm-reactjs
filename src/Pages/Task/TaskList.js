import React, { useState, useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  addTask,
  deleteTask,
  fetchTask,
  // UpdateTask,
} from "../../Redux/crmSlices/task/TaskSlice";
import TopCards from "../../Components/TopCards";
const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, count, loading, response } = useSelector((state) => ({
    loading: state.rootReducer.TaskSlice?.loading,
    response: state.rootReducer.TaskSlice?.response,
  }));
  const [task, setTask] = useState([]);
  useEffect(() => {
    dispatch(fetchTask());
  }, []);
  useEffect(() => {
    if (response?.data) {
      setTask(response.data);
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
        dispatch(deleteTask(data.t_id))
          .then(() => {
            // If deletion is successful, fetch the updated inventory list
            dispatch(fetchTask());

            // Show success message after successful deletion
            Swal.fire(
              "Deleted!",
              `${data.t_name} has been deleted.`,
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
               <TopCards/>

            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="card-title">Task List</h5>
                      <button
                        type="button"
                        className="btn btn-success add-btn"
                        onClick={() => navigate("/add-task")}
                      >
                        <i className="ri-add-line align-bottom me-1" /> Add Task
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="listjs-table" id="taskList">
                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="dataTableExample1"
                        >
                          <thead className="table-light">
                            <tr>
                              <th className="sort" data-sort="taskName">
                                Task Name
                              </th>
                              <th className="sort" data-sort="dueDate">
                                Due Date
                              </th>
                              <th className="sort" data-sort="description">
                                Description
                              </th>
                              <th className="sort" data-sort="assignedTo">
                                Assign to
                              </th>
                              <th className="sort" data-sort="status">
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
                                <td colSpan="6" className="text-center">
                                  Loading...
                                </td>
                              </tr>
                            ) : Array.isArray(task) && task.length > 0 ? (
                              task?.map((data, key) => (
                                <tr key={key}>
                                  <td>{data.t_name}</td>
                                  <td>{data.t_due_date}</td>
                                  <td>{data.t_description}</td>
                                  <td>{data.t_assign_to}</td>
                                  <td>{data.t_status}</td>
                                  <td>
                                    <div className="d-flex gap-2">
                                      {/* <div className="edit">
                                  <button
                                    className="btn btn-sm btn-success edit-item-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#update"
                                    onClick={() => setEditTask(data)}
                                  >
                                    Edit
                                  </button>
                                </div> */}
                                      <div className="remove">
                                        <button
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
                                <td colSpan="6" className="text-center">
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
                              We couldn't find any tasks matching your search.
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

export default TaskList;
