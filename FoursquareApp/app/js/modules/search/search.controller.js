(function() {
    "use strict";

    angular.module('foursquareApp')
        .controller('searchCtrl', function ($scope, foursquareApi) {

            $scope.search = function () {
                $scope.places = foursquareApi.places({
                    near: $scope.placeQuery,
                    query: $scope.catQuery
                });
            };
        });
})();