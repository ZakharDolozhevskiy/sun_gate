(function() {
    "use strict";
    angular.module('DashboardCtrl', []).
        controller('DashboardCtrl', function ($scope, $rootScope, $route) {
            $rootScope.title = 'Dashboard';
        });
})();
