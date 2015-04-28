(function() {
    "use strict";

    angular.module('foursquareApp')
        .controller('profileCtrl', function ($scope, $rootScope, $stateParams) {
            $rootScope.userName = 'Authorized user';
            $scope.name = $stateParams.name;
        });
})();
