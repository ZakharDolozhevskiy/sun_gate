(function() {
    "use strict";

    angular.module('app')
        .directive('autocomplete', function() {
            return {
              link: function(scope, element) {
                $(element).autocomplete({source: scope.reletedTags});
              }
            }
        })
})();
