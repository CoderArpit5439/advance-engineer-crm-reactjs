import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginAuth } from '../Redux/crmSlices/authSlice/AuthSlice';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, setValue, control, watch } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    const { loading, data } = useSelector((state) => {
        return {
            loading: state.rootReducer.AuthSlice?.loading,
            data: state.rootReducer.AuthSlice?.data,
        }
    })


    
    useEffect(() => {
        if (data?.status === true) {
            console.log(741)
            navigate('/dashboard')
            setIsErrorVisible(false)
        }
        else {
            setIsErrorVisible(data?.message)
            console.log(641,data)
        }
    }, [data])

    const onSubmit = (data) => {
        dispatch(loginAuth(data))
    }

    return (
        <div class="login-wrapper">
            {/* <div class="back-link">
                <a class="btn btn-add">Back to Dashboard</a>
            </div> */}
            <div class="container-center">
                <div class="login-area">
                    <div class="panel panel-bd panel-custom">
                        <div class="panel-heading">
                            <div class="view-header">
                                <div class="header-icon">
                                    <i class="pe-7s-unlock"></i>

                                </div>
                                <div class="header-title">
                                    <h3>Login</h3>
                                    <small><strong>Please enter your credentials to login.</strong></small>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">
                                    <label class="control-label" for="username">Username</label>
                                    <input type="text" placeholder="Please enter you username" {...register('username', { required: true })} class="form-control" />
                                    {errors.username && <span className="text-danger">User name is required</span>}

                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="password">Password</label>
                                    <input type={isVisible ? "text" : "password"} placeholder="******" {...register('password', { required: true })} class="form-control" />
                                    {errors.password && <span className="text-danger">Password is required</span>}
                                    <div className="" style={{ position: "relative", top: "-24px", left: "287px" }} >
                                        {isVisible
                                            ?
                                            <i class="pe-7s-more" style={{ color: "black" }} onClick={() => setIsVisible(false)} ></i>
                                            :
                                            <i class="pe-7s-look" style={{ color: "black" }} onClick={() => setIsVisible(true)} ></i>
                                        }
                                    </div>
                                </div>
                                <div style={{ display:"grid"}} >
                                    {isErrorVisible && <span className="text-danger text-center" >{isErrorVisible}</span>}
                                    <button class="btn btn-add" type='submit' >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage