import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";

const ViewDrawing = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div class="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 class="mb-sm-0">Explore Now</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a >NFT Marketplace</a>
                      </li>
                      <li class="breadcrumb-item active">Explore Now</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-header border-0">
                    <div class="d-flex align-items-center">
                      <h5 class="card-title mb-0 flex-grow-1">
                        Explore Drawing
                      </h5>
                      <div>
                        <a
                          class="btn btn-success"
                          data-bs-toggle="collapse"
                          href="#collapseExample"
                        >
                          <i class="ri-filter-2-line align-bottom"></i> Filters
                        </a>
                      </div>
                    </div>
                    <div class="collaps show" id="collapseExample">
                      <div class="row row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-3 g-3">
                        <div class="col">
                          <h6 class="text-uppercase fs-12 mb-2">Search</h6>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search Drawing name"
                            autocomplete="off"
                            id="searchDrawingList"
                          />
                        </div>
                        <div class="col">
                          <h6 class="text-uppercase fs-12 mb-2">
                            Select Category
                          </h6>

                          <select
                            class="form-control "
                            data-choices=""
                            name="select-category"
                            data-choices-search-false=""
                            id="select-category"
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="" selected="">
                              Select Category
                            </option>
                            <option value="Artwork">Artwork</option>
                            <option value="3d Style">3d Style</option>
                            <option value="Photography">Photography</option>
                            <option value="Collectibles">Collectibles</option>
                            <option value="Crypto Card">Crypto Card</option>
                            <option value="Games">Games</option>
                            <option value="Music">Music</option>
                          </select>
                        </div>
                        <div class="col">
                          <h6 class="text-uppercase fs-12 mb-2">File Type</h6>

                          <select
                            class="form-control "
                            data-choices=""
                            name="file-type"
                            data-choices-search-false=""
                            id="file-type"
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="" selected="">
                              File Type
                            </option>
                            <option value="jpg">Images</option>
                            <option value="mp4">Video</option>
                            <option value="mp3">Audio</option>
                            <option value="gif">Gif</option>
                          </select>
                        </div>
                        <div class="col">
                          <h6 class="text-uppercase fs-12 mb-2">Sales Type</h6>

                          <select
                            class="form-control "
                            data-choices=""
                            name="all-sales-type"
                            data-choices-search-false=""
                            id="all-sales-type"
                            hidden=""
                            tabindex="-1"
                            data-choice="active"
                          >
                            <option value="" selected="">
                              All Sales Type
                            </option>
                            <option value="On Auction">On Auction</option>
                            <option value="Has Offers">Has Offers</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex align-items-center mb-4">
                  <div class="flex-grow-1">
                    <p class="text-muted fs-14 mb-0">Result: 8745</p>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="dropdown">
                      <a
                        class="text-muted fs-14 dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        All View
                      </a>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1"
              id="explorecard-list"
            >
                {[1,2,3,4,5]?.map(()=>{
                    return (
<div class="col list-element">
                {" "}
                <div class="card explore-box card-animate">
                  {" "}
                  <div class="explore-place-bid-img">
                    {" "}
                    <input type="hidden" class="form-control" id="2" />{" "}
                    <div class="d-none">On Auction</div>{" "}
                    <img
                      src="assets/images/nft/img-03.jpg"
                      alt=""
                      class="card-img-top explore-img"
                    />{" "}
                    <div class="bg-overlay"></div>{" "}
                    <div class="place-bid-btn">
                      {" "}
                      <a class="btn btn-success">
                        <i class="ri-auction-fill align-bottom me-1"></i> Place
                        Bid
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div class="bookmark-icon position-absolute top-0 end-0 p-2">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-icon "
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <i class="mdi mdi-cards-heart fs-16"></i>
                    </button>{" "}
                  </div>{" "}
                  <div class="card-body">
                    {" "}
                    <p class="fw-medium mb-0 float-end">
                      <i class="mdi mdi-heart text-danger align-middle"></i>{" "}
                      19.29k{" "}
                    </p>{" "}
                    <h5 class="mb-1">
                      <a>
                        Creative Filtered Portrait
                      </a>
                    </h5>{" "}
                    <p class="text-muted mb-0">Photography</p>{" "}
                  </div>{" "}
                  <div class="card-footer border-top border-top-dashed">
                    {" "}
                    <div class="d-flex align-items-center">
                      {" "}
                      <div class="flex-grow-1 fs-14">
                        {" "}
                        <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i>{" "}
                        Highest: <span class="fw-medium">75.3ETH</span>{" "}
                      </div>{" "}
                      <h5 class="flex-shrink-0 fs-14 text-primary mb-0">
                        67.36ETH
                      </h5>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
                    )
                })}
              
            </div>

            <div class="text-center mb-3">
              <button
                class="btn btn-link text-success mt-2 material-shadow-none"
                id="loadmore"
              >
                <i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>{" "}
                Load More{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewDrawing;
