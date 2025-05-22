import React from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";

const CalendarEvent = () => {
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
                                    <h4 class="mb-sm-0">Calendar</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
                                            <li class="breadcrumb-item active">Calendar</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-xl-3">
                                        <div class="card card-h-100">
                                            <div class="card-body">
                                                <button class="btn btn-primary w-100" id="btn-new-event"><i class="mdi mdi-plus"></i> Create New Event</button>

                                                <div id="external-events">
                                                    <br></br>
                                                    <p class="text-muted">Drag and drop your event or click in the calendar</p>
                                                    <div class="external-event fc-event bg-success-subtle text-success" data-class="bg-success-subtle">
                                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>New Event Planning
                                                    </div>
                                                    <div class="external-event fc-event bg-info-subtle text-info" data-class="bg-info-subtle">
                                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>Meeting
                                                    </div>
                                                    <div class="external-event fc-event bg-warning-subtle text-warning" data-class="bg-warning-subtle">
                                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>Generating Reports
                                                    </div>
                                                    <div class="external-event fc-event bg-danger-subtle text-danger" data-class="bg-danger-subtle">
                                                        <i class="mdi mdi-checkbox-blank-circle me-2"></i>Create New theme
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="card">
                                            <div class="card-body bg-info-subtle">
                                                <div class="d-flex">
                                                    <div class="flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar text-info icon-dual-info"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    </div>
                                                    <div class="flex-grow-1 ms-3">
                                                        <h6 class="fs-15">Welcome to your Calendar!</h6>
                                                        <p class="text-muted mb-0">Event that applications book will appear here. Click on an event to see the details and manage applicants event.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-xl-9">
                                        <div class="card card-h-100">
                                            <div class="card-body">

                                                <FullCalendar
                                                    plugins={[
                                                        dayGridPlugin,
                                                        interactionPlugin,
                                                        listPlugin,
                                                        multiMonthPlugin,
                                                    ]}
                                                    headerToolbar={{
                                                        left: "prev,next today",
                                                        center: "title",
                                                        right: "dayGridMonth,dayGridWeek,multiMonthYear,listMonth",
                                                    }}
                                                    initialView="dayGridMonth"
                                                    editable={true}
                                                    selectable={true}
                                                    selectMirror={true}
                                                    dayMaxEvents={true}
                                                    weekends={true}
                                                    longPressDelay={1}
                                                    height={750}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ clear: "both" }}></div>

                                <div class="modal fade" id="event-modal" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content border-0">
                                            <div class="modal-header p-3 bg-info-subtle">
                                                <h5 class="modal-title" id="modal-title">Event</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
                                            </div>
                                            <div class="modal-body p-4">
                                                <form class="needs-validation" name="event-form" id="form-event" novalidate="">
                                                    <div class="text-end">
                                                        <a href="#" class="btn btn-sm btn-soft-primary" id="edit-event-btn" data-id="edit-event" onclick="editEvent(this)" role="button">Edit</a>
                                                    </div>
                                                    <div class="event-details">
                                                        <div class="d-flex mb-2">
                                                            <div class="flex-grow-1 d-flex align-items-center">
                                                                <div class="flex-shrink-0 me-3">
                                                                    <i class="ri-calendar-event-line text-muted fs-16"></i>
                                                                </div>
                                                                <div class="flex-grow-1">
                                                                    <h6 class="d-block fw-semibold mb-0" id="event-start-date-tag"></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="flex-shrink-0 me-3">
                                                                <i class="ri-time-line text-muted fs-16"></i>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="d-block fw-semibold mb-0"><span id="event-timepicker1-tag"></span> - <span id="event-timepicker2-tag"></span></h6>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center mb-2">
                                                            <div class="flex-shrink-0 me-3">
                                                                <i class="ri-map-pin-line text-muted fs-16"></i>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <h6 class="d-block fw-semibold mb-0"> <span id="event-location-tag"></span></h6>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex mb-3">
                                                            <div class="flex-shrink-0 me-3">
                                                                <i class="ri-discuss-line text-muted fs-16"></i>
                                                            </div>
                                                            <div class="flex-grow-1">
                                                                <p class="d-block text-muted mb-0" id="event-description-tag"></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row event-form">
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">Type</label>
                                                                <div class="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true" aria-expanded="false"><div class="choices__inner"><select class="form-select d-none choices__input" name="category" id="event-category" required="" hidden="" tabindex="-1" data-choice="active">
                                                                    <option value="bg-danger-subtle" selected="">Danger</option>
                                                                    <option value="bg-success-subtle">Success</option>
                                                                    <option value="bg-primary-subtle">Primary</option>
                                                                    <option value="bg-info-subtle">Info</option>
                                                                    <option value="bg-dark-subtle">Dark</option>
                                                                    <option value="bg-warning-subtle">Warning</option>
                                                                </select><div class="choices__list choices__list--single"><div class="choices__item choices__item--selectable" data-item="" data-id="1" data-value="bg-danger-subtle" aria-selected="true" role="option">Danger</div></div></div><div class="choices__list choices__list--dropdown" aria-expanded="false"><div class="choices__list" role="listbox"><div id="choices--event-category-item-choice-1" class="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="bg-danger-subtle" data-select-text="Press to select" data-choice-selectable="" aria-selected="true">Danger</div><div id="choices--event-category-item-choice-5" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="bg-dark-subtle" data-select-text="Press to select" data-choice-selectable="">Dark</div><div id="choices--event-category-item-choice-4" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="bg-info-subtle" data-select-text="Press to select" data-choice-selectable="">Info</div><div id="choices--event-category-item-choice-3" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="bg-primary-subtle" data-select-text="Press to select" data-choice-selectable="">Primary</div><div id="choices--event-category-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="bg-success-subtle" data-select-text="Press to select" data-choice-selectable="">Success</div><div id="choices--event-category-item-choice-6" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="6" data-value="bg-warning-subtle" data-select-text="Press to select" data-choice-selectable="">Warning</div></div></div></div>
                                                                <div class="invalid-feedback">Please select a valid event category</div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">Event Name</label>
                                                                <input class="form-control d-none" placeholder="Enter event name" type="text" name="title" id="event-title" required="" value="" />
                                                                <div class="invalid-feedback">Please provide a valid event name</div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <label>Event Date</label>
                                                                <div class="input-group d-none">
                                                                    <input type="text" id="event-start-date" class="form-control flatpickr flatpickr-input" placeholder="Select date" readonly="readonly" required="" />
                                                                    <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12" id="event-time">
                                                            <div class="row">
                                                                <div class="col-6">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">Start Time</label>
                                                                        <div class="input-group d-none">
                                                                            <input id="timepicker1" type="text" class="form-control flatpickr flatpickr-input" placeholder="Select start time" readonly="readonly" />
                                                                            <span class="input-group-text"><i class="ri-time-line"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="mb-3">
                                                                        <label class="form-label">End Time</label>
                                                                        <div class="input-group d-none">
                                                                            <input id="timepicker2" type="text" class="form-control flatpickr flatpickr-input" placeholder="Select end time" readonly="readonly" />
                                                                            <span class="input-group-text"><i class="ri-time-line"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <label for="event-location">Location</label>
                                                                <div>
                                                                    <input type="text" class="form-control d-none" name="event-location" id="event-location" placeholder="Event location" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" id="eventid" name="eventid" value="" />
                                                        <div class="col-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">Description</label>
                                                                <textarea class="form-control d-none" id="event-description" placeholder="Enter a description" rows="3" spellcheck="false"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="hstack gap-2 justify-content-end">
                                                        <button type="button" class="btn btn-soft-danger" id="btn-delete-event"><i class="ri-close-line align-bottom"></i> Delete</button>
                                                        <button type="submit" class="btn btn-success" id="btn-save-event">Add Event</button>
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
            </div>
            <Footer />
        </div>
    )
}

export default CalendarEvent