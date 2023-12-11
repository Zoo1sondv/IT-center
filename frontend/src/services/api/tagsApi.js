import axiosClient from '@services/api/axiosClient';

const tagsApi = {
  getAllTag(params, config) {
    return axiosClient.get('/tag/all', { params }, config);
  },

  getTagForDocument(params, config) {
    return axiosClient.get('/tag/tag-for-post', { params }, config);
  },

  getTagForQuestion(params, config) {
    return axiosClient.get('/tag/tag-for-qa', { params }, config);
  },
};

export default tagsApi;
