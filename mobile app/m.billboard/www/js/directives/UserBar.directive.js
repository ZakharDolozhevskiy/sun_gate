angular.module('app.directives')

.directive('userBar', function ($state) {
  return {
    restrict: 'AC',
    scope: {
      username: '='
    },
    templateUrl: '../../templates/user-bar.html',
    link: function (scope) {
      scope.clickHandler = function () {
        $state.go('app.addOne');
      };
    }
  };
});
