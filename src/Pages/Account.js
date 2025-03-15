import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'

const Account = () => {
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
            <h1>Account</h1>
            <small>Account List</small>
          </div>
        </section>
        <section class="content">
          <div class="row">
            <div class="col-sm-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="2IPS3ijJzo">
              <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="2IPS3ijJzo" data-index="0">
                <div class="panel-heading ui-sortable-handle">
                  <div class="btn-group" id="buttonexport">
                    <a href="#">
                      <h4>Group & Ledgers</h4>
                    </a>
                  </div>
                </div>
                <div class="panel-body">
                  <div class="btn-group">
                    <div class="buttonexport" id="buttonlist">
                      <a class="btn btn-add" data-toggle="modal" data-target="#Account3" > <i class="fa fa-plus"></i> Add Group
                      </a>
                    </div>
                  </div>
                  <div class="table-responsive">
                    <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                      <thead>
                        <tr class="info">
                          <th>Groups & Ledger</th>
                          <th>₹</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Current Assets</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Fixed Assets</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Equity</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Current Assets</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Fixed Assets</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Equity</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Long term Liabilities</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Short term Liabilities</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Direct Income</td>
                          <td>74688663</td>
                        </tr>
                        <tr>
                          <td>Indirect Income</td>
                          <td>74688663</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="2IPS3ijJzo">
              <div className='row'>
                <div className='col-sm-12'>
                  <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="2IPS3ijJzo" data-index="0">
                    <div class="panel-heading ui-sortable-handle">
                      <div class="btn-group" id="buttonexport">
                        <a href="#">
                          <h4>Favourite Ledgers</h4>
                        </a>
                      </div>
                    </div>
                    <div class="panel-body">
                      <div class="btn-group">
                        <div class="buttonexport" id="buttonlist">
                          <a class="btn btn-add" data-toggle="modal" data-target="#Account3" > <i class="fa fa-plus"></i> Add Ledger
                          </a>
                        </div>
                      </div>
                      <div class="table-responsive">
                        <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                          <thead>
                            <tr class="info">
                              <th>Groups & Ledger</th>
                              <th>₹</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Current Assets</td>
                              <td>74688663</td>
                            </tr>
                            <tr>
                              <td>Fixed Assets</td>
                              <td>74688663</td>
                            </tr>
                            <tr>
                              <td>Equity</td>
                              <td>74688663</td>
                            </tr>
                            <tr>
                              <td>Long term Liabilities</td>
                              <td>74688663</td>
                            </tr>
                            <tr>
                              <td>Long term Liabilities</td>
                              <td>74688663</td>
                            </tr>
                            <tr>
                              <td>Long term Liabilities</td>
                              <td>74688663</td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="2IPS3ijJzo" data-index="0">
                    <div class="panel-heading ui-sortable-handle">
                      <div class="btn-group" id="buttonexport">
                        <a href="#">
                          <h4>Quick Access</h4>
                        </a>
                      </div>
                    </div>
                    <div class="panel-body">
                      <button type="button" class="btn btn-default btn-rounded w-md m-b-5">Balance sheet</button>
                      <button type="button" class="btn btn-primary btn-rounded w-md m-b-5">Profit & Loss</button>
                      <button type="button" class="btn btn-success btn-rounded w-md m-b-5">Trial balance</button>
                      <button type="button" class="btn btn-info btn-rounded w-md m-b-5">GST Ledger</button>
                      <button type="button" class="btn btn-warning btn-rounded w-md m-b-5">Stock Value</button>
                      <button type="button" class="btn btn-danger btn-rounded w-md m-b-5">Purchase Order</button>
                      <button type="button" class="btn btn-inverse btn-rounded w-md m-b-5">Credit Notes</button>
                      <button type="button" class="btn btn-purple btn-rounded w-md m-b-5">Debit Notes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal fade" id="Account1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header modal-header-primary">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h3><i class="fa fa-user m-r-5"></i> Update Account</h3>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form class="form-horizontal">
                        <fieldset>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Account Name:</label>
                            <input type="text" placeholder="Account Name" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Email:</label>
                            <input type="email" placeholder="Email" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Mobile</label>
                            <input type="number" placeholder="Mobile" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Address</label><br></br>
                            <textarea name="address" rows="3"></textarea>
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">type</label>
                            <input type="text" placeholder="type" class="form-control" />
                          </div>
                          <div class="col-md-12 form-group user-form-group">
                            <div class="pull-right">
                              <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                              <button type="submit" class="btn btn-add btn-sm">Save</button>
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

          <div class="modal fade" id="Account2" tabindex="-1" role="dialog" aria-hidden="true">
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
                            <label class="control-label">Delete Account</label>
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
          <div class="modal fade" id="Account3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header modal-header-primary">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                  <h3><i class="fa fa-user m-r-5"></i> Add Account</h3>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <form class="form-horizontal">
                        <fieldset>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Account Name:</label>
                            <input type="text" placeholder="Account Name" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Email:</label>
                            <input type="email" placeholder="Email" class="form-control" />
                          </div>

                          <div class="col-md-4 form-group">
                            <label class="control-label">Mobile</label>
                            <input type="number" placeholder="Mobile" class="form-control" />
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">Address</label><br></br>
                            <textarea name="address" rows="3"></textarea>
                          </div>
                          <div class="col-md-6 form-group">
                            <label class="control-label">type</label>
                            <input type="text" placeholder="type" class="form-control" />
                          </div>
                          <div class="col-md-12 form-group user-form-group">
                            <div class="pull-right">
                              <button type="button" class="btn btn-danger btn-sm">Cancel</button>
                              <button type="submit" class="btn btn-add btn-sm">Save</button>
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

export default Account