(function() {
    "use strict";

    angular.module('foursquareApp')
        .directive('places', function () {
            return {
                restrict: 'E',
                scope: true,
                templateUrl: 'js/common/directives/places/places.tmpl.html',
                link: function (scope, element, attrs) {
                    scope.filterQuery = '';

                    scope.byQuery = function (item) {
                        return new RegExp(scope.filterQuery,'i').test(item.name);
                    };
                    
                    scope.selectPlace = function (i) {
                        scope.selectedPlace = scope.places[i];
                    }
                }
            }
        })
})();
