(function() {
    "use strict";

    angular.module('foursquareApp')

        .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
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
                });

            $httpProvider.interceptors.push('tokenService');
        })

        .constant('appConfig', {
            api: {
                code: '0XX4BWTSHS2NCG1TKEVD053BV0WMREEXCLJILP4IFJNRBIUO',
                authUrl: 'https://foursquare.com/',
                baseUrl: 'https://api.foursquare.com/v2/venues/search',
                clientId: '3VGP01AEP2PMURE2AYFGUUOUX2LBXZLW55YR5B01AYPVL0DM',
                clientSecret: 'BMU5LDZR3UP2XUYRZNRQZMYMHJ23RSLM1IOJQ5Z0NCKVZEZ4',
                version: '20130815'
            },
            getTokenURL: function () {
                var redirect = 'http://10.23.14.91:3000/home';

                return this.api.authUrl + 'oauth2/access_token?' + 'client_id=' + this.api.clientId +
                    '&client_secret=' + this.api.clientSecret + '&grant_type=authorization_code' +
                    '&redirect_uri=' + encodeURIComponent(redirect) + '&code=' + this.api.code;
            }
        });
})();
