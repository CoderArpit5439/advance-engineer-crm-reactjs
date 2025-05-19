import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteCustomer,
//   GetCustomerList,
//   updateCustomer,
// } from "../../Redux/crmSlices/customerSlice/CustomerSlice";
import Pagination from "../../Components/Pagination";
import Swal from "sweetalert2";
import { fetchUnits } from "../../Redux/crmSlices/unit/UnitSlice";
import CompanyDetails from "../../Components/DashRightBar/CompanyDetails";
import PlantDetails from "../../Components/DashRightBar/PlantDetails";
import UnitDetails from "../../Components/DashRightBar/UnitDetails";
// import { fetchPlants } from "../../Redux/crmSlices/plantSlice/PlantSlice";
// import CompanyDetails from "../../Components/DashRightBar/CompanyDetails";
const ListUnit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [plantId, setPlantId] = useState();
  const [companyId, setCompanyId] = useState();
  const [unitId, setUnitId] = useState();
  const { data, count, loading, response, status, error } = useSelector(
    (state) => {
      return {
        data: state.rootReducer.UnitSlice?.data?.data,
        loading: state.rootReducer.UnitSlice?.loading,
        response: state.rootReducer.UnitSlice?.response,
        count: state.rootReducer.UnitSlice?.count,
        status: state.rootReducer.UnitSlice?.status,
        error: state.rootReducer.UnitSlice?.error,
      };
    }
  );
  useEffect(() => {
    dispatch(fetchUnits());
  }, []);

  const handleEdit = (data) => {
    if (data) {
      localStorage.setItem("editPlant", JSON.stringify(data));
      navigate("/edit-unit");
    }
  };

  const onClickPlant = (plantId) => {
    setPlantId(plantId);
  };

  const onClickCompany = (companyId) => {
    setCompanyId(companyId);
  };

  const onClickUnit = (unitId) => {
    setUnitId(unitId);
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
                  <div className="card-header">
                    {/* <h4 className="card-title mb-0">Add, Edit &amp; Remove</h4> */}
                  </div>
                  {/* end card header */}
                  <div className="card-body">
                    <div className="listjs-table" id="customerList">
                      <div className="row g-4 mb-3">
                        <div className="col-sm-auto">
                          <div>
                            <button
                              type="button"
                              className="btn btn-success add-btn"
                              id="create-btn"
                              onClick={() => navigate("/add-plant")}
                            >
                              <i className="ri-add-line align-bottom me-1" />{" "}
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap"
                          id="customerTable"
                        >
                          <thead className="table-light">
                            <tr>
                              <th className="sort" data-sort="date">
                                Unit
                              </th>
                              <th className="sort" data-sort="email">
                                Company
                              </th>
                              <th className="sort" data-sort="date">
                                Plant
                              </th>
                              <th className="sort" data-sort="action">
                                Action
                              </th>
                            </tr>
                          </thead>

                          <tbody className="list form-check-all">
                            {data?.map((unit) => {
                              return (
                                <tr key={unit.id}>
                                  <td className="">
                                    <a
                                      href="javascript:void(0)"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#theme-settings-offcanvas-unit"
                                      aria-controls="theme-settings-offcanvas-unit"
                                      className="text-decoration-underline"
                                      rel="noreferrer"
                                      onClick={() => onClickUnit(unit.u_id)}
                                    >
                                      {unit.u_name}
                                    </a>
                                  </td>
                                  <td className="">
                                    <a
                                      href="javascript:void(0)"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#theme-settings-offcanvas-company"
                                      aria-controls="theme-settings-offcanvas-company"
                                      className="text-decoration-underline"
                                      rel="noreferrer"
                                      onClick={() =>
                                        onClickCompany(unit.companyDetails.c_id)
                                      }
                                    >
                                      {unit.companyDetails.c_name}
                                    </a>
                                  </td>
                                  <td className="">
                                    {/* {unit.plantDetails.p_city} */}
                                    <a
                                      href="javascript:void(0)"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#theme-settings-offcanvas-plant"
                                      aria-controls="theme-settings-offcanvas-plant"
                                      className="text-decoration-underline"
                                      rel="noreferrer"
                                      onClick={() =>
                                        onClickPlant(unit.plantDetails.p_id)
                                      }
                                    >
                                      {unit.plantDetails.p_city}
                                    </a>
                                  </td>
                                  <td className="">
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-info"
                                      onClick={() => handleEdit(unit)}
                                    >
                                      <i className="fa fa-pencil-o"></i> Update
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
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
                              We've searched more than 150+ Orders We did not
                              find any orders for you search.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
            </div>
          </div>
          <CompanyDetails cData={null} cId={companyId} />
          <PlantDetails pData={null} pId={plantId} />
          <UnitDetails uData={null} uId={unitId} />
        </div>
        {/* <CompanyDetails cData={plantDetails} /> */}
      </div>
      <Footer />
    </>
  );
};

export default ListUnit;
