(function() {
    "use strict";
    angular.module('DashboardCtrl', []).
        controller('DashboardCtrl', function ($scope, $rootScope, dataBaseApi, firebaseApi, $timeout, $window, title) {
            var _timer;
            $rootScope.title = title;
            $rootScope.isDashboard = true;
            $scope.dataList = [];

            firebaseApi.getNotes().$loaded()
                .then(function(response) {
                    dataBaseApi.dropFiles().addFiles(response);
                    $scope.dataList = response;
                    $timeout.cancel(_timer);
                });

            // Check that application isn't load data base form server and swap data from IndexedDB
            _timer = $timeout(function(){
                if(!$window.navigator.onLine) {
                    dataBaseApi.getFiles().then(function(result) {
                        $scope.dataList = result;
                    })
                }
            }, 500);

        });
})();
