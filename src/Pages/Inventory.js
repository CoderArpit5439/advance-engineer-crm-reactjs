import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'

const Inventory = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div class="content-wrapper" style={{ minHeight: "1276px" }}>
        <section class="content-header">
          <div class="header-icon">
            <i class="fa fa-users"></i>
          </div>
          <div class="header-title">
            <h1>Inventory</h1>
            <small>Inventory List</small>
          </div>
        </section>
        <section class="content">
          <div class="row">
            <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="2IPS3ijJzo">
              <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="2IPS3ijJzo" data-index="0">
                <div class="panel-heading ui-sortable-handle">
                  <div class="btn-group" id="buttonexport">
                    <a href="#">
                      <h4>Inventory</h4>
                    </a>
                  </div>
                  <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                <div class="panel-body">
                  <div class="btn-group">
                    <div class="buttonexport" id="buttonlist">
                      <a class="btn btn-add" data-toggle="modal" data-target="#Inventory3" > <i class="fa fa-plus"></i> Add Inventory
                      </a>
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
                  </div>
                  <div class="table-responsive">
                    <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                      <thead>
                        <tr class="info">
                          <th>Inventory Name</th>
                          <th>Code</th>
                          <th>Category</th>
                          <th>Qty</th>
                          <th>Rate</th>
                          <th>Value</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Lenovo</td>
                          <td>lenovo20</td>
                          <td>Electronic/mechines</td>
                          <td>150 no.s</td>
                          <td>₹ 50,000.00</td>
                          <td>₹ 75,00,000.00</td>
                          <td>
                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#Inventory1"><i class="fa fa-pencil"></i></button>
                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#Inventory2"><i class="fa fa-trash-o"></i> </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Computer</td>
                          <td>computer40</td>
                          <td>Electronic/mechines</td>
                          <td>5 no.s</td>
                          <td>₹ 26,400.00</td>
                          <td>₹ 1,32,000.00</td>
                          <td>
                            <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#Inventory1"><i class="fa fa-pencil"></i></button>
                            <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#Inventory2"><i class="fa fa-trash-o"></i> </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="Inventory1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header modal-header-primary">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h3><i class="fa fa-user m-r-5"></i> Update Inventory</h3>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form class="form-horizontal">
                        <fieldset>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Inventory Name:</label>
                            <input type="text" placeholder="Inventory Name" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Code:</label>
                            <input type="text" placeholder="Code" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Category</label>
                            <input type="text" placeholder="Category" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Qty</label><br></br>
                            <input type="number" placeholder="Quantity" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Rate</label><br></br>
                            <input type="number" placeholder="Rate" class="form-control" />
                          </div>

                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-add pull-right">Save</button>
                  <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div class="modal fade" id="Inventory2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header modal-header-primary">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h3><i class="fa fa-user m-r-5"></i> Delete Customer</h3>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form class="form-horizontal">
                        <fieldset>
                          <div class="col-md-12 form-group user-form-group">
                            <label class="control-label">Delete Inventory</label>
                            <div class="pull-right">
                              <button type="button" class="btn btn-danger btn-sm">NO</button>
                              <button type="submit" class="btn btn-add btn-sm">YES</button>
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
          <div class="modal fade" id="Inventory3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header modal-header-primary">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h3><i class="fa fa-user m-r-5"></i> Add Inventory</h3>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form class="form-horizontal">
                        <fieldset>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Inventory Name:</label>
                            <input type="text" placeholder="Inventory Name" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Code:</label>
                            <input type="text" placeholder="Code" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Category</label>
                            <input type="text" placeholder="Category" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Qty</label><br></br>
                            <input type="number" placeholder="Quantity" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Rate</label><br></br>
                            <input type="number" placeholder="Rate" class="form-control" />
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-add pull-right">Save</button>
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

export default Inventory