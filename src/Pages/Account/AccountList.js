import React from 'react'
import Header from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar'
import Footer from '../../Layout/Footer'

const AccountList = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
            <h4 className="mb-sm-0">Transactions</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Crypto</a>
                </li>
                <li className="breadcrumb-item active">Transactions</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-xxl-3 col-md-6">
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex mb-3">
                <div className="flex-grow-1">
                  <lord-icon
                    src="https://cdn.lordicon.com/fhtaantg.json"
                    trigger="loop"
                    colors="primary:#405189,secondary:#0ab39c"
                    style={{ width: 55, height: 55 }}
                  />
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="javascript:void(0);"
                    className="badge bg-warning-subtle text-warning badge-border"
                  >
                    BTC
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-info-subtle text-info badge-border"
                  >
                    ETH
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-primary-subtle text-primary badge-border"
                  >
                    USD
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-danger-subtle text-danger badge-border"
                  >
                    EUR
                  </a>
                </div>
              </div>
              <h3 className="mb-2">
                $
                <span className="counter-value" data-target={74858}>
                  74,858
                </span>
                <small className="text-muted fs-13">.68k</small>
              </h3>
              <h6 className="text-muted mb-0">Available Balance (USD)</h6>
            </div>
          </div>
          {/*end card*/}
        </div>
        {/*end col*/}
        <div className="col-xxl-3 col-md-6">
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex mb-3">
                <div className="flex-grow-1">
                  <lord-icon
                    src="https://cdn.lordicon.com/qhviklyi.json"
                    trigger="loop"
                    colors="primary:#405189,secondary:#0ab39c"
                    style={{ width: 55, height: 55 }}
                  />
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="javascript:void(0);"
                    className="badge bg-warning-subtle text-warning badge-border"
                  >
                    BTC
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-info-subtle text-info badge-border"
                  >
                    ETH
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-primary-subtle text-primary badge-border"
                  >
                    USD
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-danger-subtle text-danger badge-border"
                  >
                    EUR
                  </a>
                </div>
              </div>
              <h3 className="mb-2">
                $
                <span className="counter-value" data-target={74361}>
                  74,361
                </span>
                <small className="text-muted fs-13">.34k</small>
              </h3>
              <h6 className="text-muted mb-0">Send (Previous Month)</h6>
            </div>
          </div>
          {/*end card*/}
        </div>
        {/*end col*/}
        <div className="col-xxl-3 col-md-6">
          <div className="card card-animate">
            <div className="card-body">
              <div className="d-flex mb-3">
                <div className="flex-grow-1">
                  <lord-icon
                    src="https://cdn.lordicon.com/yeallgsa.json"
                    trigger="loop"
                    colors="primary:#405189,secondary:#0ab39c"
                    style={{ width: 55, height: 55 }}
                  >
                    {" "}
                  </lord-icon>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="javascript:void(0);"
                    className="badge bg-warning-subtle text-warning badge-border"
                  >
                    BTC
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-info-subtle text-info badge-border"
                  >
                    ETH
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-primary-subtle text-primary badge-border"
                  >
                    USD
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="badge bg-danger-subtle text-danger badge-border"
                  >
                    EUR
                  </a>
                </div>
              </div>
              <h3 className="mb-2">
                $
                <span className="counter-value" data-target={97685}>
                  97,685
                </span>
                <small className="text-muted fs-13">.22k</small>
              </h3>
              <h6 className="text-muted mb-0">Receive (Previous Month)</h6>
            </div>
          </div>
          {/*end card*/}
        </div>
        {/*end col*/}
        <div className="col-xxl-3 col-md-6">
          <div className="swiper default-swiper rounded swiper-initialized swiper-horizontal swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-891733fdfb462e21"
              aria-live="off"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-942px, 0px, 0px)",
                transitionDelay: "0ms"
              }}
            >
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="3 / 3"
                data-swiper-slide-index={2}
                style={{ width: 471 }}
              >
                <div className="card card-animate overflow-hidden">
                  <div className="card-body bg-warning-subtle">
                    <div className="d-flex mb-3">
                      <div className="flex-grow-1">
                        <lord-icon
                          src="https://cdn.lordicon.com/vaeagfzc.json"
                          trigger="loop"
                          colors="primary:#405189,secondary:#0ab39c"
                          style={{ width: 55, height: 55 }}
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <a href="javascript:void(0);" className="fw-medium">
                          Monero (XMR)
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-2">
                      $124<small className="text-muted fs-13">.36k</small>
                    </h3>
                    <h6 className="text-muted mb-0">
                      Send - Receive (Previous Month)
                    </h6>
                  </div>
                </div>
                {/*end card*/}
              </div>
              <div
                className="swiper-slide swiper-slide-prev"
                role="group"
                aria-label="1 / 3"
                data-swiper-slide-index={0}
                style={{ width: 471 }}
              >
                <div className="card card-animate overflow-hidden">
                  <div className="card-body bg-warning-subtle">
                    <div className="d-flex mb-3">
                      <div className="flex-grow-1">
                        <lord-icon
                          src="https://cdn.lordicon.com/vaeagfzc.json"
                          trigger="loop"
                          colors="primary:#405189,secondary:#0ab39c"
                          style={{ width: 55, height: 55 }}
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <a href="javascript:void(0);" className="fw-medium">
                          Bitcoin (BTC)
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-2">
                      $245<small className="text-muted fs-13">.65k</small>
                    </h3>
                    <h6 className="text-muted mb-0">
                      Send - Receive (Previous Month)
                    </h6>
                  </div>
                </div>
                {/*end card*/}
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="2 / 3"
                data-swiper-slide-index={1}
                style={{ width: 471 }}
              >
                <div className="card card-animate overflow-hidden">
                  <div className="card-body bg-warning-subtle">
                    <div className="d-flex mb-3">
                      <div className="flex-grow-1">
                        <lord-icon
                          src="https://cdn.lordicon.com/vaeagfzc.json"
                          trigger="loop"
                          colors="primary:#405189,secondary:#0ab39c"
                          style={{ width: 55, height: 55 }}
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <a href="javascript:void(0);" className="fw-medium">
                          Ethereum (ETH)
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-2">
                      $24<small className="text-muted fs-13">.74k</small>
                    </h3>
                    <h6 className="text-muted mb-0">
                      Send - Receive (Previous Month)
                    </h6>
                  </div>
                </div>
                {/*end card*/}
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
          {/*end swiper*/}
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
      <div className="row align-items-center mb-4 g-3">
        <div className="col-sm-3">
          <div className="d-flex align-items-center gap-2">
            <span className="text-muted flex-shrink-0">Sort by: </span>
            <div
              className="choices"
              data-type="select-one"
              tabIndex={0}
              role="listbox"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="choices__inner">
                <select
                  className="form-control mb-0 choices__input"
                  data-choices=""
                  data-choices-search-false=""
                  name="choices-single-default"
                  id="choices-single-default"
                  hidden=""
                  tabIndex={-1}
                  data-choice="active"
                >
                  <option value="All" selected="">
                    All
                  </option>
                  <option value="USD">USD</option>
                  <option value="ETH">ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="EUR">EUR</option>
                  <option value="JPY">JPY</option>
                </select>
                <div className="choices__list choices__list--single">
                  <div
                    className="choices__item choices__item--selectable"
                    data-item=""
                    data-id={1}
                    data-value="All"
                    aria-selected="true"
                    role="option"
                  >
                    All
                  </div>
                </div>
              </div>
              <div
                className="choices__list choices__list--dropdown"
                aria-expanded="false"
              >
                <div className="choices__list" role="listbox">
                  <div
                    id="choices--choices-single-default-item-choice-1"
                    className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                    role="option"
                    data-choice=""
                    data-id={1}
                    data-value="All"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                    aria-selected="true"
                  >
                    All
                  </div>
                  <div
                    id="choices--choices-single-default-item-choice-4"
                    className="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id={4}
                    data-value="BTC"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    BTC
                  </div>
                  <div
                    id="choices--choices-single-default-item-choice-3"
                    className="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id={3}
                    data-value="ETH"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    ETH
                  </div>
                  <div
                    id="choices--choices-single-default-item-choice-5"
                    className="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id={5}
                    data-value="EUR"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    EUR
                  </div>
                  <div
                    id="choices--choices-single-default-item-choice-6"
                    className="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id={6}
                    data-value="JPY"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    JPY
                  </div>
                  <div
                    id="choices--choices-single-default-item-choice-2"
                    className="choices__item choices__item--choice choices__item--selectable"
                    role="option"
                    data-choice=""
                    data-id={2}
                    data-value="USD"
                    data-select-text="Press to select"
                    data-choice-selectable=""
                  >
                    USD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end col*/}
        <div className="col-sm-auto ms-auto">
          <div className="d-flex gap-2">
            <a href="javascript:void(0);" className="btn btn-info">
              Deposit
            </a>
            <a href="javascript:void(0);" className="btn btn-danger">
              Withdraw
            </a>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
      <div className="card" id="contactList">
        <div className="card-header">
          <div className="row align-items-center g-3">
            <div className="col-md-3">
              <h5 className="card-title mb-0">All Transactions</h5>
            </div>
            {/*end col*/}
            <div className="col-md-auto ms-auto">
              <div className="d-flex gap-2">
                <div className="search-box">
                  <input
                    type="text"
                    className="form-control search"
                    placeholder="Search for transactions..."
                  />
                  <i className="ri-search-line search-icon" />
                </div>
                <button className="btn btn-success">
                  <i className="ri-equalizer-line align-bottom me-1" /> Filters
                </button>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end card-header*/}
        <div className="card-body">
          <div className="table-responsive table-card">
            <table
              className="table align-middle table-nowrap"
              id="customerTable"
            >
              <thead className="table-light text-muted">
                <tr>
                  <th
                    className="sort"
                    data-sort="name"
                    scope="col"
                    style={{ width: 60 }}
                  />
                  <th className="sort" data-sort="date" scope="col">
                    Timestamp
                  </th>
                  <th className="sort" data-sort="currency_name" scope="col">
                    Currency
                  </th>
                  <th className="sort" data-sort="form_name" scope="col">
                    Form
                  </th>
                  <th className="sort" data-sort="to_name" scope="col">
                    To
                  </th>
                  <th className="sort" data-sort="details" scope="col">
                    Details
                  </th>
                  <th className="sort" data-sort="transaction_id" scope="col">
                    Transaction ID
                  </th>
                  <th className="sort" data-sort="type" scope="col">
                    Type
                  </th>
                  <th className="sort" data-sort="amount" scope="col">
                    Amount
                  </th>
                  <th className="sort" data-sort="status" scope="col">
                    Status
                  </th>
                </tr>
                {/*end tr*/}
              </thead>
              <tbody className="list form-check-all">
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ001
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                        <i className="ri-arrow-right-up-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    24 Dec, 2021 <small className="text-muted">08:58AM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/btc.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      BTC
                    </div>
                  </td>
                  <td className="form_name">Wallet</td>
                  <td className="to_name">Thomas Taylor</td>
                  <td className="details">Membership Fees</td>
                  <td className="transaction_id">
                    16b1d9234b61e8778d9e3588f20
                  </td>
                  <td className="type">Withdraw</td>
                  <td>
                    <h6 className="text-danger mb-1 amount">-142.35 BTC</h6>
                    <p className="text-muted mb-0">$697.88k</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-warning-subtle text-warning fs-11">
                      <i className="ri-time-line align-bottom" /> Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ002
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle fs-16">
                        <i className="ri-arrow-left-down-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    16 Dec, 2021 <small className="text-muted">10:32PM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/eth.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      ETH
                    </div>
                  </td>
                  <td className="form_name">Tonya Noble</td>
                  <td className="to_name">Wallet</td>
                  <td className="details">Spring Telephone Network</td>
                  <td className="transaction_id">0a4b5e0e15d70ce79809eabbe</td>
                  <td className="type">Deposit</td>
                  <td>
                    <h6 className="text-success mb-1 amount">+342.35 ETH</h6>
                    <p className="text-muted mb-0">$14565.35</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-success-subtle text-success fs-11">
                      <i className="ri-checkbox-circle-line align-bottom" />{" "}
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ003
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle fs-16">
                        <i className="ri-arrow-left-down-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    04 Jan, 2022 <small className="text-muted">02:24AM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/eur.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      EUR
                    </div>
                  </td>
                  <td className="form_name">Nancy Martino</td>
                  <td className="to_name">Wallet</td>
                  <td className="details">Funding Purse with Payment Check</td>
                  <td className="transaction_id">
                    cca3da2b7711985361825f615e9
                  </td>
                  <td className="type">Deposit</td>
                  <td>
                    <h6 className="text-success mb-1 amount">+174.23 EUR</h6>
                    <p className="text-muted mb-0">$354.14</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-danger-subtle text-danger fs-11">
                      <i className="ri-close-circle-line align-bottom" /> Failed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ004
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                        <i className="ri-arrow-right-up-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    28 Oct, 2021 <small className="text-muted">11:42AM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/gbp.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      GBP
                    </div>
                  </td>
                  <td className="form_name">Wallet</td>
                  <td className="to_name">Michael Morris</td>
                  <td className="details">British Pound Sterling Block</td>
                  <td className="transaction_id">062e0e0123f2b1e9862f659c28</td>
                  <td className="type">Withdraw</td>
                  <td>
                    <h6 className="text-danger mb-1 amount">-365.00 GBP</h6>
                    <p className="text-muted mb-0">$7532.21</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-success-subtle text-success fs-11">
                      <i className="ri-checkbox-circle-line align-bottom" />{" "}
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ005
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle fs-16">
                        <i className="ri-arrow-left-down-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    14 Nov, 2021 <small className="text-muted">12:38PM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/jpy.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      JPY
                    </div>
                  </td>
                  <td className="form_name">Alexis Clarke</td>
                  <td className="to_name">Wallet</td>
                  <td className="details">Platinum Business</td>
                  <td className="transaction_id">
                    1deffa9713917ee0af26bbb5f272
                  </td>
                  <td className="type">Deposit</td>
                  <td>
                    <h6 className="text-success mb-1 amount">+341.74 JPY</h6>
                    <p className="text-muted mb-0">$748.10</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-warning-subtle text-warning fs-11">
                      <i className="ri-time-line align-bottom" /> Processing
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ006
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                        <i className="ri-arrow-right-up-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    02 Jan, 2022 <small className="text-muted">08:58AM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/xrp.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      XRP
                    </div>
                  </td>
                  <td className="form_name">Wallet</td>
                  <td className="to_name">Kevin Dawson</td>
                  <td className="details">
                    Business Advantage Fundaments - Banking
                  </td>
                  <td className="transaction_id">186aa96d8014061d994f025ac4</td>
                  <td className="type">Withdraw</td>
                  <td>
                    <h6 className="text-danger mb-1 amount">-240.74 XRP</h6>
                    <p className="text-muted mb-0">$3254.20</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-danger-subtle text-danger fs-11">
                      <i className="ri-close-circle-line align-bottom" /> Failed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ007
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-success-subtle text-success rounded-circle fs-16">
                        <i className="ri-arrow-left-down-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    17 Oct, 2021 <small className="text-muted">07:08PM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/ltc.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      LTC
                    </div>
                  </td>
                  <td className="form_name">Tonya Noble</td>
                  <td className="to_name">Wallet</td>
                  <td className="details">Litecoin Sale</td>
                  <td className="transaction_id">c94b5581418c41c2c74448a5ec</td>
                  <td className="type">Deposit</td>
                  <td>
                    <h6 className="text-success mb-1 amount">+298.72 LTC</h6>
                    <p className="text-muted mb-0">$149.32</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-success-subtle text-success fs-11">
                      <i className="ri-checkbox-circle-line align-bottom" />{" "}
                      Success
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="id" style={{ display: "none" }}>
                    <a
                      href="javascript:void(0);"
                      className="fw-medium link-primary"
                    >
                      #VZ008
                    </a>
                  </td>
                  <td>
                    <div className="avatar-xs">
                      <div className="avatar-title bg-danger-subtle text-danger rounded-circle fs-16">
                        <i className="ri-arrow-right-up-fill" />
                      </div>
                    </div>
                  </td>
                  <td className="date">
                    27 Dec, 2021 <small className="text-muted">01:24PM</small>
                  </td>
                  <td className="currency_name">
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/images/svg/crypto-icons/xmr.svg"
                        alt=""
                        className="avatar-xxs me-2 material-shadow"
                      />{" "}
                      XMR
                    </div>
                  </td>
                  <td className="form_name">Wallet</td>
                  <td className="to_name">Mary Cousar</td>
                  <td className="details">Monero Purchase</td>
                  <td className="transaction_id">9a592451d1b0e0e5af6d4908f7</td>
                  <td className="type">Withdraw</td>
                  <td>
                    <h6 className="text-danger amount mb-1">-365.13 XMR</h6>
                    <p className="text-muted mb-0">$754.91</p>
                  </td>
                  <td className="status">
                    <span className="badge bg-danger-subtle text-danger fs-11">
                      <i className="ri-close-circle-line align-bottom" /> Failed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            {/*end table*/}
            <div className="noresult" style={{ display: "none" }}>
              <div className="text-center">
                <lord-icon
                  src="https://cdn.lordicon.com/msoeawqm.json"
                  trigger="loop"
                  colors="primary:#405189,secondary:#0ab39c"
                  style={{ width: 75, height: 75 }}
                />
                <h5 className="mt-2">Sorry! No Result Found</h5>
                <p className="text-muted mb-0">
                  We've searched more than 150+ transactions We did not find any
                  transactions for you search.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <div className="pagination-wrap hstack gap-2">
              <a className="page-item pagination-prev disabled" href="#">
                Previous
              </a>
              <ul className="pagination listjs-pagination mb-0">
                <li className="active">
                  <a className="page" href="#" data-i={1} data-page={8}>
                    1
                  </a>
                </li>
                <li>
                  <a className="page" href="#" data-i={2} data-page={8}>
                    2
                  </a>
                </li>
              </ul>
              <a className="page-item pagination-next" href="#">
                Next
              </a>
            </div>
          </div>
        </div>
        {/*end card-body*/}
      </div>
      {/*end card*/}
    </div>
    {/* container-fluid */}
  </div>
  {/* End Page-content */}
  <footer className="footer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">2025 © Velzon.</div>
        <div className="col-sm-6">
          <div className="text-sm-end d-none d-sm-block">
            Design &amp; Develop by Themesbrand
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

      <Footer/>
    </div>
  )
}

export default AccountList
