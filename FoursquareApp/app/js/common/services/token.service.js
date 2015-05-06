(function() {
    "use strict";

    angular.module('foursquareApp')
        .service('tokenService', function (appConfig) {
            var token = null;

            return {
                request: function (config) {
                    if(token) {
                        config.headers['Autorization'] = 'Bearer' + token;
                    }
                    return config;
                },
                getToken: function () {
                    return $http
                        .get(appConfig.tokenUrl)
                        .success(function (response) {
                            return token = response['access_token'];
                        });
                }
            }
        })
})();
