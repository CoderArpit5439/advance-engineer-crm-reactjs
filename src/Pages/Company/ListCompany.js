import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomer,
  GetCustomerList,
  updateCustomer,
} from "../../Redux/crmSlices/customerSlice/CustomerSlice";
import Pagination from "../../Components/Pagination";
import Swal from "sweetalert2";
const ListCompany = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [showItems, setShowItems] = useState([]); //pagination and search for map function




  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    {/* <h4 className="card-title mb-0">Add, Edit &amp; Remove</h4> */}
                  </div>
                  {/* end card header */}
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success add-btn"

                              id="create-btn"
                              onClick={() => navigate("/add-company")}
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
                          id="customerTable"
                        >
                          <thead className="table-light">
                            <tr>
                              {/* <th className="sort" data-sort="customer_name">
                                Photo
                              </th> */}
                              <th className="sort" data-sort="phone">
                                Logo
                              </th>
                              <th className="sort" data-sort="email">
                                Name
                              </th>
                              <th className="sort" data-sort="date">
                                Web
                              </th>
                              <th className="sort" data-sort="status">
                                Email
                              </th>
                              <th className="sort" data-sort="action">
                                Head office add
                              </th>
                              <th className="sort" data-sort="action">
                                Head office contact
                              </th>
                              <th className="sort" data-sort="action">
                                No. Of total contries plant
                              </th>
                              <th className="sort" data-sort="action">
                                No. Of total india plant
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>

                          <tbody className="list form-check-all">
                            <tr>
                              <td className='text-center'>
                                <img src="https://i0.wp.com/biosimilarsrr.com/wp-content/uploads/2018/01/Lupin-logo.jpg?ssl=1" height="50px" width="50px" alt="lopin logo" />
                              </td>
                              <td className='text-center'>
                                Lopin
                              </td>
                              <td className='text-center'>
                                <a href="https://www.lupin.com/" target="_blank" className="underline">www.lupin.com</a>
                              </td>
                              <td className='text-center'>
                                lopin@gmail.com
                              </td>
                              <td className='text-center'>
                                Mumbai
                              </td>
                              <td className='text-center'>
                                9966885577
                              </td>
                              <td className='text-center'>
                                08
                              </td>
                              <td className='text-center'>
                                04
                              </td>
                              <td className='text-center'> 
                                <button className="btn btn-warning" onClick={()=>navigate('/view-company')}>View</button>
                                <button className="btn btn-success">Edit</button>
                              </td>
                            </tr>


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
                              We've searched more than 150+ Orders We did not
                              find any orders for you search.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListCompany;
