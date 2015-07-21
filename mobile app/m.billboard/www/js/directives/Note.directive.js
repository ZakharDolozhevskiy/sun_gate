angular.module('app.directives')

.directive('noteItem', function () {
    return {
        restrict: 'AC',
        scope: {},
        templateUrl: '../../templates/note-item.html',
        link: function (scope) {
            scope.clickHandler = function () {
                // TODO
                console.log('state changed');
            }
        }
    };
});

