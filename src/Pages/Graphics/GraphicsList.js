import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGraphicsImage } from "../../Redux/crmSlices/graphicsSlice/GraphicsSlice";
import AddGraphics from "./AddGraphics";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";

const GraphicsList = () => {
  const dispatch = useDispatch();

  // Redux state
  const { data, loading } = useSelector((state) => ({
    data: state.rootReducer.GraphicsSlice?.data?.data,
    loading: state.rootReducer.GraphicsSlice?.loading,
  }));

  // Fetch graphics on mount
  useEffect(() => {
    dispatch(fetchGraphicsImage({ page: 1 }));
  }, [dispatch]);

  // Callback to refetch graphics after adding a new one
  const handleGraphicAdded = () => {
    dispatch(fetchGraphicsImage({ page: 1 }));
  };

  return (
    <>
      <Header />
      <Sidebar />
      <div className="content-wrapper" style={{ minHeight: "1276px" }}>
      
        <section class="content-header">
                    <div class="header-icon">
                        <img className="w-20 h-20" src="https://cdn-icons-png.flaticon.com/128/3940/3940056.png"/>
                    </div>
                    <div class="header-title">
                        <h1>Graphics</h1>
                        <small>Graphics List</small>
                    </div>
                </section>
        {/* Add Graphics Section */}
        <section className="h-32 p-5">
          <AddGraphics onGraphicAdded={handleGraphicAdded} />
        </section>

        {/* Graphics Cards Section */}
        <section>
          <div className="container mx-auto">
            {loading ? (
              // Skeleton Loader
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 animate-pulse rounded-xl shadow-lg p-5"
                  >
                    <div className="h-56 bg-gray-300 rounded-t-xl"></div>
                    <div className="mt-4 h-6 bg-gray-300 rounded"></div>
                    <div className="mt-2 h-4 bg-gray-300 rounded"></div>
                    <div className="mt-4 flex space-x-4">
                      <div className="h-10 w-24 bg-gray-300 rounded"></div>
                      <div className="h-10 w-24 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : data?.length > 0 ? (
              // Render Graphics Cards
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((graphic) => (
                  <div
                    key={graphic.id}
                    className="relative bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Image Section */}
                    <div className="relative group">
                      <img
                        src={graphic.g_image || "https://via.placeholder.com/300"}
                        alt={graphic.title}
                        className="w-full h-56 object-cover rounded-t-xl"
                      />
                      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-xl font-semibold">Click to View</p>
                      </div> */}
                    </div>

                    {/* Title & Uploaded By */}
                    <div className="p-5">
                      <h3 className="text-2xl font-lg text-gray-800">{graphic.g_title}</h3>
                      <p className="mt-2 text-gray-600">
                        Uploaded by:{" "}
                        <span className="font-medium text-indigo-600">{graphic.g_name}</span>
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center px-5 pb-5 mt-4">
                      <button
                        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                      >
                        <i className="fa fa-check-circle mr-2"></i> Approve
                      </button>
                      <button
                        className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white text-lg font-bold py-2 px-6 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                      >
                        <i className="fa fa-times-circle mr-2"></i> Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="text-center mt-10">
                <p className="text-lg font-semibold text-gray-600">
                  No graphics found. Add new graphics to display here!
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GraphicsList;
