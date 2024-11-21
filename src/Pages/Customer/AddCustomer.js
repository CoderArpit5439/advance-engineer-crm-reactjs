import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Sidebar from '../../Layout/Sidebar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCustomer } from '../../Redux/crmSlices/customerSlice/CustomerSlice';

const AddCustomer = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, response } = useSelector((state) => {
        return {
            loading: state.rootReducer.CustomerSlice?.loading,
            response: state.rootReducer.CustomerSlice?.response,
        }
    })

    const onSubmit = (data) => {
        dispatch(CreateCustomer(data))
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
                        <h1>Add Customer</h1>
                        <small>Customer</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="3N11jRpUy7">
                            <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="3N11jRpUy7" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonlist">
                                        <a class="btn btn-add" onClick={() => navigate('/list-customer')}>
                                            <i class="fa fa-list"></i>  Customer List </a>
                                    </div>
                                    {/* <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div> */}
                                </div>
                                <div class="panel-body">
                                    <form onSubmit={handleSubmit(onSubmit)} class="col-sm-12">
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
                                            <div class="form-group col-sm-6">
                                                <label>Password</label>
                                                <input type="text" class="form-control" placeholder="Enter Password"  {...register('c_password')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Date of Birth</label>
                                                <input id="minMaxExample" type="date" class="form-control hasDatepicker" placeholder="Enter Date..." {...register('c_dob')} />
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Picture upload</label>
                                                <input type="file" name="picture" {...register('c_image')} />
                                                {/* <input type="hidden" name="old_picture" /> */}
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>Address</label>
                                                <textarea class="form-control" rows="3"  {...register('c_address')}></textarea>
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
                                            <div class="form-group col-sm-6">
                                                <label>Gender</label><br></br>
                                                <select class="form-control" {...register('c_gender')}>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div class="form-check col-sm-6">
                                                <label>Status</label><br></br>
                                                <select class="form-control" {...register('c_status')}>
                                                    <option value="Active">Active</option>
                                                    <option value="Not Active">Not Active</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-sm-6">
                                                <label>No. of quotation</label>
                                                <input type="number" class="form-control" placeholder="Enter Number Of Quotation"  {...register('c_no_of_quotation')} />
                                            </div>
                                            <div class="reset-button text-center">
                                                <a class="btn btn-warning">Reset</a>
                                                <button class="btn btn-success" type='submit'>Save</button>
                                            </div>
                                        </div>
                                    </form>
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

export default AddCustomer