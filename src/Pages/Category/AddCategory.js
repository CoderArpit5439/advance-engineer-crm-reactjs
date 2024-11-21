import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Sidebar from '../../Layout/Sidebar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCategory } from '../../Redux/crmSlices/categorySlice/CategorySlice';

const AddCategory = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { loading, response, catList } = useSelector((state) => {
        return {
            loading: state.rootReducer.CategorySlice?.loading,
            response: state.rootReducer.CategorySlice?.response,
        }
    })


    const onSubmit = (data) => {
        dispatch(CreateCategory(data))
        setTimeout(() => {
            navigate("/list-category")
        }, 1000);
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
                        <h1>Add Category</h1>
                        <small>Category</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="3N11jRpUy7">
                            <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="3N11jRpUy7" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonlist">
                                        <a class="btn btn-add" onClick={() => navigate('/list-category')}>
                                            <i class="fa fa-list"></i>  Category List </a>
                                    </div>
                                    {/* <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div> */}
                                </div>
                                <div class="panel-body">
                                    <form onSubmit={handleSubmit(onSubmit)} className="col-sm-12">
                                        <div className='row'>
                                            <div className="form-group col-sm-4">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="1001"
                                                    {...register('cat_name')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Category Name"
                                                    {...register('cat_code')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    placeholder="Enter Price"
                                                    {...register('cat_image')} />
                                            </div>
                                        </div>
                                        <div className="reset-button text-center">
                                            <button className="btn btn-warning" type='button' >Reset</button>
                                            <button className="btn btn-success" type='submit'>Save</button>
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

export default AddCategory