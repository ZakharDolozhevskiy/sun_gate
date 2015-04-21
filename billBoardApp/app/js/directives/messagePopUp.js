(function() {
    "use strict";
    angular.module('app')
        .directive('message.popup', function() {
          return {
              scope: {
                isShown: '=flag'
              },
              link: function(scope) {
                  scope.$watch('isShown', function(newVal){
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
