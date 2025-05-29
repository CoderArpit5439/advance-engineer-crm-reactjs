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
import {
  GetProductList,
  updateProduct,
} from "../../Redux/crmSlices/productSlice/ProductSlice";
import ProductSidebar from "../../Components/ProductSidebar";

const ListProduct = () => {
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
  const [fetchProductList, setFetchProductList] = useState([]);
  const [productDetail, setProductDetail] = useState();
  const [showItems, setShowItems] = useState([]); //pagination and search for map function
  const [currentPageNo, setCurrentPageNo] = useState();
  const [totalRow, setTotalRow] = useState();
  const [pId, setCId] = useState();

  const { data, count, loading, response } = useSelector((state) => {
    return {
      data: state.rootReducer.ProductSlice?.data?.data,
      count: state.rootReducer.ProductSlice?.data?.count,
      loading: state.rootReducer.ProductSlice?.loading,
      response: state.rootReducer.ProductSlice?.response,
    };
  });

  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- START ---->
  const pageNumber = localStorage.getItem("product-list"); // Remark Employer Page Number

  useEffect(() => {
    if (!pageNumber) {
      setCurrentPageNo(1);
      localStorage.setItem("product-list", 1);
    } else {
      if (!currentPageNo) {
        setCurrentPageNo(JSON.parse(pageNumber));
      } else {
        localStorage.setItem("product-list", currentPageNo);
      }
    }
  }, [currentPageNo, pageNumber]);

  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- END ---->

  useEffect(() => {
    if (data) {
      setFetchProductList(data);
      setTotalRow(count);
    }
  }, [response, data]);

  useEffect(() => {
    var body = {
      page: currentPageNo,
    };
    dispatch(GetProductList(body));
  }, [response, currentPageNo]);

  const onClickEditBtn = (product) => {
    setCId(product.p_id);
    setValue("p_name", product.p_name);
    setValue("p_category", product.p_category);
    setValue("p_unique_id", product.p_unique_id);
    setValue("p_price", product.p_price);
    setValue("p_material", product.p_material);
    setValue("p_moc", product.p_moc);
    setValue("p_dimension", product.p_dimension);
    setValue("p_brand", product.p_brand);
    setValue("p_color", product.p_color);
    setValue("p_weight", product.p_weight);
    setValue("p_description", product.p_description);
    setValue("p_manufacturer", product.p_manufacturer);
    setValue("p_country", product.p_country);
    setValue("p_code", product.p_code);
    setValue("p_drawing_no", product.p_drawing_no);
    setValue("p_finish_type", product.p_finish_type);
    setValue("p_status", product.p_status);
    setValue("p_media", product.p_media);
  };

  const onSubmit = (data) => {
    const body = {
      id: pId,
      data,
    };
    dispatch(updateProduct(body));
  };

  const onClickViewProduct = (data) => {
    setProductDetail(data);
  };

  const menuItems = ["Dashboard"];

  return (
    <>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 class="mb-sm-0">Products</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Ecommerce</a>
                      </li>
                      <li class="breadcrumb-item active">Products</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div className="chat-wrapper col-md-12 col-lg-2 d-lg-flex">
                <div
                  className="chat-leftsidebar-modify"
                  style={{ height: "auto" }}
                >
                  {/* <div className="px-4 pt-4 mb-3">
                    <div className="text-center">
                      <div>
                        <img
                          className="mb-4"
                          src="/assets/images/logo-light.png"
                          height="45"
                          width="auto"
                          alt="remark logo"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="tab-content text-muted">
                    <div className="tab-pane active" style={{ height: "auto" }}>
                      <ul className="list-unstyled mobile-responsive">
                        {menuItems.map((item, index) => (
                          <li
                            key={index}
                            className={`px-4 rounded-pill menu-option ${
                              item === "Consultancy"
                                ? "bg-primary bg-gradient"
                                : "null"
                            }`}
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-grow-1">
                                <h4
                                  className={`mb-0 fs-13 ${
                                    item === "Consultancy"
                                      ? "text-light"
                                      : "text-muted"
                                  }`}
                                >
                                  {item}
                                </h4>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div> */}
                  {/* Side bar  */}
                  <div
                    className="sidebar bg-white"
                    style={{
                      width: "280px",
                      height: "100vh",
                      borderRight: "1px solid #eee",
                    }}
                  >
                    <div
                      className="sidebar-content"
                      style={{
                        padding: "16px 0",
                        height: "100%",
                        overflowY: "auto",
                      }}
                    >
                      {/* Logo / Brand */}
                      <div className="px-4 py-3 mb-2">
                        <h4 className="mb-0 fw-bold">Dashboard</h4>
                      </div>

                      {/* Main Navigation */}
                      <ul className="list-unstyled mb-0">
                        {/* Dashboard */}
                        <li className="px-3 mb-1">
                          <a
                            href="#"
                            className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                          >
                            <i className="ri-dashboard-line me-3"></i>
                            <span>Dashboard</span>
                          </a>
                        </li>

                        {/* Leads */}
                        <li className="px-3 mb-1">
                          <a
                            href="#"
                            className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                          >
                            <i className="ri-contacts-line me-3"></i>
                            <span>Leads</span>
                            <span className="badge bg-primary ms-auto">12</span>
                          </a>
                        </li>

                        {/* Employees */}
                        <li className="px-3 mb-1">
                          <a
                            href="#"
                            className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                          >
                            <i className="ri-team-line me-3"></i>
                            <span>Employees</span>
                          </a>
                        </li>

                        {/* Employers */}
                        <li className="px-3 mb-1">
                          <a
                            href="#"
                            className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                          >
                            <i className="ri-building-line me-3"></i>
                            <span>Employers</span>
                          </a>
                        </li>

                        {/* Projects */}
                        <li className="px-3 mb-1">
                          <a
                            href="#"
                            className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                          >
                            <i className="ri-task-line me-3"></i>
                            <span>Projects</span>
                          </a>
                        </li>

                        {/* Reports */}
                        <li className="px-3 mb-1">
                          <a
                            href="#"
                            className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                          >
                            <i className="ri-bar-chart-line me-3"></i>
                            <span>Reports</span>
                          </a>
                        </li>

                        {/* Settings */}
                        <li className="px-3 mb-1">
                          <a
                            href="#"
                            className="d-flex align-items-center px-3 py-2 rounded text-decoration-none"
                          >
                            <i className="ri-settings-3-line me-3"></i>
                            <span>Settings</span>
                          </a>
                        </li>
                      </ul>

                      {/* Divider */}
                      <hr className="my-3 mx-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-10">
                <div>
                  <div class="card">
                    <div class="card-header border-0">
                      <div class="row g-4">
                        <div class="col-sm-auto">
                          <div>
                            <a
                              href="apps-ecommerce-add-product.html"
                              class="btn btn-success"
                              id="addproduct-btn"
                            >
                              <i class="ri-add-line align-bottom me-1"></i> Add
                              Product
                            </a>
                          </div>
                        </div>
                        <div class="col-sm">
                          <div class="d-flex justify-content-sm-end">
                            <div class="search-box ms-2">
                              <input
                                type="text"
                                class="form-control"
                                id="searchProductList"
                                placeholder="Search Products..."
                              />
                              <i class="ri-search-line search-icon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-header">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <div id="selection-element">
                            <div class="my-n1 d-flex align-items-center text-muted">
                              Select{" "}
                              <div
                                id="select-content"
                                class="text-body fw-semibold px-1"
                              ></div>{" "}
                              Result{" "}
                              <button
                                type="button"
                                class="btn btn-link link-danger p-0 ms-3 material-shadow-none"
                                data-bs-toggle="modal"
                                data-bs-target="#removeItemModal"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card-body">
                      <div class="tab-content text-muted">
                        <div
                          class="tab-pane active"
                          id="productnav-all"
                          role="tabpanel"
                        >
                          <div
                            id="table-product-list-all"
                            class="table-card gridjs-border-none"
                          >
                            <div
                              role="complementary"
                              class="gridjs gridjs-container"
                              style={{ width: "100%" }}
                            >
                              <div
                                class="gridjs-wrapper"
                                style={{ height: "auto" }}
                              >
                                <table
                                  role="grid"
                                  class="gridjs-table"
                                  style={{ height: "auto" }}
                                >
                                  <thead class="gridjs-thead">
                                    <tr class="gridjs-tr">
                                      <th
                                        data-column-id="#"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "40px" }}
                                      >
                                        <div class="gridjs-th-content">#</div>
                                      </th>
                                      <th
                                        data-column-id="product"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "360px" }}
                                      >
                                        <div class="gridjs-th-content">
                                          Product
                                        </div>
                                      </th>
                                      <th
                                        data-column-id="stock"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "94px" }}
                                      >
                                        <div class="gridjs-th-content">
                                          Stock
                                        </div>
                                      </th>
                                      <th
                                        data-column-id="price"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "101px" }}
                                      >
                                        <div class="gridjs-th-content">
                                          Price
                                        </div>
                                      </th>
                                      <th
                                        data-column-id="orders"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "84px" }}
                                      >
                                        <div class="gridjs-th-content">
                                          Orders
                                        </div>
                                      </th>
                                      <th
                                        data-column-id="orders"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "84px" }}
                                      >
                                        <div class="gridjs-th-content">
                                          Rating
                                        </div>
                                      </th>
                                      <th
                                        data-column-id="orders"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "84px" }}
                                      >
                                        <div class="gridjs-th-content">
                                          Published
                                        </div>
                                      </th>
                                      <th
                                        data-column-id="orders"
                                        class="gridjs-th gridjs-th-sort text-muted"
                                        tabindex="0"
                                        style={{ width: "84px" }}
                                      >
                                        <div class="gridjs-th-content">
                                          Action
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {showItems?.length > 0 ? (
                                      showItems?.map((product, i) => {
                                        return (
                                          <tr class="gridjs-tr">
                                            <td
                                              data-column-id="#"
                                              class="gridjs-td"
                                            >
                                              <span>
                                                <div class="form-check checkbox-product-list">
                                                  <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value="1"
                                                    id="checkbox-1"
                                                  />
                                                  <label
                                                    class="form-check-label"
                                                    for="checkbox-1"
                                                  ></label>
                                                </div>
                                              </span>
                                            </td>

                                            <td
                                              data-column-id="product"
                                              class="gridjs-td"
                                            >
                                              <span>
                                                <div class="d-flex align-items-center">
                                                  <div class="flex-shrink-0 me-3">
                                                    <div class="avatar-sm bg-light rounded p-1">
                                                      {product.p_image !==
                                                      null ? (
                                                        <img
                                                          src={product.p_image}
                                                          className="img-fluid d-block"
                                                          alt="Product Image"
                                                        />
                                                      ) : (
                                                        <img
                                                          src="assets/dist/img/default-product.png"
                                                          className="img-fluid d-block"
                                                          alt="Default Image"
                                                        />
                                                      )}
                                                    </div>
                                                  </div>
                                                  <div class="flex-grow-1">
                                                    <h5 class="fs-14 mb-1">
                                                      <a
                                                        onClick={() =>
                                                          navigate(
                                                            `/view-product/${product.p_id}`
                                                          )
                                                        }
                                                        class="text-body"
                                                      >
                                                        {product.p_name}
                                                      </a>
                                                    </h5>
                                                    <p class="text-muted mb-0">
                                                      Category :{" "}
                                                      <span class="fw-medium">
                                                        Fashion
                                                      </span>
                                                    </p>
                                                  </div>
                                                </div>
                                              </span>
                                            </td>

                                            <td
                                              data-column-id="stock"
                                              class="gridjs-td"
                                            >
                                              12
                                            </td>
                                            <td
                                              data-column-id="price"
                                              class="gridjs-td"
                                            >
                                              <span>$215.00</span>
                                            </td>
                                            <td
                                              data-column-id="orders"
                                              class="gridjs-td"
                                            >
                                              48
                                            </td>

                                            <td
                                              data-column-id="rating"
                                              class="gridjs-td"
                                            >
                                              <span>
                                                <span class="badge bg-light text-body fs-12 fw-medium">
                                                  <i class="mdi mdi-star text-warning me-1"></i>
                                                  4.2
                                                </span>
                                              </span>
                                            </td>

                                            <td
                                              data-column-id="published"
                                              class="gridjs-td"
                                            >
                                              <span>
                                                12 Oct, 2021
                                                <small class="text-muted ms-1">
                                                  10:05 AM
                                                </small>
                                              </span>
                                            </td>

                                            <td
                                              data-column-id="action"
                                              class="gridjs-td"
                                            >
                                              <span>
                                                <div class="dropdown">
                                                  <button
                                                    class="btn btn-soft-secondary btn-sm dropdown"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                  >
                                                    <i class="ri-more-fill"></i>
                                                  </button>
                                                  <ul class="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                      <a
                                                        class="dropdown-item"
                                                        href="apps-ecommerce-product-details.html"
                                                      >
                                                        <i class="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                                                        View
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        class="dropdown-item edit-list"
                                                        data-edit-id="1"
                                                        href="apps-ecommerce-add-product.html"
                                                      >
                                                        <i class="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                                                        Edit
                                                      </a>
                                                    </li>
                                                    <li class="dropdown-divider"></li>
                                                    <li>
                                                      <a
                                                        class="dropdown-item remove-list"
                                                        href="#"
                                                        data-id="1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#removeItemModal"
                                                      >
                                                        <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                                                        Delete
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </span>
                                            </td>
                                          </tr>
                                        );
                                      })
                                    ) : (
                                      <div></div>
                                    )}
                                    {/* Pagination Row */}
                                    <tr>
                                      <td colSpan={7}>
                                        <Pagination
                                          data={fetchProductList}
                                          setShowItems={setShowItems}
                                          itemPerPage={20}
                                          showItems={showItems}
                                          setCurrentPage={setCurrentPageNo}
                                          currentPage={currentPageNo}
                                          totalRow={totalRow}
                                        />
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
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
      </div>
      {/* <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row" style={{ fontFamily: "poppins" }}>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success add-btn"
                              id="create-btn"
                              onClick={() => navigate("/add-product")}
                            >
                              <i className="ri-add-line align-bottom me-1" />{" "}
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive table-card mt-3 mb-1">
  <table
    className="table table-bordered table-striped table-hover"
    id="dataTableExample1"
  >
    <thead className="table-light">
      <tr className="info" style={{ textAlign: "center" }}>
        <th>Photo</th>
        <th>Name</th>
        <th>Price</th>
        <th>Material</th>
        <th>Brand</th>
        <th>Status</th> */}
      {/* <th>Action</th> */}
      {/* </tr>
    </thead>
    <tbody>
      {showItems?.length > 0 ? (
        showItems?.map((product, i) => (
          <tr key={i} style={{ textAlign: "center" }}>
            <td>
              {product.p_image !== null ? (
                <img
                  src={product.p_image}
                  className="img-square"
                  alt="Product Image"
                  width="80"
                  height="80"
                />
              ) : (
                <img
                  src="assets/dist/img/default-product.png"
                  className="img-circle"
                  alt="Default Image"
                  width="50"
                  height="50"
                />
              )}
            </td>
            <td>{product.p_name}</td>
            <td>{product.p_price}</td>
            <td>{product.p_material}</td>
            <td>{product.p_brand}</td>
            <td>
              {product.p_status === "active" ? (
                <span className="label-success label label-default">
                  {product.p_status}
                </span>
              ) : (
                <span className="label-danger label label-default">
                  {product.p_status}
                </span>
              )}
            </td> */}
      {/* <td> */}
      {/* <div className="d-flex gap-2"> */}
      {/* Edit Button with modal trigger */}
      {/* <button
                    type="button"
                    className="btn btn-info btn-sm "
                    data-bs-toggle="modal"
                    data-bs-target="#productViewModal"
                    onClick={() => onClickViewProduct(product)}
                    >
                    <i className="fa fa-eye"></i>View
                    </button> */}

      {/* Edit Button with modal trigger */}
      {/* <button
                  type="button"
                  className="btn btn-add btn-sm bg-teal-800"
                  data-bs-toggle="modal"
                  data-bs-target="#productEditModal"
                  onClick={() => onClickEditBtn(product)}
                >
                  Edit
                </button> */}

      {/* Delete Button */}
      {/* <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#productDeleteModal"
                  onClick={() => onClickDeleteBtn(product)}
                >
                  <i className="fa fa-trash-o"></i>
                </button> */}
      {/* </div> */}
      {/* </td> */}
      {/* </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7} className="text-center">
            No records found
          </td>
        </tr>
      )} */}
      {/* Pagination Row */}
      {/* <tr>
        <td colSpan={7}>
          <Pagination
            data={fetchProductList}
            setShowItems={setShowItems}
            itemPerPage={20}
            showItems={showItems}
            setCurrentPage={setCurrentPageNo}
            currentPage={currentPageNo}
            totalRow={totalRow}
          />
        </td>
      </tr>
    </tbody>
  </table> */}

      {/* "No Result" Animation */}
      {/* <div className="noresult" style={{ display: "none" }}>
    <div className="text-center">
      <lord-icon
        src="https://cdn.lordicon.com/msoeawqm.json"
        trigger="loop"
        colors="primary:#121331,secondary:#08a88a"
        style={{ width: 75, height: 75 }}
      />
      <h5 className="mt-2">Sorry! No Result Found</h5>
      <p className="text-muted mb-0">
        We've searched more than 150+ Orders. We did not find any orders for
        your search.
      </p>
    </div>
  </div>
</div> */}

      {/* <div className="modal fade" id="productEditModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header modal-header-primary">
        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">×</button>
        <h3><i className="fa fa-user m-r-5"></i> Update Product</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <div className='row'> */}
      {/* Your input fields for editing product */}
      {/* Add your form fields here, similar to the original modal code */}
      {/* </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger pull-left" data-bs-dismiss="modal">Close</button>
          <button className="btn btn-success pull-right" type='submit'>Update</button>
        </div>
      </form>
    </div>
  </div>
</div> */}

      {/* <div className="modal fade" id="productViewModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog" style={{ width: "900px" }}>
    <div className="modal-content">
      <div className="modal-header modal-header-primary">
        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">×</button>
        <h3><i className="fa fa-user m-r-5"></i> Product</h3>
      </div>
      <div className="modal-body">
        <div className='row'> */}
      {/* Your form fields for viewing product */}
      {/* <div className="form-group col-sm-4">
            <h6>Name</h6>
            <p>{productDetail?.p_name}</p>
          </div>
          <div className="form-group col-sm-4">
            <h6>Price</h6>
            <p>{productDetail?.p_price}</p>
          </div> */}
      {/* Add the rest of the fields here */}
      {/* </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger pull-left" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> */}

      {/* </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ListProduct;
