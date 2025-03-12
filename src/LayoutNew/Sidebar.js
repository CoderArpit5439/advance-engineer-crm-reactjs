import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { darkLogo } from '../config/Constant'
import { RouteList } from './RouteList'
import RecentActivity from '../common/RecentActivity'
import { useDispatch, useSelector } from 'react-redux'
import { approvedRole } from '../redux/crmSlices/roleSlice/RoleSlice'
import { Fragment } from 'react'



const Sidebar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [roleAccess, setRoleAccess] = useState()
    const { handleRecentActivity } = RecentActivity();
    // let isPath = Object.keys(access?.r_access);

    const { roleList, response } = useSelector((state) => {
        return {
            roleList: state.rootReducer.RoleSlice?.roleList,
            response: state.rootReducer.RoleSlice?.response
        }
    })

    useEffect(() => {
        dispatch(approvedRole())
    }, [response])

    useEffect(() => {
        if (roleList?.status === "success")
            setRoleAccess(roleList?.data?.r_access)
    }, [roleList])

    return (
        <div>
            <div className="app-menu navbar-menu " style={{ borderRight: "0px", overflowY: "auto", fontFamily: "poppins" }}>
                <div className="navbar-brand-box ">
                    {/* <Link className="logo logo-dark" to='/dashboard'>
                        <span className="logo-lg">
                            <img src={darkLogo.image} alt="" height="40" />
                        </span>
                        <span className="logo-sm">
                            <img src={darkLogo.image} alt="" height="40" />
                        </span>
                    </Link> */}
                    <Link className="logo logo-light mt-2 " to='/dashboard'>
                        <span className="logo-lg">
                            <img className="rounded avatar-md" alt="200x200" src={darkLogo.image} />
                            {/* <img src={darkLogo.image} alt="" height="60" /> */}
                        </span>
                    </Link>
                    <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                        <i className="ri-record-circle-line"></i>
                    </button>
                </div>
                <div id="scrollbar" data-simplebar='init' style={{ fontFamily: "poppins" }}>
                    <div className="container-fluid">
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="menu-title"><span data-key="t-menu">Menu</span></li>

                            <li className="nav-item">
                                {
                                    RouteList.map(route => {
                                        var accessKeys = [];
                                        if (roleAccess) {
                                            const accessObject = JSON.parse(roleAccess);
                                            accessKeys = Object.entries(accessObject)
                                                .filter(([key, value]) => value === "1")
                                                .map(([key]) => key);
                                        }
                                        return accessKeys?.map((path,i) => {
                                            if (path == route.keys) {
                                                return (
                                                    <>
                                                     <Fragment key={i}> 
                                {route.title !== "Project"
                                                            ?
                                                            <Link 
                                                                className={`${location.pathname.includes(`${route.path}`) ? "nav-link menu-link active" : "nav-link menu-link"}`}
                                                                onClick={() => handleRecentActivity(route.title, "1", "2")}
                                                                to={route.path}
                                                            >
                                                                <i className={route.icon + " "}></i><span style={{ fontFamily: "poppins" }}>{route.title}</span>
                                                            </Link>
                                                            :
                                                            roleList?.data?.e_project_show !== '[]' &&
                                                            <>
                                                                <Link
                                                                    className={`${location.pathname.includes(route.path) ? "nav-link menu-link active" : "nav-link menu-link"}`}
                                                                    onClick={() => handleRecentActivity(route.title, "1", "2")}
                                                                    to={route.path}
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#projectTable"
                                                                    role="button"
                                                                    aria-expanded="false"
                                                                    aria-controls="projectTable"
                                                                >
                                                                    <i className={route.icon}></i>
                                                                    <span style={{ fontFamily: "poppins" }}>{route.title}</span>
                                                                </Link>
                                                                <div className="menu-dropdown collapse" id="projectTable">
                                                                    <ul className="nav nav-sm flex-column">
                                                                        {
                                                                            roleList?.data?.e_project_show && JSON.parse(roleList?.data?.e_project_show)?.map((proId, i) => {
                                                                                return (
                                                                                    <div key={i}>
                                                                                        {proId === "1" ?
                                                                                            <li className="nav-item">
                                                                                                <Link to="/project/remark-page" className={`${location.pathname.includes("/project/remark-page") ? "nav-link active" : "nav-link"}`} >Remark CRM</Link>
                                                                                            </li>
                                                                                            :
                                                                                            proId === "2" ?
                                                                                                <li className="nav-item">
                                                                                                    <Link to="/project/humming-page" className={`${location.pathname.includes("/project/humming-page") ? "nav-link active" : "nav-link"}`} >Humming bird</Link>
                                                                                                </li>
                                                                                                :
                                                                                                proId === "3" ?
                                                                                                    <li className="nav-item">
                                                                                                        <Link to="/project/fraction-page" className={`${location.pathname.includes("/project/fraction-page") ? "nav-link active" : "nav-link"}`} >Fraction Realty</Link>
                                                                                                    </li>
                                                                                                    :
                                                                                                    proId === "4" ?
                                                                                                        <li className="nav-item">
                                                                                                            <Link to="/project/prashadam-page" className={`${location.pathname.includes("/project/prashadam-page") ? "nav-link active" : "nav-link"}`} >prashadam</Link>
                                                                                                        </li>
                                                                                                        :
                                                                                                        null
                                                                                        }

                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        }
                                                  </Fragment>  </>
                                                )

                                            }
                                        })
                                    })
                                }


                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-background"></div>
            </div>

            {/* -----> for mobile */}

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <Link className="logo logo-light" to='/dashboard'>
                        <span className="logo-sm" style={{ position: "relative", left: "100%" }} >
                            <img src={darkLogo.image} alt="" height="40" />
                        </span>
                    </Link>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div id="scrollbar">
                        <div className="container-fluid">
                            <div id="two-column-menu">
                            </div>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="menu-title" style={{ fontSize: '11px' }}><span data-key="t-menu">Menu</span></li>
                                <li className="nav-item " style={{ fontSize: "0.9rem", paddingLeft: '20px' }}>
                                    {RouteList?.map((route) => {
                                        var accessKeys = [];
                                        if (roleAccess) {
                                            const accessObject = JSON.parse(roleAccess);
                                            accessKeys = Object.entries(accessObject)
                                                .filter(([key, value]) => value === "1")
                                                .map(([key]) => key);
                                        }
                                        return accessKeys?.map((path,ind) => {
                                            if (path == route.keys) {
                                                return (
                                                    <>
                                                    <Fragment key={ind}>
                                                        {route.title !== "Project" ?
                                                            <Link
                                                                className={`${location.pathname.includes(`${route.path}`) ? "nav-link active" : "nav-link"}`}
                                                                aria-label="Close"
                                                                data-bs-dismiss="offcanvas"
                                                                onClick={() => navigate(route.path)}
                                                            >
                                                                <i className={route.icon}></i> <span style={{ marginLeft: "10px" }}>{route.title}</span>
                                                            </Link>
                                                            :
                                                            <>
                                                                <Link
                                                                    className={`${location.pathname.includes(route.path) ? "nav-link active" : "nav-link"}`}
                                                                    onClick={() => handleRecentActivity(route.title, "1", "2")}
                                                                    to={route.path}
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target="#projectTable"
                                                                    role="button"
                                                                    aria-expanded="false"
                                                                    aria-controls="projectTable"
                                                                >
                                                                    <div className="d-flex justify-content-between">
                                                                        <div>

                                                                            <i className={route.icon}> </i>
                                                                            <span className="ms-2" style={{ fontFamily: "poppins" }}> {route.title}</span>
                                                                        </div>
                                                                        <i className="ri-arrow-down-s-line"> </i>
                                                                    </div>
                                                                </Link>
                                                                <div className="menu-dropdown collapse" id="projectTable">
                                                                    <ul className="nav nav-sm flex-column">
                                                                        <li className="nav-item">
                                                                            <Link
                                                                                data-bs-dismiss="offcanvas"
                                                                                onClick={() => navigate("/project/remark-page")}
                                                                                className={`${location.pathname.includes("/project/remark-page") ? "nav-link active" : "nav-link"}`}
                                                                            >Remark CRM</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link
                                                                                data-bs-dismiss="offcanvas"
                                                                                onClick={() => navigate("/project/fraction-page")}
                                                                                className={`${location.pathname.includes("/project/fraction-page") ? "nav-link active" : "nav-link"}`}
                                                                            >Fraction Realty</Link>
                                                                        </li>
                                                                        <li className="nav-item">
                                                                            <Link
                                                                                data-bs-dismiss="offcanvas"
                                                                                onClick={() => navigate("/project/prashadam-page")}

                                                                                className={`${location.pathname.includes("/project/prashadam-page") ? "nav-link active" : "nav-link"}`}
                                                                            >Prashadam</Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </>
                                                        }
                                                    </Fragment></>
                                                )
                                            }
                                        })
                                    })}
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="sidebar-background"></div>

                </div>
            </div>
            <div className="vertical-overlay"></div>
        </div>
    )
}

export default Sidebar