import constantKeys from '@config/constantKeys';
import axios from 'axios';
var qs = require('qs');

export const API_DEFAULT_PARAMS = {
  part: 'snippet',
  maxResults: constantKeys.MAX_RESULT_YOUTUBE,
  key: constantKeys.KEY_API_YOUTUBE,
};

const youtubeClient = axios.create({
  baseURL: constantKeys.URL_API_YOUTUBE,
  header: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

export default youtubeClient;
