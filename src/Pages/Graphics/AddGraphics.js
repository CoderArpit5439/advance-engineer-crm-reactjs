import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { AddGraphicsImage } from "../../Redux/crmSlices/graphicsSlice/GraphicsSlice";

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
    dispatch(AddGraphicsImage(data))
    closeModal();
  };

  return (
    <>
     
      <div className=" min-h-[30px]" >
  
        <section className="">
          {/* Button to Open Modal */}
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-teal-500 via-teal-500 to-teal-500 
                       text-white font-bold py-4 px-8 rounded-full shadow-lg 
                       hover:shadow-xl transform hover:scale-105 transition-transform 
                       duration-300 focus:outline-none focus:ring-4 focus:ring-teal-500 flex items-center space-x-2 text-lg"
          >
            <i className="fa fa-plus"></i>
            <span>Add Image</span>
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Upload Image
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </div>

                {/* Modal Content */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-6 mt-6">
                    {/* Title Input */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-lg font-bold text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        className={`mt-2 block w-full h-12 rounded-lg border ${
                          errors.title
                            ? "border-red-500"
                            : "border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500"
                        } text-lg px-4 py-2`}
                        placeholder="Enter title here"
                        {...register("graphic_title", { required: "Title is required" })}
                      />
                      {errors.title && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.title.message}
                        </p>
                      )}
                    </div>

                    {/* Image Input */}
                    <div>
                      <label
                        htmlFor="image"
                        className="block text-lg font-bold text-gray-700"
                      >
                        Upload Image
                      </label>
                      <div className="border-4 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 mt-2">
                        <input
                          type="file"
                          id="image"
                          className="hidden"
                          {...register("graphic_image", { required: "Image is required" })}
                          onChange={(e) => {
                            handleImageChange(e);
                            register("image").onChange(e); // Bind with useForm
                          }}
                          accept="image/*"
                        />
                        {imagePreview ? (
                          <div className="flex flex-col items-center">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-40 h-40 object-cover rounded-md mb-4"
                            />
                            <span className="text-sm text-gray-500">
                              Image Selected
                            </span>
                          </div>
                        ) : (
                          <label htmlFor="image" className="block">
                            <i className="fa fa-upload text-4xl text-teal-500"></i>
                            <p className="text-lg text-gray-500 mt-4">
                              Click to upload your image
                            </p>
                          </label>
                        )}
                      </div>
                      {errors.image && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.image.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="flex justify-end border-t pt-4 mt-6">
                    <button
                      type="submit"
                      className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-300 text-lg"
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>
      </div>
    
    </>
  );
}

export default AddGraphics
