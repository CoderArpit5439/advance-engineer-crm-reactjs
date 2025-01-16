import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'

const Manufacturing = () => {
  return (
    <>
      <>
        <Header />
        <Sidebar />
        <div class="content-wrapper" style={{ minHeight: "1276px" }}>
          <section class="content-header">
            <div class="header-icon">
              <i class="fa fa-users"></i>
            </div>
            <div class="header-title">
              <h1>Production</h1>
              <small>Production List</small>
            </div>
          </section>
          <section class="content">
            <div class="row">
              <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="2IPS3ijJzo">
                <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="2IPS3ijJzo" data-index="0">
                  <div class="panel-heading ui-sortable-handle">
                    <div class="btn-group" id="buttonexport">
                      <a href="#">
                        <h4> Production</h4>
                      </a>
                    </div>
                  </div>
                  <div class="panel-body">
                    <div class="btn-group">
                      <div class="buttonexport" id="buttonlist">
                        <a class="btn btn-add" data-toggle="modal" data-target="#Production3" > <i class="fa fa-plus"></i> Add Production
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
                      <table id="dataTableExample1" class="table table-bProductioned table-striped table-hover">
                        <thead>
                          <tr class="info">
                            <th>Category</th>
                            <th>Product</th>
                            <th>Code</th>
                            <th>Customer</th>
                            <th>Launch</th>
                            <th>Target</th>
                            <th>Stage</th>
                            <th>Qty</th>
                            <th>Unit</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>SS INDUSTRIAL KITCHEN FURNITURE</td>
                            <td>Dining table </td>
                            <td>10010</td>
                            <td>Dharma House</td>
                            <td>27-Jan</td>
                            <td>15-Feb</td>
                            <td>Packing</td>
                            <td>4</td>
                            <td>Box</td>
                            <td>
                              <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#Production1"><i class="fa fa-pencil"></i></button>
                              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#Production2"><i class="fa fa-trash-o"></i> </button>
                            </td>
                          </tr>
                          <tr>
                            <td>SS INDUSTRIAL KITCHEN FURNITURE</td>
                            <td>Trauli</td>
                            <td>10850</td>
                            <td>Dharma House</td>
                            <td>27-Jan</td>
                            <td>15-Feb</td>
                            <td>Packing</td>
                            <td>4</td>
                            <td>Box</td>
                            <td>
                              <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#Production1"><i class="fa fa-pencil"></i></button>
                              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#Production2"><i class="fa fa-trash-o"></i> </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="Production1" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header modal-header-primary">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3><i class="fa fa-user m-r-5"></i> Update Production</h3>
                  </div>
                  <form class="form-horizontal">
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-12">
                          <fieldset>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Category:</label>
                              <input type="text" placeholder="Category" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Product:</label>
                              <input type="text" placeholder="Product" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Code:</label>
                              <input type="number" placeholder="Code" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Customer:</label>
                              <input type="text" placeholder="Customer" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Launch:</label>
                              <input type="date" placeholder="Launch" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Target:</label>
                              <input type="date" placeholder="Target" class="form-control" />
                            </div>

                            <div class="col-md-4 form-group">
                              <label class="control-label">Stage</label>
                              <input type="text" placeholder="Stage" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Quantity</label>
                              <input type="number" placeholder="Quantity" class="form-control" />
                            </div>
                            <div class="col-md-6 form-group">
                              <label class="control-label">Unit</label>
                              <input type="text" placeholder="Unit" class="form-control" />
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-add pull-right">Save</button>
                      <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal fade" id="Production2" tabindex="-1" role="dialog" aria-hidden="true">
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
                              <label class="control-label">Delete Production</label>
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
            <div class="modal fade" id="Production3" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header modal-header-primary">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3><i class="fa fa-user m-r-5"></i> Add Production</h3>
                  </div>
                  <form class="form-horizontal">
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-12">
                          <fieldset>

                            <div class="col-md-4 form-group">
                              <label class="control-label">Category:</label>
                              <input type="text" placeholder="Category" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Product:</label>
                              <input type="text" placeholder="Product" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Code:</label>
                              <input type="number" placeholder="Code" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Customer:</label>
                              <input type="text" placeholder="Customer" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Launch:</label>
                              <input type="date" placeholder="Launch" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Target:</label>
                              <input type="date" placeholder="Target" class="form-control" />
                            </div>

                            <div class="col-md-4 form-group">
                              <label class="control-label">Stage</label>
                              <input type="text" placeholder="Stage" class="form-control" />
                            </div>
                            <div class="col-md-4 form-group">
                              <label class="control-label">Quantity</label>
                              <input type="number" placeholder="Quantity" class="form-control" />
                            </div>
                            <div class="col-md-6 form-group">
                              <label class="control-label">Unit</label>
                              <input type="text" placeholder="Unit" class="form-control" />
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-add pull-right">Save</button>
                      <button type="button" class="btn btn-danger pull-left" data-dismiss="modal">Close</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    </>
  )
}

export default Manufacturing