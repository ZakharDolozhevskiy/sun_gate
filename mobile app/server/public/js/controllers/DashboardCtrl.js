angular.module('app.controllers')

.controller('DashboardCtrl', function ($scope, $state, $rootScope, Notes) {
    var vm = this;
    vm.notes = [];
    vm.username = "";
    // Update active page title. This hook is uses because ionic caches controllers.
    $scope.$on('$ionicView.beforeEnter', function () {
      $rootScope.activePage = 'Dashboard';
      Notes.getAll().success(function (data) { vm.notes = data; });
    });
});

