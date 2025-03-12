import React, { useEffect, useState } from "react";
// import { darkLogo } from '../config/Constant'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { logoutAuth } from '../redux/crmSlices/authSlice/AuthSlice';
import { toast } from "react-toastify";
// import { lunchStartNow } from '../redux/crmSlices/attendanceSlice/AttendanceSlice';
// import CountdownTimer from '../common/CountdownTimer';
// import fractionlogo from '../image/Asset 3.png'
// import { GetNotificationList, ReadNotification, RemoveNotification } from '../redux/crmSlices/notificationSlice/NotificationSlice';
// import moment from 'moment';

const Header = () => {
  const [isFull, setIsFull] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { data, eventDetail, candidateInfo, notifyList, notifyResponse } =
    useSelector((state) => {
      return {
        eventDetail:
          state?.rootReducer?.DashboardSlice?.data?.data[0]?.upcoming_events[0],
        data: state.rootReducer.AuthSlice?.logoutData,
        candidateInfo: state.rootReducer.RoleSlice?.roleList?.data,
        notifyList: state.rootReducer.NotificationSlice?.data?.data,
        notifyResponse: state.rootReducer.NotificationSlice?.response,
      };
    });

  useEffect(() => {
    if (data?.status) {
      toast.success(data.message);
      navigate("/");
    }
  }, [data?.status]);

  useEffect(() => {
    // dispatch(GetNotificationList())
  }, [notifyResponse]);

  function fullScreen() {
    setIsFull(true);
    document.getElementById("fullPage").requestFullscreen();
  }

  function exitScreen() {
    setIsFull(false);
    document.exitFullscreen();
  }

  useEffect(() => {
    var html = document.getElementsByTagName("html");
    html[0].setAttribute("data-bs-theme", localStorage.theme);
  }, []);

  const handleLogout = () => {
    // dispatch(logoutAuth())
    navigate("/");
  };

  const changeTheme = () => {
    var html = document.getElementsByTagName("html")[0];

    if (html.getAttribute("data-bs-theme") === "dark") {
      html.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      html.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const handleScreenLock = () => {
    navigate("/lock-screen");
  };

  const handleLunchStart = () => {
    // dispatch(lunchStartNow())
    navigate("/lock-screen");
  };

  const handleClickNotification = (notify) => {
    if (notify.n_type == "/ticket/show/") {
      navigate(notify?.n_type + notify?.n_type_id);
    } else {
      navigate(notify?.n_type);
    }
    // dispatch(ReadNotification(notify?.n_id))
  };

  var todayDate = new Date().toISOString().slice(0, 10);
  return (
    <div>
      <header id="page-topbar">
        <div className="layout-width">
          <div className="navbar-header">
            {/* <div className="d-flex ">
                            <Link className="logo logo-light" to='/dashboard'>
                                <span className="logo-lg ms-5">
                                    <img src={darkLogo.image} alt="" height="60" />
                                </span>
                            </Link>
                        </div> */}

            {/* LOGO and responsive menu button */}
            <div className="d-flex ">
              <div className="navbar-brand-box horizontal-logo">
                <div className="logo logo-dark">
                  <span className="logo-lg">
                    {/* <img src={darkLogo.image} alt="" height="35" onClick={() => navigate('/dashboard')} /> */}
                  </span>
                </div>

                <div className="logo logo-light">
                  <span className="logo-sm">
                    <img
                      src="../assets/images/logo-sm.png"
                      alt=""
                      height="22"
                    />
                  </span>
                  <span className="logo-lg">
                    <img
                      src="../assets/images/logo-light.png"
                      alt=""
                      height="17"
                    />
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>

              {/* <form className="app-search d-none d-md-block">
                                <div className="position-relative">
                                    <input type="text" className="form-control" placeholder="Search..." autoComplete="off" id="search-options" defaultValue="" />
                                    <span className="mdi mdi-magnify search-widget-icon"></span>
                                    <span className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                                </div>
                            </form> */}
            </div>

            {/* center event show with timer */}
            <div className="topnav-eventCounter w-full">
              {eventDetail ? (
                eventDetail?.e_date === todayDate ? (
                  <div className="mt-2" style={{ fontFamily: "poppins" }}>
                    <div className="card-body">
                      <h5 className="card-text">
                        {/* <span className="badge badge-primary"> */}
                        <span
                          className="spinner-grow text-danger"
                          style={{ height: "1rem", width: "1rem" }}
                        >
                          {/* <span className='sr-only'>loading...</span> */}
                        </span>{" "}
                        {eventDetail?.e_title}
                        {/* </span> */}
                      </h5>
                    </div>
                  </div>
                ) : (
                  // <CountdownTimer eDate={eventDetail?.e_date} heading={eventDetail?.e_title} />
                  <div></div>
                )
              ) : null}
            </div>

            <div className="d-flex align-items-center">
              {/* lunch button */}
              <div className="ms-1 header-item d-none d-sm-flex">
                <button
                  data-bs-placement="bottom"
                  data-bs-toggle="modal"
                  data-bs-target="#lunchConfirmModal"
                  title="Lunch"
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                >
                  <i className="fs-22 bx bx-bowl-rice"></i>
                </button>
              </div>

              {/* WEB APP */}
              <div
                className="dropdown topbar-head-dropdown ms-1 header-item"
                title="Web apps"
              >
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-category-alt fs-22"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg p-0 dropdown-menu-end">
                  <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fw-semibold fs-15"> Our Apps </h6>
                      </div>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="row g-0">
                      <div className="col">
                        <div className="dropdown-icon-item">
                          <a href="https://remarkhr.com/" target="_blank">
                            <img
                              height="70px"
                              width="auto"
                              src="https://play-lh.googleusercontent.com/RRxwUReG8G8OO6wIj1gtI1_oo2z9YOgQKvDr3qwVYcGJAdhAVImQqIdNNd8gAXkWFg=w240-h480-rw"
                              alt="Remark"
                            />
                            <span>Remark</span>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="dropdown-icon-item">
                          <a href="https://visko.group/" target="_blank">
                            {/* <img height="50px" width="auto" src={fractionlogo} alt="Visko" /> */}
                            <span>Visko Group</span>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="dropdown-icon-item">
                          <a href="https://fractionrealty.in/" target="_blank">
                            {/* <img src="../assets/images/fraction_logo.png" alt="dribbble" /> */}
                            <span>fraction realty</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full screen */}
              <div
                className="ms-1 header-item d-none d-sm-flex"
                title="Full Screen"
              >
                {isFull ? (
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    onClick={() => exitScreen()}
                  >
                    <i className="bx bx-exit-fullscreen fs-22"></i>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                    onClick={() => fullScreen()}
                  >
                    <i className="bx bx-fullscreen fs-22"></i>
                  </button>
                )}
              </div>

              {/* Day night mode */}
              <div
                className="ms-1 header-item  d-sm-flex"
                title="Day/Night mode"
              >
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                  title="Day/Night mode"
                  onClick={() => changeTheme()}
                >
                  <i className="bx bx-moon fs-22"></i>
                </button>
              </div>

              {/* Notification bell */}
              <div
                className="dropdown topbar-head-dropdown ms-1 header-item"
                id="notificationDropdown"
              >
                <button
                  type="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  title="Notification"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell fs-22"></i>
                  {notifyList?.length > 0 && (
                    <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                      {notifyList?.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  )}
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown"
                >
                  <div className="dropdown-head bg-primary bg-pattern rounded-top">
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0 fs-16 fw-semibold text-white">
                            {" "}
                            Notifications{" "}
                          </h6>
                        </div>
                        {notifyList?.length > 0 && (
                          <div className="col-auto dropdown-tabs">
                            <span className="badge bg-light-subtle text-body fs-13">
                              {" "}
                              {notifyList?.length} New
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* <div className="px-2 pt-2">
                                            <ul className="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true" id="notificationItemsTab" role="tablist">
                                                <li className="nav-item waves-effect waves-light">
                                                    <a className="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab" aria-selected="true">
                                                        All (4)
                                                    </a>
                                                </li>
                                                <li className="nav-item waves-effect waves-light">
                                                    <a className="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab" aria-selected="false">
                                                        Messages
                                                    </a>
                                                </li>
                                                <li className="nav-item waves-effect waves-light">
                                                    <a className="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab" aria-selected="false">
                                                        Alerts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> */}
                  </div>
                  <div className="p-2">
                    <div
                      style={{ maxHeight: "300px" }}
                      className="pe-2 overflow-auto"
                    >
                      {/* <div id="elmLoader"></div> */}
                      {notifyList && notifyList.length > 0 ? (
                        notifyList?.map((notify, i) => {
                          return (
                            <div
                              className="text-reset notification-item d-block dropdown-item position-relative"
                              key={i}
                              onClick={() => handleClickNotification(notify)}
                            >
                              <div className="d-flex">
                                <img
                                  src={notify?.n_image}
                                  className="me-3 rounded-circle avatar-xs flex-shrink-0"
                                  alt="user-pic"
                                />
                                <div className="flex-grow-0">
                                  <div className="stretched-link text-truncate-two-lines">
                                    <h6 className="mt-0 mb-1 fs-13 fw-semibold">
                                      {notify?.n_title}
                                    </h6>
                                  </div>
                                  <div className="fs-13 text-muted text-truncate-two-lines">
                                    <p className="mb-1 ">{notify.n_body}</p>
                                  </div>
                                  <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                    {/* <span><i className="mdi mdi-clock-outline"></i> {moment(notify.n_created_at, "YYYY-MM-DD HH:mm:ss").fromNow()}</span> */}
                                  </p>
                                </div>
                                <div className="px-2 fs-15">
                                  <div className="form-check notification-check">
                                    <button type="button" className="btn ">
                                      <i className="ri-close-fill fs-4"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="empty-notification-elem">
                          <div className="w-25 w-sm-50 pt-3 mx-auto">
                            <img
                              src="assets/images/svg/bell.svg"
                              className="img-fluid"
                              alt="user-pic"
                            />
                          </div>
                          <div className="text-center pb-5 mt-2">
                            <h6 className="fs-18 fw-semibold lh-base">
                              Hey! You have no any notifications{" "}
                            </h6>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button
                  type="button"
                  className="btn"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    {candidateInfo?.e_photo ? (
                      <img
                        className="rounded-circle header-profile-user object-fit-cover"
                        src={candidateInfo?.e_photo}
                        alt="Header Avatar"
                      />
                    ) : (
                      <img
                        className="rounded-circle header-profile-user"
                        src="../assets/images/users/user-dummy-img.jpg"
                        alt="Header Avatar"
                      />
                    )}
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        {candidateInfo?.e_first_name}{" "}
                        {candidateInfo?.e_last_name}
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">
                        {candidateInfo?.r_name}
                      </span>
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <h6 className="dropdown-header">
                    Welcome {candidateInfo?.e_first_name}!
                  </h6>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      navigate(`/employee/view/${candidateInfo?.e_slug}`)
                    }
                  >
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle">Profile</span>
                  </button>
                  {/*<Link className="dropdown-item" to="#"><i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Messages</span></Link>
                                    <Link className="dropdown-item" to="#"><i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Taskboard</span></Link>
                                    <Link className="dropdown-item" to="#"><i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Help</span></Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#"><i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Balance : <b>$5971.67</b></span></Link>
                                    <Link className="dropdown-item" to="#"><span className="badge bg-success-subtle text-success mt-1 float-end">New</span><i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Settings</span></Link>
                                    <Link className="dropdown-item" to="#"><i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Lock screen</span></Link> */}
                  <button
                    className="dropdown-item"
                    onClick={() => handleLogout()}
                  >
                    <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
                    <span className="align-middle" data-key="t-logout">
                      Logout
                    </span>
                  </button>
                  {/* <button className="dropdown-item" onClick={() => handleScreenLock()} ><i className="ri-lock-line text-muted fs-16 align-middle me-1"></i> <span className="align-middle" >Screen Lock</span></button> */}
                  {/* <button className="dropdown-item" onClick={() => handleLunchStart()} ><i className="ri-cake-3-fill text-muted fs-16 align-middle me-1"></i> <span className="align-middle" >Lunch Break</span></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="page-content"
        style={{ marginBottom: "-160px", marginRight: "12px" }}
      >
        <div className="main-content">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <div className="d-flex">
                  <div
                    className=" card card-animate rounded align-items-center me-3 mb-0"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(-1)}
                    title="Back"
                  >
                    <i className="bx bxs-left-arrow-square fs-2"></i>
                  </div>
                  <div
                    className=" card card-animate rounded align-items-center mb-0"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(+1)}
                    title="Forword"
                  >
                    <i className="bx bxs-right-arrow-square fs-2 "></i>
                  </div>
                </div>
                <h4 className="mb-sm-0">
                  {location.pathname
                    .toUpperCase()
                    .split("")
                    .map((word, index) => {
                      if (index == 0) {
                        return <span key={index}>{""} </span>;
                      } else if (word == "-") {
                        return (
                          <span key={index} className="px-1">
                            {" "}
                          </span>
                        );
                      } else if (index != 0 && word == "/") {
                        return (
                          <span key={index} className="px-1">
                            {" "}
                            <i className="ri-arrow-right-s-fill"></i>
                          </span>
                        );
                      }

                      return <span key={index}>{word}</span>;
                    })}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Lunch Confirm Modal Bootstrap Modal --> */}
      <div
        className="modal fade"
        id="lunchConfirmModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Are you sure?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">You want go to lunch ?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleLunchStart()}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
