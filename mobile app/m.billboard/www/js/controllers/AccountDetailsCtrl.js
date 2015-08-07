angular.module('app.controllers')

.controller('AccountDetailsCtrl', function($rootScope, $scope, $state, $http, Notes, URL) {
  var vm = this;

  vm.logout = logout;
  vm.goToDashboard = goToDashboard;

  // Update active page title. This hook is uses because ionic cache controllers.
  $scope.$on('$ionicView.beforeEnter', function() {
    $rootScope.activePage = 'Your Account';

    Notes.getNotesByUsername().success(function(data) { vm.notes = data; });
  });

  function goToDashboard() { $state.go('app.dashboard'); }

  function logout() {
    $http.post(URL + '/logout')
      .success(function() {
        $rootScope.user = '';
        $state.go('app.dashboard');
      });
  }
});