import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
const Gallery = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 className="mb-sm-0">Gallery</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Pages</a>
                      </li>
                      <li className="breadcrumb-item active">Gallery</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="card-body px-1">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="text-center">
                          <ul
                            className="list-inline categories-filter animation-nav"
                            id="filter"
                          >
                            <li className="list-inline-item">
                              <a className="categories" data-filter="*">
                                All
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="categories active"
                                data-filter=".project"
                              >
                                Project
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="categories"
                                data-filter=".designing"
                              >
                                Designing
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="categories"
                                data-filter=".photography"
                              >
                                Photography
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a
                                className="categories"
                                data-filter=".development"
                              >
                                Development
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="row gallery-wrapper"
                          style={{ position: "relative", height: "604.688px" }}
                        >
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project designing development"
                            data-category="designing development"
                            style={{ position: "absolute", left: 0, top: 0 }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-1.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-1.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Glasses and laptop from above
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Ron Mackie
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        2.2K
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        1.3K
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 photography"
                            data-category="photography"
                            style={{
                              position: "absolute",
                              left: "409.5px",
                              top: 0,
                              display: "none",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-2.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-2.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Working at a coffee shop
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Nancy Martino
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        3.2K
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        1.1K
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project development"
                            data-category="development"
                            style={{
                              position: "absolute",
                              left: "405.75px",
                              top: 0,
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-3.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-3.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Photo was taken in Beach
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Elwood Arter
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        2.1K
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        1K
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project designing"
                            data-category="project designing"
                            style={{
                              position: "absolute",
                              left: "811.5px",
                              top: 0,
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-4.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-4.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Drawing a sketch
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Jason McQuaid
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        825
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        101
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project designing"
                            data-category="project designing"
                            style={{
                              position: "absolute",
                              left: "1217.25px",
                              top: 0,
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-5.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-5.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Working from home little spot
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Henry Baird
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        632
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        95
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 photography"
                            data-category="photography"
                            style={{
                              position: "absolute",
                              left: "409.5px",
                              top: "304.844px",
                              display: "none",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-6.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-6.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Project discussion with team
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Erica Kernan
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        3.4K
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        1.3k
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project designing development"
                            data-category="designing development"
                            style={{
                              position: "absolute",
                              left: 0,
                              top: "302.344px",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-7.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-7.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Sunrise above a beach
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      James Ballard
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        735
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        150
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 photography"
                            data-category="photography"
                            style={{
                              position: "absolute",
                              left: "1228.5px",
                              top: "304.844px",
                              display: "none",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-8.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-8.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Glasses and laptop from above
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Ruby Griffin
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        1.5k
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        250
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project designing development"
                            data-category="designing development"
                            style={{
                              position: "absolute",
                              left: "405.75px",
                              top: "302.344px",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-9.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-9.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Dramatic clouds at the Golden Gate Bridge
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Ron Mackie
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        2.2K
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        1.3K
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 project designing"
                            data-category="project designing"
                            style={{
                              position: "absolute",
                              left: "811.5px",
                              top: "302.344px",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-10.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-10.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Fun day at the Hill Station
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Henry Baird
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        632
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        95
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 photography"
                            data-category="photography"
                            style={{
                              position: "absolute",
                              left: 819,
                              top: "609.688px",
                              display: "none",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-11.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-11.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      Cycling in the countryside
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Nancy Martino
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        3.2K
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        1.1K
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                          <div
                            className="element-item col-xxl-3 col-xl-4 col-sm-6 photography"
                            data-category="photography"
                            style={{
                              position: "absolute",
                              left: "1228.5px",
                              top: "609.688px",
                              display: "none",
                            }}
                          >
                            <div className="gallery-box card">
                              <div className="gallery-container">
                                <a
                                  className="image-popup"
                                  href="assets/images/small/img-12.jpg"
                                  title=""
                                >
                                  <img
                                    className="gallery-img img-fluid mx-auto"
                                    src="assets/images/small/img-12.jpg"
                                    alt=""
                                  />
                                  <div className="gallery-overlay">
                                    <h5 className="overlay-caption">
                                      A mix of friends and strangers heading off
                                      to find an adventure.
                                    </h5>
                                  </div>
                                </a>
                              </div>
                              <div className="box-content">
                                <div className="d-flex align-items-center mt-1">
                                  <div className="flex-grow-1 text-muted">
                                    by{" "}
                                    <a
                                      href=""
                                      className="text-body text-truncate"
                                    >
                                      Erica Kernan
                                    </a>
                                  </div>
                                  <div className="flex-shrink-0">
                                    <div className="d-flex gap-3">
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-thumb-up-fill text-muted align-bottom me-1" />{" "}
                                        3.4K
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0 material-shadow-none"
                                      >
                                        <i className="ri-question-answer-fill text-muted align-bottom me-1" />{" "}
                                        1.3k
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col */}
                        </div>
                        {/* end row */}
                        <div className="text-center mt-2 mb-4">
                          <a
                            href="javascript:void(0);"
                            className="text-success material-shadow-none"
                          >
                            <i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2" />{" "}
                            Load More{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                  </div>
                  {/* ene card body */}
                </div>
                {/* end card */}
              </div>
              {/* end col */}
            </div>
            {/* end row */}
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6">2025 © Velzon.</div>
              <div className="col-sm-6">
                <div className="text-sm-end d-none d-sm-block">
                  Design &amp; Develop by Themesbrand
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
