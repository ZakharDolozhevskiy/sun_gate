(function() {
    "use strict";
    angular.module('DashboardCtrl', []).
        controller('DashboardCtrl', function ($scope, $rootScope, dataBaseApi, firebaseApi) {
            $rootScope.title = 'Dashboard';
            $scope.dataList = firebaseApi.getNotes();
            //dataBaseApi.getFiles().then(function(data) {
            //    $scope.dataList = data;
            //})
        });
})();
