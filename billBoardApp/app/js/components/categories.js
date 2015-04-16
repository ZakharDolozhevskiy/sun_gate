(function() {
    "use strict";
    angular.module('app')
        .factory('categories', function(firebaseApi) {
            var dataHolder = [],
                getter = function() {
                    return firebaseApi.getCategories();
                },
                adder = function(x) {
                    dataHolder.push(x);
                },
                setter = function(z) {
                    dataHolder = z;
                };
            return {
                get: getter,
                add: adder,
                set: setter
            }
        });
})();
