angular.module('app.controllers')
  .controller('AccountDetailsCtrl', function ($rootScope, $scope, $state, $http, Notes) {
    var vm = this;
        vm.logout = logout;
        vm.goToDashboard = goToDashboard;
    // Update active page title. This hook is uses because ionic cache controllers.
    $scope.$on('$ionicView.beforeEnter', function () {
      $rootScope.activePage = 'Your Account';

      if ($rootScope.user) {
        Notes.getNotesByUsername().success(function (data) { vm.notes = data; });
      } else {
        $state.go('app.login');
      }
    });

    function goToDashboard() {
      $state.go('app.dashboard');
    }

    function logout() {
      $http.post('/logout')
        .success(function () {
          $rootScope.user = '';
          $state.go('app.dashboard');
        });
    }
  });