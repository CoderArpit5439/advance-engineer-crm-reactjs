import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();
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
                            <form action="http://thememinister.com/crm/index.html" id="loginForm" novalidate>
                                <div class="form-group">
                                    <label class="control-label" for="username">Username</label>
                                    <input type="text" placeholder="example@gmail.com" title="Please enter you username" required=""  name="username" id="username" class="form-control" />
                                    <span class="help-block small">Your unique username to app</span>
                                </div>
                                <div class="form-group">
                                    <label class="control-label" for="password">Password</label>
                                    <input type="password" title="Please enter your password" placeholder="******" required=""  name="password" id="password" class="form-control" />
                                    <span class="help-block small">Your strong password</span>
                                </div>
                                <div>
                                    <button class="btn btn-add" onClick={() => navigate('/dashboard')}>Login</button>
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