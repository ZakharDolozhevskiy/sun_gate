(function() {
    "use strict";
    angular.module('DashboardCtrl', []).
        controller('DashboardCtrl', function ($scope, $rootScope, dataBaseApi) {
            $rootScope.title = 'Dashboard';

            dataBaseApi.getFiles().then(function(data) {
                $scope.dataList = data;
            })
        });
})();
