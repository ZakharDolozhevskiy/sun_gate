angular.module('app.directives')

.directive('noteItem', function () {
  return {
    restrict: 'AC',
    scope: {
      item: '='
    },
    templateUrl: '../../templates/note-item.html',
    link: function (scope) {
      scope.openDetails = function () {
        // TODO: Show note details
        console.log('details opened',scope);
      };
    }
  };
});
