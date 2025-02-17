import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetCustomerList, updateCustomer } from '../../Redux/crmSlices/customerSlice/CustomerSlice'
import Pagination from '../../Components/Pagination'

const ListCustomer = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fetchCustomerList, setFetchCustomerList] = useState([]);
    const [showItems, setShowItems] = useState([])      //pagination and search for map function
    const [currentPageNo, setCurrentPageNo] = useState();
    const [totalRow, setTotalRow] = useState();
    const [cId, setCId] = useState();

    const { data, count, loading, response } = useSelector((state) => {
        return {
            data: state.rootReducer.CustomerSlice?.data?.data,
            count: state.rootReducer.CustomerSlice?.data?.count,
            loading: state.rootReducer.CustomerSlice?.loading,
            response: state.rootReducer.CustomerSlice?.response,
        }
    })

    // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- START ----> 
    const pageNumber = localStorage.getItem("customer-list")  // Remark Employer Page Number

    useEffect(() => {

        if (!pageNumber) {
            setCurrentPageNo(1)
            localStorage.setItem("customer-list", 1)
        }
        else {
            if (!currentPageNo) {
                setCurrentPageNo(JSON.parse(pageNumber))
            }
            else {
                localStorage.setItem("customer-list", currentPageNo)
            }
        }
    }, [currentPageNo, pageNumber])

    // ------------------------------ FOR PAGE NUMBER UPDATE ----------------------------- END ----> 


    useEffect(() => {
        if (data) {
            setFetchCustomerList(data)
            setTotalRow(count)
        }
    }, [response, data])

    useEffect(() => {
        var body = {
            "page": currentPageNo,
        }
        dispatch(GetCustomerList(body));
    }, [])

    const onClickEditBtn = (customer) => {
        setCId(customer.c_id)
        setValue("c_fullname", customer.c_fullname)
        setValue("c_company_name", customer.c_company_name)
        setValue("c_email", customer.c_email)
        setValue("c_mobile", customer.c_mobile)
        setValue("c_post", customer.c_post)
        setValue("c_department", customer.c_department)
        // setValue("c_password", customer.c_password)
        setValue("c_status", customer.c_status)
        setValue("c_description", customer.c_description)
        setValue("c_dob", customer.c_dob)
        setValue("c_rank", customer.c_rank)
        setValue("c_address", customer.c_address)
    };

    const onSubmit = (data) => {
        const body = {
            cId,
            data
        }
        dispatch(updateCustomer(body));
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
                                    {/* <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div> */}
                                </div>
                                <div class="panel-body">
                                    <div class="btn-group">
                                        <div class="buttonexport" id="buttonlist">
                                            <a class="btn btn-add" onClick={() => navigate('/add-customer')}> <i class="fa fa-plus"></i> Add Customer
                                            </a>
                                        </div>
                                        {/* <button class="btn btn-exp btn-sm dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars"></i> Export Table Data</button>
                                        <ul class="dropdown-menu exp-drop" role="menu">
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false'});">
                                                    <img src="assets/dist/img/json.png" width="24" alt="logo" /> JSON</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]'});">
                                                    <img src="assets/dist/img/json.png" width="24" alt="logo" /> JSON (ignoreColumn)</a>
                                            </li>
                                            <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'true'});">
                                                <img src="assets/dist/img/json.png" width="24" alt="logo" /> JSON (with Escape)</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'xml',escape:'false'});">
                                                <img src="assets/dist/img/xml.png" width="24" alt="logo" /> XML</a>
                                            </li>
                                            <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'sql'});">
                                                <img src="assets/dist/img/sql.png" width="24" alt="logo" /> SQL</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'csv',escape:'false'});">
                                                    <img src="assets/dist/img/csv.png" width="24" alt="logo" /> CSV</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'txt',escape:'false'});">
                                                    <img src="assets/dist/img/txt.png" width="24" alt="logo" /> TXT</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'excel',escape:'false'});">
                                                    <img src="assets/dist/img/xls.png" width="24" alt="logo" /> XLS</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'doc',escape:'false'});">
                                                    <img src="assets/dist/img/word.png" width="24" alt="logo" /> Word</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'powerpoint',escape:'false'});">
                                                    <img src="assets/dist/img/ppt.png" width="24" alt="logo" /> PowerPoint</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'png',escape:'false'});">
                                                    <img src="assets/dist/img/png.png" width="24" alt="logo" /> PNG</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});">
                                                    <img src="assets/dist/img/pdf.png" width="24" alt="logo" /> PDF</a>
                                            </li>
                                        </ul> */}
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
                                            </div> */}
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
            </div>
            <Footer />
        </>
    )
}

export default ListCustomer