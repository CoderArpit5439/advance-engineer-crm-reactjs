import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCustomerList,
  updateCustomer,
} from "../../Redux/crmSlices/customerSlice/CustomerSlice";
import Pagination from "../../Components/Pagination";

const ListCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fetchCustomerList, setFetchCustomerList] = useState([]);
  const [showItems, setShowItems] = useState([]); //pagination and search for map function
  const [currentPageNo, setCurrentPageNo] = useState();
  const [totalRow, setTotalRow] = useState();
  const [cId, setCId] = useState();

  const { data, count, loading, response } = useSelector((state) => {
    return {
      data: state.rootReducer.CustomerSlice?.data?.data,
      count: state.rootReducer.CustomerSlice?.data?.count,
      loading: state.rootReducer.CustomerSlice?.loading,
      response: state.rootReducer.CustomerSlice?.response,
    };
  });

  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- START ---->
  const pageNumber = localStorage.getItem("customer-list"); // Remark Employer Page Number

  useEffect(() => {
    if (!pageNumber) {
      setCurrentPageNo(1);
      localStorage.setItem("customer-list", 1);
    } else {
      if (!currentPageNo) {
        setCurrentPageNo(JSON.parse(pageNumber));
      } else {
        localStorage.setItem("customer-list", currentPageNo);
      }
    }
  }, [currentPageNo, pageNumber]);

  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- END ---->

  useEffect(() => {
    if (data) {
      setFetchCustomerList(data);
      setTotalRow(count);
    }
  }, [response, data]);

  useEffect(() => {
    var body = {
      page: currentPageNo,
    };
    dispatch(GetCustomerList(body));
  }, []);

  const onClickEditBtn = (customer) => {
    setCId(customer.c_id);
    setValue("c_fullname", customer.c_fullname);
    setValue("c_company_name", customer.c_company_name);
    setValue("c_email", customer.c_email);
    setValue("c_mobile", customer.c_mobile);
    setValue("c_post", customer.c_post);
    setValue("c_department", customer.c_department);
    // setValue("c_password", customer.c_password)
    setValue("c_status", customer.c_status);
    setValue("c_description", customer.c_description);
    setValue("c_dob", customer.c_dob);
    setValue("c_rank", customer.c_rank);
    setValue("c_address", customer.c_address);
  };

  const onSubmit = (data) => {
    const body = {
      cId,
      data,
    };
    dispatch(updateCustomer(body));
  };

  return (
    <>
      <Header />
      <Sidebar />
      {/* <div class="content-wrapper" style={{ minHeight: "799px" }}>
                <section class="content-header">
                    <div class="header-icon">
                        <i class="fa fa-users"></i>
                    </div>
                    <div class="header-title">
                        <h1>Customer</h1>
                        <small>Customer List</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="CvIfztVEX7">
                            <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="CvIfztVEX7" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonexport">
                                        <a href="#">
                                            <h4>Customer List</h4>
                                        </a>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <div class="btn-group">
                                        <div class="buttonexport" id="buttonlist">
                                            <a class="btn btn-add" onClick={() => navigate('/add-customer')}> <i class="fa fa-plus"></i> Add Customer
                                            </a>
                                        </div>
                                       
                                    </div>
                                    <div class="table-responsive">
                                        <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                                            <thead>
                                                <tr class="info">
                                                    <th>Photo</th>
                                                    <th>Company</th>
                                                    <th>Customer Name</th>
                                                    <th>Mobile</th>
                                                    <th>Email</th>
                                                    <th>City</th>
                                                    <th>Ranking</th>
                                                    <th>No. Of Quotation</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {showItems?.length > 0 ? showItems?.map((customer, i) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {customer.c_image !== null ?
                                                                    <img src={`http://localhost:8080/public/assets/img/uploads/customerImage/${customer.c_image}`} class="img-circle" alt="User Image" width="50" height="50" />
                                                                    :
                                                                    <img src="assets/dist/img/w1.png" class="img-circle" alt="User Image" width="50" height="50" />
                                                                }
                                                            </td>
                                                            <td>{customer.c_fullname}</td>
                                                            <td>{customer.c_company_name}</td>
                                                            <td>{customer.c_mobile}</td>
                                                            <td>{customer.c_email}</td>
                                                            <td>{customer.c_address}</td>
                                                            <td>{
                                                                customer.c_rank == "Excellent"
                                                                    ?
                                                                    <span class="label-custom label label-default">{customer.c_rank}</span>
                                                                    :
                                                                    customer.c_rank == "Good"
                                                                        ?
                                                                        <span class="label-success label label-default ">{customer.c_rank}</span>
                                                                        :
                                                                        <span class="label-danger label label-default">{customer.c_rank}</span>
                                                            }</td>
                                                            <td>{customer.c_no_of_quotation}</td>
                                                            <td>{customer.c_status}</td>
                                                            <td>
                                                                <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#customer1" onClick={() => onClickEditBtn(customer)}><i class="fa fa-pencil"></i></button>
                                                                <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i class="fa fa-trash-o"></i> </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                    :
                                                    <tr>
                                                        <td colSpan={10} className='text-center'>
                                                            No records found
                                                        </td>
                                                    </tr>
                                                }
                                                <tr>
                                                    <td colSpan={10}>
                                                        <Pagination data={fetchCustomerList} setShowItems={setShowItems} itemPerPage={20} showItems={showItems} setCurrentPage={setCurrentPageNo} currentPage={currentPageNo} totalRow={totalRow} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="customer1" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i> Update Customer</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <>
                                    
                                    <div class="modal-body">
                                        <div className='row'>
                                            <div class="form-group col-sm-6">
                                                <label>Company Name</label>
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Enter Company Name"
                                                    {...register('c_company_name')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Full Name</label>
                                                <input type="text" class="form-control" placeholder="Enter Full Name"  {...register('c_fullname')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Email</label>
                                                <input type="email" class="form-control" placeholder="Enter Email"  {...register('c_email')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Mobile</label>
                                                <input type="number" class="form-control" placeholder="Enter Mobile"  {...register('c_mobile')} />
                                            </div>

                                            <div class="form-group col-sm-6">
                                                <label>Post</label>
                                                <input type="text" class="form-control" placeholder="Enter Post"  {...register('c_post')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Department</label>
                                                <input type="text" class="form-control" placeholder="Enter Department"  {...register('c_department')} />
                                            </div>
                                            {/* <div class="form-group col-sm-6">
                                                <label>Password</label>
                                                <input type="text" class="form-control" placeholder="Enter Password"  {...register('c_password')} />
                                            </div> *
                                            <div class="form-group col-sm-6">
                                                <label>Date of Birth</label>
                                                <input id="minMaxExample" type="date" class="form-control hasDatepicker" placeholder="Enter Date..." {...register('c_dob')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Address</label>
                                                <textarea class="form-control" rows="4"  {...register('c_address')}></textarea>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Customer Ranking</label>
                                                <select class="form-control" {...register('c_rank')}>
                                                    <option value="Excellent">Excellent</option>
                                                    <option value="Good">Good</option>
                                                    <option value="Average">Average</option>
                                                    <option value="Average">Average</option>
                                                    <option value="Poor">Poor</option>
                                                    <option value="Very Poor">Very Poor</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-sm-3">
                                                <label>Gender</label><br></br>
                                                <select class="form-control" {...register('c_gender')}>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div class="form-check col-sm-3">
                                                <label>Status</label><br></br>
                                                <select class="form-control" {...register('c_status')}>
                                                    <option value="Active">Active</option>
                                                    <option value="Not Active">Not Active</option>
                                                </select>
                                            </div>
                                           
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type='submit' class="btn btn-success pull-left" >Update</button>
                                        <button type="button" class="btn btn-danger pull-right" data-dismiss="modal">Close</button>
                                    </div>
                                    </>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="customer2" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i> Delete Customer</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form class="form-horizontal">
                                                <fieldset>
                                                    <div class="col-md-12 form-group user-form-group">
                                                        <label class="control-label">Delete Customer</label>
                                                        <div class="pull-right">
                                                            <button type="button" class="btn btn-danger btn-sm">NO</button>
                                                            <button type="submit" class="btn btn-add btn-sm">YES</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div> */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Add, Edit &amp; Remove</h4>
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
                              data-bs-toggle="modal"
                              id="create-btn"
                              data-bs-target="#showModal"
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
                              <th className="sort" data-sort="customer_name">
                                Photo
                              </th>
                              <th className="sort" data-sort="email">
                                Company
                              </th>
                              <th className="sort" data-sort="phone">
                                Customer
                              </th>
                              <th className="sort" data-sort="date">
                                Mobile
                              </th>
                              <th className="sort" data-sort="status">
                                Email
                              </th>
                              <th className="sort" data-sort="action">
                                City
                              </th>
                              <th className="sort" data-sort="action">
                                Ranking
                              </th>
                              <th className="sort" data-sort="action">
                                No. Of Quotation
                              </th>
                              <th className="sort" data-sort="action">
                                Status
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          {/* <tbody className="list form-check-all">
                           
                            {showItems?.length > 0 ? (
                              showItems?.map((customer, i) => {
                                return (
                                  <tr>
                                    <td>
                                      {customer.c_image !== null ? (
                                        <img
                                          src={`http://localhost:8080/public/assets/img/uploads/customerImage/${customer.c_image}`}
                                          class="img-circle"
                                          alt="User Image"
                                          width="50"
                                          height="50"
                                        />
                                      ) : (
                                        <img
                                          src="assets/dist/img/w1.png"
                                          class="img-circle"
                                          alt="User Image"
                                          width="50"
                                          height="50"
                                        />
                                      )}
                                    </td>
                                    <td>{customer.c_fullname}</td>
                                    <td>{customer.c_company_name}</td>
                                    <td>{customer.c_mobile}</td>
                                    <td>{customer.c_email}</td>
                                    <td>{customer.c_address}</td>
                                    <td>
                                      {customer.c_rank == "Excellent" ? (
                                        <span class="label-custom label label-default">
                                          {customer.c_rank}
                                        </span>
                                      ) : customer.c_rank == "Good" ? (
                                        <span class="label-success label label-default ">
                                          {customer.c_rank}
                                        </span>
                                      ) : (
                                        <span class="label-danger label label-default">
                                          {customer.c_rank}
                                        </span>
                                      )}
                                    </td>
                                    <td>{customer.c_no_of_quotation}</td>
                                    <td>{customer.c_status}</td>
                                    <td>
                                      <div className="d-flex gap-2">
                                        <div className="edit">
                                          <button
                                            className="btn btn-sm btn-success edit-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#showModal"
                                          >
                                            Edit
                                          </button>
                                        </div>
                                        <div className="remove">
                                          <button
                                            className="btn btn-sm btn-danger remove-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteRecordModal"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </td>
                                    <tr>
                                                    <td colSpan={10}>
                                                        <Pagination data={fetchCustomerList} setShowItems={setShowItems} itemPerPage={20} showItems={showItems} setCurrentPage={setCurrentPageNo} currentPage={currentPageNo} totalRow={totalRow} />
                                                    </td>
                                                </tr>
                                  </tr>
                                );
                              })
                            ) : (
                              <tr>
                                <td colSpan={10} className="text-center">
                                  No records found
                                </td>
                              </tr>
                            )}
                          </tbody> */}
                          <tbody className="list form-check-all">
                                                {showItems?.length > 0 ? showItems?.map((customer, i) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {customer.c_image !== null ?
                                                                    <img src={`http://localhost:8080/public/assets/img/uploads/customerImage/${customer.c_image}`} class="img-circle" alt="User Image" width="50" height="50" />
                                                                    :
                                                                    <img src="assets/dist/img/w1.png" class="img-circle" alt="User Image" width="50" height="50" />
                                                                }
                                                            </td>
                                                            <td>{customer.c_fullname}</td>
                                                            <td>{customer.c_company_name}</td>
                                                            <td>{customer.c_mobile}</td>
                                                            <td>{customer.c_email}</td>
                                                            <td>{customer.c_address}</td>
                                                            <td>{
                                                                customer.c_rank == "Excellent"
                                                                    ?
                                                                    <span class="label-custom label label-default">{customer.c_rank}</span>
                                                                    :
                                                                    customer.c_rank == "Good"
                                                                        ?
                                                                        <span class="label-success label label-default ">{customer.c_rank}</span>
                                                                        :
                                                                        <span class="label-danger label label-default">{customer.c_rank}</span>
                                                            }</td>
                                                            <td>{customer.c_no_of_quotation}</td>
                                                            <td>{customer.c_status}</td>
                                                            <td>
                                                            <div className="d-flex gap-2">
                                        <div className="edit">
                                          <button
                                            className="btn btn-sm btn-success edit-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#showModal"
                                          >
                                            Edit
                                          </button>
                                        </div>
                                        <div className="remove">
                                          <button
                                            className="btn btn-sm btn-danger remove-item-btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteRecordModal"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                      </td>
                                                        </tr>
                                                    )
                                                })
                                                    :
                                                    <tr>
                                                        <td colSpan={10} className='text-center'>
                                                            No records found
                                                        </td>
                                                    </tr>
                                                }
                                           
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
                      {/* <div className="d-flex justify-content-end">
                        <div
                          className="pagination-wrap hstack gap-2"
                          style={{ display: "flex" }}
                        >
                          <a
                            className="page-item pagination-prev disabled"
                            href="javascript:void(0);"
                          >
                            Previous
                          </a>
                          <ul className="pagination listjs-pagination mb-0">
                            <li className="active">
                              <a
                                className="page"
                                href="#"
                                data-i={1}
                                data-page={8}
                              >
                                1
                              </a>
                            </li>
                            <li>
                              <a
                                className="page"
                                href="#"
                                data-i={2}
                                data-page={8}
                              >
                                2
                              </a>
                            </li>
                          </ul>
                          <a
                            className="page-item pagination-next"
                            href="javascript:void(0);"
                          >
                            Next
                          </a>
                        </div>
                      </div> */}
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

export default ListCustomer;
