import React from 'react'
import Header from '../Layout/Header'
import Sidebar from '../Layout/Sidebar'
import Footer from '../Layout/Footer'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div class="content-wrapper" style={{ minHeight: "1950px" }}>
        <section class="content-header">
          <div class="header-icon">
            <i class="fa fa-dashboard"></i>
          </div>
          <div class="header-title">
            <h1>CRM Admin Dashboard</h1>
            <small>Very detailed &amp; featured admin.</small>
          </div>
        </section>
        <section class="content">
          <div class="row">
            <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
              <div id="cardbox4" style={{backgroundColor:"#bd4141"}}>
                <div class="statistic-box" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              
                  <h3>Customer</h3>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
              <div id="cardbox4" style={{backgroundColor:"#88855f"}}>
                <div class="statistic-box" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <h3>Category</h3>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
              <div id="cardbox4" style={{backgroundColor:"#658d38"}}>
                <div class="statistic-box" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <h3>Products</h3>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
              <div id="cardbox4" style={{backgroundColor:"#49388d"}}>
                <div class="statistic-box" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <h3>Quotation</h3>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
              <div id="cardbox4" style={{backgroundColor:"#8d386e"}}>
                <div class="statistic-box" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <h3>Invoice</h3>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-4 col-lg-2">
              <div id="cardbox4" style={{backgroundColor:"#4e766b"}}>
                <div class="statistic-box" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                  {/* <i class="fa fa-user-secret fa-3x"></i> */}
                  {/* <span style={{ fontWeight: 700 }} >4</span> */}
                  {/* <div class="counter-number pull-right"> */}
                    {/* <span class="slight"><i class="fa fa-play fa-rotate-270"> </i> */}
                    {/* </span> */}
                  {/* </div> */}
                  <h3>User</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="row"> */}
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="SoDc33MlnA">
            <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="SoDc33MlnA" data-index="0">
              <div class="panel-heading ui-sortable-handle">
                <div class="panel-title" style={{ maxWidth: "calc(100% - 90px)" }}>
                  <h4>Upcoming Events</h4>
                </div>
                <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
              <div class="panel-body">
                <div class="work-touchpoint">
                  <div class="work-touchpoint-date">
                    <span class="day">28</span>
                    <span class="month">Apr</span>
                  </div>
                </div>
                <div class="detailswork">
                  <span class="label-custom label label-default pull-right">Email</span>
                  <a title="headings">Marketing policy</a> <br></br>
                  <p>Green Road - Dhaka,Bangladesh</p>
                </div>
                <div class="work-touchpoint">
                  <div class="work-touchpoint-date">
                    <span class="day">2</span>
                    <span class="month">Apr</span>
                  </div>
                </div>
                <div class="detailswork">
                  <span class="label-custom label label-default pull-right">skype</span>
                  <a title="headings">Accounting policy</a> <br></br>
                  <p>Kolkata, India</p>
                </div>
                <div class="work-touchpoint">
                  <div class="work-touchpoint-date2">
                    <span class="day">17</span>
                    <span class="month">Mrc</span>
                  </div>
                </div>
                <div class="detailswork">
                  <span class="label-custom label label-default pull-right">phone</span>
                  <a title="headings">Marketing policy</a>
                  <br></br>
                  <p>Madrid  - spain</p>
                </div>
                <div class="work-touchpoint">
                  <div class="work-touchpoint-date2">
                    <span class="day">3</span>
                    <span class="month">jan</span>
                  </div>
                </div>
                <div class="detailswork">
                  <span class="label-custom label label-default pull-right">Mobile</span>
                  <a title="headings">Finance policy</a> <br></br>
                  <p>south Australia  - Australia</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="E4Dj1ARn5I">
            <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="E4Dj1ARn5I" data-index="0">
              <div class="panel-heading ui-sortable-handle">
                <div class="panel-title" style={{ maxWidth: "calc(100% - 90px)" }}>
                  <h4>Running Projects</h4>
                </div>
                <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
              <div class="panel-body">
                <div class="runnigwork">
                  <span class="label-danger label label-default pull-right">Failed</span>
                  <i class="fa fa-dot-circle-o"></i>
                  <a >Database configuration</a><br></br>
                  <div class="progress runningprogress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="25%"></div>
                  </div>
                </div>
                <div class="runnigwork">
                  <span class="label-warning label label-default pull-right">progressing</span>
                  <i class="fa fa-dot-circle-o"></i>
                  <a >Design tool</a><br></br>
                  <div class="progress runningprogress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="15%"></div>
                  </div>
                </div>
                <div class="runnigwork">
                  <span class="label-success label label-default pull-right">progressing</span>
                  <i class="fa fa-dot-circle-o"></i>
                  <a>Internet configuration</a><br></br>
                  <div class="progress runningprogress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="45%"></div>
                  </div>
                </div>
                <div class="runnigwork">
                  <span class="label-info label label-default pull-right">progressing</span>
                  <i class="fa fa-dot-circle-o"></i>
                  <a >Banner completation</a><br></br>
                  <div class="progress runningprogress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="75%"></div>
                  </div>
                </div>
                <div class="runnigwork">
                  <span class="label-success label label-default pull-right">Success</span>
                  <i class="fa fa-dot-circle-o"></i>
                  <a >IT Solution</a><br></br>
                  <div class="progress runningprogress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-toggle="tooltip" data-placement="top" title="" data-original-title="50%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="sJ0S0qyqhl">
            <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="sJ0S0qyqhl" data-index="0">
              <div class="panel-heading ui-sortable-handle">
                <div class="panel-title" style={{maxWidth: "calc(100% - 90px)"}}>
                  <h4>Pending Works</h4>
                </div>
                <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
              <div class="panel-body">
                <div class="Pendingwork">
                  <span class="label-warning label label-default pull-right">progressing</span>
                  <i class="fa fa-ban"></i>
                  <a href="#">Database tools</a>
                  <div class="upworkdate">
                    <p>Jul 25, 2017 for Alimul Alrazy</p>
                  </div>
                </div>
                <div class="Pendingwork">
                  <span class="label-success label label-default pull-right">success</span>
                  <i class="fa fa-ban"></i>
                  <a href="#">Cabels</a>
                  <div class="upworkdate">
                    <p>Jul 25, 2017 for Alimul</p>
                  </div>
                </div>
                <div class="Pendingwork">
                  <span class="label-danger label label-default pull-right">Failed</span>
                  <i class="fa fa-ban"></i>
                  <a href="#">Technologycal tools</a>
                  <div class="upworkdate">
                    <p>Feb 25, 2017 for Alrazy</p>
                  </div>
                </div>
                <div class="Pendingwork">
                  <span class="label-warning label label-default pull-right">progressing</span>
                  <i class="fa fa-ban"></i>
                  <a href="#">Transaction</a>
                  <div class="upworkdate">
                    <p>apr 25, 2017 for Mahfuz</p>
                  </div>
                </div>
                <div class="Pendingwork">
                  <span class="label-success label label-default pull-right">success</span>
                  <i class="fa fa-ban"></i>
                  <a href="#">Training tools</a>
                  <div class="upworkdate">
                    <p>jun 25, 2017 for Alrazy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="uRgamf6RD1">
            <div class="panel panel-bd lobidisable lobipanel lobipanel-sortable" data-inner-id="uRgamf6RD1" data-index="0">
              <div class="panel-heading ui-sortable-handle">
                <div class="panel-title" style={{maxWidth: "calc(100% - 90px)"}}>
                  <h4>Works Deadlines</h4>
                </div>
                <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
              <div class="panel-body">
                <div class="Workslist">
                  <div class="worklistdate">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Task Name</th>
                          <th>End Deadlines</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="info">
                          <th scope="row">Alrazy</th>
                          <td>Feb 25,2017</td>
                        </tr>
                        <tr>
                          <th scope="row">Jahir</th>
                          <td>jun 05,2017</td>
                        </tr>
                        <tr>
                          <th scope="row">Sayeed</th>
                          <td>Feb 05,2017</td>
                        </tr>
                        <tr>
                          <th scope="row">Shipon</th>
                          <td>jun 25,2017</td>
                        </tr>
                        <tr>
                          <th scope="row">Rafi</th>
                          <td>Jul 15,2017</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        {/* </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard