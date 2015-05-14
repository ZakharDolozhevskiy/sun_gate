(function() {
    "use strict";
    angular.module('app')
        .factory('interseptor', function() {

            return {
                request: function (config) {
                    return config;
                },
                response: function (config) {
                    return config;
                },
                responseError: function (config) {
                    console.log(config);
                }
            };
            
        });
})();
