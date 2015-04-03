(function() {
    "use strict";
    angular.module('AddFormCtrl', []).
        controller('AddFormCtrl', function ($scope, $rootScope, $route) {
            $rootScope.title = 'Add new note';
        });
})();
