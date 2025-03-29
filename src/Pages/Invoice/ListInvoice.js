import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const ListInvoice = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchInvoices = async () => {
    try {
      const response = await axios.get(
        "https://api.advanceengineerings.com/crm/invoice/fetch-invoice"
      );
      setInvoices(response.data.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching invoices");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const deleteInvoice = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axios.get(
          `https://api.advanceengineerings.com/crm/invoice/delete-invoice/?invoice_id=${id}`
        );

        if (response.data.status === "success") {
          fetchInvoices();

          Swal.fire("Deleted!", "Your invoice has been deleted.", "success");
        } else {
          Swal.fire(
            "Error!",
            "There was a problem deleting the invoice.",
            "error"
          );
        }
      }
    } catch (error) {
      Swal.fire(
        "Error!",
        "An error occurred while deleting the invoice.",
        "error"
      );
    }
  };

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
                            onClick={() => navigate("/create-invoice")} // Redirect to "Add Lead" page
                          >
                            <i className="ri-add-line align-bottom me-1" /> Add
                          </button>
                        </div>
                      </div>
                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="dataTableExample1"
                        >
                          <thead className="table-light">
                            <tr>
                              <th className="sort" data-sort="emp_name">
                                SNO
                              </th>
                              <th className="sort" data-sort="emp_name">
                                Invoice Name
                              </th>
                              <th className="sort" data-sort="emp_role">
                                Invoice Number
                              </th>

                              <th className="sort" data-sort="action">
                                Transport
                              </th>
                              <th className="sort" data-sort="action">
                                GST
                              </th>
                              <th className="sort" data-sort="action">
                                Discount
                              </th>
                              <th className="sort" data-sort="action">
                                Invoice Date
                              </th>
                              <th className="sort" data-sort="action">
                                Total
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {invoices && invoices.length > 0 ? (
                              invoices.map((inv, i) => (
                                <tr key={inv.inv_id}>
                                  <td>{i + 1}</td>
                                  <td>{inv.inv_name}</td>
                                  <td>{inv.inv_number || "NA"}</td>
                                  <td>{inv.inv_transport}</td>
                                  <td>{inv.inv_gst} %</td>
                                  <td>{inv.inv_discount} %</td>
                                  <td>{inv.inv_date}</td>

                                  <td>{inv.inv_total}</td>

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
                                        onClick={() =>
                                          deleteInvoice(inv.inv_id)
                                        }
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
                        {invoices?.length === 0 && !loading && (
                          <div
                            className="noresult"
                            style={{ display: "block" }}
                          >
                            <div className="text-center">
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#121331,secondary:#08a88a"
                                style={{ width: 75, height: 75 }}
                              />
                              <h5 className="mt-2">
                                Sorry! No Employees Found
                              </h5>
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
    </>
  );
};

export default ListInvoice;
