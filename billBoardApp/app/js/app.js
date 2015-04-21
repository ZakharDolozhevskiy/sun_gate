(function() {
    "use strict";
    var app = angular.module('app',['ngRoute', 'DashboardCtrl', 'AddFormCtrl', 'firebase']);

    app.config(function ($routeProvider) {
        $routeProvider.
          when('/new',{
            templateUrl: '../templates/addNewForm.template.html',
            controller: 'AddFormCtrl'
          }).
          when('/',{
            templateUrl: '../templates/dashboard.template.html',
            controller: 'DashboardCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
    });

    app.constant('options', ["cars","apartment","mobile device","tablet","rent","other"]);

    // Check if a new cache is available on page load.
    window.addEventListener('load', function() {

        window.applicationCache.addEventListener('updateready', function() {
            if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
                // Browser downloaded a new app cache.
                // Swap it in and reload the page to get the new hotness.
                window.applicationCache.swapCache();
                if (confirm('A new version of this site is available. Load it?')) {
                    window.location.reload();
                }
            }
        }, false);

    }, false);
})();
