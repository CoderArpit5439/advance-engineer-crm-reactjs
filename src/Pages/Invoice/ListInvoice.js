import React from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import { useNavigate } from 'react-router-dom'

const ListInvoice = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <Sidebar />
            <div class="content-wrapper" style={{ minHeight: "1276px" }}>
                <section class="content-header">
                    <div class="header-icon">
                        <i class="fa fa-file-text-o"></i>
                    </div>
                    <div class="header-title">
                        <h1>Invoice</h1>
                        <small>Invoice List</small>
                    </div>
                </section>
                <section class="content">
                    <div class="row">
                        <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="e021iinrvG">
                            <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="e021iinrvG" data-index="0">
                                <div class="panel-heading ui-sortable-handle">
                                    <div class="btn-group" id="buttonexport">
                                        <a href="#">
                                            <h4>Invoice</h4>
                                        </a>
                                    </div>
                                </div>
                               <div class="panel-body">
                                    <div class="btn-group">
                                        <div class="buttonexport" id="buttonlist">
                                            <a class="btn btn-add" onClick={() => navigate('/create-invoice')}> <i class="fa fa-plus"></i> Add Invoice
                                            </a>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                                            <thead>
                                                <tr class="info">
                                                    <th>Serial No.</th>
                                                    <th>Account</th>
                                                    <th>Subject Name</th>
                                                    <th>Amount</th>
                                                    <th>Entry Date</th>
                                                    <th>Expired Date</th>
                                                    <th>Stage</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>Eileen Gusikowski</td>
                                                    <td>Networking</td>
                                                    <td>$ 1,658.00</td>
                                                    <td>05/02/2017</td>
                                                    <td>15/06/2017</td>
                                                    <td><span class="label label-custom">Draft</span></td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#customer1"><i class="fa fa-pencil"></i></button>
                                                        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i class="fa fa-trash-o"></i> </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>02</td>
                                                    <td>Eileen Walker</td>
                                                    <td>design</td>
                                                    <td>$ 1,564.00</td>
                                                    <td>05/03/2017</td>
                                                    <td>15/09/2017</td>
                                                    <td><span class="label label-info">transfer</span></td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#customer1"><i class="fa fa-pencil"></i></button>
                                                        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i class="fa fa-trash-o"></i> </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03</td>
                                                    <td>Maria gardoki</td>
                                                    <td>Technology</td>
                                                    <td>$ 1,564.00</td>
                                                    <td>05/03/2017</td>
                                                    <td>15/07/2017</td>
                                                    <td><span class="label label-custom">Draft</span></td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#customer1"><i class="fa fa-pencil"></i></button>
                                                        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i class="fa fa-trash-o"></i> </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>04</td>
                                                    <td>Stefen smith</td>
                                                    <td>Lan Configuration</td>
                                                    <td>$ 1,541.00</td>
                                                    <td>05/06/2017</td>
                                                    <td>15/09/2017</td>
                                                    <td><span class="label label-warning">cheques</span></td>
                                                    <td>
                                                        <button type="button" class="btn btn-add btn-sm" data-toggle="modal" data-target="#customer1"><i class="fa fa-pencil"></i></button>
                                                        <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i class="fa fa-trash-o"></i> </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="customer1" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i> Update Quotes</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form class="form-horizontal">
                                                <fieldset>
                                                    <div class="col-md-4 form-group">
                                                        <label class="control-label">Subject name</label>
                                                        <input type="text" placeholder="Subject" class="form-control" />
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label class="control-label">Account</label>
                                                        <input type="text" placeholder="Account" class="form-control" />
                                                    </div>
                                                    <div class="col-md-4 form-group">
                                                        <label class="control-label">Amount</label>
                                                        <input type="number" placeholder="Amount" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Entry Date</label>
                                                        <input type="text" placeholder="Entry Date" class="form-control" />
                                                    </div>
                                                    <div class="col-md-6 form-group">
                                                        <label class="control-label">Expire Date</label>
                                                        <input type="text" placeholder="Expire Date" class="form-control" />
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
                    <div class="modal fade" id="customer2" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header modal-header-primary">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3><i class="fa fa-user m-r-5"></i> Delete Quotes</h3>
                                </div>
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <form class="form-horizontal">
                                                <fieldset>
                                                    <div class="col-md-12 form-group user-form-group">
                                                        <label class="control-label">Delete Quotes</label>
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
                </section>
            </div>
        </>
    )
}

export default ListInvoice