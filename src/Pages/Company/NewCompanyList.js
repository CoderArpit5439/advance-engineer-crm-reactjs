import React from "react";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import Footer from "../../Layout/Footer";
import { useNavigate } from "react-router-dom";
const NewCompanyList = () => {
    const navigate = useNavigate()
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* start page title */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                  <h4 className="mb-sm-0">Companies List</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <a href="javascript: void(0);">Companies</a>
                      </li>
                      <li className="breadcrumb-item active">Companies List</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* end page title */}
            <div className="row">
              <div className="col-xxl-9">
                <div className="card">
                  <div className="card-body">
                    <button
                            type="button"
                            className="btn btn-success w-30"
                            onclick="filterData();"
                              onClick={() =>
                                                      navigate("/add-company")
                                                    }
                          >
                            <i className="ri-equalizer-fill me-1 align-bottom" />{" "}
                           Add Company
                          </button>
                    <form>
                      <div className="row g-3">
                        <div className="col-xxl-5 col-sm-6">
                          <div className="search-box">
                            <input
                              type="text"
                              className="form-control search bg-light border-light"
                              id="searchCompany"
                              placeholder="Search for company, industry type..."
                            />
                            <i className="ri-search-line search-icon" />
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xxl-3 col-sm-6">
                          <input
                            type="text"
                            className="form-control bg-light border-light flatpickr-input"
                            id="datepicker"
                            data-date-format="d M, Y"
                            placeholder="Select date"
                            readOnly="readonly"
                          />
                        </div>
                        {/*end col*/}
                        <div className="col-xxl-2 col-sm-4">
                          <div className="input-light">
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
                                  className="form-control choices__input"
                                  data-choices=""
                                  data-choices-search-false=""
                                  name="choices-single-default"
                                  id="idType"
                                  hidden=""
                                  tabIndex={-1}
                                  data-choice="active"
                                >
                                  <option value="all" selected="">
                                    All
                                  </option>
                                  <option value="Full Time">Full Time</option>
                                  <option value="Part Time">Part Time</option>
                                  <option value="Internship">Internship</option>
                                  <option value="Freelance">Freelance</option>
                                </select>
                                <div className="choices__list choices__list--single">
                                  <div
                                    className="choices__item choices__item--selectable"
                                    data-item=""
                                    data-id={1}
                                    data-value="all"
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
                                    id="choices--idType-item-choice-1"
                                    className="choices__item choices__item--choice is-selected choices__item--selectable is-highlighted"
                                    role="option"
                                    data-choice=""
                                    data-id={1}
                                    data-value="all"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                    aria-selected="true"
                                  >
                                    All
                                  </div>
                                  <div
                                    id="choices--idType-item-choice-5"
                                    className="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id={5}
                                    data-value="Freelance"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    Freelance
                                  </div>
                                  <div
                                    id="choices--idType-item-choice-2"
                                    className="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id={2}
                                    data-value="Full Time"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    Full Time
                                  </div>
                                  <div
                                    id="choices--idType-item-choice-4"
                                    className="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id={4}
                                    data-value="Internship"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    Internship
                                  </div>
                                  <div
                                    id="choices--idType-item-choice-3"
                                    className="choices__item choices__item--choice choices__item--selectable"
                                    role="option"
                                    data-choice=""
                                    data-id={3}
                                    data-value="Part Time"
                                    data-select-text="Press to select"
                                    data-choice-selectable=""
                                  >
                                    Part Time
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-xxl-2 col-sm-4">
                          <button
                            type="button"
                            className="btn btn-success w-100"
                            onclick="filterData();"
                          >
                            <i className="ri-equalizer-fill me-1 align-bottom" />{" "}
                            Filters
                          </button>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </form>
                  </div>
                </div>
                <div className="row job-list-row" id="companies-list">
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-3.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Martin's Solutions
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            The IT department of a company ensures that the
                            network of computers within the organisation are
                            well-connected and functioning properly. All the
                            other departments within the company rely on them to
                            ensure that their respective functions can go on
                            seamlessly.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            IT Department
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">250-300</span>{" "}
                            <span className="location">Cullera, Spain</span>{" "}
                            <span className="rating">4.8</span>{" "}
                            <span className="website">
                              www.martinsolution.com
                            </span>{" "}
                            <span className="email">
                              info@martinsolution.com
                            </span>{" "}
                            <span className="since">1995</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-4.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Syntyce Solutions
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            These cases are perfectly simple and easy to
                            distinguish. In a free hour, when our power of
                            choice is untrammelled and when nothing prevents to
                            do what we like best, every pleasure is to be
                            welcomed and every pain avoided, because it is
                            pleasure.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Health Services
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">400-450</span>{" "}
                            <span className="location">San Lorenzo</span>{" "}
                            <span className="rating">4.4</span>{" "}
                            <span className="website">
                              www.syntycesolution.com
                            </span>{" "}
                            <span className="email">
                              info@syntycesolution.com
                            </span>{" "}
                            <span className="since">2001</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-1.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Moetic Fashion
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim quia voluptas sit.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Textiles: Clothing, Footwear
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">900-950</span>{" "}
                            <span className="location">Cullera, Spain</span>{" "}
                            <span className="rating">4.2</span>{" "}
                            <span className="website">-</span>{" "}
                            <span className="email">
                              email@moeticfashion.com
                            </span>{" "}
                            <span className="since">2000</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                            onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                             View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-5.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Meta4Systems
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            In a free hour, when our power of choice is
                            untrammelled and when nothing prevents our being
                            able to do what we like best. But in certain
                            circumstances and owing to the claims of duty or the
                            obligations of business it will frequently occur.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Computer Industry
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">10-50</span>{" "}
                            <span className="location">Ugashik, US</span>{" "}
                            <span className="rating">4.5</span>{" "}
                            <span className="website">
                              www.meta4systems.com
                            </span>{" "}
                            <span className="email">
                              support@meta4systems.com
                            </span>{" "}
                            <span className="since">2019</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                             View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-1.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">Kent's</h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            A UI/UX designer's job is to create user-friendly
                            interfaces that enable users to understand how to
                            use complex technical. If you're passionate, you'll
                            find great fulfillment in being involved in the
                            design process for the next hot gadget.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            IT Department
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">10-50</span>{" "}
                            <span className="location">Zuweihir, UAE</span>{" "}
                            <span className="rating">4.1</span>{" "}
                            <span className="website">-</span>{" "}
                            <span className="email">-</span>{" "}
                            <span className="since">2018</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-7.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Micro Design
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            As a Product Designer, you will work within a
                            Product Delivery Team fused with UX, engineering,
                            product and data talent.If several languages
                            coalesce, the grammar of the resulting If several
                            languages coalesce, the grammar of the resulting.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Financial Services
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">300-350</span>{" "}
                            <span className="location">Limestone, US</span>{" "}
                            <span className="rating">4.5</span>{" "}
                            <span className="website">www.microdesign.com</span>{" "}
                            <span className="email">info@microdesign.com</span>{" "}
                            <span className="since">2016</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                             View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-6.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Zoetic Fashion
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            To achieve this, it would be necessary to have
                            uniform grammar, pronunciation and more common
                            words. If several languages coalesce, the grammar of
                            the resulting language is more simple and regular
                            than that of the individual languages existing.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Textiles: Clothing, Footwear
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">10-50</span>{" "}
                            <span className="location">Germany</span>{" "}
                            <span className="rating">3.9</span>{" "}
                            <span className="website">-</span>{" "}
                            <span className="email">
                              info@zoeticfashion.com
                            </span>{" "}
                            <span className="since">2018</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-8.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Digitech Galaxy
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            The IT department of a company ensures that the
                            network of computers within the organisation are
                            well-connected and functioning properly. All the
                            other departments within the company rely on them to
                            ensure that their respective functions can go on
                            seamlessly.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Telecommunications Services
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">400-415</span>{" "}
                            <span className="location">Zuweihir, UAE</span>{" "}
                            <span className="rating">4.0</span>{" "}
                            <span className="website">-</span>{" "}
                            <span className="email">-</span>{" "}
                            <span className="since">2014</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                             View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-9.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Erlebacher's
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            Their separate existence is a myth. For science,
                            music, sport, etc, Europe uses the same vocabulary.
                            The languages only differ in their grammar, their
                            pronunciation and their most common words. Everyone
                            realizes why a new common language would be
                            desirable.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Health Services
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">350-400</span>{" "}
                            <span className="location">San Lorenzo</span>{" "}
                            <span className="rating">4.4</span>{" "}
                            <span className="website">-</span>{" "}
                            <span className="email">info@erlebacher.com</span>{" "}
                            <span className="since">2016</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                             View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-5.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              iTest Factory
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            The new common language will be more simple and
                            regular than the existing European languages. It
                            will be as simple as Occidental; in fact, it will be
                            Occidental. it will seem like simplified English, as
                            a skeptical Cambridge friend of mine told me what
                            Occidental.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Chemical Industries
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">250-300</span>{" "}
                            <span className="location">Texanna, US</span>{" "}
                            <span className="rating">4.5</span>{" "}
                            <span className="website">-</span>{" "}
                            <span className="email">info@itest.com</span>{" "}
                            <span className="since">2016</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                             View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-7.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Zoetic Fashion
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            The IT department of a company ensures that the
                            network of computers within the organisation are
                            well-connected and functioning properly. All the
                            other departments within the company rely on them to
                            ensure that their respective functions can go on
                            seamlessly.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Textiles: Clothing, Footwear
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">120-150</span>{" "}
                            <span className="location">Cullera, Spain</span>{" "}
                            <span className="rating">4.7</span>{" "}
                            <span className="website">
                              www.zoeticfashion.com
                            </span>{" "}
                            <span className="email">
                              info@zoeticfashion.com
                            </span>{" "}
                            <span className="since">2015</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                              onClick={() =>
                                                      navigate("/more-details")
                                                    }
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-3.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Micro Design
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            Everyone realizes why a new common language would be
                            desirable: one could refuse to pay expensive
                            translators. To achieve this, it would be necessary
                            to have uniform grammar, pronunciation and more
                            common words. If several languages coalesce of the
                            resulting.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            IT Department
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">80-100</span>{" "}
                            <span className="location">Zuweihir, UAE</span>{" "}
                            <span className="rating">4.6</span>{" "}
                            <span className="website">www.microdesign.com</span>{" "}
                            <span className="email">info@microdesign.com</span>{" "}
                            <span className="since">2014</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-4.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Syntyce Solutions
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            The IT department of a company ensures that the
                            network of computers within the organisation are
                            well-connected and functioning properly. All the
                            other departments within the company rely on them to
                            ensure that their respective functions can go on
                            seamlessly.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Computer Industry
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">50-70</span>{" "}
                            <span className="location">Muhtarqah, UAE</span>{" "}
                            <span className="rating">4.2</span>{" "}
                            <span className="website">
                              www.syntycesolutions.com
                            </span>{" "}
                            <span className="email">
                              support@syntycesolutions.com
                            </span>{" "}
                            <span className="since">2016</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-1.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Asiatic Solutions
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            To achieve this, it would be necessary to have
                            uniform grammar, pronunciation and more common
                            words. If several languages coalesce, the grammar of
                            the resulting language is new common language will
                            be more simple and regular than the existing
                            European languages.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Health Services
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">30-50</span>{" "}
                            <span className="location">Pahoa, US</span>{" "}
                            <span className="rating">3.8</span>{" "}
                            <span className="website">
                              www.asiaticsolution.com
                            </span>{" "}
                            <span className="email">
                              info@asiaticsolution.com
                            </span>{" "}
                            <span className="since">2019</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                     View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-1.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Great Clothes
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            Textiles: Clothing, Footwear
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">120-150</span>{" "}
                            <span className="location">Phoenix, Arizona</span>{" "}
                            <span className="rating">4.0</span>{" "}
                            <span className="website">-</span>{" "}
                            <span className="email">-</span>{" "}
                            <span className="since">2017</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-6">
                    {" "}
                    <div className="card companiesList-card">
                      {" "}
                      <div className="card-body">
                        {" "}
                        <div className="avatar-sm mx-auto">
                          {" "}
                          <div className="avatar-title bg-light rounded">
                            {" "}
                            <img
                              src="assets/images/companies/img-5.png"
                              alt=""
                              className="avatar-xxs companyLogo-img"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="text-center">
                          {" "}
                          <a href="#!">
                            {" "}
                            <h5 className="mt-3 company-name">
                              Kent's Solutions
                            </h5>{" "}
                          </a>{" "}
                          <div className="d-none company-desc">
                            It is a paradisematic country, in which roasted
                            parts of sentences fly into your mouth. Even the
                            all-powerful Pointing has no control about the blind
                            texts it is an almost unorthographic life One day
                            however a small line of blind text by the name of
                            Lorem Ipsum.
                          </div>{" "}
                          <p className="text-muted industry-type">
                            IT Department
                          </p>{" "}
                          <div className="d-none">
                            {" "}
                            <span className="employee">50-80</span>{" "}
                            <span className="location">Ghurayfah, UAE</span>{" "}
                            <span className="rating">4.2</span>{" "}
                            <span className="website">
                              www.kentssolution.com
                            </span>{" "}
                            <span className="email">
                              info@kentssolution.com
                            </span>{" "}
                            <span className="since">2018</span>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                         View More
                          </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="row g-0 justify-content-end mb-4"
                  id="pagination-element"
                >
                  {/* end col */}
                  <div className="col-sm-6">
                    <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                      <div className="page-item disabled">
                        <a
                          href="javascript:void(0);"
                          className="page-link"
                          id="page-prev"
                        >
                          Previous
                        </a>
                      </div>
                      <span id="page-num" className="pagination">
                        <div className="page-item active">
                          <a
                            className="page-link clickPageNumber"
                            href="javascript:void(0);"
                          >
                            1
                          </a>
                        </div>
                        <div className="page-item">
                          <a
                            className="page-link clickPageNumber"
                            href="javascript:void(0);"
                          >
                            2
                          </a>
                        </div>
                      </span>
                      <div className="page-item">
                        <a
                          href="javascript:void(0);"
                          className="page-link"
                          id="page-next"
                        >
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end col */}
                </div>
                {/*end row*/}
              </div>
              <div className="col-xxl-3">
                <div className="card" id="company-overview">
                  <div className="card-body">
                    <div className="avatar-lg mx-auto mb-3">
                      <div className="avatar-title bg-light rounded">
                        <img
                          src="https://themesbrand.com/velzon/html/master/assets/images/companies/img-4.png"
                          alt=""
                          className="avatar-sm company-logo"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <a href="#!">
                        <h5 className="overview-companyname">
                          Syntyce Solutions
                        </h5>
                      </a>
                      <p className="text-muted overview-industryType">
                        Health Services
                      </p>
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item avatar-xs">
                          <a
                            href="javascript:void(0);"
                            className="avatar-title bg-success-subtle text-success fs-15 rounded"
                          >
                            <i className="ri-global-line" />
                          </a>
                        </li>
                        <li className="list-inline-item avatar-xs">
                          <a
                            href="javascript:void(0);"
                            className="avatar-title bg-danger-subtle text-danger fs-15 rounded"
                          >
                            <i className="ri-mail-line" />
                          </a>
                        </li>
                        <li className="list-inline-item avatar-xs">
                          <a
                            href="javascript:void(0);"
                            className="avatar-title bg-warning-subtle text-warning fs-15 rounded"
                          >
                            <i className="ri-question-answer-line" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="text-muted text-uppercase fw-semibold mb-3">
                      Information
                    </h6>
                    <p className="text-muted mb-4 overview-companydesc">
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our power of choice is untrammelled
                      and when nothing prevents to do what we like best, every
                      pleasure is to be welcomed and every pain avoided, because
                      it is pleasure.
                    </p>
                    <div className="table-responsive table-card">
                      <table className="table table-borderless mb-4">
                        <tbody>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Industry Type
                            </td>
                            <td className="overview-industryType">
                              Health Services
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Location
                            </td>
                            <td className="overview-company_location">
                              San Lorenzo
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Employee
                            </td>
                            <td className="overview-employee">400-450</td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Vacancy
                            </td>
                            <td className="overview-vacancy">31</td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Rating
                            </td>
                            <td>
                              <span className="overview-rating">4.4</span>{" "}
                              <i className="ri-star-fill text-warning align-bottom" />
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Website
                            </td>
                            <td>
                              <a
                                href="javascript:void(0);"
                                className="link-primary text-decoration-underline overview-website"
                              >
                                www.syntycesolution.com
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Contact Email
                            </td>
                            <td className="overview-email">
                              info@syntycesolution.com
                            </td>
                          </tr>
                          <tr>
                            <td className="fw-medium" scope="row">
                              Since
                            </td>
                            <td className="overview-since">2001</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="hstack gap-3">
                      <button
                        type="button"
                        className="btn btn-soft-success custom-toggle w-100 material-shadow-none"
                        data-bs-toggle="button"
                      >
                        <span className="icon-on">
                          <i className="ri-add-line align-bottom me-1" /> Follow
                        </span>
                        <span className="icon-off">
                          <i className="ri-user-unfollow-line align-bottom me-1" />{" "}
                          Unfollow
                        </span>
                      </button>
                      <a href="#!" className="btn btn-primary w-100">
                        More View{" "}
                        <i className="ri-arrow-right-line align-bottom" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card overflow-hidden shadow-none">
                  <div className="card-body bg-danger-subtle">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avatar-sm">
                          <div className="avatar-title bg-danger-subtle text-danger rounded-circle fs-17">
                            <i className="ri-gift-line" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h6 className="fs-16">Free trial</h6>
                        <p className="text-muted mb-0">28 days left</p>
                      </div>
                      <div>
                        <a href="pages-pricing.html" className="btn btn-danger">
                          Upgrade
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body bg-danger-subtle border-top border-danger border-opacity-25 border-top-dashed">
                    <a
                      href="#!"
                      className="d-flex justify-content-between align-items-center text-body"
                    >
                      <span>See benefits</span>
                      <i className="ri-arrow-right-s-line fs-18" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default NewCompanyList;
