import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../Components/Pagination'
import { GetCategoryList, updateCategory } from '../../Redux/crmSlices/categorySlice/CategorySlice';


const ListEmployee = () => {
  const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fetchCategoryList, setFetchCategoryList] = useState([]);
  const [showItems, setShowItems] = useState([])      //pagination and search for map function
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalRow, setTotalRow] = useState();
  const [catId, setCId] = useState();

  const { data, count, loading, response } = useSelector((state) => {
      return {
          data: state.rootReducer.CategorySlice?.data?.data,
          count: state.rootReducer.CategorySlice?.data?.count,
          loading: state.rootReducer.CategorySlice?.loading,
          response: state.rootReducer.CategorySlice?.response,
      }
  })

  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- START ----> 
  const pageNumber = localStorage.getItem("category-list")  // Category Page Number

  useEffect(() => {

      if (!pageNumber) {
          setCurrentPageNo(1)
          localStorage.setItem("category-list", 1)
      }
      else {
          if (!currentPageNo) {
              setCurrentPageNo(JSON.parse(pageNumber))
          }
          else {
              localStorage.setItem("category-list", currentPageNo)
          }
      }
  }, [currentPageNo, pageNumber])

  // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- END ----> 


  useEffect(() => {
      if (data) {
          setFetchCategoryList(data)
          setTotalRow(count)
      }
  }, [response, data])

  useEffect(() => {
      var body = {
          "page": currentPageNo,
      }
      dispatch(GetCategoryList(body));
  }, [currentPageNo])

  const onClickEditBtn = (category) => {
      setCId(category.p_id)
      setValue("cat_name", category.cat_name);
      setValue("cat_code", category.cat_code);
  };

  const onSubmit = (data) => {
      const body = {
          catId,
          data
      }
      dispatch(updateCategory(body));
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
            <h1>Category</h1>
            <small>Category List</small>
          </div>
        </section>
        <section class="content">
          <div class="row">
            <div
              class="col-sm-12 lobipanel-parent-sortable ui-sortable"
              data-lobipanel-child-inner-id="CvIfztVEX7"
            >
              <div
                class="panel panel-bd lobidrag lobipanel lobipanel-sortable"
                data-inner-id="CvIfztVEX7"
                data-index="0"
              >
                <div class="panel-heading ui-sortable-handle">
                  <div class="btn-group" id="buttonexport">
                    <a href="#">
                      <h4>Category List</h4>
                    </a>
                  </div>
                  {/* <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div> */}
                </div>
                <div class="panel-body">
                  <div class="btn-group">
                    <div class="buttonexport" id="buttonlist">
                      <a
                        class="btn btn-add"
                        onClick={() => navigate("/add-category")}
                      >
                        {" "}
                        <i class="fa fa-plus"></i> Add Category
                      </a>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table
                      id="dataTableExample1"
                      className="table table-bordered table-striped table-hover"
                    >
                      <thead>
                        <tr className="info">
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Code</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showItems?.length > 0 ? (
                          showItems?.map((cat, i) => {
                            return (
                              <tr key={i}>
                                <td>
                                  {cat.cat_image ? (
                                    <img
                                      src={cat.cat_image}
                                      className="img-square"
                                      alt="category Image"
                                      width="50"
                                      height="50"
                                    />
                                  ) : (
                                    <img
                                      src="assets/dist/img/default-cat.png"
                                      className="img-circle"
                                      alt="Default Image"
                                      width="50"
                                      height="50"
                                    />
                                  )}
                                </td>
                                <td>{cat.cat_name}</td>
                                <td>{cat.cat_code}</td>

                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-add btn-sm"
                                    data-toggle="modal"
                                    data-target="#categoryEditModal"
                                    onClick={() => onClickEditBtn(cat)}
                                  >
                                    <i className="fa fa-pencil"></i>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    data-toggle="modal"
                                    data-target="#categoryDeleteModal"
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan={4} className="text-center">
                              No records found
                            </td>
                          </tr>
                        )}
                        <tr>
                          <td colSpan={7}>
                            <Pagination
                              data={fetchCategoryList}
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
          <div
            class="modal fade"
            id="categoryEditModal"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header modal-header-primary">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <h3>
                    <i class="fa fa-user m-r-5"></i> Update Category
                  </h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <>
                    <div class="modal-body">
                      <div className="row">
                        <div className="form-group col-sm-6">
                          <label>Category</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Category"
                            {...register("cat_code")}
                          />
                        </div>
                        <div className="form-group col-sm-6">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Category Name"
                            {...register("cat_name")}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div className="reset-button text-center">
                        <button className="btn btn-warning" type="button">
                          Reset
                        </button>
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </>
                </form>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="categoryDeleteModal"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header modal-header-primary">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <h3>
                    <i class="fa fa-user m-r-5"></i> Delete Category
                  </h3>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form class="form-horizontal">
                        <fieldset>
                          <div class="col-md-12 form-group user-form-group">
                            <label class="control-label">Delete Category</label>
                            <div class="pull-right">
                              <button
                                type="button"
                                class="btn btn-danger btn-sm"
                              >
                                NO
                              </button>
                              <button type="submit" class="btn btn-add btn-sm">
                                YES
                              </button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-danger pull-left"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
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

export default ListEmployee;
