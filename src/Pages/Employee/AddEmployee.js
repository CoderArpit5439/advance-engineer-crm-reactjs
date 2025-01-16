import React,{useState} from "react";
import { useNavigate } from 'react-router-dom'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Sidebar from '../../Layout/Sidebar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'; 
import { CreateCategory } from '../../Redux/crmSlices/categorySlice/CategorySlice';
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import {AddUser} from "../../Redux/crmSlices/employeeSlice/EmployeeSlice"

const AddEmployee = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch,reset } = useForm();
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
       dispatch(AddUser(data))
       reset();
        setTimeout(() => {
            navigate("/employe-list")
        }, 1000);
      
    }
  return (
    <div>
      <Header />
      <Sidebar />
      <div class="content-wrapper" style={{ minHeight: "799px" }}>
        <section class="content-header">
          <div class="header-icon">
            <i class="fa fa-users"></i>
          </div>
          <div class="header-title">
            <h1>Add Employee</h1>
            <small>Employee</small>
          </div>
        </section>
        <section class="content">
          <div class="row">
            <div
              class="col-sm-12 lobipanel-parent-sortable ui-sortable"
              data-lobipanel-child-inner-id="3N11jRpUy7"
            >
              <div
                class="panel panel-bd lobidrag lobipanel lobipanel-sortable"
                data-inner-id="3N11jRpUy7"
                data-index="0"
              >
                <div class="panel-heading ui-sortable-handle">
                  <div class="btn-group" id="buttonlist">
                    <a
                      class="btn btn-add"
                    onClick={() => navigate("/employe-list")}
                    >
                      <i class="fa fa-list"></i> Employee List{" "}
                    </a>
                  </div>
                  {/* <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div> */}
                </div>
                <div class="panel-body p-6 bg-white rounded-lg shadow-lg">
  <form onSubmit={handleSubmit(onSubmit)} class="space-y-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="form-group">
        <label for="user_name" class="block text-xl font-bold font-medium text-gray-700">User Name</label>
        <input
          type="text"
          id="user_name"
          class="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="User Name"
          {...register("user_name")}
        />
      </div>
      <div className="form-group">
      <label
        htmlFor="user_pass"
        className="block text-xl font-bold font-medium text-gray-700"
      >
        Password
      </label>
      <div className="relative mt-2">
        <input
          type={showPassword ? "text" : "password"}
          id="emp_pass"
          className="p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Password"
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
    </div>
      <div class="form-group">
        <label for="user_image" class="block text-xl font-bold font-medium text-gray-700">Image</label>
        <input
          type="file"
          id="user_image"
          class="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          {...register("user_image")}
        />
      </div>
      <div className="form-group">
  <label
    htmlFor="user_role"
    className="block text-xl font-bold font-medium text-gray-700"
  >
    Role
  </label>
  <select
    id="user_role"
    className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
    {...register("user_role")}
  >
    <option value="" disabled>
      Select Role
    </option>
    <option value="ADMIN">ADMIN</option>
    <option value="DESIGNER">DESIGNER</option>
  </select>
</div>

    </div>

    <div class="flex justify-between mt-6">
      <button type="button" class="w-32 py-3 px-6 bg-yellow-400 text-white font-medium rounded-md shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500">
        Reset
      </button>
      <button type="submit" class="w-32 py-3 px-6 bg-green-500 text-white font-medium rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
      <i className="fa fa-user-plus"></i> Add

      </button>
    </div>
  </form>
</div>

              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AddEmployee;
