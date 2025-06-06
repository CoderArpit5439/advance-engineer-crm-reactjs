import React from 'react'
import Header from '../../Layout/Header';
import Sidebar from '../../Layout/Sidebar';
import Footer from '../../Layout/Footer';
import { useNavigate } from 'react-router-dom';

const ViewMachine = () => {
    const cards = [
        {name:"Total spares part",count:10},
        {name:"Total Operator",count:5},
        {name:"Next Maintenance",count:"20/05/2025"},
        {name:"Last Maintenance",count:"08/01/2025"},
    ];
    const data = [];
    const machineList = [];
    const navigate = useNavigate();
    const operatorList = [];
    const maintenanceList = [];

  return (
    <div>
            <>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row mb-4">
              <div class="col-xl-12">
                <div class="row ">
                  {cards?.map((card, i) => {
                    return (
                      <div class="col">
                        <div class="card card-height-100">
                          <div class="d-flex">
                            <div class="flex-grow-1 p-3">
                              <h5 class="mb-1">{card.name}</h5>
                              <h2 class="mt-2 ff-secondary fw-semibold"><span class="counter-value" >{card.count}</span></h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                    )
                  })}
                </div>
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
                            <div class="col-md">
                              <div>
                                <h4 class="fw-bold">Machine L1</h4>
                                <div class="hstack gap-3 flex-wrap">
                                  
                                  <div class="vr"></div>
                                  <div>
                                    Add on :{" "}
                                    <span class="fw-medium">
                                     29/05/2025
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
                            href="#about-machine"
                            role="tab"
                          >
                            About
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#machine-spare"
                            role="tab"
                          >
                           Spare parts
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#machine-operator"
                            role="tab"
                          >
                           Operator
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link fw-semibold"
                            data-bs-toggle="tab"
                            href="#machine-maintenance"
                            role="tab"
                          >
                            Maintenance
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
                          id="about-machine"
                          role="tabpanel"
                        >
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="tab-content text-muted">
                                <div
                                  class="tab-pane fade show active"
                                  id="about-machine"
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
                                                      machine :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {
                                                        data?.total_country_machine
                                                      }
                                                    </h5>
                                                    {/* <div class="badge bg-danger fs-12">High</div> */}
                                                  </div>
                                                </div>
                                                <div class="col-lg-3 col-sm-6">
                                                  <div>
                                                    <p class="mb-2 text-uppercase fw-medium">
                                                      No. of total india machine :
                                                    </p>
                                                    <h5 class="fs-15 mb-0">
                                                      {data?.total_india_machine}
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
                          id="machine-spare"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Machines
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
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
                                      </thead>
                                      <tbody>
                                        {machineList?.length != 0 ? machineList?.map((machine, i) => {
                                          return (
                                            <tr>
                                              <td
                                                className="text-decoration-underline"
                                                onClick={() =>
                                                  navigate(
                                                    `/view-machine/${machine.p_id}`
                                                  )
                                                }
                                              >
                                                {machine.p_city}
                                              </td>
                                              <td>
                                                <div>
                                                  {machine.p_account_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {machine.p_account_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <div>
                                                  {machine.p_security_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {machine.p_security_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <div>
                                                  {machine.p_store_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {machine.p_store_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>
                                                <div>
                                                  {machine.p_other_contact}
                                                </div>
                                                <div>
                                                  <div>
                                                    {machine.p_other_email}
                                                  </div>
                                                </div>
                                              </td>
                                              <td>{machine.p_gst}</td>
                                              <td>{machine.p_state}</td>
                                              <td>{machine.p_pincode}</td>
                                              <td>{machine.p_area_working}</td>
                                            </tr>
                                          );
                                        })
                                          :
                                          <tr><td colspan="4" class="text-center">No machines found</td></tr>
                                        }
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
                          id="machine-operator"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Operators
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Name</th>
                                          {/* <th scope="col">Contact</th> */}
                                          <th scope="col">Machine</th>
                                          <th scope="col">Create at</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {operatorList?.length != 0 ? operatorList?.map((operator, i) => {
                                          return (
                                            <tr>
                                              <td>{operator.u_name}</td>
                                              <td>{operator.machine_name}</td>
                                              <td>{operator.u_created_at}</td>
                                            </tr>
                                          );
                                        })
                                        :
                                      <tr><td colspan="4" class="text-center">No Operators found</td></tr>
                                          }
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
                          id="machine-maintenance"
                          role="tabpanel"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                <h5 class="card-title flex-grow-1">
                                  All Maintenance
                                </h5>
                              </div>
                              <div class="row">
                                <div class="col-lg-12">
                                  <div class="table-responsive table-card">
                                    <table class="table table-borderless align-middle mb-0">
                                      <thead class="table-light">
                                        <tr>
                                          <th scope="col">Name</th>
                                          <th scope="col">Company</th>
                                          <th scope="col">Contact</th>
                                          <th scope="col">Department</th>
                                          <th scope="col">Address</th>
                                          <th scope="col">Created at</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {maintenanceList?.length != 0 ? maintenanceList?.map((maintenance, i) => {
                                          return (
                                            <tr>
                                              <td
                                                className="text-decoration-underline"
                                                onClick={() =>
                                                  navigate(
                                                    `/view-maintenance/${maintenance.c_id}`
                                                  )}
                                              >{maintenance.c_fullname}</td>
                                              <td>{maintenance.c_company_name}</td>
                                              <td>
                                                <div>{maintenance.c_mobile}</div>
                                                <div>
                                                  <div>{maintenance.c_email}</div>
                                                </div>
                                              </td>
                                              <td>{maintenance.c_department}</td>
                                              <td>{maintenance.c_address}</td>
                                              <td>{maintenance.c_created_at}</td>
                                              {/* <td>
                                            <div>{operator.p_account_contact}</div>
                                            <div>
                                              <div>
                                                {operator.p_account_email}
                                              </div>
                                            </div>
                                          </td> */}
                                            </tr>
                                          );
                                        })
                                        :
                                          <tr><td colspan="10" class="text-center">No Maintenance found</td></tr>
                                          }
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
    </div>
  )
}

export default ViewMachine