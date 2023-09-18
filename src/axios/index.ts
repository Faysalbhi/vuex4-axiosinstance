import axios from "axios";
import router from "@/router";

const axiosInstance = axios.create();

const baseUrl = import.meta.env.VITE_BASE_URL;

axiosInstance.defaults.baseURL = baseUrl;

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {

    const status = error.response.status;
    if (status === 401) {
        router.replace({ name: 'error-401' });
    }
    if (status === 403) {
        router.replace({ name: 'error-403' });
    }
    if (status === 404) {
        router.replace({ name: 'error-404' });
    }
    if (status === 500) {
        router.replace({ name: 'error-500' });
    }
    return Promise.reject(error);
});

export default axiosInstance;