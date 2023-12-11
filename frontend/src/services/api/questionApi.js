import axiosClient from '@services/api/axiosClient';

const questionApi = {
  getDetailQuestion(params, config) {
    return axiosClient.get('/qa/detail', { params }, config);
  },

  getSearchQuestion(params, config) {
    return axiosClient.get('/qa/search', { params }, config);
  },

  getMeQuestion(params, config) {
    return axiosClient.get('/qa/show', { params }, config);
  },

  createQuestion(payload, config) {
    return axiosClient.post('/qa/create', payload, config);
  },
};

export default questionApi;
