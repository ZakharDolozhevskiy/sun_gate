(function() {
    "use strict";

    var app = angular.module('foursquareApp',['ngResource']);

        app.constant('appConfig', {
            api: {
                baseUrl: 'https://api.foursquare.com/v2/venues/search',
                clientId: '3VGP01AEP2PMURE2AYFGUUOUX2LBXZLW55YR5B01AYPVL0DM',
                clientSecret: 'BMU5LDZR3UP2XUYRZNRQZMYMHJ23RSLM1IOJQ5Z0NCKVZEZ4',
                version: '20130815'
            }
        });

})();
