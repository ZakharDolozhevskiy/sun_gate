(function() {
    "use strict";

    angular.module('foursquareApp')
        .controller('homePageCtrl', function ($scope, $state, $rootScope) {
            $rootScope.userName = 'Authorized user2';

            $scope.redirectMe = function () {
                $state.go('profile',
                    {name: 'Zakhar'}
                );
            }
        });
})();

