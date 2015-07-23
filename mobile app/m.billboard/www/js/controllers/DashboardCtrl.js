angular.module('app.controllers')

.controller('DashboardCtrl', function ($scope, $state, $rootScope, Notes) {
  var vm = this;
  // Update active page title. This hook is uses because ionic cache controllers.
  $scope.$on('$ionicView.beforeEnter', function () { $rootScope.activePage = 'Dashboard'; });

  vm.notes = Notes.getAll();
  vm.userName = 'Test User';
});

