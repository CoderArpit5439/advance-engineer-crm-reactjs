import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../Redux/crmSlices/authSlice/AuthSlice";
import Swal from "sweetalert2";
// import outline from '../../image/outline.png'
// import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    watch,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const { loading, data } = useSelector((state) => {
    return {
      loading: state.rootReducer.AuthSlice?.loading,
      data: state.rootReducer.AuthSlice?.data,
    };
  });

  useEffect(() => {
    if (data?.status === true) {
      navigate("/dashboard");
      setIsErrorVisible(false);
    } else if(data?.status === false) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data?.message,
      });
      setIsErrorVisible();
    }
  }, [data]);

  const onSubmit = (data) => {
    dispatch(loginAuth(data));
  };

  return (
    <div>
      <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>
          <div className="shape">
            {/* <img src={outline} alt='outline' height='112px' width='100%' /> */}
          </div>
        </div>

        <div className="auth-page-content">
          <div className="container">
            {/* <div className="row">
                <div className="col-lg-12">
                  <div className="text-center mt-sm-5 mb-4 text-white-50">
                    <div>
                      <img src={darkLogo.image} alt="logo" height="60" />
                    </div>
                  </div>
                </div>
              </div> */}

            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>

                      <p className="text-muted">Sign in to continue</p>
                    </div>
                    <div className="p-2 mt-4">
                      <form onSubmit={handleSubmit(onSubmit)}>

                      <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Select Role 
                          </label>
                          <select
                            type="text"
                            className={`form-control ${
                              errors.role && "border border-danger"
                            }`}
                            id="username"
                            placeholder="your role"
                            {...register("role", { required: true })}
                          >
                           
                            <option value="0">Admin</option>
                            <option value="1">Employe</option>
                          </select>
                          {errors.role && (
                            <span className="text-danger">
                             Select your role
                            </span>
                          )}
                        </div>
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Username
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.username && "border border-danger"
                            }`}
                            id="username"
                            placeholder="Enter username"
                            {...register("username", { required: true })}
                          />
                          {errors.username && (
                            <span className="text-danger">
                              User name is required
                            </span>
                          )}
                        </div>

                        <div className="mb-3">
                          <div className="float-end">
                            <p className="text-muted">Forgot password?</p>
                          </div>
                          <label
                            className="form-label"
                            htmlFor="password-input"
                          >
                            Password
                          </label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <input
                              type={isVisible ? "text" : "password"}
                              className={`form-control pe-5 password-input ${
                                errors.password && "border border-danger"
                              }`}
                              placeholder="Enter password"
                              id="password-input"
                              {...register("password", { required: true })}
                            />
                            {errors.password && (
                              <span className="text-danger">
                                Password is required
                              </span>
                            )}
                            <div
                              className="btn btn-link text-decoration-none text-muted password-addon"
                              style={{
                                position: "absolute",
                                top: "0px",
                                right: "3px",
                                fontSize: "20px",
                              }}
                            >
                              {isVisible ? (
                                <i
                                  class="ri-eye-fill align-middle"
                                  style={{ color: "black" }}
                                  onClick={() => setIsVisible(false)}
                                ></i>
                              ) : (
                                <i
                                  class="ri-eye-fill align-middle"
                                  style={{ color: "black" }}
                                  onClick={() => setIsVisible(true)}
                                ></i>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button
                            className="btn btn-success w-100"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              <div className="d-flex justify-content-center">
                                <span
                                  className="spinner-border flex-shrink-0"
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </span>
                                <span className="flex-glow-1 ms-2">
                                  Loading
                                </span>
                              </div>
                            ) : (
                              "Sign In"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="text-center">
                  <p className="mb-0 text-muted">
                    {" "}
                    Crafted with <i className="mdi mdi-heart text-danger"></i>{" "}
                    Advance Engineerings{" "}
                    <span className="ml-5 fs-0">Version 1.0.0</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
