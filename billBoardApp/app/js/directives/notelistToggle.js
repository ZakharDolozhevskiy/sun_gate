(function() {
    "use strict";
    var directives = {};

    directives.noteLikeRows = function() {
      return {
        link: function(scope, element, attrs) {
            element.click(function() {
                $('.note-wrapper').animate({
                    opacity: 0
                }, 600)
                .animate({
                        width: '96%'
                 }, 1)
                .animate({
                    opacity: 1
                }, 600)
            });
        }
      }
    };

    directives.noteLikeCells = function() {
        return {
            link: function(scope, element, attrs) {
                element.click(function() {
                    $('.note-wrapper').animate({
                        opacity: 0
                    }, 600)
                    .animate({
                        width: '30%'
                    }, 1)
                    .animate({
                        opacity: 1
                    }, 600)
                });
            }
        }
    };

    angular.module('app').directive(directives);
})();
