(function() {
    "use strict";

    angular.module('app')
        .directive('autocomplete', function($timeout) {
            return {
              link: function(scope, element) {
                $(element).autocomplete(
                    {
                        source: scope.reletedTags,
                        change: function() {
                             $timeout(function() {
                                 element.trigger('input');
                             }, 0)
                        }
                    }
                );
              }
            }
        })
})();
