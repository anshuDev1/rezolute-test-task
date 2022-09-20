import axios, { AxiosError } from "axios";

import RCFconfig from "./config";
axios.defaults.baseURL = RCFconfig.baseURL;

export const setupAxiosInterceptors = () => {

  const onResponseSuccess = (response: any) => response;

  const onResponseError = (err: AxiosError) => {
    const status = err.status || (err.response ? err.response.status : 0);
    if (status === 401) {

    } else if (status === 404) {
      //  window.location.href = "/notFound"
    }
    return Promise.reject(err);
  };

  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};
