angular.module('foursquareApp')

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('search', {
                url: '/search',
                templateUrl: 'js/modules/search/search.page.tmpl.html',
                controller: 'searchCtrl'
            })
            .state('profile', {
                url: '/profile/:name?:test',
                templateUrl: 'js/modules/profile/profile.tmpl.html',
                controller: 'profileCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'js/modules/home/homePage.tmpl.html',
                controller: 'homePageCtrl'
            })
    })

    .constant('appConfig', {
        api: {
            baseUrl: 'https://api.foursquare.com/v2/venues/search',
            clientId: '3VGP01AEP2PMURE2AYFGUUOUX2LBXZLW55YR5B01AYPVL0DM',
            clientSecret: 'BMU5LDZR3UP2XUYRZNRQZMYMHJ23RSLM1IOJQ5Z0NCKVZEZ4',
            version: '20130815'
        }
    });