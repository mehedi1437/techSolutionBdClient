import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
   // ? request Interceptors to add authorization headers for
  // every call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      // console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // ? response interceptor 401 403 status
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      // console.log("Error from Axios interceptor response", error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        // Logout the user or redirect to login page
        await logOut();
        toast.error("Session expired. Please login again.");
        navigate("/login");
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );
    return axiosSecure
};

export default useAxiosSecure;