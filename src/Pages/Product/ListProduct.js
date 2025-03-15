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
        <th>Status</th>
        {/* <th>Action</th> */}
      </tr>
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
            </td>
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
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7} className="text-center">
            No records found
          </td>
        </tr>
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

  {/* "No Result" Animation */}
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
        We've searched more than 150+ Orders. We did not find any orders for
        your search.
      </p>
    </div>
  </div>
</div>

<div className="modal fade" id="productEditModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header modal-header-primary">
        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">×</button>
        <h3><i className="fa fa-user m-r-5"></i> Update Product</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-body">
          <div className='row'>
            {/* Your input fields for editing product */}
            {/* Add your form fields here, similar to the original modal code */}
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger pull-left" data-bs-dismiss="modal">Close</button>
          <button className="btn btn-success pull-right" type='submit'>Update</button>
        </div>
      </form>
    </div>
  </div>
</div>

<div className="modal fade" id="productViewModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog" style={{ width: "900px" }}>
    <div className="modal-content">
      <div className="modal-header modal-header-primary">
        <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">×</button>
        <h3><i className="fa fa-user m-r-5"></i> Product</h3>
      </div>
      <div className="modal-body">
        <div className='row'>
          {/* Your form fields for viewing product */}
          <div className="form-group col-sm-4">
            <h6>Name</h6>
            <p>{productDetail?.p_name}</p>
          </div>
          <div className="form-group col-sm-4">
            <h6>Price</h6>
            <p>{productDetail?.p_price}</p>
          </div>
          {/* Add the rest of the fields here */}
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger pull-left" data-bs-dismiss="modal">Close</button>
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
    </>
  );
};

export default ListProduct;
