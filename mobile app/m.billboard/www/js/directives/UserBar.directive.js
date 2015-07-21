angular.module('app.directives')

  .directive('userBar', function () {
    return {
      restrict: 'AC',
      scope: {
        username: '='
      },
      templateUrl: '../../templates/user-bar.html',
      link: function (scope) {
        scope.clickHandler = function () {
          // TODO
          console.log('state changed');
        }
      }
    };
  });
