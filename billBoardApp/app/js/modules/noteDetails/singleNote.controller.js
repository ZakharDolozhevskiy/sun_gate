(function() {
    "use strict";
    angular.module('SingleNoteCtrl', []).
        controller('SingleNoteCtrl', function ($scope, $stateParams, firebaseApi, $window) {
            var getItem = function (data, id) {
                var result;
                angular.forEach(data, function (item) {
                    if(item.$id === id) result = item;
                });
                return result;
            };

            if(!$window.navigator.onLine) {
                dataBaseApi.getFiles().then(function(result) {
                    $scope.dataList = result;
                })
            }

            if($scope.dataList.length === 0) {
                firebaseApi.getNotes().$loaded().then(function(response) {
                    $scope.dataList = response;
                    $scope.item = getItem($scope.dataList, $stateParams.id);
                });
            } else {
                $scope.item = getItem($scope.dataList, $stateParams.id);
            }
        });
})();

