import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import TracksList from './components/tracks-list/TracksList';
import SearchInput from './components/search-input/SearchInput';
import MusicSearchService from './services/MusicSearchService';

export default angular.module('starter-app', ['ngMaterial'] )
  .config($mdThemingProvider => {
    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
  .component(TracksList.name, TracksList.config)
  .component(SearchInput.name, SearchInput.config)
  .service('MusicSearchService', MusicSearchService);
