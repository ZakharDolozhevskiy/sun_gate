(function() {
    "use strict";
    angular.module('app')
        .factory('relatedTags', function() {
            var dataHolder = null,
                getter = function() {
                    return dataHolder;
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

