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
import { RightBar } from "../../LayoutNew/Rightbar";
import CompanyDetails from "../../Components/DashRightBar/CompanyDetails";
import TopCards from "../../Components/TopCards";
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
console.log(data) 
  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- START ---->
  const pageNumber = localStorage.getItem("customer-list"); 

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

  const handleDelete = (customer) => {
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
        dispatch(deleteCustomer(customer.c_id)) 
          .then(() => {
            Swal.fire(
              "Deleted!",
              `${customer.c_fullname} has been deleted.`, // Corrected to use customer.c_fullname
              "success"
            );
            dispatch(GetCustomerList())
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "There was an issue deleting the customer.",
              "error"
            );
          });
          
      }
    });
  };
  
  return (
    <>
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
                  </div>
                   <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success add-btn"
                          
                              id="create-btn"
                              onClick={()=>navigate("/add-customer")}
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
                          {showItems}
                          <tbody className="list form-check-all">
                                                {data?.length > 0 ? data?.map((customer, i) => {
                                                    return (
                                                        <tr>
                                                            {/* <td>
                                                                {customer.c_image !== null ?
                                                                    <img src={`https://api.advanceengineerings.com/${customer.c_image}`} class="img-circle" alt="User Image" width="50" height="50" />
                                                                    :
                                                                    <img src="assets/dist/img/w1.png" class="img-circle" alt="User Image" width="50" height="50" />
                                                                }
                                                            </td> */}
                                                            <td >
                                                            {customer.c_fullname}
                                                            </td>
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
                                            onClick={()=>handleDelete(customer)}
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
