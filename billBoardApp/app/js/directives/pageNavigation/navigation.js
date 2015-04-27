(function() {
    "use strict";

    angular.module('app')
        .directive('appNavigation', function() {
            return {
                restrict: 'C',
                templateUrl: 'js/directives/pageNavigation/navigationBar.tmpl.html',
                link: function(scope, element, attr) {

                }
            }
        })
})();
