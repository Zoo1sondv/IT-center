import axiosClient from '@services/api/axiosClient';

const userApi = {
  register(payload, config) {
    return axiosClient.post('/auth/register', payload, config);
  },

  login(payload, config) {
    return axiosClient.post('/auth/login', payload, config);
  },

  refreshToken(payload, config) {
    return axiosClient.post('/auth/refresh-token', payload, config);
  },

  forgotPassword(payload, config) {
    return axiosClient.post('/auth/forgot-password', payload, config);
  },

  resetPassword(payload, config) {
    return axiosClient.post('/auth/forgot-password/reset', payload, config);
  },

  getMe() {
    return axiosClient.get('/auth/user-profile');
  },

  getAvatar(params, config) {
    return axiosClient.get('/auth/download-avatar', { params }, config);
  },

  updateInfo(payload, config) {
    return axiosClient.post('/auth/update-user-info', payload, config);
  },

  changePassword(payload, config) {
    return axiosClient.post('/auth/change-password', payload, config);
  },

  getAllUsers(params, config) {
    return axiosClient.get('/auth/all-user', { params }, config);
  },
};

export default userApi;
