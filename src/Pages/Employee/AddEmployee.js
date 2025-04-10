import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CreateCategory } from "../../Redux/crmSlices/categorySlice/CategorySlice";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { AddUser } from "../../Redux/crmSlices/employeeSlice/EmployeeSlice";

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // const { loading, response, catList } = useSelector((state) => {
  //     return {
  //         loading: state.rootReducer.CategorySlice?.loading,
  //         response: state.rootReducer.CategorySlice?.response,
  //     }
  // })

  const onSubmit = (data) => {
    dispatch(AddUser(data));
    reset();
    setTimeout(() => {
      navigate("/employe-list");
    }, 1000);
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content mt-10">
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
              {/*end col*/}
              <div className="col-xxl-12 mb-10">
                <div className="card ">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="fas fa-home" /> Add Employe
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-4">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                       <form onSubmit={handleSubmit(onSubmit)}>
  <div className="row">
    {/* User Name */}
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">User Name:</label>
        <input
          type="text"
          placeholder="User Name"
          className="form-control"
          {...register("user_name")}
        />
        {errors.user_name && (
          <p className="text-danger">{errors.user_name.message}</p>
        )}
      </div>
    </div>

    {/* Password */}
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="form-control"
            {...register("user_pass")}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <EyeOffIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.user_pass && (
          <p className="text-danger">{errors.user_pass.message}</p>
        )}
      </div>
    </div>

    {/* User Image */}
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">Image:</label>
        <input
          type="file"
          className="form-control"
          {...register("user_image")}
        />
        {errors.user_image && (
          <p className="text-danger">{errors.user_image.message}</p>
        )}
      </div>
    </div>

    {/* Role */}
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">Role:</label>
        <select
          className="form-control"
          {...register("user_role")}
        >
          <option value="" disabled>Select Role</option>
          <option value="ADMIN">ADMIN</option>
          <option value="DESIGNER">DESIGNER</option>
        </select>
        {errors.user_role && (
          <p className="text-danger">{errors.user_role.message}</p>
        )}
      </div>
    </div>

    {/* Submit & Reset Buttons */}
    <div className="col-lg-12">
      <div className="hstack gap-2 justify-content-end">
       
        <button
          type="submit"
          className="btn btn-success"
        >
          <i className="fa fa-user-plus text-lg "></i> Add User
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
      <Footer />
    </div>
  );
};

export default AddEmployee;
