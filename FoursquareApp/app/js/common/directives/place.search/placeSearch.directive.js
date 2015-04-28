(function() {
    "use strict";

    angular.module('foursquareApp')
        .directive('placeSearch', function () {
            return {
                restrict: 'E',
                require: '?^ngModel',
                templateUrl: 'js/common/directives/place.search/place.search.tmpl.html',
                link: function (scope, element, attrs) {

                }
            }
        })
})();

