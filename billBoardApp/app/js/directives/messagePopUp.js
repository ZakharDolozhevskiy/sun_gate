(function() {
    "use strict";
    angular.module('app')
        .directive('message.popup', function() {
          return {
              scope: {
                isShown: '=openFlag'
              },
              link: function(scope, elem) {
                  scope.$watch('isShown', function(newVal, oldVal){
                      if (newVal) {
                          $('.alert-success').show(200);
                      } else {
                          $('.alert-success').hide(300);
                      }
                  });
              }
          }
        });
})();
