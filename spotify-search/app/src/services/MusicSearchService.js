function MusicSearchService($http) {
  const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search';

  const doSearch = query => (
    $http({
      url: SEARCH_ENDPOINT,
      method: 'GET',
      params: {
        q: query || 'a', type: 'track', limit: 10
      }
    })
  );

  const transformResponse = ({ data: { tracks } }) =>
    tracks.items.length ? tracks.items : null;

  const getTracks = query => (
    doSearch(query)
      .then(transformResponse)
      .catch(err => err)
  );

  return { getTracks };
}

export default ['$http', MusicSearchService];

