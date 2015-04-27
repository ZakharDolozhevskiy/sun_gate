(function() {
    "use strict";
    var directives = {};

    directives.searchBlock = function() {
        return {
            template: '<input class="form-control" type="text" id="inputSearch" ng-model="searchQuery">\n' +
            '          <button id="search" type="button" class="btn btn-default">\n' +
            '          <i class="fa fa-search"></i> Search</button>',
            link: function(scope, element, attrs) {
                var finalQuery = '';
                scope.$watch('searchQuery', function(newVal) {
                    finalQuery = newVal;
                });

                element.click(function() {
                    scope.search = finalQuery;
                    scope.$apply();
                });
            }
        }
    };

    angular.module('app').directive(directives);
})();
