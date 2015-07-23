angular.module('app.directives')

.directive('noteItem', function () {
  return {
    restrict: 'AC',
    scope: {
      item: '='
    },
    templateUrl: '../../templates/note-item.html',
    link: function (scope) {
      scope.isFullDescription = false;

      scope.openDetails = function () { scope.isFullDescription = !scope.isFullDescription; };
    }
  };
});
