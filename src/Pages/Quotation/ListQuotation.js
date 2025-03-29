import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../Components/Pagination'
import { GetProductList, updateProduct } from '../../Redux/crmSlices/productSlice/ProductSlice';
import { GetQuotationList ,deleteQuotation} from '../../Redux/crmSlices/customerSlice/CustomerSlice';
import Swal from "sweetalert2";
const ListQuotation = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fetchQuotationList, setFetchQuotationList] = useState([]);
    const [quotationDetail, setQuotationDetail] = useState();
    const [showItems, setShowItems] = useState([])      //pagination and search for map function
    const [currentPageNo, setCurrentPageNo] = useState();
    const [totalRow, setTotalRow] = useState();
    const [qId, setQId] = useState();

    const { data, count, loading } = useSelector((state) => {
        return {
            data: state.rootReducer.CustomerSlice?.quotation?.data,
            count: state.rootReducer.CustomerSlice?.quotation?.count,
            loading: state.rootReducer.CustomerSlice?.loading,
        }
    })

    // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- START ----> 
    const pageNumber = localStorage.getItem("product-list")  // Remark Employer Page Number

    useEffect(() => {

        if (!pageNumber) {
            setCurrentPageNo(1)
            localStorage.setItem("product-list", 1)
        }
        else {
            if (!currentPageNo) {
                setCurrentPageNo(JSON.parse(pageNumber))
            }
            else {
                localStorage.setItem("product-list", currentPageNo)
            }
        }
    }, [currentPageNo, pageNumber])

    // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- END ----> 


    useEffect(() => {
        if (data) {
            setFetchQuotationList(data)
            setTotalRow(count)
        }
    }, [ data])

    useEffect(() => {
        var body = {
            "page": currentPageNo,
        }
        dispatch(GetQuotationList(body));
    }, [currentPageNo])

    const onClickEditBtn = (quote) => {
        setQId(quote.quo_id)
        setValue("quo_name", quote.quo_name);
        setValue("quo_date", quote.quo_date);
        setValue("quo_subject", quote.quo_subject);
        setValue("quo_number", quote.quo_number);
        setValue("quo_description", quote.quo_description);
        setValue("quo_quantity", quote.quo_quantity);
        setValue("quo_kg", quote.quo_kg);
        setValue("quo_subtotal", quote.quo_subtotal);
        setValue("quo_discount", quote.quo_discount);
        setValue("quo_total", quote.quo_total);
    };

    // const onSubmit = (data) => {
    //     const body = {
    //         id : qId,
    //         data
    //     }
    //     dispatch(updateProduct(body));
    // }

    const deleteQuotations = (data) => {
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
              dispatch(deleteQuotation(data.quo_id))
              dispatch(GetQuotationList());
              Swal.fire("Deleted!", `${data.quo_name} has been deleted.`, "success");
              dispatch(GetQuotationList());
            }
          });
        
       
    }

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
              <div className="header-icon">
                <i className="fa fa-users"></i>
              </div>
              <div className="header-title">
                <h1>Quotation</h1>
                <small>Quotation List</small>
              </div>
            </div>
            <div className="card-body">
              <div className="listjs-table" id="quotationList">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <button
                      type="button"
                      className="btn btn-success add-btn"
                      onClick={() => navigate("/create-quotation")}
                    >
                      <i className="ri-add-line align-bottom me-1" /> Add Quotation
                    </button>
                  </div>
                  {/* Search Bar */}
                  <div className="col-10 d-flex" style={{ marginTop: "20px" }}>
                    <div className="search-box mx-2">
                      <input
                        type="text"
                        className="form-control w-auto"
                        id="searchQuotationList"
                        placeholder="Search by Name, Number"
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="table-responsive table-card mt-3 mb-1">
                  <table className="table align-middle table-nowrap" id="dataTableExample1">
                    <thead className="table-light">
                      <tr>
                        <th className="sort" data-sort="quo_name">Name</th>
                        <th className="sort" data-sort="quo_number">Number</th>
                        <th className="sort" data-sort="quo_date">Date</th>
                        <th className="sort" data-sort="quo_subject">Subject</th>
                        <th className="sort" data-sort="quo_total">Total</th>
                        <th className="sort" data-sort="quo_created_at">Created at</th>
                        <th className="sort" data-sort="action">Action</th>
                      </tr>
                    </thead>
                    <tbody className="list form-check-all">
                      {showItems?.length > 0 ? showItems?.map((quote, i) => (
                        <tr key={i}>
                          <td>{quote.quo_name}</td>
                          <td>{quote.quo_number}</td>
                          <td>{quote.quo_date}</td>
                          <td>{quote.quo_subject}</td>
                          <td>{quote.quo_total}</td>
                          <td>{quote.quo_created_at}</td>
                          <td>
                            <div className="d-flex gap-2">
                             
                                <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                data-toggle="modal"
                                data-target="#productViewModal"
                                onClick={() => deleteQuotations(quote)}
                              >
                                <i className="fa fa-eye"></i> Remove
                              </button>
                            </div>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={7} className="text-center">
                            No records found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {/* Pagination */}
                  <div className="pagination">
                    <Pagination
                      data={fetchQuotationList}
                      setShowItems={setShowItems}
                      itemPerPage={20}
                      showItems={showItems}
                      setCurrentPage={setCurrentPageNo}
                      currentPage={currentPageNo}
                      totalRow={totalRow}
                    />
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

{/* Modal View Quotation */}
<div className="modal fade" id="productViewModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog" style={{ width: "900px" }}>
    <div className="modal-content">
      <div className="modal-header modal-header-primary">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3><i className="fa fa-user m-r-5"></i> Quotation</h3>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="form-group col-sm-4">
            <h6>Name</h6>
            <p>{quotationDetail?.quo_name}</p>
          </div>
          <div className="form-group col-sm-4">
            <h6>Price</h6>
            <p>{quotationDetail?.quo_number}</p>
          </div>
          <div className="form-group col-sm-4">
            <h6>Status</h6>
            <p className="text-info">{quotationDetail?.p_status}</p>
          </div>
          {/* Add other fields here as in your original code */}
        </div>
      </div>
      <div className="modal-footer"></div>
    </div>
  </div>
</div>

            <Footer />
        </>
    )
}

export default ListQuotation