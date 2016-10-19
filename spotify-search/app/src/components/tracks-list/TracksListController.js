import debounce from 'lodash/debounce';

export default function MusicSearchController(MusicSearchService) {
  const self = this;

  const filterTracksData = track => ({
    name: track.name,
    author: track.artists.map(artist => artist.name).join(),
    album: track.album.name,
    icon: track.album.images[1].url,
    altText: track.album.name
  });

  const search = query => (
    MusicSearchService
      .getTracks(query)
      .then(tracks => self.tracks = tracks && tracks.map(filterTracksData))
  );

  self.tracks = [];
  self.onInputChange = debounce(query => search(query), 300);

  search();
}
