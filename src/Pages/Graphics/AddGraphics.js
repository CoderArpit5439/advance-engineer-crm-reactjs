import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddGraphicsImage } from "../../Redux/crmSlices/graphicsSlice/GraphicsSlice";
import Header from "../../LayoutNew/Header";
import Sidebar from "../../Layout/Sidebar";

const AddGraphics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const openModal = () => setIsModalOpen(true);
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalOpen(false);
    setImagePreview(null); // Reset image preview
    reset(); // Clear form values
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set preview
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(AddGraphicsImage(data));
    closeModal();
  };

  return (
    <>
      <Header />
      <Sidebar />

      <div className="main-content">
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
              <div className="col-xxl-12 mb-10">
                <div className="card mt-xxl-n5">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#inventoryDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="fas fa-box"></i> Add Graphics
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body p-4">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="inventoryDetails"
                        role="tabpanel"
                      >
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="row">
                            {/* Title Input */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">Title:</label>
                                <input
                                  type="text"
                                  placeholder="Enter title here"
                                  className={`form-control ${
                                    errors.graphic_title ? "is-invalid" : ""
                                  }`}
                                  {...register("graphic_title", {
                                    required: "Title is required",
                                  })}
                                />
                                {errors.graphic_title && (
                                  <div className="invalid-feedback">
                                    {errors.graphic_title.message}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Image Input */}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Upload Image:
                                </label>
                                <div className="border border-secondary p-3 rounded text-center">
                                  <input
                                    type="file"
                                    className="form-control d-none"
                                    id="image"
                                    {...register("graphic_image", {
                                      required: "Image is required",
                                    })}
                                    onChange={(e) => {
                                      handleImageChange(e);
                                      register("graphic_image").onChange(e);
                                    }}
                                    accept="image/*"
                                  />
                                  <label
                                    htmlFor="image"
                                    className="btn btn-outline-secondary"
                                  >
                                    {imagePreview
                                      ? "Change Image"
                                      : "Click to Upload"}
                                  </label>
                                  {imagePreview && (
                                    <div className="mt-3">
                                      <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="img-thumbnail"
                                        style={{
                                          width: "100px",
                                          height: "100px",
                                        }}
                                      />
                                      <p className="text-muted mt-2">
                                        Image Selected
                                      </p>
                                    </div>
                                  )}
                                </div>
                                {errors.graphic_image && (
                                  <div className="text-danger">
                                    {errors.graphic_image.message}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="d-flex justify-content-end border-top pt-3">
                            <button type="submit" className="btn btn-success">
                              Upload
                            </button>
                          </div>
                        </form>
                      </div>
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
    </>
  );
};

export default AddGraphics;
