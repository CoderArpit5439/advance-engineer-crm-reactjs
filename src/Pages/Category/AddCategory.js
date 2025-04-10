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
            <div className="main-content mt-10">
        <div className="page-content">
          <div className="container-fluid">
            <div className="position-relative mx-n4 mt-n4">
              <div className="">
                <img src="" className="profile-wid-img" alt="" />
                <div className="overlay-content">
                  <div className="text-end p-3">
                    <div className="p-0 ms-auto rounded-circle profile-photo-edit"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/*end col*/}
              <div className="col-xxl-12 mb-10">
                <div className="card ">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="fas fa-home" /> Add Category
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-4">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                      <form onSubmit={handleSubmit(onSubmit)}>
  <div className="row">
    {/* Category Name */}
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          {...register('cat_name')}
        />
      </div>
    </div>

    {/* Category Code */}
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">Code:</label>
        <input
          type="text"
          className="form-control"
          placeholder="code "
          {...register('cat_code')}
        />
      </div>
    </div>

    {/* Category Image */}
    <div className="col-lg-6">
      <div className="mb-3">
        <label className="form-label">Image:</label>
        <input
          type="file"
          className="form-control"
          {...register('cat_image')}
        />
      </div>
    </div>

    {/* Submit & Reset Buttons */}
    <div className="col-lg-12">
      <div className="hstack gap-2 justify-content-end">
   
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  </div>
</form>

                      </div>
                      {/*end tab-pane*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
            <Footer />
        </>
    )
}

export default AddCategory