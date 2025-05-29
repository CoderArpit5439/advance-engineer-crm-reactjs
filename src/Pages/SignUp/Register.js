import React from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Sidebar from "../../Layout/Sidebar";
const Register = () => {
  return (
    <div>
      <div className="auth-page-wrapper pt-5">
        {/* auth page bg */}
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay" />
          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
            </svg>
          </div>
          <canvas
            className="particles-js-canvas-el"
            width={1905}
            height={380}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* auth page content */}
        <div className="auth-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
            {/* end row */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4 card-bg-fill">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Create New Account</h5>
                      <p className="text-muted">
                        Get your free velzon account now
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      <form className="needs-validation">
  <div className="mb-3">
    <label htmlFor="useremail" className="form-label">
      Email <span className="text-danger">*</span>
    </label>
    <input
      type="email"
      className="form-control"
      id="useremail"
      placeholder="Enter email address"
      required=""
    />
    <div className="invalid-feedback">
      Please enter email
    </div>
  </div>
  
  <div className="mb-3">
    <label htmlFor="username" className="form-label">
      Username <span className="text-danger">*</span>
    </label>
    <input
      type="text"
      className="form-control"
      id="username"
      placeholder="Enter username"
      required=""
    />
    <div className="invalid-feedback">
      Please enter username
    </div>
  </div>

  <div className="mb-3">
    <label htmlFor="username" className="form-label">
      Mobile No <span className="text-danger">*</span>
    </label>
    <input
      type="number"
      className="form-control"
      id="username"
      placeholder="Enter mobile number"
      required=""
    />
    <div className="invalid-feedback">
      Please enter mobile number
    </div>
  </div>
  

  <div className="mb-3">
    <label htmlFor="country" className="form-label">
      Role <span className="text-danger">*</span>
    </label>
    <select className="form-select" id="country" required>
      <option value="admin">Admin</option>
      <option value="employe">Employee</option>
   
    </select>
    <div className="invalid-feedback">
      Please select your country
    </div>
  </div>
  
  <div className="mb-3">
    <label className="form-label" htmlFor="password-input">
      Password
    </label>
    <div className="position-relative auth-pass-inputgroup">
      <input
        type="password"
        className="form-control pe-5 password-input"
        onpaste="return false"
        placeholder="Enter password"
        id="password-input"
        aria-describedby="passwordInput"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required=""
      />
      <button
        className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon material-shadow-none"
        type="button"
        id="password-addon"
      >
        <i className="ri-eye-fill align-middle" />
      </button>
      <div className="invalid-feedback">
        Please enter password
      </div>
    </div>
  </div>
  
  
  <div id="password-contain" className="p-3 bg-light mb-2 rounded">
    <h5 className="fs-13">Password must contain:</h5>
    <p id="pass-length" className="invalid fs-12 mb-2">
      Minimum <b>8 characters</b>
    </p>
    <p id="pass-lower" className="invalid fs-12 mb-2">
      At <b>lowercase</b> letter (a-z)
    </p>
    <p id="pass-upper" className="invalid fs-12 mb-2">
      At least <b>uppercase</b> letter (A-Z)
    </p>
    <p id="pass-number" className="invalid fs-12 mb-0">
      A least <b>number</b> (0-9)
    </p>
  </div>
  
  <div className="mt-4">
    <button className="btn btn-success w-100" type="submit">
      Sign Up
    </button>
  </div>
  
  <div className="mt-4 text-center">
    <div className="signin-other-title">
      <h5 className="fs-13 mb-4 title text-muted">
        Create account with
      </h5>
    </div>
  </div>
</form>
                    </div>
                  </div>
                  {/* end card body */}
                </div>
                {/* end card */}
                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Already have an account ?{" "}
                    <a
                      href="/"
                      className="fw-semibold text-primary text-decoration-underline"
                    >
                     
                      Signin{" "}
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end auth page content */}
        {/* footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <p className="mb-0 text-muted">
                    © 2025 Advance CRM
                    <i className="mdi mdi-heart text-danger" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end Footer */}
      </div>
    </div>
  );
};

export default Register;
