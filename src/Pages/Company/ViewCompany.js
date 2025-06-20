import React, { useEffect } from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCompany } from "../../Redux/crmSlices/companySlice/CompanySlice";
import { useNavigate, useParams } from "react-router-dom";

const ViewCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data,
    plantList,
    unitList,
    customerList,
    quotationList,
    invoiceList,
    inquiryList,
    orderList,
    cards,
    error,
  } = useSelector((state) => {
    return {
      cards: state.rootReducer.companySlice?.singleCompany?.cards,
      data: state.rootReducer.companySlice?.singleCompany?.data,
      plantList: state.rootReducer.companySlice?.singleCompany?.plantList,
      unitList: state.rootReducer.companySlice?.singleCompany?.unitList,
      customerList: state.rootReducer.companySlice?.singleCompany?.customerList,
      quotationList:
        state.rootReducer.companySlice?.singleCompany?.quotationList,
      invoiceList: state.rootReducer.companySlice?.singleCompany?.invoiceList,
      orderList: state.rootReducer.companySlice?.singleCompany?.orderList,
      inquiryList: state.rootReducer.companySlice?.singleCompany?.inquiryList,
      error: state.rootReducer.companySlice?.singleCompany?.error,
    };
  });

  useEffect(() => {
    if (id) {
      console.log(852, id);
      dispatch(fetchSingleCompany(id));
    }
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row mb-4">
              <div class="col-xl-12">
                {/* <div class="card crm-widget"> */}
                {/* <div class="card-body p-0"> */}
                <div class="row ">
                  {cards?.map((card, i) => {
                    return (
                      <div class="col">
                        <div class="card card-height-100">
                          <div class="d-flex">
                            <div class="flex-grow-1 p-3">
                              <h5 class="mb-1">{card.name}</h5>
                              <h2 class="mt-2 ff-secondary fw-semibold">
                                <span class="counter-value">{card.count}</span>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                      // <div class="col">
                      //   <div class="py-4 px-3">
                      //     <h5 class="text-muted text-uppercase fs-13">
                      //       {card.name}{" "}
                      //       <i class="ri-arrow-up-circle-line text-success fs-18 float-end align-middle"></i>
                      //     </h5>
                      //     <div class="d-flex align-items-center">
                      //       <div class="flex-grow-1 ms-3">
                      //         <h2 class="mb-0 cfs-22">
                      //           <span class="counter-value">
                      //           {card.count}
                      //           </span>
                      //         </h2>
                      //       </div>
                      //     </div>
                      //   </div>
                      // </div>
                    );
                  })}
                </div>
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card mt-n4 mx-n4">
                  <div class="bg-warning-subtle">
                    <div class="card-body pb-0 px-4">
                      <div class="row mb-3">
                        <div class="col-md">
                          <div class="row align-items-center g-3">
                            <div class="col-md-auto">
                              <div class="avatar-md">
                                <div class="avatar-title bg-white rounded-circle">
                                  <img
                                    src={data?.c_image}
                                    alt=""
                                    class="avatar-xs"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-md">
                              <div>
                                <h4 class="fw-bold">{data?.c_name}</h4>
                                <div class="hstack gap-3 flex-wrap">
                                  <div>
                                    <i class="ri-building-line align-bottom me-1"></i>{" "}
                                    {data?.c_head_office_address}
                                  </div>
                                  <div class="vr"></div>
                                  <div>
                                    Create Date :{" "}
                                    <span class="fw-medium">
                                      {data?.c_created_at}
                                    </span>
                                  </div>
                                  <div class="vr"></div>
                                  <div>
                                    Website :{" "}
                                    <span class="fw-medium">
                                      {" "}
                                      <a
                                        href={data?.c_website}
                                        target="_blank"
                                        className="underline"
                                      >
                                        {data?.c_website}
                                      </a>
                                    </span>
                                  </div>
                                  <div class="vr"></div>
                                  <div class="badge rounded-pill bg-info fs-12">
                                    New
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-auto"></div>
                      </div>
                      <ul
                        class="nav nav-tabs-custom border-bottom-0"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link active fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-overview"
                            role="tab"
                          >
                            Overview
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-plants"
                            role="tab"
                          >
                            Plants
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-units"
                            role="tab"
                          >
                            Units
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-customer"
                            role="tab"
                          >
                            Customer
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-inquiry"
                            role="tab"
                          >
                            Inquiry
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-order"
                            role="tab"
                          >
                            Order
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-quotations"
                            role="tab"
                          >
                            Quotations
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#project-invoices"
                            role="tab"
                          >
                            Invoices
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas-body p-0">
              {data ? (
                <div class="container-fluid pt-3">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="tab-content text-muted">
                        <div
                          class="tab-pane fade show active"
                          id="project-overview"
                          role="tabpanel"
                        >
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="tab-content text-muted">
                                <div
                                  class="tab-pane fade show active"
                                  id="project-overview"
                                  role="tabpanel"
                                >
                                  <div class="row">
                                    <div class="col-xl-12">
                                      <div class="card">
                                        <div className="card-header">
                                          {data?.c_description}
                                        </div>
                                        <div class="card-body">
                                          <div class="text-muted">
                                            <div class="">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Head Office Address :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_head_office_address
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Head Office Contact No. :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_head_office_contact
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      No. of total countries
                                                      plant :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.total_country_plant
                                                      }
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12">High</div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      No. of total india plant :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.total_india_plant}
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Type of manufacturing :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_type_of_manufacturing
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Internation Domestic &
                                                      Both :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.c_international_domestic
                                                      }
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total no. of quotation :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      10
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12">High</div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total no of order :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      12
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank Branch :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_branch}
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank IFSC code :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_ifsc}
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank Name :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_name}
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12"></div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Bank Account :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.c_bank_account_no}
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                              <div class="row">
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total amount of this year
                                                      :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      12000
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total pending amount :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      2000
                                                    </h5>
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total no. of Staff :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      20
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12">High</div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      Total receive amount :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      10000
                                                    </h5>
                                                    {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
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
                            </div>
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="project-plants"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Plants
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            {/* <div class="col-lg-12"> */}
                            {/* <div class="table-responsive table-card"> */}
                            {/* <table class="table table-borderless align-middle mb-0"> */}
                            {/* <thead class="table-light">
                                        <tr>
                                          <th scope="col">City</th>
                                          <th scope="col">Accountant</th>
                                          <th scope="col">Security</th>
                                          <th scope="col">Store</th>
                                          <th scope="col">Other</th>
                                          <th scope="col">GST</th>
                                          <th scope="col">State</th>
                                          <th scope="col">Pin Code</th>
                                          <th scope="col">Area Working</th>
                                        </tr>
                                      </thead> */}
                            {/* <tbody> */}
                            {plantList?.length != 0 ? (
                              plantList?.map((plant, i) => {
                                return (
                                  <div class="col-xxl-3 col-md-6">
                                    {/* // <tr>
                                               <td
                                                className="text-decoration-underline"
                                                onClick={() =>
                                                  navigate(
                                                    `/view-plant/${plant.p_id}`
                                                  )
                                                }
                                              >
                                                {plant.p_city}
                                              </td> 
                                            //   <td>
                                            //     <div>
                                            //       {plant.p_account_contact}
                                            //     </div>
                                            //     <div>
                                            //       <div>
                                            //         {plant.p_account_email}
                                            //       </div>
                                            //     </div>
                                            //   </td>
                                            //   <td>
                                            //     <div>
                                            //       {plant.p_security_contact}
                                            //     </div>
                                            //     <div>
                                            //       <div>
                                            //         {plant.p_security_email}
                                            //       </div>
                                            //     </div>
                                            //   </td>
                                            //   <td>
                                            //     <div>
                                            //       {plant.p_store_contact}
                                            //     </div>
                                            //     <div>
                                            //       <div>
                                            //         {plant.p_store_email}
                                            //       </div>
                                            //     </div>
                                            //   </td>
                                            //   <td>
                                            //     <div>
                                            //       {plant.p_other_contact}
                                            //     </div>
                                            //     <div>
                                            //       <div>
                                            //         {plant.p_other_email}
                                            //       </div>
                                            //     </div>
                                            //   </td>
                                            //   <td>{plant.p_gst}</td>
                                            //   <td>{plant.p_state}</td>
                                            //   <td>{plant.p_pincode}</td>
                                            //   <td>{plant.p_area_working}</td>
                                            // </tr> */}
                                    <div class="card companiesList-card">
                                      <div class="card-body">
                                        <div class="avatar-sm mx-auto">
                                          <div class="avatar-title bg-light rounded">
                                            <img
                                              src="assets/images/companies/img-3.png"
                                              alt=""
                                              class="avatar-xxs companyLogo-img"
                                            />
                                          </div>
                                        </div>
                                        <div class="text-center">
                                          <a href="#!">
                                            <h5
                                              className="text-decoration-underline mt-3 company-name"
                                              onClick={() =>
                                                navigate(
                                                  `/view-plant/${plant.p_id}`
                                                )
                                              }
                                            >
                                              {plant.p_city}
                                            </h5>
                                          </a>
                                          <div class="d-none company-desc">
                                            The IT department of a company
                                            ensures that the network of
                                            computers within the organisation
                                            are well-connected and functioning
                                            properly. All the other departments
                                            within the company rely on them to
                                            ensure that their respective
                                            functions can go on seamlessly.
                                          </div>
                                          <p class="text-muted industry-type">
                                            IT Department
                                          </p>
                                          <div class="d-none">
                                            <span class="employee">
                                              250-300
                                            </span>
                                            <span class="location">
                                              Cullera, Spain
                                            </span>
                                            <span class="rating">4.8</span>
                                            <span class="website">
                                              www.martinsolution.com
                                            </span>
                                            <span class="email">
                                              info@martinsolution.com
                                            </span>
                                            <span class="since">1995</span>
                                          </div>
                                        </div>
                                        <div>
                                          <button
                                            type="button"
                                            class="btn btn-soft-primary w-100 viewcompany-list"
                                          >
                                            View More
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <tr>
                                <td colspan="4" class="text-center">
                                  No plants found
                                </td>
                              </tr>
                            )}
                            {/* </tbody>
                                    </table> */}
                            {/* </div> */}
                            {/* </div> */}
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-units"
                          role="tabpanel"
                        >
                          {/* <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Units
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Name</th>
                                          {/* <th scope="col">Contact</th>
                                          <th scope="col">Plant</th>
                                          <th scope="col">Create at</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {unitList?.length != 0 ? (
                                          unitList?.map((unit, i) => {
                                            return (
                                              <tr>
                                                <td>{unit.u_name}</td>
                                                <td>{unit.plant_name}</td>
                                                <td>{unit.u_created_at}</td>
                                              </tr>
                                            );
                                          })
                                        ) : (
                                          <tr>
                                            <td colspan="4" class="text-center">
                                              No Units found
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Units
                                </h5>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            {unitList?.length != 0 ? (
                              unitList?.map((unit, i) => {
                                return (
                                  <div class="col-xxl-3 col-md-6">
                                    <div class="card companiesList-card">
                                      <div class="card-body">
                                        <div class="avatar-sm mx-auto">
                                          <div class="avatar-title bg-light rounded">
                                            <img
                                              src="assets/images/companies/img-3.png"
                                              alt=""
                                              class="avatar-xxs companyLogo-img"
                                            />
                                          </div>
                                        </div>
                                        <div class="text-center">
                                          <a href="#!">
                                            <h5 className="text-decoration-underline mt-3 company-name">
                                              {unit.u_name}
                                            </h5>
                                          </a>
                                          <div class="d-none company-desc">
                                            The IT department of a company
                                            ensures that the network of
                                            computers within the organisation
                                            are well-connected and functioning
                                            properly. All the other departments
                                            within the company rely on them to
                                            ensure that their respective
                                            functions can go on seamlessly.
                                          </div>
                                          <p class="text-muted industry-type">
                                            IT Department
                                          </p>
                                          <div class="d-none">
                                            <span class="employee">
                                              250-300
                                            </span>
                                            <span class="location">
                                              Cullera, Spain
                                            </span>
                                            <span class="rating">4.8</span>
                                            <span class="website">
                                              www.martinsolution.com
                                            </span>
                                            <span class="email">
                                              info@martinsolution.com
                                            </span>
                                            <span class="since">1995</span>
                                          </div>
                                        </div>
                                        <div>
                                          <button
                                            type="button"
                                            class="btn btn-soft-primary w-100 viewcompany-list"
                                          >
                                            View More
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            ) : (
                              <tr>
                                <td colspan="4" class="text-center">
                                  No plants found
                                </td>
                              </tr>
                            )}
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-customer"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Customer
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Company</th>
                                          <th scope="col">Name</th>
                                          <th scope="col">Email ID</th>
                                          <th scope="col">Contact</th>
                                          <th scope="col">Post</th>
                                          <th scope="col">Last Contact</th>
                                          <th scope="col">Block / Unblock</th>
                                          <th scope="col">Next Visit</th>
                                          <th scope="col">Discuss</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {customerList?.length != 0 ? (
                                          customerList?.map((customer, i) => {
                                            return (
                                              <tr>
                                                <td>
                                                  {customer.c_company_name}
                                                </td>
                                                <td
                                                  className="text-decoration-underline"
                                                  onClick={() =>
                                                    navigate(
                                                      `/view-customer/${customer.c_id}`
                                                    )
                                                  }
                                                >
                                                  {customer.c_fullname}
                                                </td>
                                                <td>{customer.c_email}</td>
                                                <td>
                                                  <div>{customer.c_mobile}</div>
                                                </td>
                                                <td>
                                                  <div>Post</div>
                                                </td>
                                                <td>
                                                  <div>25-06-2025</div>
                                                </td>
                                                <td>
                                                  <div>Block</div>
                                                </td>
                                                <td>
                                                  <div>30-06-2025</div>
                                                </td>
                                                <td>
                                                  <div>
                                                    Intrested but not buy
                                                    machine
                                                  </div>
                                                </td>
                                                <td>
                                                  <ul className="list-inline hstack gap-2 mb-0">
                                                    <li className="list-inline-item">
                                                      <div className="dropdown">
                                                        <button
                                                          className="btn btn-soft-secondary btn-sm dropdown"
                                                          type="button"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                        >
                                                          <i className="ri-more-fill align-middle" />
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                          <li>
                                                            <a
                                                              className="dropdown-item view-item-btn"
                                                              href="javascript:void(0);"
                                                            >
                                                              <i className="ri-eye-fill align-bottom me-2 text-muted" />
                                                              View
                                                            </a>
                                                          </li>
                                                          <li>
                                                            <a
                                                              className="dropdown-item edit-item-btn"
                                                              href="#showModal"
                                                              data-bs-toggle="modal"
                                                            >
                                                              <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                                                              Edit
                                                            </a>
                                                          </li>
                                                          <li>
                                                            <a
                                                              className="dropdown-item remove-item-btn"
                                                              data-bs-toggle="modal"
                                                              href="#deleteRecordModal"
                                                            >
                                                              <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />{" "}
                                                              Delete
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                </td>
                                                {/* <td>{customer.c_department}</td>
                                                <td>{customer.c_address}</td>
                                                <td>{customer.c_created_at}</td> */}
                                                {/* <td>
                                            <div>{unit.p_account_contact}</div>
                                            <div>
                                              <div>
                                                {unit.p_account_email}
                                              </div>
                                            </div>
                                          </td> */}
                                              </tr>
                                            );
                                          })
                                        ) : (
                                          <tr>
                                            <td
                                              colspan="10"
                                              class="text-center"
                                            >
                                              No Customer found
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-quotations"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Quotations
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0 text-center">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Quotation No.</th>
                                          <th scope="col">Plant</th>
                                          <th scope="col">Unit</th>
                                          <th scope="col">Customer Name</th>
                                          <th scope="col">Item Code</th>
                                          <th scope="col">Drg no.</th>
                                          <th scope="col">Description</th>
                                          <th scope="col">Dimension</th>
                                          <th scope="col">Material</th>
                                          <th scope="col">Weight</th>
                                          <th scope="col">QTY</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Total AMT</th>
                                          <th scope="col">Thickness</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {quotationList?.length != 0 ? (
                                          quotationList?.map((quotation, i) => {
                                            return (
                                              <tr>
                                                <td>145824</td>
                                                <td>Lupin plant</td>
                                                <td>Lupin unit</td>
                                                <td>Rahul Sharma</td>
                                                <td>1023</td>
                                                <td>AEG1021</td>
                                                <td>SS Chair</td>
                                                <td>L 500 X W 500</td>
                                                <td>SS 304</td>
                                                <td>15 KG</td>
                                                <td>1</td>
                                                <td>1300</td>
                                                <td>1300</td>
                                                <td>1.2 mm</td>
                                                <td>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-success">
                                                      Follow Up
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-warning">
                                                      View
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-info">
                                                      Order
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-danger">
                                                      Remove
                                                    </button>
                                                  </div>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-primary">
                                                      Reject
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-secondary">
                                                      Print
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-link">
                                                      Email
                                                    </button>
                                                  </div>
                                                </td>
                                              </tr>
                                            );
                                          })
                                        ) : (
                                          <tr>
                                            <td
                                              colspan="10"
                                              class="text-center"
                                            >
                                              No Quotation found
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-invoices"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Invoices
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0 text-center">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Invoice No.</th>
                                          <th scope="col">Plant</th>
                                          <th scope="col">Unit</th>
                                          <th scope="col">Customer Name</th>
                                          <th scope="col">Item Code</th>
                                          <th scope="col">Drg no.</th>
                                          <th scope="col">Description</th>
                                          <th scope="col">Dimension</th>
                                          <th scope="col">Material</th>
                                          <th scope="col">Weight</th>
                                          <th scope="col">QTY</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Total AMT</th>
                                          <th scope="col">Thickness</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {invoiceList?.length != 0 ? (
                                          invoiceList?.map((Invoice, i) => {
                                            return (
                                              <tr>
                                                <td>145824</td>
                                                <td>Lupin plant</td>
                                                <td>Lupin unit</td>
                                                <td>Rahul Sharma</td>
                                                <td>1023</td>
                                                <td>AEG1021</td>
                                                <td>SS Chair</td>
                                                <td>L 500 X W 500</td>
                                                <td>SS 304</td>
                                                <td>15 KG</td>
                                                <td>1</td>
                                                <td>1300</td>
                                                <td>1300</td>
                                                <td>1.2 mm</td>
                                                <td>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-success">
                                                      Follow Up
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-warning">
                                                      View
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-info">
                                                      Order
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-danger">
                                                      Remove
                                                    </button>
                                                  </div>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-primary">
                                                      Reject
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-secondary">
                                                      Print
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-link">
                                                      Email
                                                    </button>
                                                  </div>
                                                </td>
                                              </tr>
                                            );
                                          })
                                        ) : (
                                          <tr>
                                            <td
                                              colspan="10"
                                              class="text-center"
                                            >
                                              No Invoice found
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-inquiry"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Inquiry
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0 text-center">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Sr No.</th>
                                          <th scope="col">Company</th>
                                          <th scope="col">Customer</th>
                                          <th scope="col">Quotation</th>
                                          <th scope="col">Item code</th>
                                          <th scope="col">DRG no.</th>
                                          <th scope="col">Description</th>
                                          <th scope="col">Dimension</th>
                                          <th scope="col">Material</th>
                                          <th scope="col">Weight</th>
                                          <th scope="col">Qty</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Total amt</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {inquiryList?.length != 0 ? (
                                          inquiryList?.map((inquiry, i) => {
                                            return (
                                              <tr>
                                                <td>{i + 1}</td>
                                                <td>{inquiry.company_name}</td>
                                                <td>{inquiry.customer_name}</td>
                                                <td>{inquiry.quotation_no}</td>
                                                <td>{inquiry.inq_item_code}</td>
                                                <td>{inquiry.inq_drg_no}</td>
                                                <td>
                                                  {inquiry.inq_description}
                                                </td>
                                                <td>{inquiry.inq_dimension}</td>
                                                <td>{inquiry.inq_material}</td>
                                                <td>{inquiry.inq_weight}</td>
                                                <td>{inquiry.inq_qty}</td>
                                                <td>{inquiry.inq_price}</td>
                                                <td>
                                                  {inquiry.inq_description}
                                                </td>
                                                <td>{inquiry.inq_status}</td>
                                                <td>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-success">
                                                      Follow Up
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-warning">
                                                      View
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-info">
                                                      Order
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-danger">
                                                      Remove
                                                    </button>
                                                  </div>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-primary">
                                                      Reject
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-secondary">
                                                      Print
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-link">
                                                      Email
                                                    </button>
                                                  </div>
                                                </td>
                                              </tr>
                                            );
                                          })
                                        ) : (
                                          <tr>
                                            <td
                                              colspan="10"
                                              class="text-center"
                                            >
                                              No Invoice found
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="project-order"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Orders
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0 text-center">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Sr No.</th>
                                          <th scope="col">Company</th>
                                          <th scope="col">Customer</th>
                                          <th scope="col">Quotation</th>
                                          <th scope="col">PO Number</th>
                                          <th scope="col">Item code</th>
                                          <th scope="col">DRG no.</th>
                                          <th scope="col">PO Description</th>
                                          <th scope="col">Description</th>
                                          <th scope="col">Dimension</th>
                                          <th scope="col">Material</th>
                                          <th scope="col">Weight</th>
                                          <th scope="col">Qty</th>
                                          <th scope="col">Price</th>
                                          <th scope="col">Total amt</th>
                                          <th scope="col">Thickness</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {orderList?.length != 0 ? (
                                          orderList?.map((order, i) => {
                                            return (
                                              <tr>
                                                <td>145824</td>
                                                <td>Lupin plant</td>
                                                <td>Lupin unit</td>
                                                <td>Rahul Sharma</td>
                                                <td>1023</td>
                                                <td>AEG1021</td>
                                                <td>SS Chair</td>
                                                <td>L 500 X W 500</td>
                                                <td>SS 304</td>
                                                <td>15 KG</td>
                                                <td>1</td>
                                                <td>1300</td>
                                                <td>1300</td>
                                                <td>1.2 mm</td>
                                                <td>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-success">
                                                      Follow Up
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-warning">
                                                      View
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-info">
                                                      Order
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-danger">
                                                      Remove
                                                    </button>
                                                  </div>
                                                  <div>
                                                    <button className="btn btn-sm m-1 btn-primary">
                                                      Reject
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-secondary">
                                                      Print
                                                    </button>
                                                    <button className="btn btn-sm m-1 btn-link">
                                                      Email
                                                    </button>
                                                  </div>
                                                </td>
                                              </tr>
                                            );
                                          })
                                        ) : (
                                          <tr>
                                            <td
                                              colspan="10"
                                              class="text-center"
                                            >
                                              No Orders found
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
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
              ) : (
                <div className="container-fluid pt-3">Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewCompany;
