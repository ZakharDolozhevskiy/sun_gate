import TracksListController from './TracksListController';

export default {
  name : 'tracksList',
  config : {
    templateUrl : 'src/components/tracks-list/TracksList.html',
    controller  : ['MusicSearchService', TracksListController]
  }
};
