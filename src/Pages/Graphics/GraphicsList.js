import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGraphicsImage,
  imageApproved,
} from "../../Redux/crmSlices/graphicsSlice/GraphicsSlice";
import AddGraphics from "./AddGraphics";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";

const GraphicsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading } = useSelector((state) => ({
    data: state.rootReducer.GraphicsSlice?.data?.data,
    loading: state.rootReducer.GraphicsSlice?.loading,
  }));

  useEffect(() => {
    dispatch(fetchGraphicsImage({ page: 1 }));
  }, [dispatch]);

  // Callback to refetch graphics after adding a new one
  const handleGraphicAdded = () => {
    dispatch(fetchGraphicsImage({ page: 1 }));
  };

  const imageApproval = async (data) => {
    await dispatch(imageApproved(data));
   dispatch(fetchGraphicsImage({ page: 1 }));
  };

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
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success add-btn"
                              id="create-btn"
                              onClick={() => navigate("/add-graphics")}
                            >
                              <i className="ri-add-line align-bottom me-1" />{" "}
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                      <div  className="table-responsive table-card mt-3 mb-1">
                      <div className="">
  <table className="table ">
    <thead className="">
      <tr>
        <th>Title</th>
        <th>Uploaded By</th>
        <th>Image</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {loading ? (
        <tr>
          <td colSpan="5" className="text-center">
            Loading...
          </td>
        </tr>
      ) : data?.length > 0 ? (
        data.map((graphic, index) => (
          <tr key={index}>
            <td>{graphic.g_title}</td>
            <td>{graphic.g_name}</td>
            <td>
              <img
                src={graphic.g_image || "https://via.placeholder.com/100"}
                alt={graphic.g_title}
                className="img-thumbnail"
                style={{ width: "80px", height: "80px" }}
              />
            </td>
            <td>
              <span
                className={`badge ${
                  graphic.g_approved === "yes" ? "bg-success" : "bg-warning"
                }`}
              >
                {graphic.g_approved === "yes" ? "Approved" : "Pending"}
              </span>
            </td>
            <td>
              {graphic.g_approved === "no" ? (
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() =>
                      imageApproval({
                        graphic_id: graphic.g_id,
                        graphic_approved: "yes",
                      })
                    }
                  >
                    <i className="fa fa-check-circle"></i> Approve
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      imageApproval({
                        graphic_id: graphic.g_id,
                        graphic_approved: "no",
                      })
                    }
                  >
                    <i className="fa fa-times-circle"></i> Reject
                  </button>
                </div>
              ) : (
                <span className="text-success fw-bold">Approved</span>
              )}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className="text-center">
            No graphics found. Add new graphics to display here!
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

                        <div className="noresult" style={{ display: "none" }}>
                          <div className="text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/msoeawqm.json"
                              trigger="loop"
                              colors="primary:#121331,secondary:#08a88a"
                              style={{ width: 75, height: 75 }}
                            />
                            <h5 className="mt-2">Sorry! No Result Found</h5>
                            <p className="text-muted mb-0">
                              We've searched more than 150+ Orders. We did not
                              find any orders for your search.
                            </p>
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
      </div>
      <Footer />
    </>
  );
};

export default GraphicsList;
