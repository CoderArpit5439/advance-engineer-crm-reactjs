import React from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
import { useNavigate } from 'react-router-dom'
import TopCards from '../../Components/TopCards'

const ListMachine = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Header  />
        <Sidebar />
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                                <h4 class="mb-sm-0">Machines</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">CRM</a></li>
                                        <li class="breadcrumb-item active">Machines</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

<TopCards/>

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card" id="machinesList">
                                <div class="card-header border-0">

                                    <div class="row g-4 align-items-center">
                                        <div class="col-sm-3">
                                            <div class="search-box">
                                                <input type="text" class="form-control search" placeholder="Search for..."/>
                                                <i class="ri-search-line search-icon"></i>
                                            </div>
                                        </div>
                                        <div class="col-sm-auto ms-auto">
                                            <div class="hstack gap-2">
                                                <button class="btn btn-soft-danger" id="remove-actions" onclick="deleteMultiple()"><i class="ri-delete-bin-2-line"></i></button>
                                                <button type="button" class="btn btn-info" data-bs-toggle="offcanvas" href="#offcanvasExample"><i class="ri-filter-3-line align-bottom me-1"></i> Fliters</button>
                                                <button type="button" class="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal"><i class="ri-add-line align-bottom me-1"></i> Add Machines</button>
                                                <span class="dropdown">
                                                    <button class="btn btn-soft-info btn-icon fs-14" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i class="ri-settings-4-line"></i>
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Copy</a></li>
                                                        <li><a class="dropdown-item" href="#">Move to pipline</a></li>
                                                        <li><a class="dropdown-item" href="#">Add to exceptions</a></li>
                                                        <li><a class="dropdown-item" href="#">Switch to common form view</a></li>
                                                        <li><a class="dropdown-item" href="#">Reset form view to default</a></li>
                                                    </ul>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div>
                                        <div class="table-responsive table-card">
                                            <table class="table align-middle" id="customerTable">
                                                <thead class="table-light">
                                                    <tr>
                                                        <th scope="col" style={{width: "50px"}}>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="checkAll" value="option"/>
                                                            </div>
                                                        </th>

                                                        <th class="sort" data-sort="name">Name</th>
                                                        <th class="sort" data-sort="company_name">Company</th>
                                                        <th class="sort" data-sort="machines_score">Machines Score</th>
                                                        <th class="sort" data-sort="phone">Phone</th>
                                                        <th class="sort" data-sort="location">Location</th>
                                                        <th class="sort" data-sort="tags">Tags</th>
                                                        <th class="sort" data-sort="date">Create Date</th>
                                                        <th class="sort" data-sort="action">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="list form-check-all"><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ10</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-10.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Tonya Noble</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Micro Design</td>
                                                        <td class="machines_score">193</td>
                                                        <td class="phone">745-321-9874</td>
                                                        <td class="location">London, UK</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Machine</span><span class="badge bg-primary-subtle text-primary me-1">Partner</span></td>
                                                        <td class="date">23 Nov, 2021</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <div onClick={() => navigate('/view-machine/3')}><i class="ri-eye-fill align-bottom text-muted"></i></div>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ9</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-9.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Thomas Taylor</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Digitech Galaxy</td>
                                                        <td class="machines_score">754</td>
                                                        <td class="phone">536-480-8536</td>
                                                        <td class="location">Windhoek, Namibia</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Machine</span></td>
                                                        <td class="date">28 Feb, 2019</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <a href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ8</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-1.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Charles Kubik</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Syntyce Solutions</td>
                                                        <td class="machines_score">236</td>
                                                        <td class="phone">231-480-8536</td>
                                                        <td class="location">Brasilia, Brazil</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Partner</span></td>
                                                        <td class="date">25 Sep, 2021</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <a href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ7</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-5.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Glen Matney</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Moetic Fashion</td>
                                                        <td class="machines_score">365</td>
                                                        <td class="phone">515-395-1069</td>
                                                        <td class="location">Berlin, Germany</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Machine</span><span class="badge bg-primary-subtle text-primary me-1">Partner</span></td>
                                                        <td class="date">19 May, 2021</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <a href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ6</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-6.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Herbert Stokes</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Zoetic Fashion</td>
                                                        <td class="machines_score">85</td>
                                                        <td class="phone">414-453-5725</td>
                                                        <td class="location">Windhoek, Namibia</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Exiting</span><span class="badge bg-primary-subtle text-primary me-1">Machine</span><span class="badge bg-primary-subtle text-primary me-1">Partner</span></td>
                                                        <td class="date">07 Jun, 2020</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <a href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ5</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-8.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Kevin Dawson</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Nesta Technologies</td>
                                                        <td class="machines_score">78</td>
                                                        <td class="phone">213-741-4294</td>
                                                        <td class="location">Bogota, Colombia</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Exiting</span></td>
                                                        <td class="date">14 Apr, 2021</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <a href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ4</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-7.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Michael Morris</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Micro Design</td>
                                                        <td class="machines_score">352</td>
                                                        <td class="phone">856-253-9927</td>
                                                        <td class="location">Damascus, Syria</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Machine</span></td>
                                                        <td class="date">19 May, 2021</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <a href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr><tr>
                                                        <th scope="row">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" name="chk_child" value="option1"/>
                                                            </div>
                                                        </th>
                                                        <td class="id" style={{display:"none"}}><a href="javascript:void(0);" class="fw-medium link-primary">#VZ3</a></td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <img src="assets/images/users/avatar-2.jpg" alt="" class="avatar-xxs rounded-circle image_src object-fit-cover"/>
                                                                </div>
                                                                <div class="flex-grow-1 ms-2 name">Nancy Martino</div>
                                                            </div>
                                                        </td>
                                                        <td class="company_name">Syntyce Solutions</td>
                                                        <td class="machines_score">159</td>
                                                        <td class="phone">786-253-9927</td>
                                                        <td class="location">London, UK</td>
                                                        <td class="tags"><span class="badge bg-primary-subtle text-primary me-1">Machine</span><span class="badge bg-primary-subtle text-primary me-1">Partner</span></td>
                                                        <td class="date">02 Jan, 2022</td>
                                                        <td>
                                                            <ul class="list-inline hstack gap-2 mb-0">
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Call" data-bs-original-title="Call">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-phone-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Message" data-bs-original-title="Message">
                                                                    <a href="javascript:void(0);" class="text-muted d-inline-block">
                                                                        <i class="ri-question-answer-line fs-16"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="View" data-bs-original-title="View">
                                                                    <a href="javascript:void(0);"><i class="ri-eye-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit">
                                                                    <a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-muted"></i></a>
                                                                </li>
                                                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                                                                    <a class="remove-item-btn" data-bs-toggle="modal" href="#deleteRecordModal">
                                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr></tbody>
                                            </table>
                                            <div class="noresult" style={{display: "none"}}>
                                                <div class="text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style={{width:"75px",height:"75px"}}></lord-icon>
                                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                                    <p class="text-muted mb-0">We've searched more than 150+ machines We did not find any machines for you search.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end mt-3">
                                            <div class="pagination-wrap hstack gap-2" style={{display: "flex"}}>
                                                <a class="page-item pagination-prev disabled" href="#">
                                                    Previous
                                                </a>
                                                <ul class="pagination listjs-pagination mb-0"><li class="active"><a class="page" href="#" data-i="1" data-page="8">1</a></li><li><a class="page" href="#" data-i="2" data-page="8">2</a></li></ul>
                                                <a class="page-item pagination-next" href="#">
                                                    Next
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal fade" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: "none"}}>
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header bg-light p-3">
                                                    <h5 class="modal-title" id="exampleModalLabel">Add Machine</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
                                                </div>
                                                <form class="tablelist-form" autocomplete="off">
                                                    <div class="modal-body">
                                                        <input type="hidden" id="id-field"/>
                                                        <div class="row g-3">
                                                            <div class="col-lg-12">
                                                                <div class="text-center">
                                                                    <div class="position-relative d-inline-block">
                                                                        <div class="position-absolute bottom-0 end-0">
                                                                            <label for="machine-image-input" class="mb-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Select Image" data-bs-original-title="Select Image">
                                                                                <div class="avatar-xs cursor-pointer">
                                                                                    <div class="avatar-title bg-light border rounded-circle text-muted">
                                                                                        <i class="ri-image-fill"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </label>
                                                                            <input class="form-control d-none" value="" id="machine-image-input" type="file" accept="image/png, image/gif, image/jpeg"/>
                                                                        </div>
                                                                        <div class="avatar-lg p-1">
                                                                            <div class="avatar-title bg-light rounded-circle">
                                                                                <img src="assets/images/users/user-dummy-img.jpg" id="machine-img" class="avatar-md rounded-circle object-fit-cover"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h5 class="fs-13 mt-3">Machine Image</h5>
                                                                </div>
                                                                <div>
                                                                    <label for="machinename-field" class="form-label">Name</label>
                                                                    <input type="text" id="machinename-field" class="form-control" placeholder="Enter Name" required=""/>
                                                                </div>
                                                            </div>
                                                          
                                                            <div class="col-lg-12">
                                                                <div>
                                                                    <label for="company_name-field" class="form-label">Company Name</label>
                                                                    <input type="text" id="company_name-field" class="form-control" placeholder="Enter company name" required=""/>
                                                                </div>
                                                            </div>
                                                          
                                                            <div class="col-lg-6">
                                                                <div>
                                                                    <label for="machines_score-field" class="form-label">Machines Score</label>
                                                                    <input type="text" id="machines_score-field" class="form-control" placeholder="Enter machine score" required=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-6">
                                                                <div>
                                                                    <label for="phone-field" class="form-label">Phone</label>
                                                                    <input type="text" id="phone-field" class="form-control" placeholder="Enter phone no" required=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div>
                                                                    <label for="location-field" class="form-label">Location</label>
                                                                    <input type="text" id="location-field" class="form-control" placeholder="Enter location" required=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div>
                                                                    <label for="taginput-choices" class="form-label">Tags</label>
                                                                     
                                                                            <select class="form-control choices__input" name="taginput-choices" id="taginput-choices" multiple="" hidden="" tabindex="-1" data-choice="active">
                                                                        <option value="Machine">Machine</option>
                                                                        <option value="Partner">Partner</option>
                                                                        <option value="Exiting">Exiting</option>
                                                                        <option value="Long-term">Long-term</option>
                                                                    </select>
                                                                
                                                               
                                                            </div>
                                                            <div class="col-lg-12">
                                                                <div>
                                                                    <label for="date-field" class="form-label">Created Date</label>
                                                                    <input type="text" id="date-field" class="form-control flatpickr-input" data-provider="flatpickr" data-date-format="d M, Y" placeholder="Select Date" required="" readonly="readonly"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer" style={{display: "block"}}>
                                                        <div class="hstack gap-2 justify-content-end">
                                                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" class="btn btn-success" id="add-btn">Add Machine</button>
                                                
                                                        </div>
                                                    </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade zoomIn" id="deleteRecordModal" tabindex="-1" aria-labelledby="deleteRecordLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close"></button>
                                                </div>
                                                <div class="modal-body p-5 text-center">
                                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#405189,secondary:#f06548" style={{width:"90px",height:"90px"}}></lord-icon>
                                                    <div class="mt-4 text-center">
                                                        <h4 class="fs-semibold">You are about to delete a machine ?</h4>
                                                        <p class="text-muted fs-14 mb-4 pt-1">Deleting your machine will remove all of your information from our database.</p>
                                                        <div class="hstack gap-2 justify-content-center remove">

                                                            <button class="btn btn-link link-success fw-medium text-decoration-none material-shadow-none" id="deleteRecord-close" data-bs-dismiss="modal"><i class="ri-close-line me-1 align-middle"></i> Close</button>
                                                            <button class="btn btn-danger" id="delete-record">Yes, Delete It!!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                        <div class="offcanvas-header bg-light">
                                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Machines Fliters</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <form action="" class="d-flex flex-column justify-content-end h-100">
                                            <div class="offcanvas-body">
                                                <div class="mb-4">
                                                    <label for="datepicker-range" class="form-label text-muted text-uppercase fw-semibold mb-3">Date</label>
                                                    <input type="text" class="form-control flatpickr-input" id="datepicker-range" data-provider="flatpickr" data-range="true" placeholder="Select date" readonly="readonly"/>
                                                </div>
                                                <div class="mb-4">
                                                    <label for="country-select" class="form-label text-muted text-uppercase fw-semibold mb-3">Country</label>
                                                    <select class="form-control choices__input" data-choices="" data-choices-multiple-remove="true" name="country-select" id="country-select" multiple="" hidden="" tabindex="-1" data-choice="active">
                                                        <option value="">Select country</option>
                                                        <option value="Argentina">Argentina</option>
                                                        <option value="Belgium">Belgium</option>
                                                        <option value="Brazil" selected="">Brazil</option>
                                                        <option value="Colombia">Colombia</option>
                                                        <option value="Denmark">Denmark</option>
                                                        <option value="France">France</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Mexico">Mexico</option>
                                                        <option value="Russia">Russia</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="Syria">Syria</option>
                                                        <option value="United Kingdom" selected="">United Kingdom</option>
                                                        <option value="United States of America">United States of America</option>
                                                    </select>
                                                    
                                                </div>
                                                <div class="mb-4">
                                                    <label for="status-select" class="form-label text-muted text-uppercase fw-semibold mb-3">Status</label>
                                                    <div class="row g-2">
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                                                <label class="form-check-label" for="inlineCheckbox1">New Machines</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                                                <label class="form-check-label" for="inlineCheckbox2">Old Machines</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                                                                <label class="form-check-label" for="inlineCheckbox3">Loss Machines</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4"/>
                                                                <label class="form-check-label" for="inlineCheckbox4">Follow Up</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <label for="machinescore" class="form-label text-muted text-uppercase fw-semibold mb-3">Machine Score</label>
                                                    <div class="row g-2 align-items-center">
                                                        <div class="col-lg">
                                                            <input type="number" class="form-control" id="machinescore" placeholder="0"/>
                                                        </div>
                                                        <div class="col-lg-auto">
                                                            To
                                                        </div>
                                                        <div class="col-lg">
                                                            <input type="number" class="form-control" id="machinescore" placeholder="0"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label for="machines-tags" class="form-label text-muted text-uppercase fw-semibold mb-3">Tags</label>
                                                    <div class="row g-3">
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="marketing" value="marketing"/>
                                                                <label class="form-check-label" for="marketing">Marketing</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="management" value="management"/>
                                                                <label class="form-check-label" for="management">Management</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="business" value="business"/>
                                                                <label class="form-check-label" for="business">Business</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="investing" value="investing"/>
                                                                <label class="form-check-label" for="investing">Investing</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="partner" value="partner"/>
                                                                <label class="form-check-label" for="partner">Partner</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="machine" value="machine"/>
                                                                <label class="form-check-label" for="machine">Machines</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="sale" value="sale"/>
                                                                <label class="form-check-label" for="sale">Sale</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="owner" value="owner"/>
                                                                <label class="form-check-label" for="owner">Owner</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="banking" value="banking"/>
                                                                <label class="form-check-label" for="banking">Banking</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="banking" value="banking"/>
                                                                <label class="form-check-label" for="banking">Exiting</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="banking" value="banking"/>
                                                                <label class="form-check-label" for="banking">Finance</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox" id="banking" value="banking"/>
                                                                <label class="form-check-label" for="banking">Fashion</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="offcanvas-footer border-top p-3 text-center hstack gap-2">
                                                <button class="btn btn-light w-100">Clear Filter</button>
                                                <button type="submit" class="btn btn-success w-100">Filters</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
   
        </div>
        <Footer  />
    </div>
  )
}

export default ListMachine