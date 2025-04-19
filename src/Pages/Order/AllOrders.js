import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrder } from "../../Redux/crmSlices/orderSlice/OrderSlice";

const AllOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, count, loading, status, error } = useSelector((state) => {
    return {
      data: state.rootReducer.orderSlice?.data?.data,
      loading: state.rootReducer.orderSlice?.loading,
      count: state.rootReducer.orderSlice?.count,
      status: state.rootReducer.orderSlice?.status,
      error: state.rootReducer.orderSlice?.error,
    };
  });

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  const handleEdit = (data) => {
    localStorage.setItem("editOrder", JSON.stringify(data));
    navigate("/edit-order-details");
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
                              onClick={() => navigate("/add-order")}
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
                              <th className="sort" data-sort="email">
                                Customer
                              </th>
                              <th className="sort" data-sort="date">
                                Contact
                              </th>
                              <th className="sort" data-sort="status">
                                Order NO
                              </th>
                              <th className="sort" data-sort="action">
                                CSTR P.O
                              </th>
                              <th className="sort" data-sort="action">
                                item
                              </th>
                              <th className="sort" data-sort="action">
                                Due Date
                              </th>
                              <th className="sort" data-sort="action">
                                Quantity
                              </th>
                              <th className="sort" data-sort="action">
                                PNDG
                              </th>
                              <th className="sort" data-sort="action">
                                Done
                              </th>
                              <th className="sort" data-sort="action">
                                Unit
                              </th>
                              <th className="sort" data-sort="action">
                                Total
                              </th>
                              <th className="sort" data-sort="action">
                                Status
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>

                          <tbody className="list form-check-all">
                            {data?.map((order) => (
                              <tr key={order.id}>
                                <td className="">{order.or_customer}</td>
                                <td className="">{order.or_contact}</td>
                                <td className="">{order.or_order_no}</td>
                                <td className="">{order.or_cstr_p_o}</td>
                                <td className="">{order.or_item}</td>
                                <td className="">{order.or_due_date}</td>
                                <td className="">{order.or_qty}</td>
                                <td className="">{order.or_pndg}</td>
                                <td className="">{order.or_done}</td>
                                <td className="">{order.or_unit}</td>
                                <td className="">{order.or_total}</td>
                                <td className="">{order.or_status}</td>
                                <td className="">
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-info"
                                    onClick={() => handleEdit(order)}
                                  >
                                    <i className="fa fa-pencil-o"></i> Update
                                  </button>
                                </td>
                              </tr>
                            ))}
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
    </div>
  );
};

export default AllOrders;
