import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../../Components/Pagination'
import { GetProductList, updateProduct } from '../../Redux/crmSlices/productSlice/ProductSlice';
import { GetQuotationList } from '../../Redux/crmSlices/customerSlice/CustomerSlice';

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

    const onClickViewQuotation = (data) => {
        setQuotationDetail(data);
    }

    return (
        <>
            <Header />
            <Sidebar />
            <div class="content-wrapper" style={{ minHeight: "799px" }}>
                <section class="content-header">
                    <div class="header-icon">
                        <i class="fa fa-users"></i>
                    </div>
                    <div class="header-title">
                        <h1>Quotation</h1>
                        <small>Quotation List</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="CvIfztVEX7">
                            <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="CvIfztVEX7" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonexport">
                                        <a href="#">
                                            <h4>Quotation List</h4>
                                        </a>
                                    </div>
                                    {/* <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div> */}
                                </div>
                                <div class="panel-body">
                                    <div class="btn-group">
                                        <div class="buttonexport" id="buttonlist">
                                            <a class="btn btn-add" onClick={() => navigate('/create-quotation')}> <i class="fa fa-plus"></i> Add Quotation
                                            </a>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="dataTableExample1" className="table table-bordered table-striped table-hover">
                                            <thead>
                                                <tr className="info" style={{ textAlign: "center" }}>
                                                    <th>S.no.</th>
                                                    <th>Name</th>
                                                    <th>Number</th>
                                                    <th>Date</th>
                                                    <th>Subject</th>
                                                    <th>Total</th>
                                                    <th>Create at</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {showItems?.length > 0 ? showItems?.map((quote, i) => {
                                                    return (
                                                        <tr key={i} style={{ textAlign: "center" }}>
                                                            <td>{i+1}</td>
                                                            <td>{quote.quo_name}</td>
                                                            <td>{quote.quo_number}</td>
                                                            <td>{quote.quo_date}</td>
                                                            <td>{quote.quo_subject}</td>
                                                            <td>{quote.quo_total}</td>
                                                            <td>{quote.quo_created_at}</td>
                                                            
                                                            <td>
                                                                <button type="button" className="btn btn-info btn-sm" data-toggle="modal" data-target="#productViewModal" onClick={() => onClickViewQuotation(quote)}><i className="fa fa-eye"></i></button>
                                                                {/* <button type="button" className="btn btn-add btn-sm" data-toggle="modal" data-target="#productEditModal" onClick={() => onClickEditBtn(quote)}><i className="fa fa-pencil"></i></button> */}
                                                                {/* <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#productDeleteModal"><i className="fa fa-trash-o"></i></button> */}
                                                            </td>
                                                        </tr>
                                                    )
                                                }) :
                                                    <tr>
                                                        <td colSpan={8} className='text-center'>
                                                            No records found
                                                        </td>
                                                    </tr>
                                                }
                                                <tr>
                                                    <td colSpan={8}>
                                                        <Pagination data={fetchQuotationList} setShowItems={setShowItems} itemPerPage={20} showItems={showItems} setCurrentPage={setCurrentPageNo} currentPage={currentPageNo} totalRow={totalRow} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="modal fade" id="productEditModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i> Update Product</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <>
                                        <div class="modal-body">
                                            <div className='row'>
                                                <div className="form-group col-sm-6">
                                                    <label>Category</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Category"
                                                        {...register('quo_date')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Unique ID</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="1001"
                                                        {...register('quo_subject')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Product Name"
                                                        {...register('quo_name')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Price</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Price"
                                                        {...register('quo_number')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Material</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Material"
                                                        {...register('quo_description')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>MOC</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter MOC"
                                                        {...register('quo_quantity')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Dimension</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Dimension"
                                                        {...register('quo_kg')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Brand</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Brand"
                                                        {...register('quo_subtotal')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Colour</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Colour"
                                                        {...register('quo_discount')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Weight</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Weight"
                                                        {...register('quo_total')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Description</label>
                                                    <textarea
                                                        className="form-control"
                                                        rows="3"
                                                        {...register('p_description')}></textarea>
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Manufacturer</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Manufacturer"
                                                        {...register('p_manufacturer')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Country</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Country"
                                                        {...register('p_country')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Code</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Code"
                                                        {...register('p_code')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Drawing No</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Drawing No"
                                                        {...register('p_drawing_no')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Finish Type</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Finish Type"
                                                        {...register('p_finish_type')} />
                                                </div>
                                                <div className="form-group col-sm-6">
                                                    <label>Status</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Status Type"
                                                        {...register('p_status')} />
                                                </div>

                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <div className="reset-button text-center">

                                                <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                                                <button className="btn btn-success pull-right" type='submit' >Update</button>
                                            </div>
                                        </div>
                                    </>
                                </form>
                            </div>
                        </div>
                    </div> */}
                    <div class="modal fade" id="productViewModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog" style={{ width: "900px" }}>
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i>Quotation</h3>
                                </div>
                                <>
                                    <div class="modal-body">
                                        <div className='row'>
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
                                                <p className='text-info'>{quotationDetail?.p_status}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Weight</h6>
                                                <p className='text-info'>{quotationDetail?.quo_total}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Unique Id</h6>
                                                <p >{quotationDetail?.quo_subject}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>MOC</h6>
                                                <p >{quotationDetail?.quo_quantity}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Material</h6>
                                                <p >{quotationDetail?.quo_description}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Manufacturer</h6>
                                                <p >{quotationDetail?.p_manufacturer}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Finish Type</h6>
                                                <p >{quotationDetail?.p_finish_type}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Drawing No</h6>
                                                <p >{quotationDetail?.p_drawing_no}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Dimension</h6>
                                                <p >{quotationDetail?.quo_kg}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Country</h6>
                                                <p >{quotationDetail?.p_country}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Colour</h6>
                                                <p >{quotationDetail?.quo_discount}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Code</h6>
                                                <p >{quotationDetail?.p_code}</p>
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <h6>Brand</h6>
                                                <p >{quotationDetail?.quo_subtotal}</p>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <h6>Description</h6>
                                                <p >{quotationDetail?.p_description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        {/* <div className="reset-button text-center"> */}
                                        <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                                        {/* </div> */}
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                    {/* <div class="modal fade" id="productDeleteModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i> Delete Product</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form class="form-horizontal">
                                                <fieldset>
                                                    <div class="col-md-12 form-group user-form-group">
                                                        <label class="control-label">Delete Product</label>
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
                    </div> */}
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ListQuotation