import axios from "axios";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const instance = axios.create({
    // baseURL: process.env.REACT_APP_API_KEY,
    baseURL: "http://localhost:8080/crm",
})
// instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("authToken")}` 
instance.interceptors.request.use(
    (config) => {
        let authToken;
        if (Cookies.get("authToken")) {
            authToken = Cookies.get("authToken")
        }
        config.headers["Authorization"] = `Bearer ${authToken}`;
        config.headers["Content-Type"] = 'multipart/form-data';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    (response) => 
        {
            if(response.data?.status === 'error' || response.data?.status === false ){
                toast.error(response.data?.message)
            }
            else {
               return response
            }
        },
    error => {
        if (error.message === "network error") {
            if (error?.response?.status === 504) {
                toast.error("Gateway Timeout (504): Something went wrong. Please try again later.")
            }
            else {
                toast.error("Network Error: You are not connected. Please verify your connection.")
            }
        }
        if (error.response) {
            // Server responded with an error status code
            const status = error.response.status;
            switch (status) {
                case 401:
                    toast.error("Unauthorized (401): Please log in again.");
                    // You may want to dispatch an action to handle unauthorized access, e.g., logout
                    break;
                case 403:
                    toast.error("Forbidden (403): You don't have permission to access this resource.");
                    break;
                case 404:
                    toast.error("error (404) : "+ error?.response?.data?.message);
                    break;
                case 500:
                    toast.error("Internal Server Error (500): Something went wrong. Please try again later.");
                    break;
                default:
                    // Handle other status codes if needed
                    break;
            }
        }
        // Pass the error along to the component that made the request
        return Promise.reject(error);
    });

export default instance;