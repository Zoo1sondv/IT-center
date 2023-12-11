import storageKeys from '@config/storageKeys';
import * as cryptoHelper from '@hooks/cryptoLocalHelpers';
import axios from 'axios';
import userApi from './userApi';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  header: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const auth = cryptoHelper.getItemCrypto(storageKeys.USER);
    if (auth && auth.access_token && auth.token_type) {
      config.headers.Authorization = `${auth.token_type} ${auth.access_token}`;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async (error) => {
    const auth = cryptoHelper.getItemCrypto(storageKeys.USER);
    const originalConfig = error.config;

    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      try {
        const data = await userApi.refreshToken({
          refresh_token: auth.refresh_token,
        });

        if (data) {
          cryptoHelper.setItemCrypto(storageKeys.USER, data);
        }
        return axiosClient(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
