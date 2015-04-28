(function() {
    "use strict";

    angular.module('foursquareApp')
        .directive('appNavigation', function () {
            return {
                restrict: 'E',
                templateUrl: 'js/common/directives/app.navigation/navigation.tmpl.html',
                link: function (scope, element, attrs) {

                }
            }
        })
})();

