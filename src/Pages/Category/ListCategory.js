import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Components/Pagination";
import Swal from "sweetalert2";
import {
    deleteCat,
  GetCategoryList,
  updateCategory,
} from "../../Redux/crmSlices/categorySlice/CategorySlice";

const ListCategory = () => {
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
  const [fetchCategoryList, setFetchCategoryList] = useState([]);
  const [showItems, setShowItems] = useState([]); //pagination and search for map function
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalRow, setTotalRow] = useState();
  const [catId, setCId] = useState();

  const { data, count, loading, response } = useSelector((state) => {
    return {
      data: state.rootReducer.CategorySlice?.data?.data,
      count: state.rootReducer.CategorySlice?.data?.count,
      loading: state.rootReducer.CategorySlice?.loading,
      response: state.rootReducer.CategorySlice?.response,
    };
  });

  useEffect(() => {
    dispatch(GetCategoryList());
  }, [dispatch]);
  console.log("data", data);
  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- START ---->
  const pageNumber = localStorage.getItem("category-list");
  useEffect(() => {
    if (!pageNumber) {
      setCurrentPageNo(1);
      localStorage.setItem("category-list", 1);
    } else {
      if (!currentPageNo) {
        setCurrentPageNo(JSON.parse(pageNumber));
      } else {
        localStorage.setItem("category-list", currentPageNo);
      }
    }
  }, [currentPageNo, pageNumber]);

  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- END ---->

  useEffect(() => {
    if (data) {
      setFetchCategoryList(data);
      setTotalRow(count);
    }
  }, [response, data]);

  useEffect(() => {
    var body = {
      page: currentPageNo,
    };
    dispatch(GetCategoryList(body));
  }, [currentPageNo]);

  const onClickEditBtn = (category) => {
    setCId(category.p_id);
    setValue("cat_name", category.cat_name);
    setValue("cat_code", category.cat_code);
  };

  const onSubmit = (data) => {
    const body = {
      catId,
      data,
    };
    dispatch(updateCategory(body));
  };

  const handleDelete = (cat) => {
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
        dispatch(deleteCat(cat?.cat_id))
          .then(() => {
            dispatch(
             GetCategoryList()
            );
            Swal.fire(
              "Deleted!",
              `${cat.cat_name} has been deleted.`,
              "success"
            );
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "There was an issue deleting the lead.",
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
                            onClick={() => navigate("/add-employee")} // Redirect to "Add Lead" page
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
                             Category Code
                              </th>
                              <th className="sort" data-sort="emp_role">
                                Category Name
                              </th>
                              <th className="sort" data-sort="emp_image">
                             Category Image 
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {data && data.length > 0 ? (
                              data.map((user) => (
                                <tr key={user.id}>
                                  <td>{user.cat_code}</td>
                                  <td>{user.cat_name}</td>
                                  <td>
                                    <img
                                      src={
                                        user.cat_image ||
                                        "assets/dist/img/default-cat.png"
                                      }
                                      alt="User"
                                      width="50"
                                      height="50"
                                    />
                                  </td>
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
                                        onClick={() => handleDelete(user)}
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
                        {data?.length === 0 && !loading && (
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
      <Footer />
    </>
  );
};

export default ListCategory;
