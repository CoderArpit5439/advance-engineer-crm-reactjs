import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Router = () => {
  const navigate = useNavigate();
  const token = Cookies.get("authToken");

  useEffect(() => {
    if (token) {
        navigate('/dashboard')
    }
    else {
      navigate("/")
    }
  }, [token])


  return (
    <div>
      {token ? <PrivateRoute /> : <PublicRoute />}
    </div>
  )
}

export default Router