(function() {
    "use strict";

    angular.module('foursquareApp')
        .directive('place', function () {
            return {
                restrict: 'E',
                templateUrl: 'js/common/directives/place/place.tmpl.html',
                require: '^ngModel',
                link: function (scope, element, attrs) {

                }
            }
        })
})();

