import axiosClient from '@services/api/axiosClient';

const documentApi = {
  getSearchDocument(params, config) {
    return axiosClient.get('/post/search', { params }, config);
  },

  getMeDocument(params, config) {
    return axiosClient.get('/post/show', { params }, config);
  },

  getDetailDocument(params, config) {
    return axiosClient.get('/post/detail', { params }, config);
  },

  createDocument(payload, config) {
    return axiosClient.post('/post/create', payload, config);
  },

  getAllTag(params, config) {
    return axiosClient.get('/tag/all', { params }, config);
  },
};

export default documentApi;
