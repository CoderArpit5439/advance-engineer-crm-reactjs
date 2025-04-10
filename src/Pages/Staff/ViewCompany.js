import React from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'

const ViewCompany = () => {
    return (
        <>
            <Header />
          <Sidebar  />
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
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
                                                                    <img src="https://i0.wp.com/biosimilarsrr.com/wp-content/uploads/2018/01/Lupin-logo.jpg?ssl=1" alt="" class="avatar-xs" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md">
                                                            <div>
                                                                <h4 class="fw-bold">Lupin</h4>
                                                                <div class="hstack gap-3 flex-wrap">
                                                                    <div><i class="ri-building-line align-bottom me-1"></i> Address</div>
                                                                    <div class="vr"></div>
                                                                    <div>Create Date : <span class="fw-medium">02-04-2025</span></div>
                                                                    <div class="vr"></div>
                                                                    <div>Website : <span class="fw-medium"> <a href="https://www.lupin.com/" target="_blank" className="underline">www.lupin.com</a></span></div>
                                                                    <div class="vr"></div>
                                                                    <div class="badge rounded-pill bg-info fs-12">New</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-auto"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="tab-content text-muted">
                                    <div class="tab-pane fade show active" id="project-overview" role="tabpanel">
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="text-muted">
                                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                                <div class="row">
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Head Office Address :</p>
                                                                            <h5 class="fs-15 mb-0">Mumbai</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Head Office Contact No. :</p>
                                                                            <h5 class="fs-15 mb-0">7788559966</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">No. of total countries plant :</p>
                                                                            <h5 class="fs-15 mb-0">8</h5>
                                                                            {/* <div class="badge bg-danger fs-12">High</div> */}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">No. of total india plant :</p>
                                                                            <h5 class="fs-15 mb-0">4</h5>
                                                                            {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                                <div class="row">
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Type of manufacturing :</p>
                                                                            <h5 class="fs-15 mb-0">Medician</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Internation Domestic & Both :</p>
                                                                            <h5 class="fs-15 mb-0">Both</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Total no. of quotation :</p>
                                                                            <h5 class="fs-15 mb-0">10</h5>
                                                                            {/* <div class="badge bg-danger fs-12">High</div> */}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Total no of order :</p>
                                                                            <h5 class="fs-15 mb-0">12</h5>
                                                                            {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                                <div class="row">
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Bank Branch :</p>
                                                                            <h5 class="fs-15 mb-0">Indore</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Bank IFSC code :</p>
                                                                            <h5 class="fs-15 mb-0">SBINO5245</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Bank Name :</p>
                                                                            <h5 class="fs-15 mb-0">State bank of india</h5>
                                                                            {/* <div class="badge bg-danger fs-12"></div> */}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Bank Account :</p>
                                                                            <h5 class="fs-15 mb-0">775546754627485414</h5>
                                                                            {/* <div class="badge bg-warning fs-12">Inprogress</div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                                <div class="row">
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Total amount of this year :</p>
                                                                            <h5 class="fs-15 mb-0">12000</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Total pending amount :</p>
                                                                            <h5 class="fs-15 mb-0">2000</h5>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Total no. of Staff :</p>
                                                                            <h5 class="fs-15 mb-0">20</h5>
                                                                            {/* <div class="badge bg-danger fs-12">High</div> */}
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-6">
                                                                        <div>
                                                                            <p class="mb-2 text-uppercase fw-medium">Total receive amount :</p>
                                                                            <h5 class="fs-15 mb-0">10000</h5>
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
                </div>
            </div>
            <Footer  />
        </>
    )
}

export default ViewCompany