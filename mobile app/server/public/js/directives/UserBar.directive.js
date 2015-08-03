angular.module('app.directives')

.directive('userBar', function ($state, $rootScope) {
  return {
    restrict: 'AC',
    scope: {
      username: '='
    },
    templateUrl: '../../templates/user-bar.html',
    link: function (scope) {
      scope.clickHandlerAdd = function () { $state.go('app.addOne'); };
      scope.clickHandlerLogin = function () { $state.go('app.login'); };
    }
  };
});
