import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'

const Task = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div class="content-wrapper" style={{ minHeight: "1348px" }}>
                <section class="content-header">
                    <div class="header-icon">
                        <i class="fa fa-bar-chart-o"></i>
                    </div>
                    <div class="header-title">
                        <h1>Running Tasks</h1>
                        <small>Running Tasks details</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        {/* <div class="col-sm-12 col-md-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="AF885CAXfK">
                     <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="AF885CAXfK" data-index="0">
                        <div class="panel-heading ui-sortable-handle">
                           <div class="panel-title" style={{maxWidth: "calc(100% - 90px)"}}>
                              <h4>Running Tasks Duration</h4>
                           </div>
                        <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                        <div class="panel-body text-center">
                           <h4 class="timing">05 Hours, 30 Minutes, 00 Seconds</h4>
                        </div>
                     </div>
                  </div> */}
                        <div class="col-sm-12 col-md-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="46GQlTxy57">
                            <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="46GQlTxy57" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonexport">
                                        <a href="#">
                                            <h4>Add Admin</h4>
                                        </a>
                                    </div>
                                    <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                                <div class="panel-body">
                                    <div class="btn-group">
                                        <div class="buttonexport">
                                            <a href="#" class="btn btn-add" data-toggle="modal" data-target="#addtask"><i class="fa fa-plus"></i> Add Users</a>
                                        </div>
                                        <button class="btn btn-exp btn-sm dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars"></i> Export Table Data</button>
                                        <ul class="dropdown-menu exp-drop" role="menu">
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false'});">
                                                    <img src="assets/dist/img/json.png" width="24" alt="logo" /> JSON</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]'});">
                                                    <img src="assets/dist/img/json.png" width="24" alt="logo" /> JSON (ignoreColumn)</a>
                                            </li>
                                            <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'true'});">
                                                <img src="assets/dist/img/json.png" width="24" alt="logo" /> JSON (with Escape)</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'xml',escape:'false'});">
                                                <img src="assets/dist/img/xml.png" width="24" alt="logo" /> XML</a>
                                            </li>
                                            <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'sql'});">
                                                <img src="assets/dist/img/sql.png" width="24" alt="logo" /> SQL</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'csv',escape:'false'});">
                                                    <img src="assets/dist/img/csv.png" width="24" alt="logo" /> CSV</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'txt',escape:'false'});">
                                                    <img src="assets/dist/img/txt.png" width="24" alt="logo" /> TXT</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'excel',escape:'false'});">
                                                    <img src="assets/dist/img/xls.png" width="24" alt="logo" /> XLS</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'doc',escape:'false'});">
                                                    <img src="assets/dist/img/word.png" width="24" alt="logo" /> Word</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'powerpoint',escape:'false'});">
                                                    <img src="assets/dist/img/ppt.png" width="24" alt="logo" /> PowerPoint</a>
                                            </li>
                                            <li class="divider"></li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'png',escape:'false'});">
                                                    <img src="assets/dist/img/png.png" width="24" alt="logo" /> PNG</a>
                                            </li>
                                            <li>
                                                <a href="#" onclick="$('#dataTableExample1').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});">
                                                    <img src="assets/dist/img/pdf.png" width="24" alt="logo" /> PDF</a>
                                            </li>
                                        </ul>
                                        {/* <div style={{display:"flex"}}>
                                            <select className='form-control' style={{marginLeft:"2px",marginRight:"2px"}}>
                                                <option value="all">Active</option>
                                            </select>
                                            <select className='form-control' style={{marginLeft:"2px",marginRight:"2px"}}>
                                                <option value="all">Fin Year</option>
                                            </select>
                                            <select className='form-control' style={{marginLeft:"2px",marginRight:"2px"}}>
                                                <option value="all">2023 - 2024</option>
                                            </select>
                                            <select className='form-control' style={{marginLeft:"2px",marginRight:"2px"}}>
                                                <option value="all">Select source</option>
                                            </select>
                                        </div> */}
                                    </div>

                                    <div class="table-responsive">
                                        <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                                            <thead>
                                                <tr class="info">
                                                    <th>Task Name</th>
                                                    <th>Due date</th>
                                                    <th>Description</th>
                                                    <th>Assign to</th>
                                                    <th>status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>networking</td>
                                                    <td>01/05/2017</td>
                                                    <td>Lan,wifi config</td>
                                                    <td>Smith</td>
                                                    <td>
                                                        <span class="label-custom label label-default">submit</span>
                                                    </td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-xs" data-toggle="modal" data-target="#update"><i class="fa fa-pencil"></i></button>
                                                        <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#delt"><i class="fa fa-trash-o"></i> </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Accounts</td>
                                                    <td>01/05/2017</td>
                                                    <td>Financial supports</td>
                                                    <td>lon jacob</td>
                                                    <td>
                                                        <span class="label-warning label label-default">waitnng</span>
                                                    </td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-xs" data-toggle="modal" data-target="#update"><i class="fa fa-pencil"></i></button>
                                                        <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#delt"><i class="fa fa-trash-o"></i> </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="addtask" tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-plus m-r-5"></i> add new task</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form class="form-horizontal">
                                                <fieldset>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Task Name</label>
                                                        <input type="text" placeholder="Task Name" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Due date</label>
                                                        <input type="number" placeholder="Due title" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Description</label>
                                                        <input type="text" placeholder="Description" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Assign to</label>
                                                        <input type="text" placeholder="Assign to" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">status</label>
                                                        <input type="text" placeholder="status" class="form-control" />
                                                    </div>
                                                    <div class="col-md-12 form-group user-form-group">
                                                        <div class="pull-right">
                                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                                            <button type="submit" class="btn btn-add btn-sm">Update</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="update" tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-plus m-r-5"></i> Update Info</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form class="form-horizontal">
                                                <fieldset>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Task Name</label>
                                                        <input type="text" placeholder="Task Name" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Due date</label>
                                                        <input type="number" placeholder="Due title" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Description</label>
                                                        <input type="text" placeholder="Description" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Assign to</label>
                                                        <input type="text" placeholder="Assign to" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">status</label>
                                                        <input type="text" placeholder="status" class="form-control" />
                                                    </div>
                                                    <div class="col-md-12 form-group user-form-group">
                                                        <div class="pull-right">
                                                            <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                                                            <button type="submit" class="btn btn-add btn-sm">Update</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="delt" tabindex="-1" role="dialog">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i> Delete task</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form class="form-horizontal">
                                                <fieldset>
                                                    <div class="col-md-12 form-group user-form-group">
                                                        <label class="control-label">Delete task</label>
                                                        <div class="pull-right">
                                                            <button type="button" class="btn btn-danger btn-sm">NO</button>
                                                            <button type="submit" class="btn btn-success btn-sm">YES</button>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />

        </>
    )
}

export default Task