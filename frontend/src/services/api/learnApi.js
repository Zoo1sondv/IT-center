import youtubeClient, { API_DEFAULT_PARAMS } from './youtubeClient';

const videoApi = {
  getSearch(param, pageToken) {
    return youtubeClient.get('/search', {
      params: {
        ...API_DEFAULT_PARAMS,
        pageToken: pageToken,
        type: 'playlist',
        q: param,
      },
    });
  },

  getPlaylist(playlistId, pageToken) {
    return youtubeClient.get('/playlists', {
      params: {
        ...API_DEFAULT_PARAMS,
        part: ['snippet, id, player, contentDetails'],
        pageToken: pageToken,
        type: 'playlist',
        id: playlistId,
      },
    });
  },

  getPlaylistItem(playlistId, pageToken) {
    return youtubeClient.get('/playlistItems', {
      params: {
        ...API_DEFAULT_PARAMS,
        part: ['snippet, contentDetails, id, status'],
        pageToken: pageToken,
        playlistId: playlistId,
      },
    });
  },
};

export default videoApi;
