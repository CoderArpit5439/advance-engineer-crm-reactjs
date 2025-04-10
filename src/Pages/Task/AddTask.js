import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  addTask,
  deleteTask,
  fetchTask,
  // UpdateTask,
} from "../../Redux/crmSlices/task/TaskSlice";

const AddTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        control,
        watch,
        reset,
      } = useForm();
    
      const { data, count, loading, response } = useSelector((state) => ({
        loading: state.rootReducer.TaskSlice?.loading,
        response: state.rootReducer.TaskSlice?.response,
      }));
        const onSubmit = (data) => {
          dispatch(addTask(data));
          navigate("/task-list")
          reset();
        };
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <div className="position-relative mx-n4 mt-n4">
        <div className="">
          <img src="" className="profile-wid-img" alt="" />
          <div className="overlay-content">
            <div className="text-end p-3">
              <div className="p-0 ms-auto rounded-circle profile-photo-edit"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-12 mb-10">
          <div className="card ">
            <div className="card-header">
              <ul className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#addTask"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-tasks" /> Add Task
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body p-4">
              <div className="tab-content">
                <div className="tab-pane active" id="addTask" role="tabpanel">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      {/* Task Name */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Task Name:</label>
                          <input
                            type="text"
                            placeholder="Task Name"
                            className="form-control"
                            {...register("t_name", {
                              required: "Task name is required",
                            })}
                          />
                          {errors.t_name && (
                            <p className="text-danger">{errors.t_name.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Due Date */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Due Date:</label>
                          <input
                            type="date"
                            placeholder="Due Date"
                            className="form-control"
                            {...register("t_due_date", {
                              required: "Due date is required",
                            })}
                          />
                          {errors.t_due_date && (
                            <p className="text-danger">{errors.t_due_date.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Description:</label>
                          <input
                            type="text"
                            placeholder="Description"
                            className="form-control"
                            {...register("t_description", {
                              required: "Description is required",
                            })}
                          />
                          {errors.t_description && (
                            <p className="text-danger">{errors.t_description.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Assigned To */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Assign to:</label>
                          <input
                            type="text"
                            placeholder="Assigned Person"
                            className="form-control"
                            {...register("t_assign_to", {
                              required: "Assigned person is required",
                            })}
                          />
                          {errors.t_assign_to && (
                            <p className="text-danger">{errors.t_assign_to.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Status */}
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">Status:</label>
                          <input
                            type="text"
                            placeholder="Status"
                            className="form-control"
                            {...register("t_status", {
                              required: "Status is required",
                            })}
                          />
                          {errors.t_status && (
                            <p className="text-danger">{errors.t_status.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-lg-12">
                        <div className="hstack gap-2 justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary"
                          >
                            Save Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*end tab-pane*/}
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
  </div>
</div>

    </div>
  );
};

export default AddTask;
