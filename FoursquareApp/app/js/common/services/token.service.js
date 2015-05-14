(function() {
    "use strict";

    angular.module('foursquareApp')
        .service('tokenService', function (appConfig, $injector) {
            var token = null;

            return {
                request: function (config) {
                    if(token) {
                        config.headers['Autorization'] = 'Bearer' + token;
                    }
                    return config;
                },
                getToken: function () {
                    return $injector
                        .get('$http')
                        .get(appConfig.getTokenURL())
                        .success(function (response) {
                            return token = response['access_token'];
                        });
                }
            }
        })
})();
