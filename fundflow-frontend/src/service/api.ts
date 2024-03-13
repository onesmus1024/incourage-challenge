import Axios from "axios-observable";

const API_TIMEOUT = 30000;

interface IApiOptions {
    baseURL: string;
    timeout?: number;
    
}

export const apiClient = function (options: IApiOptions) {
    const { baseURL, timeout = API_TIMEOUT } = options;
    const axiosInstance = Axios.create({
        baseURL,
        timeout,
        headers: {
            "Content-Type": "application/json",
        },
    });

    axiosInstance.interceptors.request.use(
        res => {
            if(res.headers){
                const token = localStorage.getItem("token");
                res.headers["Authorization"] = `Bearer ${token}`;
            }
            return res;
        },

        error => {
            return Promise.reject(error);
        }
    )




    return axiosInstance;
}

export default apiClient;

