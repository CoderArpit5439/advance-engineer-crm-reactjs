import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Sidebar from '../../Layout/Sidebar';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProduct } from '../../Redux/crmSlices/productSlice/ProductSlice';
import DragAndDrop from '../../Components/DragNDrop';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [productMedia,setProductMedia] = useState([]);


    const { loading, response } = useSelector((state) => {
        return {
            loading: state.rootReducer.ProductSlice?.loading,
            response: state.rootReducer.ProductSlice?.response,
        }
    })

    const handleProductFile = (files) => {
        setProductMedia(files);
    }

    const onSubmit = (data) => {
        if(productMedia?.length){
            data.p_media = productMedia
            dispatch(CreateProduct(data))
        }
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
                        <h1>Add Product</h1>
                        <small>Product</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="3N11jRpUy7">
                            <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="3N11jRpUy7" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonlist">
                                        <a class="btn btn-add" onClick={() => navigate('/list-product')}>
                                            <i class="fa fa-list"></i>  Product List </a>
                                    </div>
                                    {/* <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div> */}
                                </div>
                                <div class="panel-body">
                                    <form onSubmit={handleSubmit(onSubmit)} className="col-sm-12">
                                        <div className='row'>
                                            <div className="form-group col-sm-4">
                                                <label>Category</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Category"
                                                    {...register('p_category')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Unique ID</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="1001"
                                                    {...register('p_unique_id')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Product Name"
                                                    {...register('p_name')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Price</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Price"
                                                    {...register('p_price')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Material</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Material"
                                                    {...register('p_material')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>MOC</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter MOC"
                                                    {...register('p_moc')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Dimension</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Dimension"
                                                    {...register('p_dimension')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Brand</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Brand"
                                                    {...register('p_brand')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Colour</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Colour"
                                                    {...register('p_color')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Weight</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Weight"
                                                    {...register('p_weight')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Manufacturer</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Manufacturer"
                                                    {...register('p_manufacturer')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Country</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Country"
                                                    {...register('p_country')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Code"
                                                    {...register('p_code')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Drawing No</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Drawing No"
                                                    {...register('p_drawing_no')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Finish Type</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Finish Type"
                                                    {...register('p_finish_type')} />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <label>Status</label>
                                                <select
                                                    className="form-control"
                                                    placeholder="Enter Status Type"
                                                    {...register('p_status')}
                                                    >
                                                        <option value=""> -- Select Status --</option>
                                                        <option value="active">Active</option>
                                                        <option value="unactive">Unactive</option>
                                                    </select>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <label>Description</label>
                                                <textarea
                                                    className="form-control"
                                                    rows="3"
                                                    {...register('p_description')}></textarea>
                                            </div>
                                            <DragAndDrop onFilesChange={handleProductFile}/>
                                        </div>
                                        <div className="reset-button text-center">
                                            <a className="btn btn-warning">Reset</a>
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

export default AddProduct